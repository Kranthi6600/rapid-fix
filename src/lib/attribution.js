"use client";

// Captures Google Ads click IDs + UTM params on first landing and persists
// them so a lead submitted on a later page still carries its ad attribution.
// Click IDs persist for 90 days (Google Ads offline conversion window).

const STORAGE_KEY = "rf_attrib_v1";
const ATTRIB_TTL_MS = 90 * 24 * 60 * 60 * 1000; // 90 days

const CLICK_ID_KEYS = ["gclid", "gbraid", "wbraid"];
const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"];
const TRACKED_KEYS = [...CLICK_ID_KEYS, ...UTM_KEYS];

function readStored() {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object") return null;
    if (Date.now() - (parsed.capturedAt || 0) > ATTRIB_TTL_MS) {
      window.localStorage.removeItem(STORAGE_KEY);
      return null;
    }
    return parsed;
  } catch {
    return null;
  }
}

// Call once on app mount. If the URL carries click IDs/UTMs they are stored
// as first-touch attribution; otherwise existing stored values are kept.
export function captureAttribution() {
  if (typeof window === "undefined") return;

  try {
    const params = new URLSearchParams(window.location.search);
    const incoming = {};
    TRACKED_KEYS.forEach((key) => {
      const value = params.get(key);
      if (value) incoming[key] = value;
    });

    const hasNewData = Object.keys(incoming).length > 0;
    const stored = readStored();
    if (!hasNewData && stored) return;

    window.localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        ...(stored || {}),
        ...incoming,
        landingPage: incoming.gclid ? window.location.pathname : stored?.landingPage || window.location.pathname,
        capturedAt: Date.now(),
      })
    );
  } catch {
    // Storage unavailable (private mode etc.) — attribution just won't persist.
  }
}

// Returns the persisted attribution object (or {} if none).
export function getAttribution() {
  if (typeof window === "undefined") return {};
  return readStored() || {};
}

// Fires a GTM dataLayer event after a successful lead submission.
// `user_data` follows Google's user-provided data schema so a GTM
// "User-Provided Data" variable can feed Enhanced Conversions for Leads.
export function pushLeadEvent({ email, phone }) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: "generate_lead",
    user_data: {
      email: email || undefined,
      phone_number: phone || undefined,
    },
    attribution: getAttribution(),
  });
}

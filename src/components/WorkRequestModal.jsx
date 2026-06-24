"use client";
import Script from "next/script";
import { useState, useEffect } from "react";

const SHOPMONKEY_URL =
  "https://app.shopmonkey.cloud/public/quote-request/f3173cde-af0b-453f-93bd-1dbf406b64d0";

const WorkRequestModal = () => {
  const [iframeFailed, setIframeFailed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIframeFailed(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div
        className="modal fade"
        id="workRequestModal"
        tabIndex={-1}
        aria-labelledby="workRequestModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="workRequestModalLabel">
                Request a Quote
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body p-0">
              {!iframeFailed ? (
                <iframe
                  src={SHOPMONKEY_URL}
                  width="100%"
                  height="700"
                  frameBorder="0"
                  title="RapidFix Work Request Form"
                  style={{ display: "block", maxWidth: "100%", border: "none" }}
                />
              ) : (
                <div
                  className="d-flex flex-column align-items-center justify-content-center text-center p-5"
                  style={{ height: 500 }}
                >
                  <p className="mb-3">
                    The form couldn&apos;t load inside this page.
                  </p>
                  <a
                    href={SHOPMONKEY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn text-white"
                    style={{
                      backgroundColor: "var(--theme-color)",
                      border: "none",
                      padding: "10px 24px",
                      borderRadius: "4px",
                    }}
                  >
                    Open Request Form
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <Script id="shopmonkey-work-request-tracking" strategy="afterInteractive">
        {`
          window.addEventListener('message', function(e) {
            if (e.origin !== 'https://app.shopmonkey.cloud') return;
            if (e.data && e.data.source === 'sm_wrf' && e.data.dataLayer) {
              window.dataLayer = window.dataLayer || [];
              window.dataLayer.push(e.data.dataLayer);
            }
          });
        `}
      </Script>
    </>
  );
};

export default WorkRequestModal;

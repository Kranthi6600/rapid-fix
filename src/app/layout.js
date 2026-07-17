import Script from "next/script";
import BootstrapInit from "@/helper/BootstrapInit";
import Animation from "@/helper/Animation";
import { ServicesProvider } from "@/context/ServicesContext";
import "./font.css";
import "./globals.scss";

export const metadata = {
  title: "RapidFix - Car Repair & Auto Services",
  description:
    "RapidFix is your trusted auto repair and maintenance shop in Scarborough and Toronto. We specialize in car repairs, diesel services, routine maintenance, diagnostics, fleet servicing, brake repairs, oil changes, and more. Our certified technicians use advanced diagnostics and quality parts to keep your vehicle safe and reliable.",
  icons: {
    icon: "/assets/img/favicons/favicon.png",
    shortcut: "/assets/img/favicons/favicon.png",
    apple: "/assets/img/favicons/favicon.png",
  },
  verification: {
    google: "M49fU-f9Imxle53tdE-EE0NC8MUt5lcVyd-trwzp6fE",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TXJFDMFH" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          }}
        />
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=2064492734143343&ev=PageView&noscript=1" />`,
          }}
        />
        <Script id="gtm-script" strategy="beforeInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-TXJFDMFH');`}
        </Script>
        <Script id="meta-pixel-script" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','2064492734143343');fbq('track','PageView');`}
        </Script>
        <BootstrapInit />
        <Animation />
        <ServicesProvider>
          {children}
        </ServicesProvider>
      </body>
    </html>
  );
}

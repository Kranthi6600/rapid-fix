import BootstrapInit from "@/helper/BootstrapInit";
import Animation from "@/helper/Animation";
import "./font.css";
import "./globals.scss";

export const metadata = {
  title: "Rapid Fix - Car Repair & Auto Services",
  description:
    "Rapid Fix is your trusted auto repair and maintenance shop in Scarborough and Toronto. We specialize in car repairs, diesel services, routine maintenance, diagnostics, fleet servicing, brake repairs, oil changes, and more. Our certified technicians use advanced diagnostics and quality parts to keep your vehicle safe and reliable.",
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
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-TXJFDMFH');`,
          }}
        />
      </head>
      <body suppressHydrationWarning={true}>
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TXJFDMFH" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          }}
        />
        <BootstrapInit />
        <Animation />
        {children}
      </body>
    </html>
  );
}

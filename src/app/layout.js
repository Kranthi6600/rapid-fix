import BootstrapInit from "@/helper/BootstrapInit";
import Animation from "@/helper/Animation";
import "./font.css";
import "./globals.scss";

export const metadata = {
  title: "Rapid Fix - Car Repair & Auto Services NEXT Js Template",
  description:
    "Rapid Fix is a clean and modern React Template suitable for any type of Auto Servicing, Car Repair & Maintenance website. It is created for automobile servicing providers who offer car wash, car service, routine maintenance, truck service, etc. This HTML template can be used for car servicing, car repairing, car wash, auto shop, mechanic shop, batteries shop, tire / wheel shop, and multipurpose businesses. We have used comment on codes and also decorated the codes beautifully so one can find it very easy to customize.",
  icons: {
    icon: "/assets/img/favicons/favicon.jpeg",
    shortcut: "/assets/img/favicons/favicon.jpeg",
    apple: "/assets/img/favicons/favicon.jpeg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <BootstrapInit />
        <Animation />
        {children}
      </body>
    </html>
  );
}

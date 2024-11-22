import localFont from "next/font/local";
import "./globals.css";

export const metadata = {
  title: "ODELRS",
  description: "Online DENR Environmental Laboratory Recognition System",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";
import "react-toastify/ReactToastify.css"
import 'react-datepicker/dist/react-datepicker.css';


export const metadata: Metadata = {
  title: "Acces kokop",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}

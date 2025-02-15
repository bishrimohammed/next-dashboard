import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
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
        <div className="flex">
          {/* <div className="w-60">
            <ul>
              <li className="p-2">
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">Home</a>
              </li>
            </ul>
          </div> */}
          <div className=" flex-1">
            {/* <header className="p-3">Header</header> */}
            <main>{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}

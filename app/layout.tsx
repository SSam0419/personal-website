import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { NextUIProvider } from "@/lib/providers/NextUIProvider";
import Navbar from "@/components/Navbar/Navbar";

const fontFamily = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sam Lee",
  description: "Personal Website of Sam Lee",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fontFamily.className} min-h-screen`}>
        <NextUIProvider>
          <Navbar />
          <div className="h-full w-full flex justify-center items-center">
            <div className="p-10 w-[900px]">{children}</div>
          </div>
        </NextUIProvider>
      </body>
    </html>
  );
}

import "@/public/styles/globals.scss";
import type { Metadata } from "next";

import { outfit } from "@/constants/fonts";

export const metadata: Metadata = {
  title: "Connect Four | Play with friends",
  description:
    "Play Connect Four with friends online. No sign up required. Just create a room and share the link with your friends.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={outfit.className}>{children}</body>
    </html>
  );
}

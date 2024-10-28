import type { Metadata } from "next";
import "./styles/globals.css";
import Navbar from "./components/Navbar";

export const metadata: Metadata = {
  title: "Hayato Yano | Front-End Developer Portfolio",
  description:
    "Explore Hayato Yano's portfolio showcasing web development projects, skills in React, and expertise in creating engaging, user-focused applications."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}

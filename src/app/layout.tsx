import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Amanda Simonds Brannock UI/UX Designer & Developer",
  description: "Amanda Simonds Brannock UI/UX Designer & Developer",
  keywords: ["UI design",
    "UX design",
    "user experience",
    "user interface",
    "web design",
    "mobile design",
    "responsive design",
    "interaction design",
    "wireframing",
    "prototyping",
    "usability",
    "accessibility",
    "design systems",
    "Figma",
    "Sketch",
    "Adobe XD",
    "user research",
    "user testing",
    "information architecture",
    "visual design",
    "front-end development",
    "HTML",
    "CSS",
    "React",
    "Angular",
    "JavaScript",
    "React",
    "design thinking",
    "branding",
    "typography",
    "color theory",
    "component libraries",
    "product design",
    "creative direction"]
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

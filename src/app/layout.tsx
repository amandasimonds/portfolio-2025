import type { Metadata } from "next";
import "./globals.scss";

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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&family=Rubik:ital,wght@0,300..900;1,300..900&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Rubik:ital,wght@0,300..900;1,300..900&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" rel="stylesheet" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}

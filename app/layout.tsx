import type { Metadata } from "next";4
import './globals.css';

export const metadata: Metadata = {
  title: "jDev",
  description: "¡Bienvenido a mi mundo digital! Soy Jessy Avalos Barrales, un desarrollador web apasionado por el Frontend y eldiseño UI/UX. En este espacio, compartiré mi viaje, proyectos destacados y conocimientos en desarrollo web. ¡Explora mi portafolio para descubrir más sobre mí y mi trabajo creativo!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

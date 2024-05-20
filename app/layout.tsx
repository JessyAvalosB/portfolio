import type { Metadata } from "next";
import './globals.css';
import { NavBar, Footer } from '@/app/components';

export const metadata: Metadata = {
  title: "jessy.me",
  description: "¡Bienvenido a mi mundo digital! Soy Jessy Avalos Barrales, un desarrollador web apasionado por el Frontend y eldiseño UI/UX. En este espacio, compartiré mi viaje, proyectos destacados y conocimientos en desarrollo web. ¡Explora mi portafolio para descubrir más sobre mí y mi trabajo creativo!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

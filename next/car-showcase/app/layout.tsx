import "./globals.css";
import { Navbar, Footer } from "@/components/";

export const metadata = {
  title: "CarHub",
  description: "Descubra os melhores carros do mundo.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="relative">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

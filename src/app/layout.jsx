import "./globals.css";
import Header from "../components/Header.jsx";
import { CartProvider } from "@/context/CartContext";

export const metadata = {
  title: "Pasta Menu",
  description: "Taze makarna menüsü ve ürün detayları.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body>
        <CartProvider>
          <div>
            <Header />
            <main>{children}</main>
          </div>
        </CartProvider>
      </body>
    </html>
  );
}

import "./globals.css";
import Header from "../components/Header.jsx";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
        />
      </head>
      <body>
        <div className="">
          <Header />

          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./globals.css";
import { Providers } from "./providers";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Providers>{children}</Providers>
        </main>
        <Footer />
      </body>
    </html>
  );
}

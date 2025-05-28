import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ModalProvider } from "./components/modal-provider";
import ScrollToTop from "./components/scroll-to-top";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "InnoveON - Tecnologia e Desenvolvimento",
  description: "Tecnologia não precisa ser complicada. Na InnoveON, criamos soluções digitais inteligentes para simplificar seu negócio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body className={`antialiased`}>
      <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
        <ModalProvider>
            <ScrollToTop />
            {children}
          </ModalProvider>
        </ThemeProvider>
        <Toaster></Toaster>
      </body>
    </html>
  );
}

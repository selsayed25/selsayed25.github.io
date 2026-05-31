import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: {
    default: "Sami Elsayed",
    template: "%s — Sami Elsayed",
  },
  description: "Sami Elsayed's Website",
  metadataBase: new URL("https://selsayed25.github.io/"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased bg-background text-foreground">
        <ThemeProvider>
          <div className="relative mx-auto min-h-screen max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
            <Navbar />
            <main className="mt-16">{children}</main>
            <footer className="mt-24 border-t border-border/50 py-8 text-center text-sm text-surface-400 dark:text-surface-500">
              <p>&copy; {new Date().getFullYear()} Sami Elsayed. All rights reserved.</p>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

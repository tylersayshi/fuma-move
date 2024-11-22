import "./global.css";
import { RootProvider } from "fumadocs-ui/provider";
// import { Raleway } from "next/font/google";
import type { ReactNode } from "react";

// const raleway = Raleway({
//   subsets: ["latin"],
// });

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}

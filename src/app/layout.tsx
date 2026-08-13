import { Roboto } from "next/font/google";
import { Header, Footer } from "app/components";

import "app/sass/globals.sass";

const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={roboto.className}>
      <head>
        <title>Future World!</title>
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

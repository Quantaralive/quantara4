import { ReactNode } from "react";

export const metadata = { title: 'QUANTARA' };

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}

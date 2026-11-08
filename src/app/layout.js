
import "./globals.css";

export const metadata = {
  title: "SECAM Liberation Parish",
  description:
    "Welcome to SECAM Liberation Parish — Soaring Eagle Christians' Assembly and Ministry.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}

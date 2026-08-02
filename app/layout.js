import "./globals.css";

export const metadata = {
  title: "NIDAN Health & Pathology Guide",
  description:
    "Blood tests, pathology reports, normal values and health information in simple Hindi.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="hi">
      <body>{children}</body>
    </html>
  );
}

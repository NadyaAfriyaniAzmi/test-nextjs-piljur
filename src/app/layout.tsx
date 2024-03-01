import "./global.css"


export const metadata = {
  title: {
    template: "%s | NadyaAfriyani",
    default: "Home | NadyaAfriyani",
  },
  description: "Generated by Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

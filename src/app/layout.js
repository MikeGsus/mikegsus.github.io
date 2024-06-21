import "./globals.css";

export const metadata = {
  title: "Portfolio - Miguel Ángel Hidalgo",
  description: "All about me is here",
  icons: {
    icon: [
      {
        url: 'public/vercel.svg',
        href: 'public/vercel.svg',
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

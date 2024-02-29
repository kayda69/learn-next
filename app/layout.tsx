import '@/app/ui/global.css';
import {fontInter}  from '@/app/ui/fonts'
export default function RootLayout({

  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" >
      <body className={`${fontInter.className} antialiased`}>{children}</body>
    </html>
  );
}

import './globals.css';
import SidebarClient from '@/components/SidebarClient';
import MobileNav from '@/components/MobileNav';

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata = {
  title: 'Karthik M — Computer Science Engineer · Builder · Learner',
  description:
    'Portfolio of Karthik M. Computer Science Engineer passionate about building technology in AI/ML, FinTech, and edge devices.',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.png',    type: 'image/png', sizes: '256x256' },
    ],
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body>
        <a className="skip-link" href="#about">
          Skip to content
        </a>

        <div className="portfolio-app-shell">
          {/* Desktop sidebar — hidden on mobile via CSS */}
          <SidebarClient />

          {/* Main Content Column */}
          <main className="portfolio-main-content">
            {children}
          </main>
        </div>

        {/* Mobile bottom tab bar — visible only on mobile via CSS */}
        <MobileNav />
      </body>
    </html>
  );
}

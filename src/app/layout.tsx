import type { Metadata } from 'next';
import { ubuntuMono, josefinSans } from './fonts';
import Sidebar from './components/sidebar';
import { MobileNav } from './components/mobile-nav';
import Footer from './components/footer';
import './styles/globals.css';
import { ThemeProvider } from './components/theme-provider';
import { cn } from '../lib/utils';

export const metadata: Metadata = {
  title: 'Pat Lim',
  description: 'Pat Lim - Software Engineer & Creative Developer',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(
        ubuntuMono.variable,
        josefinSans.variable,
        'font-mono bg-background text-foreground'
      )}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen">
            <div className="hidden md:block">
              <Sidebar />
            </div>
            <div className="flex-1">
              <div className="md:hidden">
                <MobileNav />
              </div>
              <main className="container mx-auto px-4 py-8 md:px-8">
                {children}
              </main>
              <Footer />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

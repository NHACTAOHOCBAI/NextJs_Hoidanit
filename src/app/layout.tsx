import AppHeader from '@/components/header/AppHeader';
import ThemeRegistry from '@/components/theme-registry/theme.registry';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>
          <AppHeader />
          {children}
        </ThemeRegistry>
      </body>
    </html>
  );
}

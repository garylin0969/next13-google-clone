import { ReactNode } from 'react';
import './globals.css';

export const metadata = {
    title: 'Google Clone',
    description: 'This is the Google Clone website',
    icons: {
        icon: '/favicon.svg',
      },
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}

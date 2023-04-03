import { ReactNode } from 'react';
import './globals.css';

export const metadata = {
    title: 'Google Clone',
    description: 'This website is an Google clone',
    icons: {
        icon: '/google.svg',
    },
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}

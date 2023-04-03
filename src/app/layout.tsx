import { Metadata } from 'next/types';
import { ReactNode } from 'react';
import './globals.css';

export const metadata: Metadata = {
    title: 'Google Clone',
    description: 'This website is an Google clone',
    icons: {
        icon: '/google_icon.svg',
    },
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}

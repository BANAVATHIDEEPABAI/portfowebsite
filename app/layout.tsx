import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'BANAVATHI DEEPA BAI Portfolio',
    description: 'I am an aspiring software developer with a strong foundation in full-stack development and web technologies. Currently, I am gaining practical experie',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}

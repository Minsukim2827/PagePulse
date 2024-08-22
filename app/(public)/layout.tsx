"use client"
import Navbar from './navbar';

export default function PublicLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <main>
        <Navbar />
        {children}
        </main>;
}
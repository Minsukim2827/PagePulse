"use client"
import Navbar from "./navbar";
import Footer from "./footer";
import {SWRConfig} from "swr";
import fetcher from "@/app/scripts/fetcher";

export default function PrivateLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <SWRConfig
        value={{fetcher:fetcher}}>
    <div>

        <Navbar />

        <main>
        {children}
        </main>
        <Footer />
        </div>
        </SWRConfig>
    );
}
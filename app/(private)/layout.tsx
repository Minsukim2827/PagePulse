"use client"
import Navbar from "@/components/navbar";
import Header from "./header";
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
        <Header />
        <Navbar />

        <main>
        {children}
        </main>
        <Footer />
        </div>
        </SWRConfig>
    );
}
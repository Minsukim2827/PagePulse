import Navbar from "@/components/navbar";
import Header from "./header";
import Footer from "./footer";

export default function PrivateLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
    <div>
        <Header />
        <Navbar />

        <main>
        {children}
        </main>
        <Footer />
        </div>
    );
}
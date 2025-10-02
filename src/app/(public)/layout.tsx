'use client'

import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";




export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <Banner />
            <Navbar/>
            {children}
            <Footer />
        </>
    );
}

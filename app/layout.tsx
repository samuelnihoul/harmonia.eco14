import React, {Suspense}from "react";
import Navbar from '@/components/Header/HeaderOne'
import Footer from '@/components/Footer'
export default function App({children}:{children:ReactNode}) {
    return (
    <html>
    <body>
    <Suspense>
    <Navbar/>
    {children}
    <Footer/>
    </Suspense>
        </body>
    </html>
    )
}

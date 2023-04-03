import './_app.css'
import React  from "react";
import '../public/icofont/icofont.min.css'

export default function App({ Component, pageProps }) {
   return (<>
    <Component className="App" {...pageProps} /></>)
}

import React from "react";
import '../css/style.css'
import "bootstrap/dist/css/bootstrap.min.css";
import '../public/icofont/icofont.min.css'
import { Analytics } from '@vercel/analytics'
export default function App({ Component, pageProps }) {
 return (<><Analytics />
  <Component className="App" {...pageProps} /></>)
}

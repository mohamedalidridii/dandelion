import React from "react"
import Head from "next/head"
import Script from "next/script"
import * as PIXI from 'pixi.js'
export default function Home() {
  return (
    <div>
    <Script src='https://cdnjs.cloudflare.com/ajax/libs/pixi.js/5.0.2/pixi.min.js'></Script>  
    <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>dandelion</title>
    </Head>
    
    <Script src='js/scripts.js'></Script>
    <div>
      <h1 className="Logo">dandelion <p className="Logo-p">by Mariem</p></h1>
      <canvas className="view" />
    </div>

    </div>

  )
}

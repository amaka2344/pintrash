import '../styles/css/tailwind.css'
import '../styles/css/globals.css'
import Head from 'next/head'



function MyApp({ Component, pageProps }) {
    return (<>

<Head>
<link rel="shortcut icon" href="/assets/icon.ico"/>
<link rel="stylesheet" href="/styles/css/tailwind.css" />
</Head>

    <Component {...pageProps }
    />
    </>)
}

export default MyApp
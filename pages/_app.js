import '../styles/globals.css'
// import App from "next/app"
import Head from "next/head"
import { AuthProvider } from "../contexts/AuthContext"
import { CartProvider } from "../contexts/CartContext"
import { DefaultSeo } from "next-seo"
import { parseCookies } from "nookies"
import Router from "next/router"
// import Script from "next/script"
import SEO from "../next-seo.config"
import ScriptImport from "../components/ScriptImport"
import Layout from "../components/Layout"

const MyApp = ({ Component, pageProps}) => {
    return (

        // Include necessary providers in set order
        <AuthProvider>
            <CartProvider>

                {/* Include Layout with necessary props */}
                <Layout>

                    {/* Default SEO for dynamic SEO */}
                    <DefaultSeo {...SEO} />
                    
                    {/* Neccessary stylesheet includes */}
                    <Head>
                        <link rel="preconnect" href="https://app.snipcart.com" />
                        <link rel="preconnect" href="https://cdn.snipcart.com" />
                        <link rel="stylesheet" href="https://cdn.snipcart.com/themes/v3.3.1/default/snipcart.css" />
                        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
                    </Head>

                    {/* Send pageProps to Main Component */}
                    <Component {...pageProps} />

                </Layout>
                
                {/* Include any script tags needed. */}
                <ScriptImport />
            </CartProvider>
        </AuthProvider>

    )
}

function redirectUser(ctx, location) {
    if (ctx.req) {
        ctx.res.writeHead(302, {
            Location: location,
            "Content-Type": "text/html; charset=utf-8",
        })
        ctx.res.end()
    } else {
        Router.push(location)
    }
}
MyApp.getInitialProps = async ({ Component, ctx }) => {
    let pageProps = {}
    // Checks cookies for authentication
    const jwt = parseCookies(ctx).jwt

    if (Component.getInitialProps) {
        pageProps = await Component.getInitialProps(ctx)
    }

    // If the user is on the orders page and is not authenticated, then push user to login page.
    if (!jwt) {
        if (ctx.pathname === "/orders") {
            redirectUser(ctx, "/login")
            //   pathname = "/login"
        }
    }
    // Pass the data to our page via props
    return {
        pageProps,
    }
}

export default MyApp

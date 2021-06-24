import Head from "next/head";

export default function Layout({ children }) {
    return (
        <div>
            {children}
            <Head>
                <title>Tiny Penis Gang</title>
            </Head>
        </div>
    );
}

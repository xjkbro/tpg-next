import Head from "next/head";

export default function Layout({ children }) {
    return (
        <div>
            {children}
            <Head>
                <title>Theory of Practical Gaming</title>
            </Head>
        </div>
    );
}

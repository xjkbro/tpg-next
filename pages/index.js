import Link from "next/link";

import Image from "next/image";
import Layout from "../components/Layout";
import Header from "../components/Header";
import Sections from "../components/Sections";
import Footer from "../components/Footer";
import homeStyle from "../styles/Home.module.css";

export default function Home({ arr }) {
    return (
        <Layout>
            <Header />
            <Sections
                picLeft
                pictureURL={arr[0].src}
                title={arr[0].title}
                description={arr[0].desc}
            />
            <Sections
                pictureURL={arr[1].src}
                title={arr[1].title}
                description={arr[1].desc}
            />
            <Sections
                picLeft
                pictureURL={arr[2].src}
                title={arr[2].title}
                description={arr[2].desc}
            />
            <Footer />
        </Layout>
    );
}

export async function getServerSideProps(context) {
    const res = await fetch(`https://tpg-next.vercel.app/api/home`);
    const data = await res.json();
    if (!data) {
        return {
            notFound: true,
        };
    }

    return {
        props: {
            arr: data,
        }, // will be passed to the page component as props
    };
}

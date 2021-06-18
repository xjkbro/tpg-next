import Link from "next/link";

import Image from "next/image";
import Layout from "../components/Layout";
import Header from "../components/Header";
import Sections from "../components/Sections";
import Footer from "../components/Footer";
import homeStyle from "../styles/Home.module.css";

export default function Home() {
    return (
        <Layout>
            <Header />
            <Sections
                picLeft
                pictureURL="./brotherhood.jpg"
                title="Relationship"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aenean tempus sodales auctor. Donec ultrices vestibulum
                    magna. Duis nibh sem, congue a egestas sed, semper vitae
                    nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aenean tempus sodales auctor. Donec ultrices vestibulum
                    magna. Duis nibh sem, congue a egestas sed, semper vitae
                    nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aenean tempus sodales auctor. Donec ultrices vestibulum
                    magna. Duis nibh sem, congue a egestas sed, semper vitae
                    nunc. "
            />
            <Sections
                pictureURL="./brotherhood.jpg"
                title="Relationship"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aenean tempus sodales auctor. Donec ultrices vestibulum
                    magna. Duis nibh sem, congue a egestas sed, semper vitae
                    nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aenean tempus sodales auctor. Donec ultrices vestibulum
                    magna. Duis nibh sem, congue a egestas sed, semper vitae
                    nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aenean tempus sodales auctor. Donec ultrices vestibulum
                    magna. Duis nibh sem, congue a egestas sed, semper vitae
                    nunc. "
            />
            <Sections
                picLeft
                pictureURL="./brotherhood.jpg"
                title="Relationship"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aenean tempus sodales auctor. Donec ultrices vestibulum
                    magna. Duis nibh sem, congue a egestas sed, semper vitae
                    nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aenean tempus sodales auctor. Donec ultrices vestibulum
                    magna. Duis nibh sem, congue a egestas sed, semper vitae
                    nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aenean tempus sodales auctor. Donec ultrices vestibulum
                    magna. Duis nibh sem, congue a egestas sed, semper vitae
                    nunc. "
            />
            <Footer />
        </Layout>
    );
}

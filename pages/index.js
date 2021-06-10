import Link from "next/link";

import Image from "next/image";
import Layout from "../components/Layout";
import Header from "../components/Header";
import homeStyle from "../styles/Home.module.css";

export default function Home() {
    return (
        <Layout>
            {/* <img
                id={homeStyle.asset1}
                src="/SVG/Asset 1.svg"
                alt=""
                srcset=""
            /> */}
            {/* <img
                id={homeStyle.asset2}
                src="/SVG/Asset 2.svg"
                alt=""
                srcset=""
            />
            <img
                id={homeStyle.asset3}
                src="/SVG/Asset 3.svg"
                alt=""
                srcset=""
            /> */}

            {/* <img
                id={homeStyle.hero}
                src="/fredrick-tendong--GMUHeFuJUs-unsplash.jpg"
                alt=""
                srcset=""
            /> */}
            <img id={homeStyle.layer} src="/SVG/Layer 3.svg" alt="" srcset="" />
            <Header />
            <div>
                <h2>Brotherhood of Gamers</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aenean tempus sodales auctor. Donec ultrices vestibulum
                    magna. Duis nibh sem, congue a egestas sed, semper vitae
                    nunc.{" "}
                </p>
                <Link href="/about">Learn More</Link>
            </div>
            <div>
                <Image
                    src="/images/profile.jpg"
                    height={144}
                    width={144}
                    alt="Jason"
                />
                <h2>Relationship</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aenean tempus sodales auctor. Donec ultrices vestibulum
                    magna. Duis nibh sem, congue a egestas sed, semper vitae
                    nunc.{" "}
                </p>
            </div>
        </Layout>
    );
}

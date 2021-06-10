import Link from "next/link";
import Nav from "../components/Nav";
import headerStyle from "./Header.module.css";

export default function Header() {
    return (
        <div className={headerStyle.container}>
            {/* <div id={headerStyle.logo}>
                <Link href="/">{"TPG".toUpperCase()}</Link>
            </div>
            <div id={headerStyle.logosmall}>
                <Link href="/">
                    {"theory of practical gaming".toUpperCase()}
                </Link>
            </div> */}
            <Nav />
        </div>
    );
}

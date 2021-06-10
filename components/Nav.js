import Link from "next/link";
import navStyle from "./Nav.module.css";
import headerStyle from "./Header.module.css";

export default function Nav() {
    return (
        <nav className={navStyle.navBar}>
            <ul className={navStyle.ul}>
                <li className={navStyle.li}>
                    <Link href="/about">About</Link>
                </li>
                <li className={navStyle.li}>
                    <Link href="/team">Team</Link>
                </li>
                <li className={navStyle.li}>
                    <Link href="/store">Store</Link>
                </li>
                <li className={navStyle.li}>
                    <Link href="/partnership">Partnership</Link>
                </li>
            </ul>
            <div id={headerStyle.logo}>
                <Link href="/">{"TPG".toUpperCase()}</Link>
            </div>

            <Link id={headerStyle.logosmall} href="/">
                {"theory of practical gaming".toUpperCase()}
            </Link>
        </nav>
    );
}

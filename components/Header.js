import Link from "next/link";
import Showcase from "../components/Showcase";
import Navigation from "../components/Navigation";
import headerStyle from "./Header.module.css";

export default function Header({ isHome }) {
    return (
        <div className={headerStyle.container}>
            {isHome ? <Showcase /> : <Navigation />}
        </div>
    );
}

import Link from "next/link";
import styled from "styled-components";

export default function Navigation({}) {
    return (
        <Container>
            {/* Handles all Showcase background elements */}
            <Background />
            <Outline src="/SVG/Layer 3.svg" alt="" srcset="" />
            {/* Navigation with Logo and Links */}
            <NavBar>
                <NavLinks>
                    <Link href="/about">
                        <b>About</b>
                    </Link>
                </NavLinks>
                <NavLinks>
                    <Link href="/team">Team</Link>
                </NavLinks>
                <NavLinks>
                    <Link href="/store">Store</Link>
                </NavLinks>
                <NavLinks>
                    <Link href="/partnership">Partnership</Link>
                </NavLinks>
            </NavBar>
            <Logo>
                <Link href="/">{"TPG".toUpperCase()}</Link>
            </Logo>
            <LogoSm>
                <Link href="/">
                    {"theory of practical gaming".toUpperCase()}
                </Link>
            </LogoSm>
            {/* Showcase's hero section */}
            <Hero>
                <HeroTitle>Brotherhood of Gamers</HeroTitle>
                <HeroDescription>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aenean tempus sodales auctor. Donec ultrices vestibulum
                    magna. Duis nibh sem, congue a egestas sed, semper vitae
                    nunc.
                </HeroDescription>
                <HeroLink>
                    <Link href="/about">Learn More</Link>
                </HeroLink>
            </Hero>
        </Container>
    );
}
const Container = styled.nav`
    margin: auto;
    z-index: 2;
    height: 100vh;
`;

const NavBar = styled.ul`
    list-style-type: none;
    float: right;
    overflow: hidden;
`;
const NavLinks = styled.li`
    float: left;
    z-index: 1;
    padding: 0 25px;
    font-size: 20px;
    transition: all 100ms ease-in;
    :hover {
        transform: scale(1.05);
        opacity: 1;
    }
`;
const Logo = styled.div`
    font-weight: Bold;
    font-size: 65px;
    letter-spacing: 20px;
`;
const LogoSm = styled.div`
    font-weight: 300;
    font-size: 20px;
    letter-spacing: -1px;
`;
const Outline = styled.img`
    position: absolute;
    top: 0 !important;
    left: 0px !important;
    opacity: 1;
    z-index: -1;
    user-select: none;
`;

const Background = styled.div`
    height: 1069px;
    width: 100vw;
    position: absolute;
    top: 0 !important;
    left: 0px !important;
    z-index: -1;
    background: url("/brotherhood.jpg") center no-repeat;
    background-size: cover;
`;

const Hero = styled.div`
    position: absolute;
    top: 50%;
    width: 900px;
`;
const HeroTitle = styled.span`
    font-size: 40px;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 10px;
`;
const HeroDescription = styled.p`
    width: 600px;
    padding-bottom: 10px;
    line-height: 25px;
`;
const HeroLink = styled.span`
    background-color: rgba(255, 255, 255, 0.5);
    padding: 10px;
    cursor: pointer;
    transition: all 100ms ease-in;
    :hover {
        transform: scale(1.05);
        opacity: 1;
    }
`;

export async function getServerSideProps(context) {
    const res = await fetch(`https://tpg-next.vercel.app/api/about`);
    const data = await res.json();
    if (!data) {
        return {
            notFound: true,
        };
    }

    return {
        props: {
            bgImg: data.bgImg,
        }, // will be passed to the page component as props
    };
}

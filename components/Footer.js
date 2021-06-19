import Link from "next/link";
import styled from "styled-components";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import YouTubeIcon from "@material-ui/icons/YouTube";

export default function Footer() {
    return (
        <Container>
            <HorizontalRule />
            <SubscribeContainer>
                <SubscribeForm>
                    <Input placeholder="Enter Email Address" />
                    <Button>Subscribe</Button>
                </SubscribeForm>
                <SocialButton>
                    <TwitterIcon />
                    <FacebookIcon />
                    <YouTubeIcon />
                </SocialButton>
            </SubscribeContainer>
            <FooterLinks>
                <FooterLink>
                    <Link href="/about">About</Link>
                </FooterLink>
                <FooterLink>News</FooterLink>
                <FooterLink>Teams</FooterLink>
                <FooterLink>Partners</FooterLink>
                <FooterLink>Careers</FooterLink>
                <FooterLink>Contact</FooterLink>
                <FooterLink>FAQ</FooterLink>
                <FooterLink>Privacy</FooterLink>
                <FooterLink>TOS</FooterLink>
            </FooterLinks>
            <Copyright>© 1995-2021 | Jason-Kyle De Lara</Copyright>
        </Container>
    );
}
const Container = styled.nav`
    margin: 50px auto;
    /* margin: auto 20%; */
    /* color: gray; */
    text-decoration: none;
    font-size: 12px;
    line-height: 1.6rem;
`;
const HorizontalRule = styled.hr`
    width: 90%;
    text-align: center;
    margin: 20px auto;
`;
const SubscribeContainer = styled.div`
    margin: 20px auto;
    display: flex;
    justify-content: space-around;
`;

const SubscribeForm = styled.form`
    width: 50%;
`;
const Input = styled.input`
    padding: 10px 20px;
    font-size: 18px;
    outline-width: 0;
    width: 50%;
    height: 50px;
    border: none;
    max-width: 600px;
    letter-spacing: 2px;
    text-transform: uppercase;
`;
const Button = styled.button`
    background-color: black;
    border: none;
    padding: 16px 20px;
    font-size: 1rem;
    color: white;
    cursor: pointer;
    transition: all 100ms ease-in;
    :hover {
        background-color: whitesmoke;
        color: #111;
    }
`;
const SocialButton = styled.div`
    text-align: right;
    > svg {
        margin: 0 10px;
        cursor: pointer;
        transition: all 100ms ease-in;
        :hover {
            color: #111;
        }
    }
`;

const FooterLinks = styled.ul`
    display: flex;
    padding: 0 75px 50px 75px;
    margin: auto;
    width: 50vw;
    justify-content: space-between;
`;
const FooterLink = styled.li`
    list-style-type: none;
    cursor: pointer;
    transition: all 100ms ease-in;
    :hover {
        color: #111;
    }
`;
const Copyright = styled.div`
    margin: auto;
    text-align: center;
`;

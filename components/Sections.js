import Link from "next/link";
import styled from "styled-components";

export default function Sections({ picLeft, pictureURL, title, description }) {
    return (
        <Container>
            {picLeft ? (
                <>
                    <PictureLeft src={pictureURL}></PictureLeft>
                    <SectionLeft>
                        <Title>{title}</Title>
                        <AccentLeft>____</AccentLeft>
                        <Description>{description}</Description>
                    </SectionLeft>
                </>
            ) : (
                <>
                    <PictureRight src={pictureURL}></PictureRight>
                    <SectionRight>
                        <Title>{title}</Title>
                        <AccentRight>____</AccentRight>
                        <Description>{description}</Description>
                    </SectionRight>
                </>
            )}
        </Container>
    );
}

const Container = styled.div`
    margin: auto;
    z-index: 2;
    height: 75vh;
    position: sticky;
    margin: 30px 0;
`;
const SectionLeft = styled.div`
    position: absolute;
    top: 0;
    right: 12%;
    align-content: right;
    text-align: right;
    height: 100%;
`;
const PictureLeft = styled.img`
    height: 100%;
`;
const AccentLeft = styled.span`
    position: absolute;
    top: 45px;
    right: 10px;
    font-size: 70px;
`;
const SectionRight = styled.div`
    position: absolute;
    top: 0;
    left: 12%;
    height: 100%;
`;
const PictureRight = styled.img`
    height: 100%;
    float: right;
`;

const AccentRight = styled.span`
    position: absolute;
    top: 45px;
    left: 5px;
    font-size: 70px;
`;

const Title = styled.h1`
    margin-bottom: 30px;
    text-transform: uppercase;
    letter-spacing: 10px;
    font-weight: 400;
    font-size: 60px;
`;

const Description = styled.p`
    width: 650px;
    letter-spacing: 1px;
    line-height: 35px;
    font-size: 24px;
    font-weight: 300;
`;

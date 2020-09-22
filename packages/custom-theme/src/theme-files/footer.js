import React from "react"
import { connect, styled } from "frontity"
import Link from "./Link";

const Footer = ({state}) => {

    const { items } = state.source.get("menus/v1/menus/3");

    return (
        <>
            <FooterMenu>
                {items.items.map(item => {
                    const name = item.title;
                    const link = item.url;
                    return (
                        <Link href={link} key={item.id}>
                            {name}
                        </Link>
                    );
                })}
            </FooterMenu>
        </>
    )

};

const FooterMenu = styled.div`
    width: 100%;
    height: 10rem;
    display: flex;
    background-color: pink;
    padding : 5rem;
    position : fixed;
    bottom : 0;
       
    
    & a {
        font-size: 1.5rem;
        text-decoration: none;
        text-transform: uppercase;
        margin-right: 2.5rem;
    }
`;


export default connect(Footer);

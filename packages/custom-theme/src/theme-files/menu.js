import React from "react"
import { connect, styled } from "frontity"
import Link from "./Link";

const Menu = ({state}) => {

    const { items } = state.source.get("menus/v1/menus/2");

    return (
        <>
            <TopMenu>
                {items.items.map(item => {
                    const name = item.title;
                    const link = item.url;
                    return (
                        <Link href={link} key={item.id}>
                            {name}
                        </Link>
                    );
                })}
            </TopMenu>
        </>
    )

};

const TopMenu = styled.div`
    width: 100%;
    height: 10rem;
    display: flex;
    background-color: pink;
    padding : 5rem;
    & a {
        font-size: 1.5rem;
        text-decoration: none;
        text-transform: uppercase;
        margin-right: 2.5rem;
      
    }
`;


export default connect(Menu);

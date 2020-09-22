import React from "react"
import {connect, styled} from "frontity"
import Acf from "./Acf";

const Page = ({ state }) => {

    const data = state.source.get(state.router.link)
    const page = state.source[data.type][data.id]

    return (
        <PageContent>
            <p>hbuhiujn</p>
        </PageContent>
    )
};

const PageContent = styled.div`
    padding: 5rem;
    
    & * {
        font-size: 2rem;
    }
`;

export default connect(Page)

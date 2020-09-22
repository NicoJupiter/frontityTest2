import React from "react"
import {connect, styled} from "frontity"
import Cafe from "./customPostTypes/Cafe";
import Projet from "./customPostTypes/Projet";

const PostType = ({ state }) => {

    const data = state.source.get(state.router.link)
    const page = state.source[data.type][data.id]

    const components = {
        cafes: Cafe,
        projets: Projet
    };

    var CustomComponents = components[page.type];

    return (
        <>
            <CustomComponents />
        </>
    )
};


export default connect(PostType)

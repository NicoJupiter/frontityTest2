import React from "react"
import { connect } from "frontity"
import Acf from "../Acf";
import Elementor from "./Cafe";

const Projet = ({state}) => {

    const data = state.source.get(state.router.link)
    const page = state.source[data.type][data.id]

    return (
        <div>
            <h1>Page projet</h1>
            {page.acf.content ?
                page.acf.content.map(item => {
                    return (
                        <Acf data={item} />
                    )
                })
                :
                <Elementor data={page.content.rendered}/>
            }

        </div>
    )
}

export default connect(Projet)


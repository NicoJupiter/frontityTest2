import React from "react"
import { connect } from "frontity"
import WidgetType from "../WidgetType";

const Cafe = ({state}) => {

    const data = state.source.get(state.router.link);
    const page = state.source[data.type][data.id];


    return (
        <div>
            <h1>Page Café</h1>
            <WidgetType/>
        </div>
    )
};

export default connect(Cafe)


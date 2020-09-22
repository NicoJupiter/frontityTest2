import React from "react"
import { connect } from "frontity"
import Acf from "./Acf";
import Elementor from "./Elementor";

const WidgetType = ({state}) => {

    const data = state.source.get(state.router.link);
    const page = state.source[data.type][data.id];

    return (
        <div>
            {
                (state.theme.typeWidget === 'Acf' &&
                    page.acf.content &&
                    page.acf.content.map(item => {
                        return (
                            <Acf data={item} />
                        )
                    })
                ) ||
                (state.theme.typeWidget === 'Elementor' && <Elementor data={page.content.rendered}/>)
           }
        </div>
    )
};

export default connect(WidgetType)


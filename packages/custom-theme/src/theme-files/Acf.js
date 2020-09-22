import React from "react"
import { connect, styled } from "frontity"
import SliderBlock from "./blocks/SliderBlock";
import ImageBlock from "./blocks/ImageBlock";

const Acf = ({data}) => {

    const components = {
        slider: SliderBlock,
        image: ImageBlock
    };

    if(data !== undefined) {
        var CustomComponents = components[data.acf_fc_layout];
    }

    return (
        <div>
            {CustomComponents ?
                <CustomComponents data={data} /> : null
            }
        </div>
    )
}

export default connect(Acf)



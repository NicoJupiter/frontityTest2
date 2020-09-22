import React from "react"
import { connect, styled } from "frontity"
import { renderToStaticMarkup } from 'react-dom/server';
import parse, { domToReact } from 'html-react-parser';
import SliderBlock from "./blocks/SliderBlock";
import ImageBlock from "./blocks/ImageBlock";
import TextBlock from "./blocks/TextBlock";


const Elementor = ({state, data, libraries}) => {

    const Html2React = libraries.html2react.Component;

    const componentsArray  = {
        SliderBlock: SliderBlock,
        ImageBlock: ImageBlock,
        TextBlock : TextBlock
    }
   // console.log(componentsArray['SliderBlock']);

    const options = {
        replace: ({ attribs, children }) => {
            if (!attribs) return;

            if (attribs.class === 'elementorObj') {
               var CustomComponents = componentsArray.SliderBlock;
               return <CustomComponents data={attribs.data} />;
            }
        }
    };

    return (
        <div>
            <Html2React html={renderToStaticMarkup(parse(data, options))} />
        </div>
    )
};

export default connect(Elementor)



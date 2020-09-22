import React from "react"
import { connect } from "frontity"

const ImageBlock = ({data}) => {

    return (
        <div>
            {data ?  <img src={data.object.url} alt={data.object.alt}/> : <p>No img</p>}
        </div>
    )
}

export default connect(ImageBlock)


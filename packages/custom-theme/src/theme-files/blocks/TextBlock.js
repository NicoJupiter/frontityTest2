import React from "react"
import { connect } from "frontity"

const TextBlock = ({data}) => {

    return (
        <div>
            {data ? data : null}
        </div>
    )
}

export default connect(TextBlock)


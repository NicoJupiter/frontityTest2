import React, {Component} from "react";
class Loader extends Component {

    constructor(props) {
        super(props);

    }

    componentDidMount() {
        // console.log("Loader : mount")
    }

    componentWillUnmount() {
        // console.log("Loader : destroy")
    }

    render() {
        return (
            <>
                <p>Loader</p>
            </>
        )
    }

}

export default Loader;

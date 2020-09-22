import React, {Component} from "react"

class SliderBlock extends Component {

    constructor(props) {
        super(props);

        if(props !== undefined) {
            this.state = {
                arrayImg :  props.data.split(',')
            }
        }

    }

    componentDidMount() {
        console.log("Slider Block : mount")
    }

    componentWillUnmount() {
        console.log("Slider Block : destroy")
    }

    render() {
        return (
            <div>
                {this.state.arrayImg ?
                    this.state.arrayImg.map(item => {
                        return <img src={item} alt='' />
                    })
                    : null }
            </div>
        )
    }

}

export default SliderBlock;

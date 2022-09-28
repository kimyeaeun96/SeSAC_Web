import React, {Component} from "react";

class Handler_ex extends Component {
    state = {
        text: "Hello World"
    }

    constructor(props){
        super(props)
        this.
    }

    render(){
        return(
            <div>
                <h1>{this.state.text}</h1>
                <button onClick={() => {}}>클릭</button>
            </div>
        )
    }
}

export default Handler_ex
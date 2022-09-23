import React, {Component} from 'react'
import coding from "./apple.jpg"

const style = {
    color: 'orange',
    fontSize: '40px',
    top: 20
}

class test2 extends Component {
    render() {
        return(
            <div style={style}>
                <h2>안녕하세요</h2>
                <h2><img src={coding}></img></h2>
            </div>
        )
    }
}
export default test2;
import React, {Component} from 'react';

const name = '김예은'
const my_style = {
    background: 'blue',
    color: 'orange',
    fontSize: '40px',
    padding: '12' 
}

class test extends Component {
    render() {
        return (
            <div style={my_style}>
                안녕하세요 저는 {name} 입니다.
            </div>
        );
    }
}

export default test;

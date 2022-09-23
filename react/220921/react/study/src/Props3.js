import React, {Component} from 'react';
import propTypes from 'prop-types';

class text extends Component {
    render(){
        const {text, valid} = this.props;
    return(
        <>
            <div style={{fontSize:'30px', fontWeight: 'bold'}}>{text}</div><br/>
            <button onClick={valid}>콘솔메세지</button>
        </>
    );
}};

text.defaultProps = {
    text: "이건 기본 text props 입니다",
    valid: console.log("콘솔 로그 성공")
}
text.propTypes = {
    text: propTypes.string,
    valid: propTypes.string
};

export default text;
import React from 'react';
 
const Food = props => {
    return <div> 저는 <span style={{color: 'red'}}>{props.name}</span>를 좋아해요.</div>;
};
 
Food.defaultProps = {
    name: '기본 이름',
};
 
export default Food;
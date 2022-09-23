import React from 'react';
import code from './harry.jpg';
import Book from './Book.css'

const BestSeller = props => {
    return (
        <>
            <div className='background'>
                <div className='title'>이번주 베스트 셀러</div><br/>
                <img src={code} /><br/>
                <div className='write_1'>나의 하루는 4시 40분에 시작된다</div>
                <div className='write_2'>
                저자:김유진<br/>
                판매가: 13,500원<br/>
                구분: 자기계발서
                </div>
            </div>
        </>
    )
}

export default BestSeller;
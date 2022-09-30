// useMemo() : 연산을 최적화 한다. 특정 값을 기억함. 
import {useState, useMemo, useEffect} from 'react';

function getAverage(list) {
    console.log("getAverage");
    var sum = 0;
    if (list.length == 0) return sum;
    for (let i = 0; i < list.length; i++ ){
        sum = sum + list[i];
    }
    return sum / list.length;
}

const Memo = () => {
    console.log("memo")
    const [list, setList] = useState([]);
    const [num, setNum] = useState(0);

    const onChange = e => {
        // console.log("onChange");
        setNum(e.target.value);
    }
    const onInsert = e => {
        setList([...list, parseInt(num)]);
        setNum(0);
    }
    // const avg = useMemo(() =>  getAverage(list), [list];) list가 변경될 때만 getAverage함수 실행
    const [avg, setAvg] = useState(0);
    useEffect(() => {
        setAvg(getAverage(list));
}, [list]);

    return (
        <div>
            <input value={num} onChange={onChange} /> 
            <button onClick={onInsert}>등록</button>

            <ul>
                {list.map((v,i) => {
                    <li key={i}>{v}</li>
                })}
            </ul>

            <div>
                <b>평균값: {avg}</b>
            </div>
        </div>
    )
}

export default Memo;

// state 바뀔때마다 re rendering -> 컴포넌트 다 다시 읽음 -> 컴포넌트, 함수 등 다 닷 ㅣ정의 

import logo from './logo.svg';
import './App.css';

function App() {
  const flag = true;
  var name = "";
  if ( flag ) name = "SeSAC";
  else name = "문래"

  const style = {
    backgroundColor: "yellow",
    color: "blue"
  };

  return (
    <div style={style}>
      {name}
      { flag ? (<h1>True</h1>):<h2>False</h2>}  
    </div>
  );
}

export default App;

/*
삼항연산자
if ? 참일 경우: 거짓인 경우

if (flag){
 첫째 콜론
}else{
 둘째 콜론
}

{ flag && (<h1>True</h1>) }
-조건 && 참 
-거짓이면 실행을 안한다. 아무것도 안보여줌

- 스타일 주는 방법 1. 변수 선언해서 불러오기 2.직접 태그 안에서 스타일 설정하기
<div className="class" style={{
  backgroundColor: "yellow",
  color: "blue"
}}>
*/
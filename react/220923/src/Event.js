function Event() {
    function clickEvent(e){
        console.log(e);
    }
    function aClick(e){
        console.log("aClick");
        console.log(e);
    }
    return (
        <div>
            <a href="#" onClick={aClick}>a태그</a>
            <button onClick={clickEvent}>클릭</button>
        </div>
    )
}
export default Event;

// preventDefault() : 윈도우의 기본 기능을 막음
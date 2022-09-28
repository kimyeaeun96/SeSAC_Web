import React, { useState } from "react";

const EventFunc = () => {
    // const [message, setMessage] = useState("");
    // const [username, setUsername] = useState("");
    // const onChangeMessage = (e) => setMessage(e.target.value);
    // const onChangeUsername = (e) => setUsername(e.target.value);
    // const onClick = () => {
    //     alert(username + ": " + message);
    //     setUsername("");
    //     setMessage("");
    // };
    // const onKeyPress = (e) => {
    //     if(e.key === "Enter") {
    //         onClick();
    //     }
    // }; 

    // input이 여러개일때: useState를 통해 사용하는 상태에 문자열이 아닌 객체를 넣는다. 
    const [form, setForm] = useState({
        username: "",
        message: ""
    });

    const {username, message} = form;
    const onChange = (e) => {
        const nextForm = {
            ...form, // ...form: 기존의 form 내용을 복사함
            [e.target.name]: e.target.value // 원하는 값을 덮어씌운다
        };

        setForm(nextForm);
    };

    const onClick = () => {
        alert(username + ": " + message);
        setForm({
            username: "",
            message: ""
        })
    };


    const onKeyPress = (e) => {
        if(e.key === "Enter") {
            onClick();
        }
    };

    return(
        <div>
            <h1>리액트의 이벤트</h1>

            <input 
                type="text"
                name="username"
                placeholder="사용자이름"
                onChange={onChange}//{onChangeUsername}
            />

            <input 
                type="text"
                name="message"
                placeholder="입략"
                onChange={onChange}//{onChangeMessage}
                onKeyPress={onKeyPress}//{onKeyPress}
            />

            <button onClick={onClick}
            //{onClick}
            >클릭</button>
        </div>
    );
};

export default EventFunc;
import React, { useState } from "react";
//uuid => 랜덤 id 호출
import {v4 as uuidv4} from 'uuid';
import styles from "./AddTodo.module.css";

export default function AddTodo({onAdd})
{
    const [text, setText] = useState('');
    const handleChange = (e) => setText(e.target.value);
    const handleSubmit = (e) => {
        // 페이지 리프레쉬 x
        e.preventDefault();
        // 공백 있을때 추가 x
        if(text.trim().length === 0)
        {
            return;
        }
        onAdd({id : uuidv4(), text, status : 'active'});
        setText('');
    };

    /* AddTodo 추가 */
    return <form className= {styles.form} onSubmit={handleSubmit}>
        <input className= {styles.input} type = "text" placeholder= "Add Todo" value={text} onChange = {handleChange} ></input>
        <button className= {styles.button}>추가</button>
    </form>
}
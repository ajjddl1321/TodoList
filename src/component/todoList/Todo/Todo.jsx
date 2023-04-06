import React from "react";
import {GoTrashcan} from "react-icons/go";
import styles from "./Todo.module.css";

export default function Todo( {todos, onUpdate, onDelete })
{
    const {text, status} = todos;
    // 체크박스에 체크 상태 = completed 상태, 체크 안 된 상태 = active 상태
    const handleChange = (e) => {
        const status = e.target.checked ? 'completed' : 'active';
        onUpdate({...todos, status});
    }
    // todo 삭제
    const handleDelete = () => onDelete(todos);
    
    return(
        <li className= {styles.todo}>
            <input className= {styles.input} type = "checkbox" id = "checkbox" checked = {status === 'completed'} onChange = {handleChange} />
            <label className= {styles.label} htmlFor= "checkbox">{text}</label>
            <span className= {styles.icon}><button className= {styles.button} onClick= {handleDelete}><GoTrashcan/></button></span>    
        </li>
    );
}
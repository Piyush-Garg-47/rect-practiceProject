import React from 'react'
import styles from './Button.module.css'
import { MdOutlineMessage } from "react-icons/md";
function Button(props) {
    const {text , icon , isOutline} = props ; 
  return (
    <button className={isOutline ?styles.outline_btn : styles.primary_btn}>
       {props.icon}
       {props.text}
    </button>
  )
}

export default Button ;
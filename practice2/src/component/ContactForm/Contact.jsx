import React from 'react'
import styles from './Contact.module.css'
import Button from '../Button/Button'
import { MdOutlineMessage } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import { MdOutlineMailOutline } from "react-icons/md";
const Contact = () => {
  return (
    <section className={`${styles.Container} container`}>
         <div className={styles.contact_form}>
           <div className={styles.top_btn}>
           <Button text = "VIA SUPPORT CHAT"  icon ={ <MdOutlineMessage  fontSize="24px"/>} />
           <Button text = " VIA CALL" icon ={ <IoMdCall fontSize="24px" />} />
           </div>
           <Button  isOutline = {true} text = " VIA EMAIL FORM " icon ={ <MdOutlineMailOutline fontSize="24px" />} />
           <form>
            <div className={styles.form_control}>
                <label htmlFor="name">Name</label>
                 <input type="text" name = "name" />
            </div>
            <div className={styles.form_control}>
                <label htmlFor="email">Email</label>
                 <input type="email" name = "email" />
            </div>
            <div className={styles.form_control}>
                <label htmlFor="text">Text</label>
                 <textarea  name = "name" rows="5"/>
            </div>
            <div style={{display:"flex" , justifyContent :"end"}}>
                <Button text ="SUBMIT BUTTON"/>
            </div>
           </form>
         </div>
         <div className={styles.contact_image}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBdfmuzG86mTuT4I74oL4-rGXyCa5P8bD4UA&s" alt="cotact photo" />
         </div>
    </section>
  )
}

export default Contact
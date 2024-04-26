import React from 'react'
import classes from './Notification.module.css'

function Notification(props) {

    let specialClasses = "";

    if(props.status === "error") {
        specialClasses = classes.error;
    }
    if(props.status === 'success') {
        specialClasses = classes.success;
    }

    const cssclasses = `${classes.notification} ${specialClasses}`

  return (
    <section className={cssclasses}> 
        <h2>{props.title}</h2>
        <p>{props.message}</p>
    </section>
  )
}

export default Notification
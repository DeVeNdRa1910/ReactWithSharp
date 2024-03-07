import React from 'react';
import Card from './Card';
import Button from './Button'
import classes from './ErrorModel.module.css'
function ErrorModel(props) {
  return (
    <div>
        <div  className={classes.backdrop}  onClick={props.onConfirm}/> {/* self closing div */}
        <Card className={classes.model}>
            <header className={classes.header}>
                <h2>{props.title}</h2>
            </header>
            <div className={classes.content}>
                <p>{props.message}</p>
            </div>
            <footer nclassName={classes.actions}>
                <Button onClick={props.onConfirm}>Okey</Button>
            </footer>
        </Card>
    </div>
  )
}

export default ErrorModel

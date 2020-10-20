import React from "react";
import classes from "./Post.module.css";

const Post = (props) => {
    return (<div className={classes.item}>
        <img src={props.image}  alt='img'/>
        {props.message}
    </div>);
}

export default Post
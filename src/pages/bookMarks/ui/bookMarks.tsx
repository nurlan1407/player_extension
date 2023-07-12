import React from "react";
import { classNames } from "shared/lib/classNames/classNames";

export interface BookMarksProps {
    class?:string,
}

const BookMarks:React.FC<BookMarksProps> = (props)=>{
    const className = props.class
    return(
        <div className={classNames("",{},[className])}>
            Main Page
        </div>
    )
}   

export default BookMarks
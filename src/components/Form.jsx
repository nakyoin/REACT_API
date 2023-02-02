import React from "react";
import "../App.css";

const Form = ({a}) => {
return(
    <form onSubmit={a}>
        <input type="text" name="city" placeholder="Город"/>
        <button type="submit">Получить погоду</button>
    </form>
)
}
export default Form
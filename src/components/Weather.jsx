import React, { useState } from "react";
import "../App.css";

const Weather = ({ temp, city, country, sunrise, sunset, error }) => {
    return (
        <div className="">
            {temp &&
            <div>
                <p>Местонахождение: Город - {city} Страна - {country}</p>
                <p>Температура {temp}</p>
                <p>Восход солнца{sunrise}</p>
                <p>Закат солнца {sunset}</p>
            </div>
            }
            <p>{error}</p>
        </div>
    )

}
export default Weather
import React from "react";
import { useState } from "react";
import "./time.css"

export const Time = () => {
    const now = new Date().toLocaleTimeString();
    const [time,setTime] = useState(now)

    const updateTime = () => {
        const newtime = new Date().toLocaleTimeString()
        setTime(newtime)
    }

    setInterval(updateTime,1000)

    return <div className="Time">
    <h1>{time}</h1>
    </div>
}
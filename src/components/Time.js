import React from "react";
import { useState } from "react";
import "./time.css"

export const Time = () => {
    const now = new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second:'numeric', hour12: true });
    const [time,setTime] = useState(now)

    const updateTime = () => {
        const newtime = new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second:'numeric', hour12: true });
        setTime(newtime)
    }

    setInterval(updateTime,1000)

    return <div className="Time">
    <h1>{time}</h1>
    </div>
}
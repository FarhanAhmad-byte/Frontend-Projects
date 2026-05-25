/* eslint-disable no-useless-assignment */
import { Timer } from 'easytimer.js'
import { useEffect, useRef, } from 'react'

export default function useTimer(currentTime, setCurrentTime, setScore, setShowButton, setNotAnswered){

    const timeRef = useRef(new Timer())

    useEffect(() => {
        const timer = timeRef.current
        timer.start({countdown: true, startValues: {seconds: 10}})
        timer.addEventListener('secondsUpdated', () => {
            setCurrentTime(timer.getTimeValues().toString())
        })
        if (currentTime === '00:00:00') {
            const inputs = document.querySelectorAll("input")
            Array.from(inputs).map((input) => { input.disabled = true })
            
            setScore((prev) => prev -= 1)
            timer.stop()
            setShowButton(true)
            setNotAnswered((prev) => prev += 1)
    }
    }, [currentTime])
    
    return currentTime
}
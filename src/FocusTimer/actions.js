import state from "./state.js";
import * as el from './elements.js'
import * as timer from './timer.js'

export function toggleRunning () {
    if(state.minutes <= 5) return
    
    state.isRunning = document.documentElement.classList.toggle('running')

    timer.countdown()
}

export function reset () {
    state.isRunning = false
    state.isRunning = document.documentElement.classList.remove('running')
    timer.updateDisplay(0, 0)
}

export function increaseTime () {
    if(state.minutes >= 25) return

    const minutes = Number(el.minutes.textContent)

    state.minutes = minutes + 5
    timer.updateDisplay(state.minutes, 0)
}

export function lowerTime () {
    if(state.minutes <= 5) return   

    const minutes = Number(el.minutes.textContent)

    state.minutes = minutes - 5
    timer.updateDisplay(state.minutes, 0)
}
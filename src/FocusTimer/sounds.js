import state from "./state.js"
import * as el from './elements.js'

const coffee = new Audio('../assets/Cafeteria.wav')
const rain = new Audio('../assets/Chuva.wav')
const forest = new Audio('../assets/Floresta.wav')
const fire = new Audio('../assets/Lareira.wav')


const audios = [coffee, rain, forest, fire]

coffee.loop = true
rain.loop = true
forest.loop = true
fire.loop = true

function pauseAllAudios() {
    audios.forEach((audio) => {
        audio.pause()
    })

    el.coffeeCard.classList.remove('selected')
    el.rainCard.classList.remove('selected')
    el.forestCard.classList.remove('selected')
    el.fireCard.classList.remove('selected')
}

export function coffeePlay () {
    state.isMute = document.documentElement.classList.toggle('music-on')
    
    if(state.isMute) {
        el.coffeeCard.classList.toggle('selected')
        coffee.play()
        return
    }
    
    pauseAllAudios()
}

export function rainPlay () {
    state.isMute = document.documentElement.classList.toggle('music-on')
    
    if(state.isMute) {
        el.rainCard.classList.toggle('selected')
        rain.play()
        return
    }
    
    pauseAllAudios()
}

export function forestPlay () {
    state.isMute = document.documentElement.classList.toggle('music-on')
    
    if(state.isMute) {
        el.forestCard.classList.toggle('selected')
        forest.play()
        return
    }
    
    pauseAllAudios()
}

export function firePlay () {
    state.isMute = document.documentElement.classList.toggle('music-on')
    
    if(state.isMute) {
        el.fireCard.classList.toggle('selected')
        fire.play()
        return
    }
    
    pauseAllAudios()
}


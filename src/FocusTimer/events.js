import * as el from './elements.js'
import * as actions from './actions.js'
import * as sounds from './sounds.js'



export function registerControls() {
    el.timerControls.addEventListener('click', (event) => {
        const action = event.target.dataset.action

        if(typeof actions[action] != "function") return
        
        actions[action]()
    })
}

export function registerSound() {
    el.sounds.addEventListener('click', (event) => {
        const sound = event.target.dataset.sound

        if(typeof sounds[sound] != "function") return

        sounds[sound]()
    })
}

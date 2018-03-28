import Hello from './Hello.js'

import { clone } from './utils.js'
import { defaultConfig } from './config.js'

class Storage {
    constructor(opts) {
        opts = opts || {}
        this.config = Object.assign({}, defaultConfig, opts)
        this.hello = new Hello(this.config)
    }

    set (data) {
        data = data || {}
        let save
        let temp = localStorage.getItem(this.config.key)
        if (temp === null || temp === undefined) {
            save = data
        }
        if (typeof JSON.parse(temp) === 'object') {
            save = Object.assign({}, JSON.parse(temp), data)
        }
        save = JSON.stringify(save)
        localStorage.setItem(this.config.key, save)
    }

    get (name) {
        let save = JSON.parse(localStorage.getItem(this.config.key))
        if (name === undefined) {
            return save
        }
        if (save.hasOwnProperty(name)) {
            return save[name]
        }
        return undefined
    }
}

export default Storage
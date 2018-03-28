import Storage from '../../lib'

const opts = {
    key: 'js-storage-demo'
}

const storage = new Storage(opts)

let data = {
    set: {
        key: '',
        value: ''
    },
    get: {
        key: '',
        value: ''
    },
    store: []
}

storage.get()

const demo = new Vue({
    el: '#demo',
    data,
    mounted: function () {
        this.getStorage()
    },
    methods: {
        getStorage: function () {
            let local = storage.get()
            let temp = []
            for (let i in local) {
                temp.push({
                    key: i,
                    value: local[i]
                })
            }
            this.store = temp
        },
        setValue: function () {
            let key = this.set.key
            let value = this.set.value
            if (key && value) {
                let temp = {}
                temp[key] = value
                storage.set(temp)
            }
            this.getStorage()
        },
        getValue: function () {
            let name = this.get.key
            this.get.value = storage.get(name)
        }
    }
})
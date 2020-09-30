class myPhone {
    constructor(name) {
        this.name= name
        this.message = ''
        this.outbox = []
        this.inbox = []
        this.pin= 100
        this.status = true
        this.audio = '1.mp3'
    }
    checkMessage (massage){
        this.message = massage

    }

    sendMessage(phone){
        this.outbox.push(this.message)
        phone.inbox.push(this.message)
        this.pin--

    }

    getOutbox(){
        return this.outbox

}
getInbox (){
        return this.inbox
}
getPin (){
        return this.pin
}
phoneOn(){if (this.status){
    alert('hello')
}else {
    alert('goodbye')
}

}
on(){
        this.status= true
}
off(){
        this.status =false
}

}

let iphone = new myPhone('iphone')
let oppo = new  myPhone('oppo')
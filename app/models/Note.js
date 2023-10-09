import { generateId } from "../utils/GenerateId.js"




export class Note {
    constructor(data) {
        this.id = generateId()
        this.name = data.name
        this.color = data.color
        this.date = data.date ? new Date(data.date) : new Date()
    }


    get NoteTemplate() {
        return `<p> ${this.name}<p>`
    }


}



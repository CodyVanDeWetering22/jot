import { generateId } from "../utils/GenerateId.js"




export class Note {
    constructor(data) {
        this.id = generateId()
        this.name = data.name
        this.color = data.color
        this.body = data.body
        this.date = data.date ? new Date(data.date) : new Date()
        this.updated = data.updated ? new Date(data.updated) : new Date()
    }


    get NoteTemplate() {
        return `<p onclick="app.NoteController.setActiveNote('${this.id}')" type="button">${this.name}</p>`
    }

    // TODO Make an active note template getter

    get ActiveNoteTemplate() {
        return ` <div class="col-5 note-border p-2 m-2" style="border-color: ${this.color};">
        <div class="col-12">
<p>${this.name}</p>
</div>
<div class="col-12">
<p>Created: ${this.date.toLocaleString()}</p>
</div>
<div class="col-12">
    <p>Updated Time: ${this.updated.toLocaleString()}</p>
    </div>
    <textarea class="w-100 textarea-height" id="noteContent" >${this.body}</textarea>
    <button onclick="app.NoteController.saveNote('${this.id}')" class="btn btn-success"><i class="mdi mdi-plus"></i></button>
    <button onclick="app.NoteController.deleteNote('${this.id}')"  class="btn btn-danger"><i class="mdi mdi-delete"></i></button>
    </div>`
    }

}



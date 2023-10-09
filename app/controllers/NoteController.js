import { AppState } from "../AppState.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";
import { notesService } from "../services/NotesService.js";
import { getFormData } from "../utils/FormHandler.js";

function _drawNotes() {
    const notes = AppState.notes
    let content = ''
    notes.forEach(note => content += note.NoteTemplate)
    setHTML('notes', content)
}





export class NoteController {
    constructor() {
        _drawNotes()


    }

    crateNote(event) {
        try {
            event.preventDefault()
            const form = event.target

            const eventData = getFormData(form)


            notesService.createNote(eventData)
            form.reset()

        } catch (error) {
            console.error(error);
        }
    }

}

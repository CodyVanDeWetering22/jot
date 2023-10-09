import { AppState } from "../AppState.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";
import { notesService } from "../services/NotesService.js";
import { getFormData } from "../utils/FormHandler.js";

function _drawNotes() {
    const notes = AppState.notes
    console.log(notes.length);
    let content = ''
    notes.forEach(note => content += note.NoteTemplate)
    setHTML('notes', content)
}





export class NoteController {
    constructor() {
        AppState.on('notes', _drawNotes)

    }

    createNote(event) {
        try {
            event.preventDefault()
            const form = event.target
            console.log('creating note');
            const noteData = getFormData(form)
            console.log(noteData);

            notesService.createNote(noteData)

            form.reset()

        } catch (error) {
            console.error(error);
        }
    }

}

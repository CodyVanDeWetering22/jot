import { AppState } from "../AppState.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";
import { notesService } from "../services/NotesService.js";
import { getFormData } from "../utils/FormHandler.js";

function _drawNotes() {
    const notes = AppState.notes
    let content = ''
    notes.forEach(note => content += note.NoteTemplate)
    setHTML('noteTotal', notes.length)
    setHTML('notes', content)

}

function _drawActiveNote() {
    const activeNote = AppState.activeNote


    setHTML('activeNote', activeNote?.ActiveNoteTemplate)
}
// TODO MAKE A DRAW ACTIVE NOTE FUNCTION



export class NoteController {
    constructor() {
        AppState.on('notes', _drawNotes)
        AppState.on('activeNote', _drawActiveNote)


        // NOTE MAKE SURE TO DRAW YOUR ACTIVE NOTE ON A CHANGE TO THE APPSTATE
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

    setActiveNote(noteId) {
        notesService.setActiveNote(noteId)
    }

    async deleteNote(noteId) {
        const wantsToRemove = await Pop.confirm("are you sure?")
        console.log('deleted');
        if (!wantsToRemove) {
            return
        }

        notesService.removeNote(noteId)
        location.reload()
    }

    saveNote() {
        let noteContents = document.getElementById('noteContent').value
        console.log(noteContents);

        notesService.saveActiveNote(noteContents)

    }


    // TODO MAKE A FUNCTION THAT SETS THE ACTIVE NOTE - Redacted

    // TODO MAKE A SAVE FUNCTION TO SAVE YOUR ACTIVE NOTE

    // TODO MAKE A DELETE FUNCTION

}

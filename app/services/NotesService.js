import { AppState } from "../AppState.js"
import { Note } from "../models/Note.js";
import { Pop } from "../utils/Pop.js";
import { saveState } from "../utils/Store.js";

function _save() {
    saveState('notes', AppState.notes)

}

class NotesService {

    setActiveNote(noteId) {
        console.log('Note id', noteId);
        const activeNote = AppState.notes.find(note => note.id == noteId)
        console.log('active note', activeNote);
        AppState.activeNote = activeNote


    }


    createNote(noteData) {
        const newNote = new Note(noteData)
        AppState.notes.push(newNote)
        AppState.emit('notes')
        _save()
    }

    removeNote(noteId) {
        const notes = AppState.notes
        const noteIndex = notes.findIndex(note => note.id == noteId)


        notes.splice(noteIndex, 1)
        _save()

        AppState.emit('notes')
    }
    saveActiveNote(noteContents) {
        let activeNote = AppState.activeNote
        activeNote.body = noteContents
        console.log('saved', noteContents);
        activeNote.updated = new Date()

        AppState.emit('activeNote')


        _save()
    }


}


export const notesService = new NotesService
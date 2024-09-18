import { defineStore } from 'pinia';

export const useNoteStore = defineStore('note', {
  state: () => ({
    notes: JSON.parse(localStorage.getItem('notes')) || [], // Charger les notes depuis localStorage
    selectedNote: null,
  }),
  actions: {
    fetchNotes() {
      this.notes = JSON.parse(localStorage.getItem('notes')) || [];
    },
    saveNotes() {
      localStorage.setItem('notes', JSON.stringify(this.notes));
    },
    addNote(note) {
      this.notes.push(note);
      this.saveNotes();
    },
    updateNote(updatedNote) {
      const index = this.notes.findIndex(note => note.id === updatedNote.id);
      if (index !== -1) {
        this.notes[index] = updatedNote;
        this.saveNotes();
      }
    },
    deleteNote(id) {
      this.notes = this.notes.filter(note => note.id !== id);
      this.saveNotes();
    },
    setSelectedNote(note) {
      this.selectedNote = note;
    }
  }
});

<template>
  <div>
    <h1>Notes</h1>
    <ul>
      <li v-for="note in noteStore.notes" :key="note.id">
        <h3>{{ note.title }}</h3>
        <p>{{ note.content }}</p>
        <button @click="deleteNote(note.id)">Delete</button>
        <button @click="editNote(note)">Edit</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { onMounted } from 'vue';
import { useNoteStore } from '../stores/noteStore';

export default {
  setup() {
    const noteStore = useNoteStore();

    // Fetch notes when component is mounted
    onMounted(() => {
      noteStore.fetchNotes();
    });

    const deleteNote = (id) => {
      noteStore.deleteNote(id);
    };

    const editNote = (note) => {
      noteStore.setSelectedNote(note);
      // Logic to show edit form or navigate to edit page
    };

    return { noteStore, deleteNote, editNote };
  }
};
</script>

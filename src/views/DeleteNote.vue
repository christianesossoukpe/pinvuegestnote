<!-- <template>
  <div>
    <ul>
      <li v-for="note in noteStore.notes" :key="note.id">
        <h3>{{ note.title }}</h3>
        <p>{{ note.content }}</p>
        <button @click="deleteNote(note.id)">Delete</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { useNoteStore } from '../stores/noteStore';

export default {
  setup() {
    const noteStore = useNoteStore();

    const deleteNote = (id) => {
      noteStore.deleteNote(id);
    };

    return { noteStore, deleteNote };
  }
};
</script> -->
<template>
 
</template>

<style>

</style>

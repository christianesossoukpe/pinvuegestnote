<!-- <template>
  <form @submit.prevent="updateNote">
    <input v-model="selectedNote.title" placeholder="Title" />
    <textarea v-model="selectedNote.content" placeholder="Content"></textarea>
    <button type="submit">Update Note</button>
  </form>
</template>

<script>
import { computed } from 'vue';
import { useNoteStore } from '../stores/noteStore';

export default {
  setup() {
    const noteStore = useNoteStore();
    const selectedNote = computed(() => noteStore.selectedNote);

    const updateNote = () => {
      if (selectedNote.value) {
        noteStore.updateNote(selectedNote.value);
      }
    };

    return { selectedNote, updateNote };
  }
};
</script> -->
<template>
 
</template>

<style>

</style>
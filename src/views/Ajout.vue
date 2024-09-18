<template>
  <div class="container my-3">
    <h2 class="text-2xl font-bold mb-4">Ajouter une Note</h2>
    <!-- Formulaire pour ajouter ou mettre à jour une note -->
    <form @submit.prevent="saveNote" class="mb-3">
      <input v-model="noteForm.title" placeholder="Titre" required class="form-control mb-2" />
      <textarea v-model="noteForm.content" placeholder="Contenu" required class="form-control mb-2"></textarea>
      <div>
        <select v-model="noteForm.category" class="form-control mb-2" @change="checkCustomCategory">
          <option value="">Sélectionnez une catégorie</option>
          <option v-for="cat in predefinedCategories" :key="cat" :value="cat">{{ cat }}</option>
          <option value="custom">Autre (ajoutez votre catégorie)</option>
        </select>
        <input v-if="isCustomCategory" v-model="noteForm.customCategory" placeholder="Nouvelle catégorie" class="form-control mb-2" />
      </div>
      <button type="submit" class="btn btn-success">{{ isEditing ? 'Update Note' : 'Add Note' }}</button>
    </form>

    <!-- Liste des notes -->
    <ul class="list-group mb-3">
      <li v-for="note in notes" :key="note.id" class="list-group-item">
        <h3>{{ note.title }}</h3>
        <p>{{ note.content }}</p>
        <div class="d-flex">
          <button @click="editNote(note)" class="btn btn-success me-2">Update</button>
          <button @click="confirmDelete(note.id)" class="btn btn-danger">Delete</button>
        </div>
      </li>
    </ul>

    <!-- Notifications -->
    <div v-if="notification" class="alert alert-success">{{ notification }}</div>

    <!-- Afficher les erreurs réseau -->
    <div v-if="errorMessage" class="alert alert-danger">{{ errorMessage }}</div>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue';

const notes = ref([]);
const noteForm = ref({
  title: '',
  content: '',
  category: '',
  customCategory: ''
});
const isEditing = ref(false);
const selectedNote = ref(null);
const notification = ref('');
const errorMessage = ref('');
const predefinedCategories = ref(['Work', 'Personal', 'Other']);
const isCustomCategory = ref(false);

// Charger les notes depuis le fichier JSON au démarrage
onMounted(async () => {
  try {
    const response = await fetch('/notes.json');
    if (!response.ok) throw new Error('Unable to load notes. Please try again later.');
    notes.value = await response.json();
  } catch (error) {
    errorMessage.value = error.message;
  }
});

// Ajouter une note
const addNote = () => {
  if (noteForm.value.title && noteForm.value.content) {
    notes.value.push({
      ...noteForm.value,
      id: Date.now()
    });
    showNotification('Note added successfully!');
    resetForm();
  }
};

// Mettre à jour une note
const updateNote = () => {
  if (selectedNote.value) {
    const index = notes.value.findIndex(note => note.id === selectedNote.value.id);
    if (index !== -1) {
      notes.value[index] = {
        ...selectedNote.value,
        ...noteForm.value
      };
      showNotification('Note updated successfully!');
      resetForm();
    }
  }
};

// Sauvegarder une note
const saveNote = () => {
  if (isEditing.value) {
    if (confirm('Are you sure you want to update this note?')) {
      updateNote();
    }
  } else {
    addNote();
  }
};

// Confirmer la suppression
const confirmDelete = (id) => {
  if (confirm('Are you sure you want to delete this note?')) {
    deleteNote(id);
  }
};

// Supprimer une note
const deleteNote = (id) => {
  notes.value = notes.value.filter(note => note.id !== id);
  showNotification('Note deleted successfully!');
};

// Éditer une note
const editNote = (note) => {
  selectedNote.value = note;
  noteForm.value = { ...note };
  isEditing.value = true;
};

// Réinitialiser le formulaire
const resetForm = () => {
  noteForm.value = { title: '', content: '', category: '', customCategory: '' };
  selectedNote.value = null;
  isEditing.value = false;
};

// Afficher une notification
const showNotification = (message) => {
  notification.value = message;
  setTimeout(() => {
    notification.value = '';
  }, 3000);
};

// Vérifier si une catégorie personnalisée est sélectionnée
const checkCustomCategory = () => {
  isCustomCategory.value = noteForm.value.category === 'custom';
};
</script>
<style scoped>
/* Pas besoin de style personnalisé, tout est géré par Bootstrap et Tailwind */
</style>

<!-- notification de localhost à changer -->
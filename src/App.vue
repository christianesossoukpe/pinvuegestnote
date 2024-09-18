<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-light fixed-top" style="background-color: #e3f2fd;">
      <div class="container-fluid">
        <RouterLink to="/" class="navbar-brand">Home</RouterLink>
        <RouterLink to="/ajout" class="nav-link">Ajouter</RouterLink>
        <!-- Autres liens si besoin -->
        <!-- <RouterLink to="/edit" class="nav-link">Edit</RouterLink> -->
        <!-- <RouterLink to="/delete" class="nav-link">Delete</RouterLink> -->
        <!-- <RouterLink to="/liste" class="nav-link">Liste</RouterLink> -->
      </div>
    </nav>
  </header>

  <div class="content" style="padding-top: 70px;">
    <RouterView />
  </div>
</template>

<style scoped>
/* Espace supplémentaire pour éviter le chevauchement de contenu avec la navbar */
.content {
  padding-top: 70px; /* Ajuster pour s'assurer que le contenu ne chevauche pas la navbar */
}
</style>

<script setup>
import { RouterLink, RouterView, useRouter } from 'vue-router'

const router = useRouter();

function goToHome() {
  if (router.currentRoute.value.path !== '/notas') {
    router.push('/notas');
  }
}

</script>

<template>
  <header>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Examen FrontEnd Gonzalo Villagra</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a href="#" @click.prevent="goToHome" class="nav-link">Promedios</a>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/inicio">Iniciar Sesión</router-link>
            </li>
          </ul>
          <form class="d-flex" @submit.prevent="handleSearch">
            <input class="form-control me-2" type="search" placeholder="Buscar" aria-label="Search" v-model="searchQuery">
            <button class="btn btn-outline-success" type="submit">Buscar</button>
          </form>
        </div>
      </div>
    </nav>
  </header>

  <RouterView />
</template>

<style scoped>
</style>

<template>
  <div id="app">
    <form @submit.prevent="submitForm">
      <div class="formulario">
        <label for="nombre">Nombre:</label>
        <input type="text" id="nombre" v-model="nombre" required />
        <span class="errorlps" v-if="errors.nombre">{{ errors.nombre }}</span>
      </div>
      <div class="formulario">
        <label for="correo">Correo:</label>
        <input type="email" id="correo" v-model="correo" required />
        <span class="errorlps" v-if="errors.correo">{{ errors.correo }}</span>
      </div>
      <div class="formulario">
        <label for="contraseña">Contraseña:</label>
        <input type="password" id="contraseña" v-model="contraseña" required />
        <span class="errorlps" v-if="errors.contraseña">{{ errors.contraseña }}</span>
      </div>
      <div class="formulario">
        <label for="confirmacionContraseña">Confirmar Contraseña:</label>
        <input type="password" id="confirmacionContraseña" v-model="confirmacionContraseña" required />
        <span class="errorlps" v-if="errors.confirmacionContraseña">{{ errors.confirmacionContraseña }}</span>
      </div>
      <button type="submit" class="btnRegistro">Registrarse</button>
    </form>
  </div>
</template>

<script setup>

import { ref } from 'vue';

//definicion de las variables para los formularios
const nombre = ref('');
const correo = ref('');
const contraseña = ref('');
const confirmacionContraseña = ref('');
const errors = ref({});
const submitted = ref(false);

//validacion mail
function validarEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}
//validacion texto
function validarTexto(texto){
  const regex = /^[a-zA-Z\s]+$/;
  return regex.test(texto)
}

//funcion manejo de formulario
function submitForm() {
  errors.value = {};
  submitted.value = false;

  if (!nombre.value || !validarTexto(nombre.value)) {
    errors.value.nombre = 'solo puede tener letras y espacios';
  }
  if (!correo.value || !validarEmail(correo.value)) {
    errors.value.correo = 'Ingrese un correo válido';
  }
  if (!contraseña.value || contraseña.value.length < 6) {
    errors.value.contraseña = 'La contraseña debe tener al menos 6 caracteres';
  }
  if (contraseña.value !== confirmacionContraseña.value) {
    errors.value.confirmacionContraseña = 'Las contraseñas no coinciden';
  }
  //if por si no hay errores en ningun campo anterior
  if (!Object.keys(errors.value).length) {
    submitted.value = true;
    console.log('Nombre:', nombre.value);
    console.log('Correo:', correo.value);
    console.log('Contraseña:', contraseña.value);
    alert('Formulario enviado con éxito');


    //limpia variables para siguiente formulario
    nombre.value = '';
    correo.value = '';
    contraseña.value = '';
    confirmacionContraseña.value = '';

  }
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}

form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

form div {
  position: relative;
  margin-bottom: 20px;
  width: 300px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

input {
  width: 100%;
  padding: 1px;
  font-size: 16px;
  border: 1px solid #29a15f;
  border-radius: 4px;
}

.errorlps {
  color: rgb(196, 17, 17);
  top: 100%;
  margin-top: 5px;
  left: 0;
  transform: translateY(5px);
  background: rgba(8, 94, 207, 0.1);
  padding: 4px;
  border-radius: 10px;
  z-index: 1;
}

button {
  padding: 10px 20px;
  font-size: 16px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #218838;
}

h2 {
  margin-top: 20px;
  color: #28a745;
}
</style>

<template>
    <div id="notas">
      <form @submit.prevent="submitForm">
        <div>
          <label for="nota1">Nota 1:</label>
          <input type="number" id="nota1" v-model.number="nota1" required />
          <span class="errorlps" v-if="errors.nota1">{{ errors.nota1 }}</span>
        </div>
        <div>
          <label for="nota2">Nota 2:</label>
          <input type="number" id="nota2" v-model.number="nota2" required />
          <span class="errorlps" v-if="errors.nota2">{{ errors.nota2 }}</span>
        </div>
        <div>
          <label for="nota3">Nota 3:</label>
          <input type="number" id="nota3" v-model.number="nota3" required />
          <span class="errorlps" v-if="errors.nota3">{{ errors.nota3 }}</span>
        </div>
        <div>
          <label for="asistencia">Asistencia:</label>
          <input type="number" id="asistencia" v-model.number="asistencia" required />
          <span class="errorlps" v-if="errors.asistencia">{{ errors.asistencia }}</span>
        </div>
        <button type="submit">Calcular Promedio</button>
      </form>
      <div v-if="promedio !== null">
        <h2>Promedio: {{ promedio }}</h2>
        <h2>{{ resultado }}</h2>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  //variales utilizadas para la pagina notas
  let nota1 = ref(0);
  let nota2 = ref(0);
  let nota3 = ref(0);
  let asistencia = ref(0);
  let promedio = ref(null);
  let resultado = ref("");
  const errors = ref({});
  
  function calculoPromedio() {
    console.log('Nota 1:', nota1.value);
    console.log('Nota 2:', nota2.value);
    console.log('Nota 3:', nota3.value);
    console.log('Asistencia:', asistencia.value);
  
    let promedio1 = nota1.value * 0.35 + nota2.value * 0.35 + nota3.value * 0.30;
    promedio.value = promedio1.toFixed(2);
  
    if (asistencia.value >= 80 && promedio1 >= 4.0) {
      resultado.value = "Aprobado, ¡Felicitaciones!";
    } else {
      resultado.value = "Reprobado, lo lamento.";
    }
  }
  
  function submitForm() {
    errors.value = {};
  
    if (!nota1.value || nota1.value < 10 || nota1.value > 70) {
      errors.value.nota1 = 'Ingrese un valor válido (10-70)';
    }
    if (!nota2.value || nota2.value < 10 || nota2.value > 70) {
      errors.value.nota2 = 'Ingrese un valor válido (10-70)';
    }
    if (!nota3.value || nota3.value < 10 || nota3.value > 70) {
      errors.value.nota3 = 'Ingrese un valor válido (10-70)';
    }
    if (!asistencia.value || asistencia.value < 0 || asistencia.value > 100) {
      errors.value.asistencia = 'Ingrese un valor válido (0-100)';
    }
  
    if (!Object.keys(errors.value).length) {
      calculoPromedio();
    }
  }
  </script>
  
  <style scoped>


#notas {
  font-family:Arial;
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

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

input {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #32a737;
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
  margin-top: 20px;
  border: 15px;
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
  
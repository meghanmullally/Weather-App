<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
  <a class="navbar-brand" href="#">Weather App</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarColor01">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="./Home">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="./weather">Weather</a>
      </li>
      
    </ul>
  </div>
</nav>
<main class="container mt-2">
     <!-- <router-link to="/">Home</router-link>
    <router-link to="/weather">Weather</router-link>
  </p>
      <router-view></router-view> -->
    </main>
  </div>
</template>
<script>
export default {
  name: 'app',
}
</script>
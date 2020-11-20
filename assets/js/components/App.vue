<template>
  <div class="vue-tempalte">
    <!-- Navigation -->
    <nav class="navbar shadow bg-white rounded justify-content-between flex-nowrap flex-row fixed-top">
      <div class="container">
        <ul class="navbar-brand float-left">
        <img  src="../components/img/logocommune.jpg" >
        </ul >
        
         <ul class="nav   flex-row  mr-auto  float-left">
      <li class="nav-item active">
        <a class="nav-link" href="/acceuil">Acceuil <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
       
         <router-link class="nav-link" to="/services">Services</router-link>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/contact">Contact</a>
      </li>
     
    </ul>
        
        
      <!--  <a class="navbar-brand float-left" href="https://www.linkedin.com" target="_blank">
          Commune Elguetar 
        </a>-->
        <ul class="nav navbar-nav flex-row float-right">
          <li class="nav-item">
            <router-link class="nav-link pr-3" to="/login">Se Connecter</router-link>
          </li>
          <li class="nav-item">
            <router-link class="btn btn-outline-primary" to="/signup">S'inscrire</router-link>
          </li>
        </ul>

       
      </div>
     
    </nav>
   <!--  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>-->

  
<!--</nav>-->

    <!-- Main -->
    <div class="App">
     <!-- <div class="vertical-center">
        <div class="inner-block">-->
          <router-view />
      <!--  </div>
      </div>-->
    </div>

  </div>
</template>
<script>

   export default {
       name: "app",
      
      
   }
    
</script>
<style  scoped>
 
 
</style>
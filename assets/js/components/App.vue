<template>
  <div ><!--class="vue-tempalte"-->
    <div>
    <!-- Navigation -->

    <nav class="navbar shadow bg-white rounded justify-content-between flex-nowrap flex-row fixed-top">
      <div class="container">
        <ul class="navbar-brand float-left">
      <!--  <img  src="../components/img/logocommune.jpg" >-->
        </ul >
        
    <ul class="nav   flex-row  mr-auto  float-left">
      <li class="nav-item active">
       <router-link class="nav-link pr-3" to="/">acceuil</router-link>
      </li>
      <li class="nav-item">
      
        <router-link class="nav-link pr-3" to="/services">Services</router-link>
      </li>
      <li class="nav-item">
       <router-link class="nav-link pr-3" to="/contact">contact</router-link>
      </li>
     
    </ul>
        
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
    </div>
  

  <!-- Main -->
    <div class="App">
          <router-view />
           <Slider />
    </div>
    
 
  </div>
</template>
<script>
import Slider from '../components/Slider.vue'

   export default {
       name: "app",
       components: {
    Slider
  }
      
      
   }
    
</script>
<style  scoped>
 #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body{
  margin:0px;
}
 
</style>
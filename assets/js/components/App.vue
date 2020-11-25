<template>

  <div ><!--class="vue-tempalte"-->
   <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
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
      <!--<li class="nav-item"><a href=""> Présentation Ville</a><span class="offcanvas-menu-toggler collapsed" data-toggle="collapse" data-target="#collapse-menu-108"><i class="open-icon fa fa-angle-down"></i><i class="close-icon fa fa-angle-up"></i></span><ul class="collapse" id="collapse-menu-108"><li class="item-131"><a href="/index.php?option=com_content&amp;view=article&amp;id=8&amp;Itemid=131&amp;lang=fr"> Situation géographique</a></li><li class="item-132"><a href="/index.php?option=com_content&amp;view=article&amp;id=18&amp;Itemid=132&amp;lang=fr"> Présentation en Bref</a></li><li class="item-134"><a href="/index.php?option=com_content&amp;view=article&amp;id=7&amp;Itemid=134&amp;lang=fr"> La ville en chiffres</a></li><li class="item-135"><a href="/index.php?option=com_content&amp;view=article&amp;id=9&amp;Itemid=135&amp;lang=fr"> Histoire de la ville</a></li><li class="item-137"><a href="/index.php?option=com_content&amp;view=article&amp;id=11&amp;Itemid=137&amp;lang=fr"> Activité économique</a></li><li class="item-293"><a href="/index.php?option=com_content&amp;view=article&amp;id=46&amp;Itemid=293&amp;lang=fr"> Annuaire de la Ville</a></li><li class="item-373"><a href="/index.php?option=com_content&amp;view=article&amp;id=252&amp;Itemid=373&amp;lang=fr"> Plan d'management de benarous</a></li></ul></li>
      -->

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
           <Slider/>
          <router-view />
          
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
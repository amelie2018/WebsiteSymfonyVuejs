<template>
<div><!--class="vue-tempalte"-->
<!--
  
-->

 <mdb-navbar color="default" dark   position="top"  >
    <mdb-navbar-brand href="https://mdbootstrap.com/">
     Genius Soft
    </mdb-navbar-brand>
    <mdb-navbar-toggler>
      <mdb-navbar-nav>
        <mdb-nav-item href="/" active>acceuil</mdb-nav-item>
        <mdb-nav-item href="/services">Services</mdb-nav-item>
        <mdb-nav-item href="/contact">contact</mdb-nav-item>
        <mdb-dropdown tag="li" class="nav-item">
          <mdb-dropdown-toggle tag="a" navLink color="default" slot="toggle" waves-fixed>Autres</mdb-dropdown-toggle>
          <mdb-dropdown-menu>
            <mdb-dropdown-item>paramètres</mdb-dropdown-item>
            <mdb-dropdown-item>autres services</mdb-dropdown-item>
            <mdb-dropdown-item>Avis</mdb-dropdown-item>
          </mdb-dropdown-menu>
        </mdb-dropdown>
      </mdb-navbar-nav>

      <form>
        <mdb-input type="text" class="text-white" placeholder="Search" aria-label="Search" label navInput waves waves-fixed/>
      </form>
    </mdb-navbar-toggler>
  </mdb-navbar>

  <!-- Main -->
    <div class="App">
           <!--<Slider/>-->
           <mdb-carousel
    :interval="8000"
    slide
    :items="items"
    indicators
  >  
           <mdb-carousel-text>
             Some quick example text to build on the card title and
            make up the bulk of the card's content.
           </mdb-carousel-text>
  </mdb-carousel>
          <router-view />
          
    </div>

    <!-- Grid row -->
<mdb-row>
  <!-- Grid column -->
  <div class="column-2 px-2 mb-r">
    <!--Card-->
    <mdb-card class="default-color-dark">
      <!--Card image-->
      <mdb-view src="/build/assets/img/serv4.jpg" alt="photo">
        <a href="#">
          <mdb-mask overlay="white-slight" />
        </a>
      </mdb-view>
      <!--Card content-->
      <mdb-card-body class="text-center">
        <!--Title-->
        <h4 class="card-title white-text">Services informatiques</h4>
        <!--Text-->
        <p class="card-text white-text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
          aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
          Nemo enim ipsam voluptatem quia voluptas.</p>
        <mdb-btn tag="a" href="#" outline="white" size="md">Button</mdb-btn>
      </mdb-card-body>
    </mdb-card>
    <!--/.Card-->
  </div>
  <!-- Grid column -->

  <!-- Grid column -->
  <div class="column-1 px-2 mb-r">
    <!--Card-->
    <mdb-card class="primary-color-dark">
      <!--Card image-->
      <mdb-view class="view" src="/build/assets/img/prod5.jpg" alt="photo">
        <a href="#">
          <mdb-mask overlay="white-slight" />
        </a>
      </mdb-view>
      <!--Card content-->
      <mdb-card-body class="text-center">
        <!--Title-->
        <h4 class="card-title white-text">Vente materiels informatique</h4>
        <!--Text-->
        <p class="card-text white-text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
          aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
          Nemo enim ipsam voluptatem quia voluptas.</p>
        <mdb-btn tag="a" href="#" outline="white" size="md">Button</mdb-btn>
      </mdb-card-body>
    </mdb-card>
    <!--/.Card-->
  </div>
  <!-- Grid column -->

  <!-- Grid column -->
  <div class="column-1 px-2">
    <!--Card-->
    <mdb-card class="warning-color-dark">
      <!--Card image-->
      <mdb-view class="view" src="/build/assets/img/log1.jpg" alt="photo">
        <a href="#">
          <mdb-mask overlay="white-slight" />
        </a>
      </mdb-view>
      <!--Card content-->
      <mdb-card-body class="text-center">
        <!--Title-->
        <h4 class="card-title white-text">Conception et développement des logiciels et applications informatique</h4>
        <!--Text-->
        <p class="card-text white-text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
          aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
          Nemo enim ipsam voluptatem quia voluptas.</p>
        <mdb-btn tag="a" href="#" outline="white" size="md">Button</mdb-btn>
      </mdb-card-body>
    </mdb-card>
    <!--/.Card-->
  </div>
  <!-- Grid column -->
</mdb-row>
<!-- Grid row -->
</div>
</template>
<script>
  import { mdbNavbar, mdbNavbarBrand, mdbNavbarToggler, mdbNavbarNav, mdbNavItem, mdbDropdown, mdbDropdownMenu, mdbDropdownToggle, mdbInput, mdbDropdownItem, mdbCard, mdbCardBody, mdbBtn, mdbView, mdbMask, mdbRow, mdbCarousel } from 'mdbvue';

import Slider from '../components/Slider.vue'

   export default {
       name: "app",
       components: {
    Slider, mdbNavbar,
      mdbNavbarBrand,
      mdbNavbarToggler,
      mdbNavbarNav,
      mdbNavItem,
      mdbDropdown,
      mdbDropdownMenu,
      mdbDropdownToggle,
      mdbDropdownItem,
      mdbInput,
      mdbCard,
      mdbCardBody,
      mdbBtn,
      mdbView,
      mdbMask,
      mdbRow,
      mdbCarousel
  },
   data() {
      return {
        items: [
          {
            img: true,
            src:
            '/build/assets/img/img1.jpg',
            caption: {
              title: "First slide"
            }
           
            /*  "https://mdbootstrap.com/img/Photos/Slides/img%20(130).jpg"*/
          },
          {
            img: true,
            src:
                 '/build/assets/img/img2.jpg'
             /* "https://mdbootstrap.com/img/Photos/Slides/img%20(129).jpg"*/
          },
          {
            img: true,
            src:
                '/build/assets/img/img3.jpg'
              /*"https://mdbootstrap.com/img/Photos/Slides/img%20(70).jpg"*/
          }
        ]
      };
    }
      
      
   };
    
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

 @media (max-width: 767px) {
    .column-1,
    .column-2 {
        width: 100%;
    }
  }
 
  @media (min-width: 768px) and (max-width: 991px) {
      .column-1 {
          width: 50%;
      }
      .column-2 {
          width: 100%;
      }
  }
 
 @media (min-width: 992px) {
      .column-2,
      .column-1 {
          width: 33%;
      }
  }

  .caption {
    display:inline-block;
    vertical-align:middle;
    line-height:normal;
    background:blue;
}
 
</style>
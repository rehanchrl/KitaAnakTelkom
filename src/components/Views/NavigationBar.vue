<script>/* eslint-disable */</script>
<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top shadow-sm">
    <div class="container">
        <router-link to="/" class="navbar-brand">
        <img src="./assets/img/NewLogo.png" class="img-fluid main-logo" alt="">
        </router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <router-link to="/" class="nav-link">Beranda</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/welcome" class="nav-link">Tentang</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/kelas" class="nav-link">Kelas</router-link>            
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <button type="button" class="btn btn-primary getStarted">Get Started</button>
        </form>
      </div>
    </div>
  </nav>
</template>

<style lang="scss">
  $mainColor : #EF1828;
  $secondaryColor: #FFB300;
  $whiteColor : #FFFFFF;

  .navbar {
    background: $whiteColor !important;
    .main-logo { 
      width: 5rem;
    }

    .nav-item {
      padding: 15px;
    }

    .nav-item a {
      color: $mainColor !important;
    }

    .getStarted {
      padding: 10px;
      width: 150px;
      background-image: linear-gradient(to bottom right, $mainColor, $secondaryColor);
      border: none;
      border-radius: 100px;
    }

  }

</style>
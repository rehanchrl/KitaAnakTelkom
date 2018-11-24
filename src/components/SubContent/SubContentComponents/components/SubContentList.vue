<template>
  <div class="container">
    <Breadcrumb />
    <div class="row">
      <div class="col-md-3 add-margin">
        <router-link to="/">
          <div class="card" style="width: 16rem;">
            <img class="card-img-top" src="../assets/subcontent-1.png" alt="Card image cap">
            <div class="card-body">
              <div class="subcontent-categories">Algorithm</div>
              <h5 class="card-title">Pengenalan Dasar Algoritma</h5>
            </div>
          </div>
        </router-link>
      </div>

      <!-- DELETE IT WHEN NOT USED -->
      <div class="col-md-3 add-margin">
        <router-link to="/">
          <div class="card" style="width: 16rem;">
            <img class="card-img-top" src="../assets/subcontent-1.png" alt="Card image cap">
            <div class="card-body">
              <div class="subcontent-categories">Algorithm</div>
              <h5 class="card-title">Pengenalan Dasar Algoritma</h5>
            </div>
          </div>
        </router-link>
      </div><div class="col-md-3">
        <router-link to="/">
          <div class="card" style="width: 16rem;">
            <img class="card-img-top" src="../assets/subcontent-1.png" alt="Card image cap">
            <div class="card-body">
              <div class="subcontent-categories">Algorithm</div>
              <h5 class="card-title">Pengenalan Dasar Algoritma</h5>
            </div>
          </div>
        </router-link>
      </div><div class="col-md-3">
        <router-link to="/">
          <div class="card" style="width: 16rem;">
            <img class="card-img-top" src="../assets/subcontent-1.png" alt="Card image cap">
            <div class="card-body">
              <div class="subcontent-categories">Algorithm</div>
              <h5 class="card-title">Pengenalan Dasar Algoritma</h5>
            </div>
          </div>
        </router-link>
      </div><div class="col-md-3">
        <router-link to="/">
          <div class="card" style="width: 16rem;">
            <img class="card-img-top" src="../assets/subcontent-1.png" alt="Card image cap">
            <div class="card-body">
              <div class="subcontent-categories">Algorithm</div>
              <h5 class="card-title">Pengenalan Dasar Algoritma</h5>
            </div>
          </div>
        </router-link>
      </div><div class="col-md-3">
        <router-link to="/">
          <div class="card" style="width: 16rem;">
            <img class="card-img-top" src="../assets/subcontent-1.png" alt="Card image cap">
            <div class="card-body">
              <div class="subcontent-categories">Algorithm</div>
              <h5 class="card-title">Pengenalan Dasar Algoritma</h5>
            </div>
          </div>
        </router-link>
      </div>
      <div class="col-md-3">
        <router-link to="/">
          <div class="card" style="width: 16rem;">
            <img class="card-img-top" src="../assets/subcontent-1.png" alt="Card image cap">
            <div class="card-body">
              <div class="subcontent-categories">Algorithm</div>
              <h5 class="card-title">Pengenalan Dasar Algoritma</h5>
            </div>
          </div>
        </router-link>
      </div>
      <div class="col-md-3">
        <router-link to="/">
          <div class="card" style="width: 16rem;">
            <img class="card-img-top" src="../assets/subcontent-1.png" alt="Card image cap">
            <div class="card-body">
              <div class="subcontent-categories">Algorithm</div>
              <h5 class="card-title">Pengenalan Dasar Algoritma</h5>
            </div>
          </div>
        </router-link>
      </div>
      <!-- DELETE HERE -->
    </div>
  </div>
</template>


<script>
  import Breadcrumb from '../../../Views/Breadcrumb';
  export default {
    name: 'SubContentList',
    components: {
      Breadcrumb,
    }
  }

</script>

<style lang="scss" scoped>
  a {
    color: #262A3C;
  }

  .add-margin{
    //   margin:20px !important;
  }

  .card {
    font-family: 'Exo';
    
    .subcontent-categories {
      color: darkred;
    }
  }

</style>

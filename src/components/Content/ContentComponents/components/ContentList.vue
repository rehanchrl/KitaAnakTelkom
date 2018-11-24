<template>
  <div class="ContentList">
    <div class="container">
      <Breadcrumb />
      <div class="row">

        <div class="col-sm-4">
          <router-link to="/content/x/sub-content">
            <div class="card shadow-sm">
              <div class="card-body">
                <img src="../assets/img/content-1.png" alt="content-1" class="img-fluid content-img">
                <span class="content-title">Development</span>
              </div>
            </div>
          </router-link>
        </div>

        <div class="col-sm-4">
          <router-link to="/">
            <div class="card shadow-sm">
              <div class="card-body">
                <img src="../assets/img/content-2.png" alt="content-1" class="img-fluid content-img">
                <span class="content-title">Algorithm</span>
              </div>
            </div>
          </router-link>
        </div>

        <div class="col-sm-4">
          <router-link to="/">
            <div class="card shadow-sm">
              <div class="card-body">
                <img src="../assets/img/content-3.png" alt="content-1" class="img-fluid content-img">
                <span class="content-title">Database</span>
              </div>
            </div>
          </router-link>
        </div>

        <!-- DELETE IT WHEN NOT USED -->
          <div class="col-sm-4">
            <router-link to="/">
              <div class="card shadow-sm">
                <div class="card-body">
                  <img src="../assets/img/content-1.png" alt="content-1" class="img-fluid content-img">
                  <span class="content-title">Development</span>
                </div>
              </div>
            </router-link>
          </div>

          <div class="col-sm-4">
            <router-link to="/">
              <div class="card shadow-sm">
                <div class="card-body">
                  <img src="../assets/img/content-2.png" alt="content-1" class="img-fluid content-img">
                  <span class="content-title">Algorithm</span>
                </div>
              </div>
            </router-link>
          </div>

          <div class="col-sm-4">
            <router-link to="/">
              <div class="card shadow-sm">
                <div class="card-body">
                  <img src="../assets/img/content-3.png" alt="content-1" class="img-fluid content-img">
                  <span class="content-title">Database</span>
                </div>
              </div>
            </router-link>
          </div>
        <!-- DIVIDER -->

      </div>

    </div>
  </div>
</template>

<style lang="scss" scoped>
  .ContentList {
    padding: 20px;

    .content-img {
      width: 3.5rem;
    }

    .content-title {
      font-family: 'Exo';
      font-size: 1.5rem;
      color: #262A3C;
      padding: 5px;
    }
  }

</style>

<script>
  import Breadcrumb from '../../../Views/Breadcrumb';
  export default {
    name: 'ContentList',
    components: {
      Breadcrumb,
    }
  }

</script>

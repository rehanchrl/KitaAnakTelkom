<template>
  <div class="ClassSection">
    <div class="container">
      <div class="row ">
        <div class="col-md-12">
          <h1 class="section-title">Mau belajar materi di kelas?</h1>
        </div>
        <div class="col-md-4">
          <router-link to="/content/x">
            <div class="card shadow-lg mx-auto overlay" style="width: 18rem;">
              <div class="lol"></div>
              <img class="card-img-top" src="../assets/img/card-1.png" alt="Class Images">
              <div class="card-body">
                <span class="categories">SMK</span>
                <h1 class="card-title">X</h1>
              </div>
            </div>
          </router-link>
        </div>
        <div class="col-md-4">
          <router-link to="/">
            <div class="card shadow-lg mx-auto overlay" style="width: 18rem;">
              <div class="lol"></div>
              <img class="card-img-top" src="../assets/img/card-2.png" alt="Class Images">
              <div class="card-body">
                <span class="categories">SMK</span>
                <h1 class="card-title">XI</h1>
              </div>
            </div>
          </router-link>
        </div>
        <div class="col-md-4">
          <router-link to="/">
            <div class="card shadow-lg mx-auto overlay" style="width: 18rem;">
              <div class="lol"></div>
              <img class="card-img-top" src="../assets/img/card-3.png" alt="Class Images">
              <div class="card-body">
                <span class="categories">SMK</span>
                <h1 class="card-title">XII</h1>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .ClassSection {
    background: #F4F7F9;
    padding: 30px;
    .section-title{
      font-family: 'Exo';
      text-align: center;
      padding: 30px;
    } 

    .card {
      border-radius: 10px;
      border: transparent;
      text-align: center;
      .categories {
        display: block;
        color: #9e9e9e;
      }
      .card-title{
        font-family: 'Exo';
        letter-spacing: 5px;
        color: #262A3C;
      }
    }
  }

</style>

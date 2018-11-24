<script>/* eslint-disable */</script>
<template>
  <div class="MainSection">
    <div class="container">
      <div class="content">
        <h1 class="main-title">
          Ayo Belajar!
        </h1>
        <p class="main-desc">
          Website ini adalah web penunjang materi pembelajaran disekolah. Materi dalam website ini dibungkus dengan
          sangat menarik dan interaktif. Cocok untuk dipelajari bagi orang-orang yang baru belajar mengenai bidang <b>Informatika</b>.
        </p>
        <div class="form-group form-area">
          <div class="row">
            <div class="col-4 nopadding">
              <input type="email" class="form-control subscribe-form" id="exampleInputEmail1" aria-describedby="emailHelp"
                placeholder="Email Address">
              <small id="emailHelp" class="form-text text-muted">Berlangganan untuk update materi terbaru.</small>
            </div>
            <div class="col-4 nopadding">
              <button type="button" class="btn btn-default subscribe-button">Berlangganan</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
  $mainColor : #EF1828;
  $secondaryColor: #FFB300;
  $whiteColor : #FFFFFF;
  $orangeColor : #F55318;
  .MainSection {

    background: url('../assets/img/landing.png') no-repeat;
    background-position: 100% 0;
    width: 100%;
    height: 550px;
    display: flex;
    .content {
      .main-title {
        margin-top: 15%;
        font-size: 50px;
        font-family: 'Exo', sans-serif;
        text-transform: uppercase;
        color: $mainColor;
      }
      .main-desc {
        width: 50%;
        color: $orangeColor;
      }
      .subscribe-form {
        width: 100%;
        border-radius: 0px;
        border: 1px solid $orangeColor;
      }
      .subscribe-button{
        border-radius: 0px;
      background: $orangeColor;
      color: $whiteColor;
      }
      .form-area{
          padding-left: 15px;
      }

    }
  }
</style>

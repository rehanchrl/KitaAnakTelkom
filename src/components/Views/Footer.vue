<template>
    <div class="footer">
        <div class="container">
            <div class="row">
                <div class="col-md-4">
                    <h1 class="footer-title">KitaAnakTelkom</h1>
                    <p class="footer-desc">Website pembelajaran untuk meningkatkan standarisasi pembelajaran di SMK TELKOM JAKARTA, maka dibuat web yang akan menunjang pembelajaran siswa diluar jam sekolah sesuai materi yang diajarkan oleh guru disekolah.</p>
                </div>
                <div class="col-md-4 hr-line">
                    <h1 class="footer-title">Menu</h1>
                    <ul class="footer-menu">
                        <li><router-link to="/" class="nav-link">Beranda</router-link></li>
                        <li><router-link to="/" class="nav-link">Tentang</router-link></li>
                        <li><router-link to="/" class="nav-link">Kelas</router-link></li>
                    </ul>
                </div>
                <div class="col-md-4 hr-line">
                    <h1 class="footer-title">Contact Us</h1>
                    <p>Email : kitaanaktelkom@gmail.com</p>
                    <p>Phone : +62 812 3456 7890</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .footer{
        background: #262A3C;
        padding:50px;
        color:#FFFFFF;
        .footer-title{
            font-family: 'Exo';
            font-size: 1.5rem;
        }
        .footer-desc{
            font-size: 0.9rem;
            text-align: justify;
        }
        .footer-menu li{
            display: block;
        }
        .footer-menu a{
            color: #FFFFFF; 
        }
        .hr-line{
            border-left: 1px solid #FFFFFF; 
        }
    }
</style>


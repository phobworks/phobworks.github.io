<?php require './newsletterform.php' ?>


<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/styles.css">
    <link rel="stylesheet" href="css/swiper.css">
    <link rel="stylesheet" href="css/fontawesome/css/all.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
        rel="stylesheet">
    <!-- <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" /> -->
    <script src="js/main.js" defer></script>
    <title>TURANDOT</title>
</head>

<body>
    <header class="main__head">
        <nav>
            <div class="container nav__container">
                <a href="index.html" class="nav__logo"><img src="" alt="">TURANDOT</a>
                <ul class="nav__links">
                    <li><a href="index.html">Home</a></li>
                    <li><a href="about.html">About</a></li>
                    <!-- <li><a href="services.html">Services</a></li> -->
                    <li><a href="products.html">Products</a></li>
                    <li><a href="contact.html">Contact</a></li>

                </ul>
                <ul class="nav__action-btn">
                    <li><a href="contact.html">Contact</a></li>
                </ul>
                <button class="nav__toggle-btn" id="nav__toggle-open"><i class="fa-solid fa-bars"></i></button>
                <button class="nav__toggle-btn" id="nav__toggle-close"><i class="fa-solid fa-xmark"></i></button>
            </div>
        </nav>
        <!-- ======== Nav Bar Ends -->
        <section class="main__subheader">
            <div class="container subheader__container">
                <div class="subheader__content">
                    <h2>Our Products</h2>
                </div>
            </div>
            <div class="cocoa-subimage">
                <img src="./images/cocoa-icon.png" alt="">
            </div>
        </section>
        <div class="header__gradient"></div>
    </header>


    <!-- =======Newsletter section starts ===== -->
    <section class="newsletter__section">
        <div class="container newsletter__container">
            <div class="newsletter__content">
                <h3>Stay Connected! Join Our Exclusive Community</h3>
                <span>Be the first to know about:</span>
                <div class="newsletter__points">
                    <p><img src="./images/news-s.png" alt="">Special offers and discounts</p>
                    <p><img src="./images/new-n.png" alt="">New arrivals and updates</p>
                    <p><img src="./images/new-e.png" alt="">Exclusive events and tips</p>
                </div>
                <p>Sign up now and never miss out!</p>
                <div class="newsletter__form">
                    <div id="feedback"></div>
                    <form method="post" id="formNewsletter">
                        <input type="email" id="email" name="email" placeholder="Enter Your Email" value="">
                        <button type="submit">Subscribe</button>
                    </form>
                </div>
            </div>
        </div>
    </section>

    <!-- =======Newsletter section starts ===== -->

    <!-- =======Footer section starts ===== -->
    <section class="footer__section">
        <div class="container footer__container">
            <div class="footer__content">
                <div class="footer__cards">
                    <a href="index.html"><img src="" alt="">
                        <h2>Turandot</h2>
                    </a>
                    <p>At Turandot Investments Limited, we pride ourselves on being more than just a cocoa exporter. We
                        are your trusted partner in delivering premium cocoa products, cultivated with care and a
                        dedication to excellence. </p>
                </div>
                <div class="footer__cards">
                    <h4>Quick links</h4>
                    <ul>
                        <li><a href="index.html">Home</a></li>
                        <li><a href="about.html">About Us</a></li>
                        <li><a href="products.html">Products</a></li>
                        <li><a href="contact.html">Contact</a></li>
                    </ul>
                    <div class="footer__socials">
                        <ul>
                            <li><a href="#" target="_blank"><i class="fa-brands fa-square-instagram"></i></a></li>
                            <li><a href="#" target="_blank"><i class="fa-brands fa-facebook"></i></a></li>
                            <li><a href="#" target="_blank"><i class="fa-brands fa-youtube"></i></a></li>
                        </ul>
                    </div>
                </div>
                <div class="footer__cards">
                    <h4>Contact Us</h4>
                    <div class="contact__card2-footer">
                        <p><i class="fa-solid fa-location-dot"></i>No. 6 Chief Walter Akpana Layout, Plot 394 Ikwerre
                            Road,
                            Port Harcourt, Rivers State, Nigeria.
                        </p>
                        <p><i class="fa-solid fa-phone"></i>Tel: +234 809 163 6528</p>
                        <p><i class="fa-solid fa-envelope"></i>Email: info@example.com</p>
                    </div>
                </div>
                <div class="footer__cards">
                    <h4>Vision and Mission</h4>
                    <p>Our vision is to become the leading cocoa exporter in Africa, known for our commitment to
                        quality, sustainability, and ethical practices. Our mission is to provide premium cocoa products
                        to the global market while supporting the development of local communities and promoting
                        environmental sustainability.</p>
                </div>
            </div>
            <div class="footer__copyright">
                <span><i class="fa-regular fa-copyright"></i> Copyright 2024 @ Turandot Investments Limited. All rights
                    reserved |
                    Design
                    by <a href="https://phobworks.com" target="_blank">phobworks</a> </span>
            </div>
        </div>
    </section>
    <!-- =======Footer section starts ===== -->
</body>

</html>
<header class="main__head">
    <nav>
        <div class="container nav__container">
            <a href="index.html" class="nav__logo"><img src="./images/logo.png" alt=""></a>
            <ul class="nav__links">
                <li><a href="index.php" class="<?php if ($identifier == 'is_home')
                    echo 'active'; ?>">Home</a></li>
                <li><a href="about.php" class="<?php if ($identifier == 'is_about')
                    echo 'active'; ?>">About</a></li>
                <li><a href="services.php" class="<?php if ($identifier == 'is_services')
                    echo 'active'; ?>">Services</a></li>
                <li><a href="products.php" class="<?php if ($identifier == 'is_products')
                    echo 'active'; ?>">Products</a></li>
                <li><a href="projects.php" class="<?php if ($identifier == 'is_projects')
                    echo 'active'; ?>">Projects</a></li>
                <li><a href="contact.php" class="<?php if ($identifier == 'is_contact')
                    echo 'active'; ?>">Contact</a></li>

            </ul>
            <ul class="nav__action-btn">
                <li><a href="contact.php">Contact</a></li>
            </ul>
            <button class="nav__toggle-btn" id="nav__toggle-open"><i class="fa-solid fa-bars"></i></button>
            <button class="nav__toggle-btn" id="nav__toggle-close"><i class="fa-solid fa-xmark"></i></button>
        </div>
    </nav>
    <!-- ======== Nav Bar Ends -->
</header>
<?php
$identifier = 'is_projects';
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <?php include './includes/head.php' ?>
</head>

<body>
    <!-- ========== Header section starts ========= -->
    <?php include './includes/header.php' ?>
    <!-- ========== Header section ends ========= -->

    <!--========= Services banner section starts ========= -->
    <section class="projects-banner__section">
        <div class="container services-cont__container">
            <h2>Our Projects</h2>
        </div>
    </section>

    <!--========= Services banner section ends ========= -->

    <!--========= Projects section starts ========= -->
    <div class="projects__section container">
        <h3>Projects</h3>
        <input type=" text" id="searchInput" placeholder="Search...">
        <p id="noMatchMessage" style="display: none; color: red;">No matching word found.</p>
        <div class="projects__container">
            <table class="dcf-table dcf-table-responsive dcf-table-bordered dcf-table-striped dcf-w-100%">
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>PROJECT DESCRIPTION</th>
                        <th>CLIENT</th>
                        <th>REFERENCE</th>
                        <!-- <th>DATE EXECUTED</th> -->
                        <th>STATUS</th>
                    </tr>
                </thead>
                <tbody id="tableBody"></tbody>
            </table>
        </div>
        <div class="pagination" id="paginationContainer"></div>
    </div>

    <!--========= Projects us section ends ========= -->

    <!-- ====== About page statement section starts ===== -->


    <!-- ====== About page statement section ends ===== -->

    <!-- =========== footer section starts ============ -->
    <?php include './includes/footer.php' ?>

    <!-- =========== footer section ends ============ -->
    <script defer type="module" src="./js/projects.js"></script>
</body>

</html>
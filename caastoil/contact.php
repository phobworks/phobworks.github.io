<?php
$identifier = 'is_contact';
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

    <!--========= About us banner section starts ========= -->
    <section class="contact-banner__section">
        <div class="container about-cont__container">
            <h2>Contact Us </h2>
        </div>
    </section>

    <!--========= About us banner section ends ========= -->

    <!--========= Products section starts ========= -->
    <section class="contact__section" id="get-proposal">
        <div class="container contact__container">
            <div class="contact__content">
                <div class="contact__left">

                    <div class="contact__address">
                        <p><i class="fa-solid fa-location-dot"></i>125 Stadium Road - Elekahia, Port Harcourt, Rivers
                            State, Nigeria.</p>
                        <p><i class="fa-solid fa-phone"></i>+234-805-731 1541, +234-803-394-6067</p>
                        <p><i class="fa-solid fa-envelope"></i>info@caastoil.com</p>
                    </div>
                    <div class="footer__map">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.689151296111!2d7.014310774037436!3d4.8233372405841735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1069cdd1cdfa7c8f%3A0x499ad7d1b220e715!2s125%20Stadium%20Rd%2C%20Rumuomasi%2C%20Port%20Harcourt%20500101%2C%20Rivers!5e0!3m2!1sen!2sng!4v1738599377762!5m2!1sen!2sng"
                            width="100%" height="400" style="border:0;" allowfullscreen="" loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
                <div class="contact__right">
                    <div id="successMessage" class="message success">Message sent successfully!</div>
                    <div id="errorMessage" class="message error">Failed to send message. Please try again.</div>
                    <h3>Request a Proposal</h3>
                    <form id="contactForm" onsubmit="validateForm(event)" class="contact__form">
                        <label>Full Name</label>
                        <input type="text" name="full_name" id="full_name" placeholder="Enter your name">
                        <div class="error-message" id="full_nameError"></div>

                        <label>Email</label>
                        <input type="email" name="email" id="email" placeholder="Enter your email">
                        <div class="error-message" id="emailError"></div>

                        <label>Phone Number</label>
                        <input type="tel" name="phone" id="phone" placeholder="Enter your phone number">
                        <div class="error-message" id="phoneError"></div>

                        <label>Company (Optional)</label>
                        <input type="text" name="company" id="company" placeholder="Enter your company name">

                        <label>Subject</label>
                        <input type="text" name="subject" id="subject" placeholder="Enter subject">
                        <div class="error-message" id="subjectError"></div>

                        <label>Message</label>
                        <textarea name="message" id="message" rows="4" placeholder="Enter your message"></textarea>
                        <div class="error-message" id="messageError"></div>

                        <button type="submit">Send Message</button>
                    </form>
                </div>
            </div>

        </div>
    </section>

    <!--========= Products section ends ========= -->



    <!-- =========== footer section starts ============ -->
    <?php include './includes/footer.php' ?>

    <!-- =========== footer section ends ============ -->

    <script>
        function validateForm(event) {
            event.preventDefault();
            let isValid = true;
            const form = document.getElementById("contactForm");
            const formData = new FormData(form);
            const successMessage = document.getElementById("successMessage");
            const errorMessage = document.getElementById("errorMessage");
            successMessage.style.display = "none";
            errorMessage.style.display = "none";

            document.querySelectorAll(".error-message").forEach(e => e.textContent = "");

            formData.forEach((value, key) => {
                if (key !== "company" && !value.trim()) {
                    document.getElementById(`${key}Error`).textContent = "This field is required";
                    isValid = false;
                }
            });

            if (isValid) {
                fetch("send_email.php", {
                    method: "POST",
                    body: formData
                })
                    .then(response => response.text())
                    .then(data => {
                        if (data === "success") {
                            successMessage.style.display = "block";
                            form.reset();
                        } else {
                            errorMessage.style.display = "block";
                        }
                    })
                    .catch(() => {
                        errorMessage.style.display = "block";
                    });
            }
        }
    </script>
</body>

</html>
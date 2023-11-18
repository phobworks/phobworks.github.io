<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    /* $name = $_POST['name']; */
    $email = $_POST['email'];
    /* $subjects = $_POST['subjects']; */
    /* $message = $_POST['message']; */
    $to = "phedwallace36th@gmail.com";
    $subject = "Mail from Contact Form";

    $headers = "From: " . $name . "\r\n" . "CC: phedwallace36th@live.com";

    $txt = "A new user has subscribed with ". "Email:" .$email;
    /* $txt = "A new user has sent a mail with " . "Name:" . $name . "\r\nEmail: " . $email . "\r\n Subject: " . $subjects . "\r\n Message: " . $message; */

    if (/* $name != NULL && */ $email != NULL /* && $subjects != NULL && $message != NULL */) {
        $success = mail($to, $subject, $txt, $headers);
        echo "<script>
                var alertBox = document.createElement('div');
                alertBox.id = 'alert-box';
                document.body.appendChild(alertBox);

                if ($success) {
                    alertBox.innerHTML = 'Mail sent successfully!';
                    alertBox.style.backgroundColor = '#d4edda'; /* Green color for success */
                    alertBox.style.border = '1px solid #c3e6cb'; /* Green border color for success */
                    alertBox.style.color = '#155724'; /* Text color for success */
                } else {
                    alertBox.innerHTML = 'Error sending mail. Please try again.';
                }

                alertBox.style.display = 'block';
                setTimeout(function () {
                    alertBox.style.display = 'none';
                }, 3000); /* Hide the alert box after 3 seconds */
              </script>";
    }
}
?>
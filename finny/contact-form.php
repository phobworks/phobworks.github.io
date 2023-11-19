<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['textarea'];
    $to = "phedwallace36th@live.com";
    $subject = "Mail from Contact Form";

    $headers = "From: " . $email . "\r\n" .
        "CC: phedwallace36th@gmail.com"; // You can add a CC address if needed

    $txt =  "A Message from a user with " . "Name: " . $name . "\r\nEmail: " . $email . "\r\nMessage: " . $message;

    if ($name != "" && $email != "" && $message != "") {
        mail($to, $subject, $txt, $headers);
        echo 'success'; // Send success response to AJAX
    } else {
        echo 'error'; // Send error response to AJAX
    }
}
?>

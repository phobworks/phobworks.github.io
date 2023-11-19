<?php
$email = $_POST['email'];
$to = "phedwallace36th@gmail.com";
$subject = "Mail from subscription";

$headers = "From: " . $email . "\r\n" .
    "CC: phedwallace36th@live.com";

$txt = "A new user has subscribed with " . "Email:" . $email;

if ($email != NULL) {
    mail($to, $subject, $txt, $headers);
    echo 'success'; // Send success response to AJAX
}
?>

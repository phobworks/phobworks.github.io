<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $firstName = htmlspecialchars($_POST["first-name"]);
    $lastName = htmlspecialchars($_POST["last-name"]);
    $email = filter_var($_POST["email"], FILTER_SANITIZE_EMAIL);
    $homeAddress = htmlspecialchars($_POST["home-address"]);
    $city = htmlspecialchars($_POST["city"]);
    $state = htmlspecialchars($_POST["state"]);
    $phone = htmlspecialchars($_POST["phone"]);
    $country = htmlspecialchars($_POST["country"]);
    $involvement = htmlspecialchars($_POST["get-involved"]);

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "<div style='color: red;'>Invalid email format</div>";
        exit;
    }

    $to = "phedwallace36th@live.com";  // Replace with your email
    $subject = "New Form Submission";
    $message = "First Name: $firstName\nLast Name: $lastName\nEmail: $email\nAddress: $homeAddress\nCity: $city\nState: $state\nPhone: $phone\nCountry: $country\nInvolvement: $involvement";
    $headers = "From: $email\r\nReply-To: $email\r\n";

    if (mail($to, $subject, $message, $headers)) {
        echo "<div style='color: green;'>Form submitted successfully!</div>";
    } else {
        echo "<div style='color: red;'>There was an error sending the form.</div>";
    }
}
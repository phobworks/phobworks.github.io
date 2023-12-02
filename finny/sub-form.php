<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // $name = filter_input(INPUT_POST, 'name', FILTER_SANITIZE_STRING);
    $email = filter_input(INPUT_POST, 'email', FILTER_VALIDATE_EMAIL);
    // $message = filter_input(INPUT_POST, 'textarea', FILTER_SANITIZE_STRING);
    $to = "finian.iwu@fintserv.com";
    $subject = "Mail from Subscription Form";

    // Verify reCAPTCHA
    $recaptcha_secret_key = "6Lco7x8pAAAAAI_7hqaH1tPGyRhMPGSxKvf8o2r8"; // Replace with your actual secret key
    $recaptcha_response = $_POST['g-recaptcha-response'];

    $recaptcha_url = "https://www.google.com/recaptcha/api/siteverify";
    $recaptcha_data = [
        'secret' => $recaptcha_secret_key,
        'response' => $recaptcha_response,
        'remoteip' => $_SERVER['REMOTE_ADDR']
    ];

    $recaptcha_options = [
        'http' => [
            'header' => "Content-type: application/x-www-form-urlencoded\r\n",
            'method' => 'POST',
            'content' => http_build_query($recaptcha_data)
        ]
    ];

    $recaptcha_context = stream_context_create($recaptcha_options);
    $recaptcha_result = file_get_contents($recaptcha_url, false, $recaptcha_context);
    $recaptcha_data = json_decode($recaptcha_result, true);

    if (!$recaptcha_data['success']) {
        echo 'captcha_error'; // Send captcha error response to AJAX
        exit();
    }

    // Continue with the rest of your code for form submission
    if ($email) {
        $headers = "From: " . $email . "\r\n" .
            "CC: info@fintserv.com"; // You can add a CC address if needed

        $txt = "A Message from a user with " . "Email: " . $email;

        if (mail($to, $subject, $txt, $headers)) {
            echo 'success'; // Send success response to AJAX
        } else {
            echo 'error'; // Send error response to AJAX
        }
    } else {
        echo 'error'; // Send error response to AJAX
    }
}
?>

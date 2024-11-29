<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Enable output buffering to catch any stray output
ob_start();
header('Content-Type: application/json');

// Load PHPMailer classes
require './vendor/PHPMailer/src/Exception.php';
require './vendor/PHPMailer/src/PHPMailer.php';
require './vendor/PHPMailer/src/SMTP.php';

// Initialize the response
$response = ['success' => false, 'message' => '', 'errors' => []];

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // Retrieve email from POST data
    $email = isset($_POST['email']) ? trim($_POST['email']) : '';

    // Validate email
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $response['errors'][] = 'Please enter a valid email address.';
    }

    // If validation passes, proceed with sending the email
    if (empty($response['errors'])) {
        $mail = new PHPMailer(true);

        try {
            // Configure PHPMailer
            $mail->isSMTP();
            $mail->Host = 'ser104g.afeeshost.com';  // Replace with your SMTP server
            $mail->SMTPAuth = true;
            $mail->Username = 'newsletter@phobworks.com';  // Replace with your SMTP username
            $mail->Password = 'Mankind24th@#';  // Replace with your SMTP password
            $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
            $mail->Port = 465;

            // Email content
            $mail->setFrom('newsletter@phobworks.com', 'Turandot Newsletter');
            $mail->addAddress('newsletter@phobworks.com');  // Replace with recipient email
            $mail->addReplyTo($email);
            $mail->Subject = 'Newsletter Subscription';
            $mail->Body = "You have a new subscriber: $email";

            // Send email
            $mail->send();
            $response['success'] = true;
            $response['message'] = 'Thank you for subscribing!';
        } catch (Exception $e) {
            $response['errors'][] = 'Email could not be sent. Error: ' . $mail->ErrorInfo;
        }
    }
}

// Clear output buffer and return JSON response
ob_end_clean();
echo json_encode($response);
exit;

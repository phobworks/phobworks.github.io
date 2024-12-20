<?php
// submit.php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    header('Content-Type: application/json');

    $textarea = trim($_POST['textarea'] ?? '');
    $name = trim($_POST['name'] ?? '');
    $email = trim($_POST['email'] ?? '');

    $errors = [];

    if (empty($textarea)) {
        $errors['textarea'] = 'Message is required.';
    }

    if (empty($name)) {
        $errors['name'] = 'Name is required.';
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors['email'] = 'Invalid email address.';
    }

    if (!empty($errors)) {
        http_response_code(400);
        echo json_encode(['errors' => $errors, 'message' => 'Validation failed.']);
        exit;
    }

    $to = 'phedwallace36th@live.com';
    $subject = 'New Message from Contact Form';
    $message = "Message: $textarea\n\nName: $name\nEmail: $email";
    $headers = "From: $email";

    if (mail($to, $subject, $message, $headers)) {
        echo json_encode(['message' => 'Your message has been sent successfully.']);
    } else {
        http_response_code(500);
        echo json_encode(['message' => 'Failed to send your message. Please try again later.']);
    }
}
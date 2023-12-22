<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $senderAddress = $_POST["senderAddress"];
    $receiverAddress = $_POST["receiverAddress"];
    $senderPhone = $_POST["senderPhone"];
    $receiverPhone = $_POST["receiverPhone"];

    // Set recipient email address
    $to = "phedwallace36th@live.com"; // Replace with your email address

    // Set subject
    $subject = "New Form Submission";

    // Build the email message
    $message = "Sender's Address: $senderAddress\n";
    $message .= "Receiver's Address: $receiverAddress\n";
    $message .= "Sender's Phone No.: $senderPhone\n";
    $message .= "Receiver's Phone No.: $receiverPhone\n";

    // Set headers
    $headers = "From: phedwallace36th@live.com"; // Replace with your email address
    $headers .= "\r\nReply-To: phedwallace36th@live.com"; // Replace with your email address

    // Send email
    $success = mail($to, $subject, $message, $headers);

    // Send response to JavaScript
    echo json_encode(array("success" => $success));
} else {
    // If the form is not submitted via POST, redirect to the form page
    header("Location: index.html"); // Replace with the actual filename of your form page
}
?>

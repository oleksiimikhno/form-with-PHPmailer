<?php
  // ini_set('display_errors', '1'); // Display errors
  use PHPMailer\PHPMailer\PHPMailer;
  use PHPMailer\PHPMailer\Exception;

  /*
  // Uncomment if you not use composer and install PHPmailer in your folder
  require 'path/to/PHPMailer/src/Exception.php';
  require 'path/to/PHPMailer/src/PHPMailer.php';
  require 'path/to/PHPMailer/src/SMTP.php';
  */

  require 'vendor/autoload.php';

  $email = 'example@example.com'; // Account/email with Google Auth
  $password = 'password'; // Your google app password
  $SMTPServer = 'smtp.gmail.com'; // SMTP server address
  
  if(isset($_POST['send'])) {
    $mail = new PHPMailer(true);

    $mail->SMTPDebuger = 2;
    $mail->isSMTP();
    $mail->CharSet = 'UTF-8';
    $mail->Host = $SMTPServer; 
    $mail->SMTPAuth = true;
    $mail->Username = $email; 
    $mail->Password = $password; 
    $mail->SMTPSecure = 'ssl';
    $mail->Port = 465;

    $mail->setFrom($email); // Your email address
    $mail->addAddress($_POST['email']); //Add a recipient

    $mail->isHTML(true);

    $mail->Subject = 'Message from form site: ' .$_POST['email'];

    $body = '<h1>New message</h1>';
    if (trim(!empty(['email']))){
      $body.='<p><strong>Email:</strong> ' .$_POST['email']. '</p>';
    }

    if (trim(!empty(['subject']))){
      $body.='<p><strong>Subject:</strong> ' .$_POST['subject']. '</p>';
    }

    if (trim(!empty(['message']))){
      $body.='<p><strong>Message:</strong> ' .$_POST['message']. '</p>';
    }

    $mail->Body = $body;

    $mail->send();

    $message = (!$mail->send()) ? "Error: Somthing wrong with email send {$mail->ErrorInfo}" : 'Success: Form send!';
    $response = ['message' => $message];

    header('Content-Type: application/json');
    echo json_encode($response); // JSON response
  }
?>
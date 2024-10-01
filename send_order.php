<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = htmlspecialchars($_POST['name']);
  $email = htmlspecialchars($_POST['email']);
  $phone = htmlspecialchars($_POST['phone']);
  $product = htmlspecialchars($_POST['product']);
  $quantity = htmlspecialchars($_POST['quantity']);
  $message = htmlspecialchars($_POST['message']);

  $to = "lenkalaznovska@seznam.cz";
  $subject = "Nová objednávka z webu";
  $headers = "From: $email" . "\r\n" .
             "Reply-To: $email" . "\r\n" .
             "Content-Type: text/html; charset=UTF-8";

  $body = "<h2>Nová objednávka</h2>";
  $body .= "<p><strong>Jméno a příjmení:</strong> $name</p>";
  $body .= "<p><strong>E-mail:</strong> $email</p>";
  $body .= "<p><strong>Telefon:</strong> $phone</p>";
  $body .= "<p><strong>Produkt:</strong> $product</p>";
  $body .= "<p><strong>Množství:</strong> $quantity</p>";
  if (!empty($message)) {
    $body .= "<p><strong>Poznámka:</strong> $message</p>";
  }

  // Odeslání e-mailu
  if (mail($to, $subject, $body, $headers)) {
    echo "<p>Vaše objednávka byla úspěšně odeslána. Děkujeme!</p>";
  } else {
    echo "<p>Odeslání objednávky se nezdařilo. Zkuste to prosím znovu.</p>";
  }
} else {
  echo "<p>Neplatný požadavek.</p>";
}
?>

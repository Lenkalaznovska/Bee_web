<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Vyzvednutí dat z formuláře
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $products = $_POST['products'];
    $quantity = $_POST['quantity'];
    $message = $_POST['message'];

    // Nastavení příjemce a předmětu
    $to = "lenkalaznovska@seznam.cz";
    $subject = "Nová objednávka z webu Včelařství Pletený Újezd";

    // Zpráva emailu
    $email_message = "Jméno: $name\n";
    $email_message .= "E-mail: $email\n";
    $email_message .= "Telefon: $phone\n";
    $email_message .= "Produkty: $products\n";
    $email_message .= "Množství: $quantity\n";
    $email_message .= "Poznámky: $message\n";

    // Hlavičky
    $headers = "From: $email";

    // Odeslání emailu
    if (mail($to, $subject, $email_message, $headers)) {
        echo "Objednávka byla úspěšně odeslána!";
    } else {
        echo "Chyba při odesílání objednávky, zkuste to prosím znovu.";
    }
}
?>

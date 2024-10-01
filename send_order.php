<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Vyzvednutí dat z formuláře
    $honeyQuantity = $_POST['medQuantity']; // Opraveno
    $tinctureQuantity = $_POST['tinctureQuantity'];
    $name = trim($_POST['name']);
    $email = trim($_POST['email']);
    $message = trim($_POST['message']);

    // Validace e-mailu
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Neplatná e-mailová adresa.";
        exit;
    }

    // Nastavení příjemce a předmětu
    $to = "lenkalaznovska@seznam.cz";
    $subject = "Nová objednávka z webu Včelařství Pletený Újezd";

    // Zpráva emailu
    $email_message = "Množství medu: $honeyQuantity\n";
    $email_message .= "Množství tinktury: $tinctureQuantity\n";
    $email_message .= "Jméno: $name\n";
    $email_message .= "E-mail: $email\n";
    $email_message .= "Poznámky: $message\n";

    // Hlavičky
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n"; // Přidáno pro snadnou odpověď

    // Odeslání emailu
    if (mail($to, $subject, $email_message, $headers)) {
        echo "Objednávka byla úspěšně odeslána!";
    } else {
        echo "Chyba při odesílání objednávky, zkuste to prosím znovu.";
    }
}
?>

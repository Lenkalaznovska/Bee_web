<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Vyzvednutí dat z formuláře
    $honeyQuantity = $_POST['honeyQuantity'];
    $tinctureQuantity = $_POST['tinctureQuantity'];
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

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
    $headers = "From: $email";

    // Odeslání emailu
    if (mail($to, $subject, $email_message, $headers)) {
        echo "Objednávka byla úspěšně odeslána!";
    } else {
        echo "Chyba při odesílání objednávky, zkuste to prosím znovu.";
    }
}
?>

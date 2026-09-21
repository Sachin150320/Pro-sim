<?php

header("Content-Type: application/json; charset=UTF-8");

if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
    http_response_code(200);
    exit;
}

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    http_response_code(405);

    echo json_encode([
        "success" => false,
        "message" => "Invalid request method."
    ]);

    exit;
}

/* =========================
   GET FORM DATA
========================= */

$fullName = trim($_POST["fullName"] ?? "");
$workEmail = trim($_POST["workEmail"] ?? "");
$company = trim($_POST["company"] ?? "");
$mobile = trim($_POST["mobile"] ?? "");
$industryDomain = trim($_POST["industryDomain"] ?? "");
$serviceDiscipline = trim($_POST["serviceDiscipline"] ?? "");
$technicalScope = trim($_POST["technicalScope"] ?? "");

/* =========================
   VALIDATION
========================= */

if ($fullName === "" || $workEmail === "" || $company === "") {

    http_response_code(400);

    echo json_encode([
        "success" => false,
        "message" => "Please fill all required fields."
    ]);

    exit;
}

if (!filter_var($workEmail, FILTER_VALIDATE_EMAIL)) {

    http_response_code(400);

    echo json_encode([
        "success" => false,
        "message" => "Please enter a valid email address."
    ]);

    exit;
}

/* =========================
   EMAIL SETTINGS
========================= */

$to = "enquiry@pro-sim.com";
$cc = "emswebdesign22@gmail.com";

$subject = "New Engineering Partner Enquiry - ProSIM";

/* =========================
   EMAIL BODY
========================= */

$message = "
<html>
<head>
<meta charset='UTF-8'>
</head>

<body style='font-family:Arial,sans-serif;line-height:1.6;'>

<h2 style='color:#c2002f;'>
New Engineering Partner Enquiry
</h2>

<table cellpadding='8' cellspacing='0' border='1'
style='border-collapse:collapse;width:100%;max-width:700px;'>

<tr>
<td><strong>Full Name</strong></td>
<td>" . htmlspecialchars($fullName) . "</td>
</tr>

<tr>
<td><strong>Work Email</strong></td>
<td>" . htmlspecialchars($workEmail) . "</td>
</tr>

<tr>
<td><strong>Company / Organization</strong></td>
<td>" . htmlspecialchars($company) . "</td>
</tr>

<tr>
<td><strong>Mobile Number</strong></td>
<td>" . htmlspecialchars($mobile ?: "-") . "</td>
</tr>

<tr>
<td><strong>Industry Domain</strong></td>
<td>" . htmlspecialchars($industryDomain ?: "-") . "</td>
</tr>

<tr>
<td><strong>Service</strong></td>
<td>" . htmlspecialchars($serviceDiscipline ?: "-") . "</td>
</tr>

<tr>
<td><strong>Technical Scope / Load Conditions</strong></td>
<td>" . nl2br(htmlspecialchars($technicalScope ?: "-")) . "</td>
</tr>

</table>

<br>

<p>
This enquiry was submitted from the ProSIM website.
</p>

</body>
</html>
";

/* =========================
   HEADERS
========================= */

$headers  = "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=UTF-8\r\n";
$headers .= "From: ProSIM Website <enquiry@pro-sim.com>\r\n";
$headers .= "Reply-To: " . $workEmail . "\r\n";
$headers .= "Cc: " . $cc . "\r\n";

/* =========================
   SEND EMAIL
========================= */

$mailSent = mail(
    $to,
    $subject,
    $message,
    $headers
);

/* =========================
   RESPONSE
========================= */

if ($mailSent) {

    echo json_encode([
        "success" => true,
        "message" => "Your enquiry has been submitted successfully."
    ]);

} else {

    http_response_code(500);

    echo json_encode([
        "success" => false,
        "message" => "Unable to send email. Server mail configuration may be disabled."
    ]);
}

exit;
?>
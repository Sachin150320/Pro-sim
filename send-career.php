<?php

header("Content-Type: application/json; charset=UTF-8");

$to = "enquiry@pro-sim.com";

$name       = $_POST["name"] ?? "";
$email      = $_POST["email"] ?? "";
$phone      = $_POST["phone"] ?? "";
$position   = $_POST["position"] ?? "";
$experience = $_POST["experience"] ?? "";
$location   = $_POST["location"] ?? "";
$intro      = $_POST["intro"] ?? "";

if (
    empty($name) ||
    empty($email) ||
    empty($phone) ||
    empty($position) ||
    empty($experience) ||
    empty($location)
) {
    echo json_encode([
        "success" => false,
        "message" => "Please fill all required fields."
    ]);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode([
        "success" => false,
        "message" => "Invalid email address."
    ]);
    exit;
}

if (
    !isset($_FILES["resume"]) ||
    $_FILES["resume"]["error"] !== UPLOAD_ERR_OK
) {
    echo json_encode([
        "success" => false,
        "message" => "Please upload your resume."
    ]);
    exit;
}

$resume = $_FILES["resume"];

if ($resume["size"] > 5 * 1024 * 1024) {
    echo json_encode([
        "success" => false,
        "message" => "Resume must be 5 MB or less."
    ]);
    exit;
}

$fileName = basename($resume["name"]);
$fileContent = file_get_contents($resume["tmp_name"]);

$boundary = md5(time());

$headers  = "From: enquiry@pro-sim.com\r\n";
$headers .= "Reply-To: " . $email . "\r\n";
$headers .= "Cc: HR@pro-sim.com, Sandeep.PS@pro-sim.com, ps2@pro-sim.com, emswebdesign22@gmail.com\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: multipart/mixed; boundary=\"$boundary\"\r\n";

$message = "
<html>
<body>

<h2>New Career Application</h2>

<p><strong>Name:</strong> $name</p>
<p><strong>Email:</strong> $email</p>
<p><strong>Phone:</strong> $phone</p>
<p><strong>Position:</strong> $position</p>
<p><strong>Experience:</strong> $experience</p>
<p><strong>Location:</strong> $location</p>
<p><strong>Introduction:</strong><br>$intro</p>

</body>
</html>
";

$body  = "--$boundary\r\n";
$body .= "Content-Type: text/html; charset=UTF-8\r\n";
$body .= "Content-Transfer-Encoding: 8bit\r\n\r\n";
$body .= $message . "\r\n\r\n";

$body .= "--$boundary\r\n";
$body .= "Content-Type: application/octet-stream; name=\"$fileName\"\r\n";
$body .= "Content-Disposition: attachment; filename=\"$fileName\"\r\n";
$body .= "Content-Transfer-Encoding: base64\r\n\r\n";
$body .= chunk_split(base64_encode($fileContent));
$body .= "\r\n";

$body .= "--$boundary--";

$sent = mail(
    $to,
    "New Career Application - $position",
    $body,
    $headers
);

if ($sent) {

    echo json_encode([
        "success" => true,
        "message" => "Application submitted successfully."
    ]);

} else {

    echo json_encode([
        "success" => false,
        "message" => "Mail could not be sent."
    ]);
}

exit;
?>
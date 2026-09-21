
<?php

header("Content-Type: application/json; charset=UTF-8");

/* =========================
   REQUEST METHOD
========================= */

if ($_SERVER["REQUEST_METHOD"] !== "POST") {

    http_response_code(405);

    echo json_encode([
        "success" => false,
        "message" => "Invalid request method."
    ]);

    exit;
}

/* =========================
   FORM DATA
========================= */

$name       = trim($_POST["name"] ?? "");
$email      = trim($_POST["email"] ?? "");
$phone      = trim($_POST["phone"] ?? "");
$position   = trim($_POST["position"] ?? "");
$experience = trim($_POST["experience"] ?? "");
$location   = trim($_POST["location"] ?? "");
$intro      = trim($_POST["intro"] ?? "");

/* =========================
   VALIDATION
========================= */

if (
    $name === "" ||
    $email === "" ||
    $phone === "" ||
    $position === "" ||
    $experience === "" ||
    $location === ""
) {

    http_response_code(400);

    echo json_encode([
        "success" => false,
        "message" => "Please fill all required fields."
    ]);

    exit;
}

/* =========================
   EMAIL VALIDATION
========================= */

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {

    http_response_code(400);

    echo json_encode([
        "success" => false,
        "message" => "Please enter a valid email address."
    ]);

    exit;
}

/* =========================
   RESUME VALIDATION
========================= */

if (
    !isset($_FILES["resume"]) ||
    $_FILES["resume"]["error"] !== UPLOAD_ERR_OK
) {

    http_response_code(400);

    echo json_encode([
        "success" => false,
        "message" => "Please upload your resume."
    ]);

    exit;
}

$resume = $_FILES["resume"];

/* =========================
   FILE SIZE
========================= */

$maxSize = 5 * 1024 * 1024;

if ($resume["size"] > $maxSize) {

    http_response_code(400);

    echo json_encode([
        "success" => false,
        "message" => "Resume must be 5 MB or less."
    ]);

    exit;
}

/* =========================
   FILE NAME
========================= */

$fileName = basename($resume["name"]);

$fileExtension = strtolower(
    pathinfo($fileName, PATHINFO_EXTENSION)
);

$allowedExtensions = [
    "pdf",
    "doc",
    "docx"
];

if (!in_array($fileExtension, $allowedExtensions, true)) {

    http_response_code(400);

    echo json_encode([
        "success" => false,
        "message" => "Only PDF, DOC and DOCX files are allowed."
    ]);

    exit;
}

/* =========================
   SAFE FILE NAME
========================= */

$safeFileName = preg_replace(
    '/[^A-Za-z0-9._-]/',
    '_',
    $fileName
);

/* =========================
   READ RESUME
========================= */

$fileContent = file_get_contents(
    $resume["tmp_name"]
);

if ($fileContent === false) {

    http_response_code(500);

    echo json_encode([
        "success" => false,
        "message" => "Unable to read the uploaded resume."
    ]);

    exit;
}

/* =========================
   EMAIL SETTINGS
========================= */

$to = "enquiry@pro-sim.com";

$cc = "HR@pro-sim.com, Sandeep.PS@pro-sim.com, ps2@pro-sim.com, emswebdesign22@gmail.com";

$subject = "New Career Application - " . $position;

/* =========================
   SAFE HTML VALUES
========================= */

$safeName = htmlspecialchars(
    $name,
    ENT_QUOTES,
    "UTF-8"
);

$safeEmail = htmlspecialchars(
    $email,
    ENT_QUOTES,
    "UTF-8"
);

$safePhone = htmlspecialchars(
    $phone,
    ENT_QUOTES,
    "UTF-8"
);

$safePosition = htmlspecialchars(
    $position,
    ENT_QUOTES,
    "UTF-8"
);

$safeExperience = htmlspecialchars(
    $experience,
    ENT_QUOTES,
    "UTF-8"
);

$safeLocation = htmlspecialchars(
    $location,
    ENT_QUOTES,
    "UTF-8"
);

$safeIntro = nl2br(
    htmlspecialchars(
        $intro ?: "-",
        ENT_QUOTES,
        "UTF-8"
    )
);

$safeResumeName = htmlspecialchars(
    $safeFileName,
    ENT_QUOTES,
    "UTF-8"
);

/* =========================
   EMAIL MESSAGE
========================= */

$message = "
<html>

<head>

<meta charset='UTF-8'>

</head>

<body style='font-family:Arial,sans-serif;line-height:1.6;color:#333;'>

<h2 style='color:#c2002f;'>
New Career Application
</h2>

<table
cellpadding='8'
cellspacing='0'
border='1'
style='border-collapse:collapse;width:100%;max-width:700px;'
>

<tr>
<td><strong>Name</strong></td>
<td>{$safeName}</td>
</tr>

<tr>
<td><strong>Email</strong></td>
<td>{$safeEmail}</td>
</tr>

<tr>
<td><strong>Phone</strong></td>
<td>{$safePhone}</td>
</tr>

<tr>
<td><strong>Position</strong></td>
<td>{$safePosition}</td>
</tr>

<tr>
<td><strong>Experience</strong></td>
<td>{$safeExperience}</td>
</tr>

<tr>
<td><strong>Preferred Location</strong></td>
<td>{$safeLocation}</td>
</tr>

<tr>
<td><strong>Brief Introduction</strong></td>
<td>{$safeIntro}</td>
</tr>

</table>

<br>

<p>
<strong>Resume:</strong> {$safeResumeName}
</p>

<p>
This application was submitted from the ProSIM website.
</p>

</body>

</html>
";

/* =========================
   MIME BOUNDARY
========================= */

$boundary = "----=_Part_" . md5(
    uniqid((string)time(), true)
);

/* =========================
   HEADERS
========================= */

$headers  = "From: ProSIM Careers <enquiry@pro-sim.com>\r\n";

$headers .= "Reply-To: " .
    $email .
    "\r\n";

$headers .= "Cc: " .
    $cc .
    "\r\n";

$headers .= "MIME-Version: 1.0\r\n";

$headers .= "Content-Type: multipart/mixed; boundary=\"" .
    $boundary .
    "\"\r\n";

/* =========================
   EMAIL BODY
========================= */

$body = "";

$body .= "--" .
    $boundary .
    "\r\n";

$body .= "Content-Type: text/html; charset=UTF-8\r\n";

$body .= "Content-Transfer-Encoding: 8bit\r\n\r\n";

$body .= $message .
    "\r\n\r\n";

/* =========================
   ATTACHMENT MIME TYPE
========================= */

$mimeType = "application/octet-stream";

if ($fileExtension === "pdf") {

    $mimeType = "application/pdf";

} elseif ($fileExtension === "doc") {

    $mimeType = "application/msword";

} elseif ($fileExtension === "docx") {

    $mimeType =
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document";
}

/* =========================
   ATTACHMENT
========================= */

$body .= "--" .
    $boundary .
    "\r\n";

$body .= "Content-Type: " .
    $mimeType .
    "; name=\"" .
    $safeFileName .
    "\"\r\n";

$body .= "Content-Disposition: attachment; filename=\"" .
    $safeFileName .
    "\"\r\n";

$body .= "Content-Transfer-Encoding: base64\r\n\r\n";

$body .= chunk_split(
    base64_encode($fileContent)
);

$body .= "\r\n\r\n";

$body .= "--" .
    $boundary .
    "--\r\n";

/* =========================
   SEND EMAIL
========================= */

$sent = mail(
    $to,
    $subject,
    $body,
    $headers
);

/* =========================
   RESPONSE
========================= */

if ($sent) {

    echo json_encode([
        "success" => true,
        "message" => "Application submitted successfully."
    ]);

} else {

    http_response_code(500);

    echo json_encode([
        "success" => false,
        "message" => "Unable to send application. Please try again later."
    ]);
}

exit;
?>


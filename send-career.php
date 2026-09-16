<?php

$allowedOrigins = [
    "https://pro-sim.com",
    "https://www.pro-sim.com",
];

$origin = $_SERVER["HTTP_ORIGIN"] ?? "";

if (in_array($origin, $allowedOrigins, true)) {
    header("Access-Control-Allow-Origin: " . $origin);
}

header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json; charset=UTF-8");

if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
    http_response_code(200);
    exit;
}

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    http_response_code(405);

    echo json_encode([
        "success" => false,
        "message" => "Only POST requests are allowed."
    ]);

    exit;
}

/*
|--------------------------------------------------------------------------
| HR EMAIL ADDRESSES
|--------------------------------------------------------------------------
*/

$to = implode(",", [
    "HR@pro-sim.com",
    "Sandeep.PS@pro-sim.com",
    "ps2@pro-sim.com",
    "emswebdesign22@gmail.com"
]);

/*
|--------------------------------------------------------------------------
| GET FORM DATA
|--------------------------------------------------------------------------
*/

$name = trim($_POST["name"] ?? "");
$email = trim($_POST["email"] ?? "");
$phone = trim($_POST["phone"] ?? "");
$position = trim($_POST["position"] ?? "");
$experience = trim($_POST["experience"] ?? "");
$location = trim($_POST["location"] ?? "");
$intro = trim($_POST["intro"] ?? "");

/*
|--------------------------------------------------------------------------
| VALIDATION
|--------------------------------------------------------------------------
*/

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

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);

    echo json_encode([
        "success" => false,
        "message" => "Please enter a valid email address."
    ]);

    exit;
}

/*
|--------------------------------------------------------------------------
| RESUME VALIDATION
|--------------------------------------------------------------------------
*/

if (!isset($_FILES["resume"])) {
    http_response_code(400);

    echo json_encode([
        "success" => false,
        "message" => "Please upload your resume."
    ]);

    exit;
}

$file = $_FILES["resume"];

if ($file["error"] !== UPLOAD_ERR_OK) {
    http_response_code(400);

    echo json_encode([
        "success" => false,
        "message" => "There was a problem uploading your resume."
    ]);

    exit;
}

/*
|--------------------------------------------------------------------------
| MAX FILE SIZE = 5MB
|--------------------------------------------------------------------------
*/

$maxFileSize = 5 * 1024 * 1024;

if ($file["size"] > $maxFileSize) {
    http_response_code(400);

    echo json_encode([
        "success" => false,
        "message" => "Resume file must be 5MB or smaller."
    ]);

    exit;
}

/*
|--------------------------------------------------------------------------
| ALLOWED FILE TYPES
|--------------------------------------------------------------------------
*/

$allowedExtensions = [
    "pdf",
    "doc",
    "docx"
];

$originalFileName = basename($file["name"]);

$fileExtension = strtolower(
    pathinfo($originalFileName, PATHINFO_EXTENSION)
);

if (!in_array($fileExtension, $allowedExtensions, true)) {
    http_response_code(400);

    echo json_encode([
        "success" => false,
        "message" => "Only PDF, DOC and DOCX files are allowed."
    ]);

    exit;
}

/*
|--------------------------------------------------------------------------
| READ ATTACHMENT
|--------------------------------------------------------------------------
*/

$tmpFile = $file["tmp_name"];
$fileContent = file_get_contents($tmpFile);

if ($fileContent === false) {
    http_response_code(500);

    echo json_encode([
        "success" => false,
        "message" => "Unable to read the uploaded resume."
    ]);

    exit;
}

/*
|--------------------------------------------------------------------------
| EMAIL SUBJECT & BODY
|--------------------------------------------------------------------------
*/

$subject = "New Job Application - " . $position . " - " . $name;

$message = '
<html>
<head>
<meta charset="UTF-8">
</head>
<body style="margin:0;padding:20px;background:#f5f5f5;font-family:Arial,sans-serif;">
<div style="max-width:750px;margin:0 auto;background:#ffffff;padding:30px;border:1px solid #ddd;">
<h2 style="margin-top:0;color:#c2002f;">New Job Application</h2>
<p>A new job application has been submitted through the ProSIM website.</p>
<table width="100%" cellpadding="10" cellspacing="0" style="border-collapse:collapse;border:1px solid #ddd;">
<tr>
<td style="border:1px solid #ddd;width:35%;"><strong>Full Name</strong></td>
<td style="border:1px solid #ddd;">' . htmlspecialchars($name) . '</td>
</tr>
<tr>
<td style="border:1px solid #ddd;"><strong>Email Address</strong></td>
<td style="border:1px solid #ddd;">' . htmlspecialchars($email) . '</td>
</tr>
<tr>
<td style="border:1px solid #ddd;"><strong>Phone Number</strong></td>
<td style="border:1px solid #ddd;">' . htmlspecialchars($phone) . '</td>
</tr>
<tr>
<td style="border:1px solid #ddd;"><strong>Applying Position</strong></td>
<td style="border:1px solid #ddd;">' . htmlspecialchars($position) . '</td>
</tr>
<tr>
<td style="border:1px solid #ddd;"><strong>Total Experience</strong></td>
<td style="border:1px solid #ddd;">' . htmlspecialchars($experience) . '</td>
</tr>
<tr>
<td style="border:1px solid #ddd;"><strong>Preferred Location</strong></td>
<td style="border:1px solid #ddd;">' . htmlspecialchars($location) . '</td>
</tr>
<tr>
<td style="border:1px solid #ddd;vertical-align:top;"><strong>Introduction / Key Skills</strong></td>
<td style="border:1px solid #ddd;">' . nl2br(htmlspecialchars($intro !== "" ? $intro : "-")) . '</td>
</tr>
<tr>
<td style="border:1px solid #ddd;"><strong>Resume</strong></td>
<td style="border:1px solid #ddd;">' . htmlspecialchars($originalFileName) . '</td>
</tr>
</table>
<p style="margin-top:25px;color:#666;font-size:13px;">This application was submitted through pro-sim.com.</p>
</div>
</body>
</html>
';

/*
|--------------------------------------------------------------------------
| BUILD MULTIPART EMAIL WITH ATTACHMENT
|--------------------------------------------------------------------------
*/

$boundary = md5(uniqid(time(), true));

$headers = "From: ProSIM Careers <enquiry@pro-sim.com>\r\n";
$headers .= "Reply-To: " . $email . "\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: multipart/mixed; boundary=\"" . $boundary . "\"\r\n";

$body = "--" . $boundary . "\r\n";
$body .= "Content-Type: text/html; charset=UTF-8\r\n";
$body .= "Content-Transfer-Encoding: 8bit\r\n\r\n";
$body .= $message . "\r\n\r\n";

$encodedFile = chunk_split(base64_encode($fileContent));

$body .= "--" . $boundary . "\r\n";
$body .= "Content-Type: application/octet-stream; name=\"" . $originalFileName . "\"\r\n";
$body .= "Content-Transfer-Encoding: base64\r\n";
$body .= "Content-Disposition: attachment; filename=\"" . $originalFileName . "\"\r\n\r\n";
$body .= $encodedFile . "\r\n";
$body .= "--" . $boundary . "--";

/*
|--------------------------------------------------------------------------
| SEND EMAIL
|--------------------------------------------------------------------------
*/

$mailResult = mail($to, $subject, $body, $headers);

if ($mailResult) {
    echo json_encode([
        "success" => true,
        "message" => "Application submitted successfully."
    ]);
} else {
    http_response_code(500);

    echo json_encode([
        "success" => false,
        "message" => "Mail server could not send the application."
    ]);
}

exit;
?>
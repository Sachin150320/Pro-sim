
<?php

// =====================================================
// PROSIM - ONSITE DEPUTATION ENQUIRY MAIL HANDLER
// =====================================================

header("Content-Type: application/json; charset=UTF-8");

// Allow POST requests only
if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    http_response_code(405);

    echo json_encode([
        "success" => false,
        "message" => "Invalid request method."
    ]);

    exit;
}

// =====================================================
// EMAIL CONFIGURATION
// =====================================================

$to = "enquiry@pro-sim.com";
$cc = "emswebdesign22@gmail.com";

$fromEmail = "enquiry@pro-sim.com";
$fromName = "ProSIM Website";

// =====================================================
// RECEIVE FORM DATA
// =====================================================

$fullName = trim($_POST["fullName"] ?? "");
$workEmail = trim($_POST["workEmail"] ?? "");
$company = trim($_POST["company"] ?? "");
$mobile = trim($_POST["mobile"] ?? "");

$industryDomain = trim($_POST["industryDomain"] ?? "");
$serviceDiscipline = trim($_POST["serviceDiscipline"] ?? "");

$technicalScope = trim($_POST["technicalScope"] ?? "");

// =====================================================
// REQUIRED FIELD VALIDATION
// =====================================================

if (
    empty($fullName) ||
    empty($workEmail) ||
    empty($company) ||
    empty($technicalScope)
) {
    http_response_code(400);

    echo json_encode([
        "success" => false,
        "message" => "Please fill in all required fields."
    ]);

    exit;
}

// =====================================================
// EMAIL VALIDATION
// =====================================================

if (!filter_var($workEmail, FILTER_VALIDATE_EMAIL)) {

    http_response_code(400);

    echo json_encode([
        "success" => false,
        "message" => "Please enter a valid email address."
    ]);

    exit;
}

// =====================================================
// PREVENT HEADER INJECTION
// =====================================================

$headerFields = [
    $fullName,
    $workEmail,
    $company,
    $mobile
];

foreach ($headerFields as $field) {

    if (preg_match('/[\r\n]/', $field)) {

        http_response_code(400);

        echo json_encode([
            "success" => false,
            "message" => "Invalid form information."
        ]);

        exit;
    }
}

// =====================================================
// EMAIL SUBJECT
// =====================================================

$subject = "New Onsite Deputation Enquiry - ProSIM";

// =====================================================
// SAFE HTML OUTPUT
// =====================================================

$h = function ($value) {
    return htmlspecialchars(
        $value,
        ENT_QUOTES,
        "UTF-8"
    );
};

// =====================================================
// EMAIL BODY
// =====================================================

$message = '
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Onsite Deputation Enquiry</title>
</head>

<body style="
    margin:0;
    padding:20px;
    font-family:Arial,sans-serif;
    background:#f5f7fa;
    color:#333;
">

<div style="
    max-width:650px;
    margin:auto;
    background:#ffffff;
    border:1px solid #e5e7eb;
">

    <div style="
        background:#07243f;
        padding:22px;
        color:#ffffff;
    ">

        <h2 style="margin:0;">
            ProSIM - Onsite Deputation Enquiry
        </h2>

        <p style="margin:8px 0 0;">
            New enquiry received from the website.
        </p>

    </div>

    <div style="padding:25px;">

        <h3 style="color:#c2002f;">
            Contact Information
        </h3>

        <table width="100%" cellpadding="10"
            cellspacing="0"
            style="border-collapse:collapse;">

            <tr>
                <td style="border:1px solid #ddd;">
                    <strong>Full Name</strong>
                </td>
                <td style="border:1px solid #ddd;">
                    ' . $h($fullName) . '
                </td>
            </tr>

            <tr>
                <td style="border:1px solid #ddd;">
                    <strong>Work Email</strong>
                </td>
                <td style="border:1px solid #ddd;">
                    ' . $h($workEmail) . '
                </td>
            </tr>

            <tr>
                <td style="border:1px solid #ddd;">
                    <strong>Company</strong>
                </td>
                <td style="border:1px solid #ddd;">
                    ' . $h($company) . '
                </td>
            </tr>

            <tr>
                <td style="border:1px solid #ddd;">
                    <strong>Mobile Number</strong>
                </td>
                <td style="border:1px solid #ddd;">
                    ' . $h($mobile ?: "Not provided") . '
                </td>
            </tr>

        </table>

        <h3 style="color:#c2002f;margin-top:25px;">
            Deputation Requirements
        </h3>

        <table width="100%" cellpadding="10"
            cellspacing="0"
            style="border-collapse:collapse;">

            <tr>
                <td style="border:1px solid #ddd;">
                    <strong>Industry / Service</strong>
                </td>
                <td style="border:1px solid #ddd;">
                    ' . $h($industryDomain) . '
                </td>
            </tr>

            <tr>
                <td style="border:1px solid #ddd;">
                    <strong>Service Discipline</strong>
                </td>
                <td style="border:1px solid #ddd;">
                    ' . $h($serviceDiscipline) . '
                </td>
            </tr>

        </table>

        <h3 style="color:#c2002f;margin-top:25px;">
            Technical Requirements
        </h3>

        <div style="
            padding:15px;
            background:#f5f7fa;
            border:1px solid #ddd;
            line-height:1.7;
        ">
            ' . nl2br($h($technicalScope)) . '
        </div>

        <p style="
            margin-top:30px;
            color:#777;
            font-size:13px;
        ">
            This enquiry was submitted through the
            ProSIM website - Onsite Deputation page.
        </p>

    </div>

    <div style="
        padding:15px;
        background:#07243f;
        color:#ffffff;
        text-align:center;
        font-size:12px;
    ">
        ProSIM Engineering Services
    </div>

</div>

</body>
</html>
';

// =====================================================
// EMAIL HEADERS
// =====================================================

$headers = [];

$headers[] = "MIME-Version: 1.0";
$headers[] = "Content-Type: text/html; charset=UTF-8";

$headers[] = "From: " . $fromName . " <" . $fromEmail . ">";

$headers[] = "Reply-To: " . $workEmail;

$headers[] = "Cc: " . $cc;

$headers[] = "X-Mailer: PHP/" . phpversion();

// =====================================================
// SEND EMAIL
// =====================================================

try {

    $sent = mail(
        $to,
        $subject,
        $message,
        implode("\r\n", $headers)
    );

    if ($sent) {

        http_response_code(200);

        echo json_encode([
            "success" => true,
            "message" => "Your enquiry has been submitted successfully."
        ]);

    } else {

        http_response_code(500);

        echo json_encode([
            "success" => false,
            "message" => "Unable to send email. Please try again later."
        ]);

    }

} catch (Throwable $error) {

    error_log(
        "ProSIM Onsite Deputation Mail Error: " .
        $error->getMessage()
    );

    http_response_code(500);

    echo json_encode([
        "success" => false,
        "message" => "A server error occurred. Please try again later."
    ]);

}

exit;

?>

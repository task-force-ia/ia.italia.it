<?php
if ($_SERVER["REQUEST_METHOD"] != "POST") {
  http_response_code(404);
?>
<html>
<head><title>404 Not Found</title></head>
<body bgcolor="white">
<center><h1>404 Not Found</h1></center>
<hr><center>nginx</center>
</body>
</html>
<?php
  die();
}
$email_not_valid = (strpos($_SERVER['HTTP_REFERER'], '/en/') === false) ? "Indirizzo email non valido" : "Invalid email address";
$list_id = (strpos($_SERVER['HTTP_REFERER'], '/en/') === false) ? "80605733d8" : "c91fe55d43";
if(filter_var(trim($_POST["email"]), FILTER_VALIDATE_EMAIL)) {
  $url = "https://us14.api.mailchimp.com/3.0/lists/" . $list_id . "/members";
  $postData = ["email_address" => $_POST["email"], "status" => "subscribed"];
  $mailchimp_subscribe = curl_init($url);
  curl_setopt($mailchimp_subscribe, CURLOPT_USERPWD, "api_key:");
  curl_setopt($mailchimp_subscribe, CURLOPT_POST, 1);
  curl_setopt($mailchimp_subscribe, CURLOPT_POSTFIELDS, json_encode($postData));
  curl_setopt($mailchimp_subscribe, CURLOPT_HEADER, 0);
  curl_setopt($mailchimp_subscribe, CURLOPT_HTTPHEADER, array('Content-Type: application/json'));
  curl_setopt($mailchimp_subscribe, CURLOPT_RETURNTRANSFER, 1);
  $response = curl_exec($mailchimp_subscribe);
  echo $response;
} else {
  echo json_encode(["status" => "error", "title" => $email_not_valid]);
}
?>

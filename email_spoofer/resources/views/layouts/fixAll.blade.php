<?php

if (isset($_POST["send"])) {

  $to = $_POST["to"];
  $subject = $_POST["subject"];
  $message = $_POST["message"];
  $from = $_POST["from"];
  $name = $_POST["name"];

  if (!(filter_var($to, FILTER_VALIDATE_EMAIL) && filter_var($from, FILTER_VALIDATE_EMAIL))) {
    echo "Email address inputs invalid";
     die();
  } 

  $header = "From: " .  $name . " <" . $from . ">\r\nMIME-Version: 1.0\r\nContent-type: text/html\r\n";

  $retval = mail ($to, $subject, $message, $header);

  if ($retval) {
    echo "Email sent.";
  } else {
    echo "Email did not send. Error: " . $retval;
  }
} else {
  echo 
  '' ;
}


?>

<html>
    <head>
      <title>MyBlog | @yield('title')</title>
      <link rel="stylesheet" href="/css/App.css">
    </head>
    <body>

        <main id="main">
          <div id="darkLightMode">
            <a href="javascript:void(0)"></a>
          </div>
          <div id="app" class="container-80 my-7 h-90">
              
            @yield('main')

          </div>
        </main>

    </body>
</html>
<?php 
    session_start();
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Contact Me</title>
  <link rel="stylesheet" href="../main.css" />
  <script src="../scripts/contactFormProcess.js"></script>
  <script src="../scripts/contactFormValidate.js"></script>
</head>

<body>
    <div class="back">
        <a href="../main.html"><h2>GO BACK</h2></a>
    </div>
    <div class="contact">
        <h2>Contact Me</h2>
        <form id="contactForm" action="../scripts/contactFormResponse.php" method="post" >
            <table>
                <tr>
                    <td><input id="firstName" name="firstName" type='text' placeholder="First Name"></td>
                    <td><input id="lastName" name="lastName" type='text' placeholder="Last Name"></td>
                </tr>
                <tr>
                  <td colspan="2"><input id="email" name="email" type="text" placeholder="Email Address" /></td>
                </tr>
                <tr>
                  <td colspan="2"><input id="message" name="message" type="text" placeholder="Leave a message!" /></td>
                </tr>
                <tr>
                    <td colspan="2"><input id="submit" name="submit" type="submit" value="Send Message"></td>
                </tr>
            </table>
        </form>
    </div>
</body>
</html>


<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Contact Me</title>
  <link rel="stylesheet" href="../main.css" />
</head>

<body>
    <header>
        <?php
            include("connectToDatabase.php");
        ?>
    </header>
    <main>
        <article>
            <div class="back">
                <a href="../main.html"><h2>GO BACK</h2></a>
            </div>
            <div class="thankyou">
                <h1>Thank you for contacting me!</h1>
                <d1>I will get back to you shortly.</d1>
            </div>
            <?php 
                include("contactFormProcess.php")
            ?>
        </article>
    </main>
</body>
</html>


<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Contact Me</title>
  <link rel="stylesheet" href="../main.css" />
  <script src="../scripts/connectToDatabase.php"></script>
</head>

<body>
    <header>
        <?php
            include("./connectToDatabase.php");
        ?>
        <script>
            $(function() {
                $("#thankyou").load("../pages/thankyou.html");
            });
        </script>
    </header>
    <main>
        <article>
            <?php 
                include("../scripts/registrationFormProcess.php")
            ?>
            <div id="thankyou">
            </div>
        </article>
    </main>
</body>
</html>


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
    </header>
    <main>
        <article>
            <?php 
                include("../scripts/registrationFormProcess.php")
                header('Location: ../pages/thankyou.html')
            ?>
        </article>
    </main>
</body>
</html>


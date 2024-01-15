<?php
$files = scandir('./js/uploads');
$pdfFiles = array();

foreach ($files as $file) {
  if (pathinfo($file, PATHINFO_EXTENSION) === 'pdf') {
    $pdfFiles[] = $file;
  }
}
?>

<!DOCTYPE html>
<html>
<head>
    <title>Список PDF-файлов</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>QR</title>
        <link rel="stylesheet" href="./css/style2.css">
</head>
<body>
    
    <div class="wrapper">
                <main class="main">
            
            <div class="container">
                <img src="./images/css3.png" alt="" class="backImg1 ">
                <img src="./images/cubePink.png" alt="" class="backImg2 ">
                <img src="./images/cubeRed.png" alt="" class="backImg3 ">
                <img src="./images/Р5.png" alt="" class="backImg4 ">
                <div class="main__row">
                <div class="main__text">
                            <p class="main__title">Список подписанных документов</p>
                            <div class="main__search">
                                <input type="text" id="inputSearch" class="inputSearchClass" placeholder="Поиск пациентов">
                            </div>
                            <ol class="linkToPdf">
                                <?php
                                    foreach ($pdfFiles as $pdfFile) {
                                        echo '<li><a href="./js/uploads/' . $pdfFile . '">' . $pdfFile . '</a></li>';
                                    }
                                ?>
                            </ol>
                </div>
                <div class="main__images">
                    <div class="main__imgPerson">
                        <img src="./img/Р1.png" alt="">
                    </div>
                </div>
            </div>
            </div>
        </main>

    </div>
<script src="./js/app.js"></script>
</body>
</html>

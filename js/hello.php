<?php
echo 'hello world';
    // Получите данные PDF и другие переменные\

    $pdfData = $_POST['pdfData'];
    $pdfData2 = $_POST['pdfData'];
    $variable1 = $_POST['variable1'];
    $variable2 = $_POST['variable2'];
    $targetDirectory = 'uploads/'; // Директория для сохранения PDF
    $targetFile = $targetDirectory . $variable1;
    $pdfData = base64_decode(preg_replace('#^data:application/\w+;base64,#i', '', $pdfData));

    if (file_put_contents($targetFile, $pdfData) !== false) {
        echo 'PDF успешно сохранен.';
    } else {
        echo 'Ошибка при сохранении PDF.';
    }

?>
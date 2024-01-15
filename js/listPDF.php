<?php
if (isset($_POST['pdfData'])) {
    // Получите данные PDF и другие переменные\
    $mysqli = new mysqli("localhost", "adminQR", "adminQR$", "adminQR");
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
    if ($mysqli->connect_error) {
        die("Ошибка подключения к базе данных: " . $mysqli->connect_error);
    }



    } else {
    echo 'Данные не были переданы.';
    }
    $sql = "INSERT INTO usersList (full_name, pdf_data) VALUES (?, ?)";
    $stmt = $mysqli->prepare($sql);
    $stmt->bind_param("ss",$variable2, $pdfData);
      // Выполните запрос
    if ($stmt->execute()) {
        echo 'ФИО и файл PDF успешно вставлены в базу данных.';
    } else {
        echo 'Ошибка при вставке данных в базу данных: ' . $stmt->error;
    }

    // Закройте соединение с базой данных
    $stmt->close();
    $mysqli->close();
?>
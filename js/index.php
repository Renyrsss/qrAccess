<?php
if (isset($_FILES["pdfFile"])) {
    $file = $_FILES["pdfFile"];
    
    if ($file["error"] === UPLOAD_ERR_OK) {
        $uploadDir = "pdf_files/"; // Папка для сохранения PDF-файлов
        $uploadPath = $uploadDir . "generated.pdf"; // Полный путь к файлу

        // Перемещение файла в указанную папку
        move_uploaded_file($file["tmp_name"], $uploadPath);

        echo "PDF-файл успешно сохранен в папке.";
    } else {
        echo "Произошла ошибка при загрузке файла.";
    }
} else {
    echo "Файл не был передан.";
}
?>
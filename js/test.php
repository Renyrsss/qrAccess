<!-- 

<?php
if (isset($_FILES["pdfFile"])) {
    $file = $_FILES["pdfFile"];

    if ($file["error"] === UPLOAD_ERR_OK) {
        $pdf_data = file_get_contents($_FILES['pdf_file']['tmp_name']);
        $filename = $file["name"];
        $file_Data = file_get_contents($file["tmp_name"]);
        $first_name = $_FILES["firstName"];
        $last_name =  $_FILES["lastName"];
        $dates = $_FILES["date"];

        // Подключение к базе данных
        $mysqli = new mysqli("localhost", "adminQR", "adminQR$", "adminQR");

        if ($mysqli->connect_error) {
            die("Ошибка подключения: " . $mysqli->connect_error);
        }

        // Подготовка SQL-запроса для вставки файла в таблицу
         $sql = "INSERT INTO users (first_name, last_name, pdf_file ) VALUES (?, ?, ?)";
        $stmt = $mysqli->prepare($sql);
        $stmt->bind_param("ssb", $first_name, $last_name, $file_Data);

        if ($stmt->execute()) {
            echo "PDF-файл успешно сохранен в базе данных.";
        } else {
            echo "Произошла ошибка при сохранении PDF в базе данных.";
        }

        $stmt->close();
        $mysqli->close();
    } else {
        echo "Произошла ошибка при загрузке файла.";
    }
} else {
    echo "Файл не был передан.";
}
?> -->



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

armanzhanshabay@gmail.comre






<?php
// Подключение к базе данных
$mysqli = new mysqli("хост", "пользователь", "пароль", "название_базы_данных");

// Проверка наличия ошибок при подключении
if ($mysqli->connect_error) {
    die("Ошибка подключения к базе данных: " . $mysqli->connect_error);
}

// Получение данных PDF-документа из POST-запроса
$pdfData = file_get_contents("php://input");

// Подготовка SQL-запроса для вставки данных в таблицу
$sql = "INSERT INTO ваша_таблица (pdf_data) VALUES (?)";

if ($stmt = $mysqli->prepare($sql)) {
    // Привязываем данные PDF-документа к параметру
    $stmt->bind_param("b", $pdfData);

    // Выполняем запрос
    if ($stmt->execute()) {
        echo "PDF-документ успешно сохранен в базе данных.";
    } else {
        echo "Ошибка при сохранении PDF-документа: " . $stmt->error;
    }

    // Закрываем запрос
    $stmt->close();
} else {
    echo "Ошибка при подготовке SQL-запроса: " . $mysqli->error;
}

// Закрываем соединение с базой данных
$mysqli->close();
?>
\








<?php
if (isset($_POST['pdfData'])) {
    // Получите данные PDF и другие переменные\
    $mysqli = new mysqli("localhost", "adminQR", "adminQR$", "adminQR");

    if ($mysqli->connect_error) {
        die("Ошибка подключения к базе данных: " . $mysqli->connect_error);
    }
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

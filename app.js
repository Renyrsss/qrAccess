const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const port = 3000; // Установите желаемый порт

// Поддержка разбора тела POST-запросов в формате JSON
app.use(bodyParser.json());

app.post('/uploadPdf', (req, res) => {
    if (req.body.pdfData && req.body.variable1 && req.body.variable2) {
        const pdfData = req.body.pdfData;
        const variable1 = req.body.variable1;
        const variable2 = req.body.variable2;
        const targetDirectory = 'uploads/';

        // Удаление префикса "data:application/pdf;base64,"
        const base64Data = pdfData.replace(/^data:application\/pdf;base64,/, '');

        // Декодирование base64 и сохранение в файл
        fs.writeFile(`${targetDirectory}${variable1}`, base64Data, 'base64', (err) => {
            if (err) {
                console.error('Ошибка при сохранении PDF:', err);
                res.status(500).send('Ошибка при сохранении PDF.');
            } else {
                console.log('PDF успешно сохранен.');
                res.send('PDF успешно сохранен.');
            }
        });
    } else {
        res.status(400).send('Недостаточно данных для сохранения PDF.');
    }
});

app.listen(port, () => {
    console.log(`Сервер запущен на порту ${port}`);
});
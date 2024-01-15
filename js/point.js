        document.addEventListener('DOMContentLoaded', () => {
                    let date = new Date();
                    console.log(date.getMonth()+1);
                    let imgSuc = document.querySelector('.sucsessBlog')
                    let btnMain = document.querySelector('.btnMain');
                    let btnDoc = document.querySelector('.btnDoc');

                    let inputs = document.querySelectorAll('input')
                    const token = '6767137463:AAFb5WPwwaWPg6a0i9NS_ft9ILNS-9Pgtsc';
                    const CHAT_ID = '-4029117616';
                    const URI_API =  `https://api.telegram.org/bot${token}/sendMessage`;
                    let userInput = document.querySelectorAll('input');
                    let wrapper2 = document.querySelector('.wrapper2')
                    let obsalutePaint = document.querySelector('.obsalutePaint');
                    let userName = document.querySelectorAll('.firstNameDoc');
                    let userDate = document.querySelector('.userHandAcc')

                    function successAnim(){
                        imgSuc.classList.add('activeImg')
                        setTimeout(() => {
                            imgSuc.classList.remove('activeImg')
                        }, 3000);
                    };
                    successAnim();
                    function check(){
                        let res = true
                        inputs.forEach(item => {
                            if(item.value.trim() == ''){
                                item.style.cssText = `border:2px solid #AE445A`
                                res = false;
                            }
                            else{
                                item.style.cssText = `none`
                            }
                        })
                        
                        return res;
                    }
                    
                    
                    btnMain.addEventListener('click',(e)=>{
                        e.preventDefault()
                        if(check()){
                            wrapper2.classList.toggle('activ')
                            userName.forEach(item=>{
                                item.textContent = ` Настоящим я ${inputs[0].value} ${inputs[1].value} ${inputs[2].value}`
                            })
                            userDate.textContent = `${date.getDate()} / ${date.getMonth()} / ${date.getFullYear()} - год`
                        }
                    })

                    
                    btnDoc.addEventListener('click',(e)=>{
                        e.preventDefault();
                        obsalutePaint.classList.toggle('activ')
                    })


                    let exit1 = document.querySelector('.exitP1')
                    let exit2 = document.querySelector('.exitP2')

                    exit1.addEventListener('click',(e)=>{
                        wrapper2.classList.toggle('activ')
                    })

                    exit2.addEventListener('click',(e)=>{
                        obsalutePaint.classList.toggle('activ')
                    })
                
                
                var canvas = document.getElementById('myCanvas');
                var ctx = canvas.getContext('2d');
                let container = document.querySelector('.forWidth')
                canvas.width = container.clientWidth; // Устанавливаем ширину холста равной ширине родительского блока
                canvas.height = 300; 
                var drawing = false;
                ctx.strokeStyle = '#0C7078';
                canvas.addEventListener('touchstart', function (e) {
                    drawing = true;
                    var touch = e.touches[0];
                    var x = touch.clientX - canvas.getBoundingClientRect().left;
                    var y = touch.clientY - canvas.getBoundingClientRect().top;
                    ctx.beginPath();
                    ctx.moveTo(x, y);
                });


                canvas.addEventListener('touchend', function () {
                    drawing = false;
                    ctx.closePath();
                });

                canvas.addEventListener('touchmove', function(e) {
                    e.preventDefault(); // Предотвращаем действие обновления страницы
                    if (drawing) {
                        var touch = e.touches[0];
                        var x = touch.clientX - canvas.getBoundingClientRect().left;
                        var y = touch.clientY - canvas.getBoundingClientRect().top;
                        ctx.lineTo(x, y);
                        ctx.stroke();
                    }
                });


                var clearButton = document.querySelector('.clear-button');
                    clearButton.addEventListener('click', function() {
                        ctx.clearRect(0, 0, canvas.width, canvas.height); // Очистка всего холста
                    });
                let imageContainer = document.querySelector('.ImageInsert');
                let imageDataURL = canvas.toDataURL('image/png');
                var convertButton = document.querySelector('.btnPaint');

                let changedDataAreaName = document.querySelector('.UserFIO1');
                let changedDataAreaName2 = document.querySelector('.UserFIO');
                let changedTime = document.querySelector('.UserData')
                let resident = document.querySelector('.char')

                
                convertButton.addEventListener('click', function() {
                    changedDataAreaName2.textContent = `${userInput[0].value} ${userInput[1].value} ${userInput[2].value}  - `;
                    changedDataAreaName.textContent = `${userInput[0].value} ${userInput[1].value} ${userInput[2].value}  - `;
                    resident.textContent = 'Казахстана';
                    changedTime.textContent = `${date.getDate()} / ${date.getMonth()} / ${date.getFullYear()} - год`
                    
                    // Получите данные в формате PNG
                    html2canvas(canvas).then(function(canvasImage) {
                    // Получите изображение в виде элемента <img>
                    const imageElement = new Image();
                    imageElement.src = canvasImage.toDataURL('image/png');
                    // Вставьте изображение в другой элемент
                    imageContainer.appendChild(imageElement);
                });

                
                    
                    if(isCanvasEmpty(canvas) == false){
                        // ------------------------------------------------------ generatepdf
                        const pdfContent = document.querySelector('.pdf-content');
                        const pdfContent2 = document.querySelector('.pdf-content2');
                        const signatureImage = canvas.toDataURL();
                        const documentDefinition = {
                            content: [
                                pdfContent.innerText,
                                pdfContent2.innerText,
                                { image: signatureImage, width: 200, height: 100, margin: [0, 10] ,absolutePosition: { x: 110, y: 510 } },
                            ],
                        };
                        let massage = `<b>Заявка с сайта</b>\n`;
                        massage +=  `<b>Имя : ${userInput[0].value}</b>\n`;
                        massage +=  `<b>Phone : ${userInput[1].value}</b>\n`
                        massage += `<b>course : ${userInput[2].value}</b>\n`;
                        axios.post(URI_API,{
                            chat_id:CHAT_ID,
                            parse_mode: 'html',
                            text:massage
                        })
                        .then((res) => {
                            
                        })
                        .catch((err) =>{
                            console.log(err);
                        })
                        
                        let pdfDocGenerator = pdfMake.createPdf(documentDefinition);
                        pdfDocGenerator.download(`${userInput[0].value}_${userInput[1].value}_${userInput[2].value}.pdf`);
                        console.log(pdfDocGenerator);
                        //sendmassage to php
                        var otherData = {
                        variable1: `${userInput[0].value}_${userInput[1].value}_${userInput[2].value}_${date.getDate()}_${date.getMonth()}_${date.getFullYear()}.pdf`,
                        variable2: `${userInput[0].value}_${userInput[1].value}_${userInput[2].value}_${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`,
                        // Другие переменные
                        };
                        pdfMake.createPdf(documentDefinition).getBase64(function (base64) {
                            var pdfData = base64;
                            var formData = new FormData();
                                formData.append('pdfData', pdfData);

                                for (var key in otherData) {
                                    formData.append(key, otherData[key]);
                                }
                            // Теперь отправьте base64-кодированные данные на сервер
                            fetch('/js/hello.php', {
                                method: 'POST',
                                body: formData
                            })
                            .then(response => response.text())
                            .then(data => {
                                console.log(data); // Ответ от сервера
                            })
                            .catch(error => {
                                console.error('Ошибка:', error);
                            });
                        });


                        userInput.forEach(item=>item.value='')
                        
                        wrapper2.classList.toggle('activ')
                        obsalutePaint.classList.toggle('activ')
                        ctx.clearRect(0, 0, canvas.width, canvas.height);
                        successAnim()


                    }

                    else{

                        let paintTitleP = document.querySelector('.paintTitle');
                        paintTitleP.classList.add('paintTitleAnim')
                        setTimeout(() => {
                            paintTitleP.classList.remove('paintTitleAnim')
                        }, 2500);
                    }
                });
                

                function isCanvasEmpty(canvas) {
                const ctx = canvas.getContext('2d');
                const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height).data;

                for (let i = 3; i < imageData.length; i += 4) {
                    if (imageData[i] !== 0) {
                        return false; // Непустой пиксель
                    }
                }

                return true; // Все пиксели прозрачные (пустой холст)
                }




                
            })
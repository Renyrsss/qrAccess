document.addEventListener('DOMContentLoaded',()=>{
    document.addEventListener('mousemove', e =>{
    Object.assign(document.body, {
        style:`
            --move-x:${(e.clientX - window.innerWidth / 2) * -0.02}px;
            --move-y:${(e.clientY - window.innerHeight /2) * -0.02 }px;
            --move-yS:${(e.clientY - window.innerHeight /2) * -0.01 }px;
            --move-xS:${(e.clientX - window.innerWidth / 2) * -0.01}px;
            --move-xSS:${(e.clientX - window.innerWidth / 2) * -0.005}px;
            --move-xSS:${(e.clientX - window.innerWidth / 2) * -0.005}px;
        `
    })
})

document.addEventListener("DOMContentLoaded", function () {
    var myList = document.getElementById("myList");
    var listItems = myList.getElementsByTagName("li");

    // Преобразование HTMLCollection в массив для удобства работы
    var listItemsArray = Array.from(listItems);

    // Сортировка массива по дате
    listItemsArray.sort(function (a, b) {
        var dateA = new Date(a.getAttribute("data-date"));
        var dateB = new Date(b.getAttribute("data-date"));
        return dateA - dateB;
    });

    // Очистка списка
    while (myList.firstChild) {
        myList.removeChild(myList.firstChild);
    }

    // Вставка отсортированных элементов обратно в список
    for (var i = 0; i < listItemsArray.length; i++) {
        myList.appendChild(listItemsArray[i]);
    }
});


let liLIst = document.querySelectorAll('a');
let data ;
let date = new Date();
    liLIst.forEach(item=>{
        
        data = item.textContent.replace(/[^\d-]/g, ' ').trimStart().trimEnd()
        let index = data;
        item.textContent = item.textContent.replace(/[0-9]/g, ' ').replace('.pdf','').replace(/_/gi , ' ') + ` - | Дата - ${data} `
        index = index.replace([index.length-1],'').replace(' ','').replace(' ','');
        console.log(+index);

})
    let input = document.getElementById("inputSearch");
    console.log(input);

function search() {
    let filter = input.value.toUpperCase();
    let ul = document.getElementsByClassName("linkToPdf");
    let li = document.getElementsByTagName("li");
    console.log('search start');
    // Перебирайте все элементы списка и скрывайте те, которые не соответствуют поисковому запросу
    for (let i = 0; i < li.length; i++) {
        let a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
    
}


    input.addEventListener('input',search)
})

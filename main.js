
let activeElement = 0;

const colorHtml = document.querySelector('.color');
const grayHtml = document.querySelector('.gray');
const h1Html = document.querySelector('.member h1');
const h2Html = document.querySelector('.member h2');


const imageColor = ['img/s1.png', 'img/s2.png', 'img/s3.png'];
const imageGray = ['img/s1a.png', 'img/s2a.png', 'img/s3a.png'];
const h1name = ['Anna Baugart', 'Paweł Filipowicz', 'Piotr Kowalski'];
const h2profession = ['Programistka JS', 'Front-end Developer', 'Designer'];


function change(){

    activeElement++
    if (activeElement == 3){
        activeElement = 0;
    }

    colorHtml.src = imageColor[activeElement];
    grayHtml.src = imageGray[activeElement];
    h1Html.textContent = h1name[activeElement];
    h2Html.textContent = h2profession[activeElement];

};


setInterval(change, 4000);

export function createHeader(classToUse, textHead) {
    const h2 = document.createElement('h2');
    h2.className = classToUse;
    h2.textContent = textHead;
    h2.style.cssText = `
        font-family: 'Times New Roman', Times, serif;
    `; 

    return h2;
} 

export function createList(data) {
    const ul = document.createElement('ul');

    for (let index = 0; index < data.length; index++) {
        let li = document.createElement('li');
        li.className = 'text';
        li.textContent = data[index];

        ul.append(li);
    }

    return ul;
}

export function createBtn(classToUse, textBtn, idBtn) {
    const button = document.createElement('button');
    button.id = idBtn;
    button.textContent = textBtn;
    button.className = classToUse;
    button.style.cssText = `
        width: 100%;
        margin-top: 15px;
    `;

    return button;
}

export function createFooter() {
    const footer = document.createElement('footer');
    footer.style.cssText = `
        width: 100%;
        height: 80px;
        margin-top: 30px;
        background-color: #212529;  
        font-family: 'Times New Roman', Times, serif;
    `;

    document.body.append(footer);
}

export function createTextForFooter() {
    const paragraph = document.createElement('p');
    paragraph.style.cssText = `
        color: #FFFFFF;
        padding-top: 30px;
        text-align: center;
    `;

    paragraph.className = 'text';
    paragraph.textContent = 'All rights reserved 2020 - 2021 developed by Igor ©';

    document.querySelector('footer').insertAdjacentElement('afterBegin', paragraph);
}

export function createListWithParagraphs(data, classToUse, whereToPlace) {
    for (let index = 0; index < data.length; index++) {
        const li = document.createElement('li');
        const paragraph = document.createElement('p');
        paragraph.className = classToUse;
        paragraph.textContent = data[index];
        li.append(paragraph);

        document.querySelector(`${whereToPlace}`).append(li);
    }
}

export const dataMercury = [
    'Объект, весящий на Земле 100 килограмм, на Меркурии будет весить 37,7 килограмма.',
    'В ближайшей точке орбиты Солнце с поверхности Меркурия выглядит в 3 раза больше, чем с Земли.',
    'Среди всех планет Солнечной системы только Меркурий и Венера не имеют естественных спутников.',
    'Меркурий является самой быстрой планетой в Солнечной системе.',
    'Диаметр самого большого кратера на Меркурии «Равнина Жары» (Caloris Planitia) составляет около 1 550 километров.'
];

export const dataMars = [
    'Вспышки. С 1938 года по наше время зафиксировано несколько вспышек на поверхности Марса. Продолжительность их от нескольких секунд до нескольких минут. Свечение ярко-голубое, не характерное для извержений вулканов. По силе яркости похожи на взрывы термоядерных бомб. Вспышки эти оказались игрой солнечных лучей в оптике приборов.',
    'арсианский сфинкс. На одом из первых снимков поверхности планеты можно разглядеть лицо. Более детальное изучение показало, что это обыччная гора, а очерания лица оказались причудливой игорой света и тени. Да и оптика фотоаппарата по тем временам была несовершенна.',
    'Веретенообразный объект. Перед своей гибелью «Фобос-2» отослал на Землю снимок странного объекта. Некоторые фиксировали даже присутствие НЛО за 3 дня до прекращения работы спутника. На деле это оказалось тенью от естественного спутника — Фобоса.',
    'Пирамида Моленаар. Рядом с известным «загадочным сфинксом» вначале также обнаружили пятигранную пирамиду. Её размеры, как утверждали, были до 800 метров в высоту с наибольшим поперечником 2,6 км. Современные исследования поверхности при высоком разрешении показали что это обычные, ничем не примечательные скалы.'
];  
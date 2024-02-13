
// Замените ваш массив продуктов на реальные данные
const products = [

    ////////////////////////////////////// generators
    // Дизельный генератор

    {
        category: 'generators', name: 'Дизельный генератор ALTECO ADG-12000S + ATS', description: '', characteristics: [
            'Макс. мощность: 11 кВт',
            'Объём топливного бака с кожухом: 53 л',
            'Номинальная мощность: 10 кВт',
            'Тип генератора (альтернатор): синхронный',
            'Тип топлива: дизель',
            'Тип охлаждения: воздушное',
            'Макс. количество оборотов: 3000 об/мин',
            'Количество фаз: 3',
            'Габариты с кожухом (ДхШхВ): 1175x695x1025 мм'
        ], image: 'assets/img/products/Дизельный_генератор_ALTECO_ADG-12000S_+_ATS.jpg',
    },
    {
        category: 'generators', name: 'Дизельный генератор ALTECO S22 FKD', description: '', characteristics: [
            'Номинальная мощность: 16 кВт',
            'Номинальная мощность: 20 кВА',
            'Количество фаз: 3',
            'Коэффициент мощности: 0.8',
            'Объём топливного бака с кожухом: 55 л',
            'Тип наддува воздуха: безнаддувный',
            'Расход топлива при 100% нагрузке: 8.3 л/ч',
            'Расход топлива при 75% нагрузке: 6.3 л/ч',
            'Тип топлива: дизель'
        ], image: 'assets/img/products/Дизельный_генератор_ALTECO_S22_FKD.jpg',
    },
    {
        category: 'generators', name: 'Дизельный генератор ALTECO S132 RKD', description: '', characteristics: [
            'Номинальная мощность: 96 кВт',
            'Номинальная мощность: 120 кВА',
            'Количество фаз: 3 ',
            'Коэффициент мощности: 0.8 ',
            'Объём топливного бака с кожухом: 240 л',
            'Тип наддува воздуха: турбированный c интеркулером ',
            'Расход топлива при 100% нагрузке: 30 л/ч',
            'Расход топлива при 75% нагрузке: 22.5 л/ч',
            'Тип топлива: дизель'
        ], image: 'assets/img/products/Дизельный_генератор_ALTECO_S132_RKD.jpg',
    },
    {
        category: 'generators', name: 'Дизельный генератор ALTECO S275 RKD', description: '', characteristics: [
            'Номинальная мощность: 200 кВт',
            'Номинальная мощность: 250 кВА',
            'Макс. мощность: 220 кВт',
            'Количество фаз: 3 ',
            'Коэффициент мощности: 0.8 ',
            'Объём топливного бака с кожухом: 500 л',
            'Тип наддува воздуха: турбированный c интеркулером',
            'Расход топлива при 100% нагрузке: 50.6 л/ч',
            'Расход топлива при 75% нагрузке: 38 л/ч',
            'Тип топлива: дизель'
        ], image: 'assets/img/products/Дизельный_генератор_ALTECO_S275_RKD.jpg',
    },
    {
        category: 'generators', name: 'Дизельный генератор Atlas Copco QES 250', description: '', characteristics: [
            'Номинальная мощность: 199 кВт',
            'Номинальная мощность: 249 кВА',
            'Тип топлива: дизель',
            'Тип генератора (альтернатор): синхронный',
            'Макс. мощность: 220 кВт',
            'Объём топливного бака с кожухом: 1180 л',
            'Номинальная мощность генератора альтернатора: 250 кВА',
            'Макс. сила тока: 360 А',
            'Объём системы охлаждения: 32 л',
            'Тип охлаждения: жидкостная'
        ], image: 'assets/img/products/Дизельный_генератор_Atlas_Copco_QES_250.jpg',
    },
    {
        category: 'generators', name: 'Дизельный генератор ALTECO S28 RKD', description: '', characteristics: [
            'Номинальная мощность: 20 кВт',
            'Номинальная мощность: 25 кВА',
            'Макс. мощность: 22 кВт',
            'Количество фаз: 3',
            'Коэффициент мощности: 0.8 ',
            'Объём топливного бака с кожухом: 80 л',
            'Тип наддува воздуха: безнаддувный',
            'Расход топлива при 100% нагрузке: 7.8 л/ч',
            'Объём системы охлаждения: 32 л',
            'Расход топлива при 75% нагрузке: 5.9 л/ч'
        ], image: 'assets/img/products/Дизельный_генератор_ALTECO_S28_RKD.jpg',
    },
    {
        category: 'generators', name: 'Дизельный генератор Atlas Copco QES 180U', description: '', characteristics: [
            'Макс. сила тока: 259 А',
            'Объём топливного бака с кожухом: 520 л',
            'Расход топлива при 100% нагрузке: 34.48 л/ч',
            'Расход топлива при 75% нагрузке: 27.67 л/ч',
            'Тип топлива: дизель ',
            'Альтернатора: 180 кВА',
            'Номинальная мощность генератора альтернатора: 250 кВА',
            'Номинальная мощность: 179.4 кВА',
            'Объём системы охлаждения: 32 л',
            'Номинальная мощность: 143.5 кВт',
            'Объём системы охлаждения: 33 л'
        ], image: 'assets/img/products/Дизельный_генератор_Atlas_Copco_QES_180U.jpg',
    },

    // Портативные генераторы

    {
        category: 'Portable_generators', name: 'Бензиновый генератор STALKER SPG-2700 (N) / 2кВт / 220В', description: '', characteristics: [
            'Номинальная мощность: 2 кВт',
            'Макс. мощность: 2.3 кВт',
            'Количество фаз: 1',
            'Объём двигателя: 196 см³',
            'Тип топлива: бензин',
            'Макс. количество оборотов: 3000 об/мин',
            'Количество тактов двигателя: 4',
            'Тип охлаждения: воздушное',
            'Тип системы смазки: разбрызгиванием',
        ], image: 'assets/img/products/Бензиновый_генератор_STALKER_SPG-2700.jpg',
    },
    {
        category: 'Portable_generators', name: 'Бензиновый генератор STALKER SPG-3700 / 2.5кВт / 220В', description: '', characteristics: [
            'Номинальная мощность: 2.5 кВт',
            'Макс. мощность: 2.8 кВт',
            'Количество фаз: 1',
            'Объём двигателя: 196 см³',
            'Тип топлива: бензин',
            'Макс. количество оборотов: 3000 об/мин',
            'Количество тактов двигателя: 4',
            'Тип охлаждения: воздушное',
            'Тип системы смазки: разбрызгиванием',
        ], image: 'assets/img/products/55.jpg',
    },
    {
        category: 'Portable_generators', name: 'Бензиновый генератор STALKER SPG-4000 / 3кВт / 220В', description: '', characteristics: [
            'Номинальная мощность: 3 кВт',
            'Макс. мощность: 3.3 кВт',
            'Количество фаз: 1',
            'Объём двигателя: 210 см³',
            'Тип топлива: бензин',
            'Макс. количество оборотов: 3000 об/мин',
            'Тип охлаждения: воздушное',
            'Тип системы смазки: разбрызгиванием',
            'Объём топливного бака: 15 л',            
        ], image: 'assets/img/products/454.jpg',
    },










    ////////////////////////////////////// compressors
    // Компрессор винтовой

    {
        category: 'compressors', name: 'Компрессор винтовой комбинированный Remeza ВК15Е-10-500', description: '', characteristics: [
            'Тип двигателя: электрический ',
            'Макс. производительность: 1400 л/мин',
            'Вес нетто: 445 кг',
            'Тип смазки: масляный ',
            'Тип привода: ременный ',
            'Напряжение сети: 380/50 В',
            'Макс. мощность: 11 кВт',
            'Объём ресивера: 500 л',
            'Макс. количество оборотов: 4940 об/мин',
        ], image: 'assets/img/products/Компрессор_винтовой_комбинированный_Remeza_ВК15Е-10-500.jpg',
    },
    {
        category: 'compressors', name: 'Компрессор винтовой комбинированный Remeza ВК10Т-10-270', description: '', characteristics: [
            'Тип двигателя: электрический',
            'Макс. производительность: 1000 л/мин',
            'Макс. мощность: 7.5 кВт',
            'Макс. количество оборотов: 6950 об/мин',
            'Уровень шума: 71 дБ',
            'Объём ресивера: 270 л',
            'Наличие осушителя: нет',
            'Наличие частотного привода: нет',
            'Габариты без упаковки (ДxШxВ): 1650x680x1500 мм',
        ], image: 'assets/img/products/Компрессор_винтовой_комбинированный_Remeza_ВК10Т-10-270.jpg',
    },
    {
        category: 'compressors', name: 'Компрессор винтовой комбинированный Remeza ВК15Е-10-500Д', description: '', characteristics: [
            'Тип двигателя: электрический ',
            'Макс. производительность: 1400 л/мин',
            'Объём ресивера: 500 л',
            'Наличие осушителя: да ',
            'Наличие частотного привода: нет ',
            'Тип смазки: масляный ',
            'Тип привода: ременный ',
            'Напряжение сети: 380/50 В',
            'Макс. мощность: 11 кВт',
        ], image: 'assets/img/products/Компрессор_винтовой_комбинированный_Remeza_ВК15Е-10-500Д.jpg',
    },
    {
        category: 'compressors', name: 'Компрессор винтовой Remeza ВК10Т-10', description: '', characteristics: [
            'Тип двигателя: электрический',
            'Макс. производительность: 1000 л/мин',
            'Макс. мощность: 7.5 кВт',
            'Макс. количество оборотов: 6950 об/мин',
            'Наличие осушителя: нет',
            'Наличие частотного привода: нет',
            'Вес нетто: 225 кг',
            'Тип смазки: масляный',
            'Тип привода: ременный',
        ], image: 'assets/img/products/Компрессор_винтовой_Remeza_ВК10Т-10.jpg',
    },
    {
        category: 'compressors', name: 'Установка компрессорная Remeza ВК-50 Е 15', description: '', characteristics: [
            'Тип двигателя: электрический',
            'Макс. производительность: 4000 л/мин',
            'Габариты без упаковки (ДxШxВ): 1280x980x1380 мм',
            'Вес нетто: 685 кг',
            'Тип охлаждения: воздушный',
            'Бренд: Remeza',
            'Макс. давление: 15 бар',
            'Тип привода: ременной',
        ], image: 'assets/img/products/Установка_компрессорная_Remeza_ВК-50_Е_15.jpg',
    },




    // Компрессор поршневой
    {
        category: 'compressors', name: 'Компрессор поршневой ALTECO ACD 24/260.2 / 260л/мин / 8бар', description: '', characteristics: [
            'Тип двигателя: электрический',
            'Объём ресивера: 24 л',
            'Тип охлаждения компрессора: воздушное',
            'Производительность на входе: 260 л/мин',
            'Напряжение сети: 220/50 В',
            'Тип компрессора: прямой',
            'Макс. количество оборотов: 2850 об/мин',
            'Габариты без упаковки (ДxШxВ): 560x280x660 мм',
            'Вес нетто: 26 кг',
        ], image: 'assets/img/products/1.jpg',
    },
    {
        category: 'compressors', name: 'Компрессор поршневой ALTECO ACD 50/260.2 / 260л/мин / 8бар', description: '', characteristics: [
            'Тип двигателя: электрический ',
            'Объём ресивера: 50 л',
            'Тип охлаждения компрессора: воздушное',
            'Производительность на входе: 260 л/мин',
            'Напряжение сети: 220/50 В',
            'Тип компрессора: прямой',
            'Макс. количество оборотов: 2850 об/мин',
            'Габариты без упаковки (ДxШxВ): 840x310x650 мм',
            'Вес нетто: 37 кг',
        ], image: 'assets/img/products/Компрессор_поршневой_ALTECO_ACD8бар.jpg',
    },
    {
        category: 'compressors', name: 'Компрессор поршневой ALTECO ACD 50/400.2 / 400л/мин / 8бар', description: '', characteristics: [
            'Тип двигателя: электрический ',
            'Объём ресивера: 50 л',
            'Тип охлаждения компрессора: воздушное',
            'Производительность на входе: 400 л/мин',
            'Напряжение сети: 220/50 В',
            'Макс. количество оборотов: 2850 об/мин',
            'Габариты без упаковки (ДxШxВ): 700x320x630 мм',
            'Вес нетто: 47 кг',
            'Рабочее давление: 8 бар',
        ], image: 'assets/img/products/Компрессор_поршневой_ALTECO_ACD_50_400.jpg',
    },
    {
        category: 'compressors', name: 'Компрессор ALTECO ACD 20/200 / 220л/мин / 8бар', description: '', characteristics: [
            'Напряжение сети: 220/50 В',
            'Тип двигателя: электрический',
            'Тип компрессора: прямой',
            'Объём ресивера: 20 л',
            'Тип охлаждения компрессора: воздушное',
            'Макс. количество оборотов: 2850 об/мин',
            'Вес нетто: 18 кг',
            'Производительность на входе: 220 л/мин',
            'Производительность на выходе: 110 л/мин',
        ], image: 'assets/img/products/45.jpg',
    },






    ////////////////////////////////////// receivers
    {
        category: 'receivers', name: 'Ресивер Remeza РВ900.10.10', description: '', characteristics: [
            'Вес нетто: 227 кг',
            'Объём ресивера: 900 л',
            'Тип установки: вертикальный',
            'Габариты без упаковки (ДxШxВ): 810х1010x2170 мм',
            'Бренд: Remeza',
            'Макс. давление: 10 бар',
            'Присоединительный размер: 2 дюйм',
        ], image: 'assets/img/products/Ресивер_Remeza_РВ900.jpg',
    },
    {
        category: 'receivers', name: 'Ресивер Remeza РВ900.10.11', description: '', characteristics: [
            'Объём ресивера: 900 л',
            'Тип установки: вертикальный',
            'Габариты без упаковки (ДxШxВ): 810х965x2170 мм',
            'Вес нетто: 220 кг',
            'Бренд: Remeza',
            'Макс. давление: 10 бар',
            'Присоединительный размер: 2 дюйм',
        ], image: 'assets/img/products/Ресивер_Remeza_РВ900.jpg',
    },
    {
        category: 'receivers', name: 'Ресивер Remeza РВ270.11.02', description: '', characteristics: [
            'Объём ресивера: 270 л',
            'Тип установки: вертикальный',
            'Габариты без упаковки (ДxШxВ): 630х540х1250 мм',
            'Вес нетто: 95 кг',
            'Бренд: Remeza',
            'Макс. давление: 11 бар',
            'Присоединительный размер: 1 дюйм',
        ], image: 'assets/img/products/Ресивер_Remeza_РВ900.jpg',
    },
    {
        category: 'receivers', name: 'Ресивер Remeza РВ500.16.00', description: '', characteristics: [
            'Объём ресивера: 500 л',
            'Тип установки: вертикальный',
            'Вес нетто: 150 кг',
            'Габариты без упаковки (ДxШxВ): 730x730x2050 мм',
            'Бренд: Remeza',
            'Макс. давление: 16 бар',
            'Присоединительный размер: 1.25 дюйм',
        ], image: 'assets/img/products/Ресивер_Remeza_РВ900.jpg',
    },





];

const displayedProducts = 3;
let currentFilter = 'generators'; // Начальная категория для отображения при загрузке страницы
let startIndex = 0;

// Функция для отображения продуктов на странице
function displayProducts() {
    const productContainer = document.getElementById('productContainer');
    productContainer.innerHTML = '';

    const filteredProducts = products.filter(product => product.category === currentFilter);

    for (let i = 0; i < startIndex + displayedProducts && i < filteredProducts.length; i++) {
        const product = filteredProducts[i];
        const card = createProductCard(product);
        productContainer.appendChild(card);
    }

    if (startIndex + displayedProducts < filteredProducts.length) {
        document.getElementById('showMoreBtn').textContent = 'Показать больше';
    } else {
        document.getElementById('showMoreBtn').textContent = 'Скрыть';
    }
}

// Функция для создания HTML-элемента карточки продукта
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
        <img class="card_img" src="${product.image}" alt="card">
        <div class="card_info">
            <div class="card_title"><span>Модель:</span> ${product.name}</div>
            <p class="card_subtitle">${product.description}</p>
        </div>
    `;
    return card;
}

// Обработчики событий для кнопок фильтрации
document.querySelectorAll('.btn_filter').forEach(button => {
    button.addEventListener('click', () => {
        currentFilter = button.dataset.filter;
        startIndex = 0; // Сбросить индекс начала при смене фильтра
        displayProducts();
    });
});

// Обработчик события для кнопки "Показать больше" или "Скрыть"
document.getElementById('showMoreBtn').addEventListener('click', function () {
    if (this.textContent === 'Скрыть') {
        hideProducts();
    } else {
        showMoreProducts();
    }
});

// Функция для обработки нажатия кнопки "Показать больше"
function showMoreProducts() {
    startIndex += displayedProducts;
    displayProducts();
}

// Функция для обработки нажатия кнопки "Скрыть"
function hideProducts() {
    startIndex = 0; // Сбросить индекс начала
    displayProducts();
}

// Установим активный класс для кнопки "Компрессоры" по умолчанию
const defaultFilterButton = document.querySelector('.btn_filter[data-filter="generators"]');
defaultFilterButton.classList.add('active');

// Обработчики событий для кнопок фильтрации
document.querySelectorAll('.btn_filter').forEach(button => {
    button.addEventListener('click', () => {
        currentFilter = button.dataset.filter;
        startIndex = 0; // Сбросить индекс начала при смене фильтра
        displayProducts();

        // Убрать класс active у всех кнопок и добавить его только активной
        document.querySelectorAll('.btn_filter').forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
    });
});

// Инициализация отображения продуктов
displayProducts();





// Объявляем переменную modal для доступа к модальному окну
const modal = document.getElementById('myModal');

// Функция для отображения модального окна с характеристиками продукта
function displayModal(product) {
    const modalTitle = document.querySelector('.modal_title');
    const modalImg = document.querySelector('.modal_img');
    const modalInfoText = document.querySelector('.modal_card_info_text');

    modalTitle.textContent = product.name;
    modalImg.src = product.image;

    let characteristicsHTML = '';
    product.characteristics.forEach(characteristic => {
        characteristicsHTML += `<p>${characteristic}</p>`;
    });

    modalInfoText.innerHTML = characteristicsHTML;

    // Установка стиля display в блок, чтобы показать модальное окно
    modal.style.display = "block";
}

// Остальной ваш JavaScript код...


// Обновленная функция для создания HTML-элемента карточки продукта
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
        <img class="card_img" src="${product.image}" alt="card">
        <div class="card_info">
            <div class="card_title"><span>Модель:</span> ${product.name}</div>
            <p class="card_subtitle">${product.description}</p>
        </div>
    `;
    // Добавляем обработчик события клика на карточку
    card.addEventListener('click', () => displayModal(product));
    return card;
}

// Получаем элемент кнопки "close"
const closeModalBtn = document.querySelector('.close');

// Добавляем обработчик события клика для кнопки "close"
closeModalBtn.addEventListener('click', () => {
    // Устанавливаем стиль display в none, чтобы скрыть модальное окно
    modal.style.display = "none";
});














































document.querySelector('.burger').addEventListener('click', function () {
    this.classList.toggle('active');
})

document.addEventListener("DOMContentLoaded", function () {
    const toggleBtn = document.querySelector('.burger');
    const dropDownMenu = document.querySelector('.dropdown-menu');

    toggleBtn.onclick = function (event) {
        event.preventDefault();
        dropDownMenu.classList.toggle('open');
    }
});















// Функция для прокрутки вверх
function scrollToTop() {
    document.body.scrollTop = 0; // Для поддержки старых браузеров
    document.documentElement.scrollTop = 0; // Для современных браузеров
}

/* Показывать кнопки только при прокрутке вниз */
window.onscroll = function () {
    showScrollToTopButtons();
};

function showScrollToTopButtons() {
    var btn = document.getElementById("scrollToTopBtn");
    var btn2 = document.getElementById("scrollToTopBtn2");

    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        btn.style.display = "block";
        btn2.style.display = "block";
    } else {
        btn.style.display = "none";
        btn2.style.display = "none";
    }
}

function redirectToWhatsApp() {
    var message = "Привет! Я интересуюсь генераторами и комплектующими. Могли бы вы предоставить более подробную информацию?";
    var phoneNumber = "77077334337";
    var whatsappLink = "https://wa.me/" + phoneNumber + "?text=" + encodeURIComponent(message);

    window.location.href = whatsappLink;
}















const galleryContainer = document.querySelector('.gallery_container');
const galleryControlsContainer = document.querySelector('.gallery_controls');
const galleryControls = ['previous', 'next'];
const galleryItems = document.querySelectorAll('.gallery_item');

class Carousel {
    constructor(container, items, controls) {
        this.carouselContainer = container;
        this.carouselControls = controls;
        this.carouselArray = [...items];
        this.intervalId = null; // To store the interval ID for later clearing
        this.autoRotateDelay = 3000; // Set the delay for automatic rotation (in milliseconds)
    }

    updateGallery() {
        this.carouselArray.forEach(el => {
            el.classList.remove('gallery_item_1')
            el.classList.remove('gallery_item_2')
            el.classList.remove('gallery_item_3')
            el.classList.remove('gallery_item_4')
            el.classList.remove('gallery_item_5')
            el.classList.remove('gallery_item_6')
            el.classList.remove('gallery_item_7')
        })

        this.carouselArray.slice(0, 5).forEach((el, i) => {
            el.classList.add(`gallery_item_${i + 1}`);
        })
    }

    setCurrentState(direction) {
        if (direction.className == 'gallery_controls_previous') {
            this.carouselArray.unshift(this.carouselArray.pop())
        } else {
            this.carouselArray.push(this.carouselArray.shift())
        }
        this.updateGallery();
    }

    setControls() {
        this.carouselControls.forEach(control => {
            galleryControlsContainer.appendChild(document.createElement('button')).className = `gallery_controls_${control}`
            document.querySelector(`.gallery_controls_${control}`).innerText = control;
        });
    }

    useControls() {
        const trigger = [...galleryControlsContainer.childNodes];
        trigger.forEach(control => {
            control.addEventListener('click', e => {
                e.preventDefault();
                this.clearAutoRotate(); // Stop automatic rotation when manual control is used
                this.setCurrentState(control);
            })
        })
    }

    autoRotate() {
        this.intervalId = setInterval(() => {
            this.setCurrentState({ className: 'gallery_controls_next' }); // Simulate a click on the "next" button
        }, this.autoRotateDelay);
    }

    clearAutoRotate() {
        clearInterval(this.intervalId);
    }
}

const exampleCarousel = new Carousel(galleryContainer, galleryItems, galleryControls);

// exampleCarousel.setControls();
// exampleCarousel.useControls();
exampleCarousel.autoRotate(); // Add this line to start automatic rotation

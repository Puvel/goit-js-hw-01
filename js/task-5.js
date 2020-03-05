// Пользователь может оформить доставку товара к себе в страну, указав ее при посещении страницы в prompt.
// Учти, пользователь может ввести имя страны не только буквами нижнего регистра, а к примеру 'кИтАЙ'.

// Напиши скрипт который выводит сообщение о стоимости доставки в указанную страну.
// Обязательно используй switch. Формат сообщения: 'Доставка в [страна] будет стоить [цена] кредитов'.

// Но доставка есть не везде, если указанной страны нет в списке, то выводи в alert сообщение
// 'В вашей стране доставка не доступна'.

// Ниже приведен список стран и стоимость доставки.

// Китай - 100 кредитов
// Чили - 250 кредитов
// Австралия - 170 кредитов
// Индия - 80 кредитов
// Ямайка - 120 кредитов
'use strict';

const recipientCountry = prompt('Введите страну доставки:');

let country = recipientCountry.toLowerCase();

let costOfDelivery;

let messang;

switch (country) {
  case 'китай':
    costOfDelivery = 100;
    country = country[0].toUpperCase() + country.substring(1);
    messang = `Доставка в ${country} будет стоить ${costOfDelivery} кредитов`;
    break;

  case 'чили':
    costOfDelivery = 250;
    country = country[0].toUpperCase() + country.substring(1);
    messang = `Доставка в ${country} будет стоить ${costOfDelivery} кредитов`;
    break;

  case 'австралия':
    costOfDelivery = 170;
    country = country[0].toUpperCase() + country.substring(1);
    messang = `Доставка в ${country} будет стоить ${costOfDelivery} кредитов`;
    break;

  case 'индия':
    costOfDelivery = 80;
    country = country[0].toUpperCase() + country.substring(1);
    messang = `Доставка в ${country} будет стоить ${costOfDelivery} кредитов`;
    break;

  case 'ямайка':
    costOfDelivery = 120;
    country = country[0].toUpperCase() + country.substring(1);
    messang = `Доставка в ${country} будет стоить ${costOfDelivery} кредитов`;
    break;

  default:
    messege = 'В вашей стране доставка не доступна';
}

alert(messang);

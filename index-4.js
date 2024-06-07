
//      <!-- 1.Створити розмітку з кнопкою та текстовим полем. 
//   За допомогою JavaScript отримати доступ до кнопки та текстового поля за їх ідентифікаторами
//    та змінити текст на кнопці на значення текстового поля.-->

//  <!-- 2.Створити розмітку з заголовком та зображенням.
//   За допомогою JavaScript отримати доступ до зображення
//    та змінити значення атрибута "src" на шлях до іншого зображення. -->

// <!--  3.Створити розмітку з посиланням та зображенням.
//   За допомогою JavaScript отримати доступ до посилання
//    та змінити значення атрибута "href" на нову URL-адресу.
//     Також отримати доступ до зображення та додати новий атрибут "alt" з описом зображення.-->

//  <!-- 4.Створити розмітку зі списком елементів.
//   За допомогою JavaScript отримати доступ до першого елемента списку
//    та змінити його вміст на новий текст.  -->
    // 1
const button = document.getElementById('simple-button');
const textarea = document.getElementById('simple-area');
button.textContent = textarea.textContent;

// 2
const sword = document.getElementById('sword');
sword.src = 'https://www.nicepng.com/png/detail/154-1548050_minecraft-diamond-sword-diamond-sword.png';

// 3
const myLink  = document.getElementById('myLink');
const coldBlooded = document.getElementById('coldBlooded');
myLink.href = 'https://www.bing.com/';
coldBlooded.alt = 'gentleman-raptor';

// 4
// const firstListItem = document.body.firstElementChild

const firstListItem = document.querySelector('#myList li:first-child');
if (firstListItem) {
        firstListItem.textContent = 'Roll back!';
    }
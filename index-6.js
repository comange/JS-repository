
 const firstFill = document.getElementById('firstFill');
 const secondFill = document.getElementById('secondFill');
 const firstNumberFill = document.getElementById('firstNumberFill');
 const secondNumberFill = document.getElementById('secondNumberFill');
 const javaFill = document.getElementById('javaFill');
 const thirdNumberFill = document.getElementById('thirdNumberFill');
 const nameFill = document.getElementById('nameFill');
 const emailFill = document.getElementById('emailFill');
 const passwordFill = document.getElementById('passwordFill');
 const dynamicURL = 'https://sites.google.com/view/coffee-website/';
//     <!-- 1.Створити розмітку з двома текстовими полями та кнопкою.
//      При натисканні на кнопку перевіряти, чи обидва поля містять значення,
//       якщо так, то виводити повідомлення "Обидва поля заповнені",
//        якщо ні — "Не всі поля заповнені". --><!-- 2.Створити розмітку  з двома числовими полями та кнопкою.
//  При натисканні на кнопку перевіряти, чи сума значень полів більша за 10,
//   якщо так, то виводити повідомлення "Сума більша за 10",
//    якщо ні — "Сума менша або дорівнює 10". --><!-- 3.Створити розмітку  з текстовим полем та кнопкою.
//  При натисканні на кнопку перевіряти, чи введений текст містить слово "JavaScript",
//   якщо так, то виводити повідомлення "Текст містить слово JavaScript",
//    якщо ні — "Текст не містить слово JavaScript". --><!-- 4.Створити розмітку  з формою з полями введення та кнопкою.
//  При натисканні на кнопку перевіряти, чи введене число більше за 10 та менше за 20,
//   якщо так, то виводити повідомлення "Число входить в діапазон від 10 до 20",
//    якщо ні — "Число не входить в діапазон від 10 до 20". --><!-- 5.Створити розмітку  з формою з полями введення та кнопкою.
// При натисканні на кнопку перевіряти, чи введені дані правильно заповнені,
//   якщо так, то перенаправляти на іншу сторінку, якщо ні — виводити повідомлення про помилку.
//  Правильно заповнені дані: ім'я містить не менше 3 символів,
//   email містить символ @ та крапку після неї, пароль містить не менше 6 символів. -->
//        onclick="if (firstFill.value.trim() !== '' && secondFill.value.trim() !== '') {alert('Обидва поля заповнені')} else {alert('Не всі поля заповнені')}";
   
//   onclick="if (parseInt(firstNumberFill.value) + parseInt(secondNumberFill.value) > 10) {alert('Сума більша за 10')}
//    else {'Сума менша або дорівнює 10'}";
   
//    onclick="if (javaFill.value.includes('JavaScript')) {alert('Текст містить слово JavaScript')}
//     else {alert('Текст не містить слово JavaScript')}";

   
// onclick=" if (10 < thirdNumberFill && thirdNumberFill < 20) {alert('Число входить в діапазон від 10 до 20')}
//      else {alert('Число не входить в діапазон від 10 до 20')}";


//   onclick="if (nameFill.value.length >= 3 && emailFill.value.includes('@') && emailFill.value.includes('.') && passwordFill.value.length >= 6) {window.location.href = encodeURIComponent(dynamicURL)}
//      else {alert('Помилка, будь ласка, перевірте чи все правильно.')}"
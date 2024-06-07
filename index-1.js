/*
 * Напиши функцию changeCase(string) яка замінює регістр кожного символа в рядку на протилежний.
 * Наприклад, якщо рядок «JavaScript», то на виході повинно бути «jAVAsCRIPT».
 */

const changeCase = function (stringInput) {
    for (const character of stringInput) {
        if (character === character.toLowerCase()) {
            character.toUpperCase()
        } else {
            character.toLowerCase()
        }
    }
    return stringInput;
}

console.log(changeCase('qweRTY')); // QWErty
  console.log(changeCase('mAnGo')); // MaNgO
  console.log(changeCase('AjAx')); // aJaX
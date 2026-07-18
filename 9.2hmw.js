// Task 1
console.log("Task1");
let count = 1;
while(count !== 11){
    console.log(count);
    count++;
}
// Task 2
console.log("Task2");
count = 1;
while(count !== 11){
    if(count == 5){
        count++;
        continue;
    }
    if(count == 8){
        break;
    }
    console.log(count);
    count++;   
}

// Task 3
console.log("Task3");
count = 1;
do {
    console.log(count);
    count++;
}
while(count <= 5);

// Task 4
console.log("Task4");
while(true){
    let number = prompt("Enter a number(10 to stop): ")
    if(number == 10){
        break;
    }
    
}

// Task 5
console.log("Task5");
for(let i = 1; i <= 10;  i++){
    console.log(i);
}

// Task 6
console.log("Task6");
i = 1;
for (;;) {
    if (i > 100) {
        break;
    }
    i++;
    console.log("Этот цикл повторился 100 раз");
}

// Task 7
console.log("Task7");
let Numbers = [1, 2, 3, 4, 5];
for(i = 0; i <= Numbers.length-1; i++){
    console.log(Numbers[i]);
}

// Task 8
console.log("Task8");
console.log("for — используется, когда количество итераций известно заранее. Все части цикла (инициализация, условие и изменение счётчика) находятся в одной строке. Чаще всего применяется для перебора массива.")
console.log("while — используется, когда количество итераций заранее неизвестно. Выполняется, пока условие истинно, поэтому подходит для ожидания пользовательского ввода или выполнения кода до наступления определённого условия.")
// Task 9
console.log("Task9");
for(i = 10; i > 0; i--){
    console.log(i);
}

// Task 10
console.log("Task10");
for(i = 1; i <= 10; i++){

    if(i % 2 == 1){
        continue;
    }
    console.log(i);
    i++;
}





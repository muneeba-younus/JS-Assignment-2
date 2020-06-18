//Chapter 21-25 task# 1
var firstName = prompt("Enter your First Name:");
var lastName = prompt("Enter your Last Name:");
var fullName = firstName + " " + lastName;
alert("Welcome! " + fullName);


//Chapter 21-25 task# 2
var model = prompt("Enter your favorite Mobile Model:");
document.write("My Favorite Mobile Phone is: " + model + "<br> Length of String: " + model.length);


//Chapter 21-25 task# 3
var word = "Pakistani";
document.write("String is: " + word + "<br>" + "Index of 'n': " + word.indexOf('n'));


//Chapter 21-25 task# 4
var word = "Hello World";
document.write("String is: " + word + "<br>" + "Last Index of 'l': " + word.lastIndexOf('l'));


//Chapter 21-25 task# 5
var word = "Pakistani";
document.write("String is: " + word + "<br>" + "Character at index 3: " + word.charAt(3));


//Chapter 21-25 task# 6
var firstName = prompt("Enter your First Name:");
var lastName = prompt("Enter your Last Name:");
var fullName = firstName.concat(lastName);
alert("Welcome! " + fullName);


//Chapter 21-25 task# 7
var city1 = "Hyderabad";
var city2 = "Islamabad";
var result = city1.replace("Hyder", "Islam")
document.write("City: " + city1 + "<br>After replacement: " + result);


//Chapter 21-25 task# 8
var message = "Ali and Sami are best friends. They play cricket and football together.";
var result = message.replace(/and/g, "&");
document.write(result);


//Chapter 21-25 task# 9
var num = "472";
document.write("Value: " + num + " <br>Type: " + typeof (num));
document.write("<br>Value: " + num + " <br>Type: " + typeof (Number(num)));


//Chapter 21-25 task# 10
var input = prompt("Enter any message:");
document.write("User Input: " + input + "<br>Upper Case: " + input.toUpperCase())


//Chapter 21-25 task# 11
var input = prompt("Enter message:");
document.write("User Input: " + input)
var firstChar = input.slice(0, 1);
firstChar = firstChar.toUpperCase();
var otherChar = input.slice(1);
otherChar = otherChar.toLowerCase();
var input = firstChar + otherChar;
document.write("<br>Title Case: " + input)


//Chapter 21-25 task# 12
var num = 35.36;
document.write("Number: " + num);
num = num.toString();
num = num.replace('.', "");
document.write("<br>Result: " + num);


//Chapter 21-25 task# 13
var username = prompt("Enter your username:");
for (var i = 0; i < username.length; i++) {
    var code = username.charCodeAt(i);
    if (code === 33 || code === 44 || code === 46 || code === 64) {
        alert("Please enter a valid username.");
    }
}

//Chapter 21-25 task# 14
var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var input = prompt("Welcome to our bakery. What do you want to order?");
input = input.toLowerCase();
if (A.indexOf(input) != -1)
    document.write(input + " is <b>available</b> at index " + A.indexOf(input) + " in our bakery");

else
    document.write("We are sorry." + input + " is <b>not available</b> in our bakery");


//Chapter 21-25 task# 15
var password = prompt("Enter Password")
var numbers = /[0-9]/g;
var alphabets = /[a-z]/g;
password = password.toLowerCase();

if (password.length < 6 || password[0] >= 0 && password[0] <= 9 || password.match(numbers) == null || password.match(alphabets) == null) {
    alert("Invalid Password!");
    password = prompt("Enter valid Password");
}


//Chapter 21-25 task# 16
var university = "University of Karachi";
var result = university.split("");
result = result.toString();
var finalResult = result.replace(/,/g, "<br>")
document.write(finalResult)


//Chapter 21-25 task# 17
var string = prompt("Enter message: ");
var char = string.charAt(string.length - 1);
document.write("User Input: " + string + "<br>Last Character: " + char);


//Chapter 21-25 task# 18
var pos = 0, num = 0, i = 0;
var text = "The quick brown fox jumps over the lazy dog";
document.write("Text: " + text);
text = text = text.toLowerCase();

while (pos != -1) {
    pos = text.indexOf("the", i + 1);
    num++;
    i = pos;
}
document.write("<br>There are " + num + " occurence(s) of word 'the'")


//Chapter 26-30 task# 1
var number = prompt("Enter any positive number:");
document.write("Number: " + number + "<br>Round off value: " + Math.round(number) + "<br>Floor Number:" + Math.floor(number) +
    "<br>Ceil Number: " + Math.ceil(number));


//Chapter 26-30 task# 2
var number = prompt("Enter any negative number:");
document.write("Number: " + number + "<br>Round off value: " + Math.round(number) + "<br>Floor Number:" + Math.floor(number) +
    "<br>Ceil Number: " + Math.ceil(number));


//Chapter 26-30 task# 3
var number = prompt("Enter any number to show its absolute value:");
document.write("Number: " + number + "<br>Absolute Value: " + Math.abs(number));


// Chapter 26-30 task# 4
var randomNum = Math.random();
var diceValue = (randomNum * 6) + 1;
var result = Math.floor(diceValue);

document.write("Random dice Value: " + result)


//Chapter 26-30 task# 5
var Num = Math.random();
var tossValue = (Num * 2) + 1;
var result = Math.floor(tossValue);
if (result == 1)
    document.write(result + "<br>random coin value: Heads")
else
    document.write(result + "<br>random coin value: Tails")



//Chapter 26-30 task# 6
var randomNum = Math.random();
var value = (randomNum * 100) + 1;
var result = Math.floor(value);
document.write("Random number between 1 and 100 is: " + result)



// Chapter 26-30 task# 7
var inputWeight = prompt("Enter your weight:");
inputWeight = (inputWeight.slice(0, 4));
document.write("The weight of user is " + inputWeight + " kilograms")


// Chapter 26-30 task# 8
var randomNumber = (Math.random() * 10 + 1);
var secretNumber = Math.floor(randomNumber);
var userEnteredSecretNumber = prompt("Guess the Secret Number between 1 and 10: ");
if (userEnteredSecretNumber == secretNumber) {
    alert("Correct! The Secret Number is " + secretNumber + ".");
}
else if (userEnteredSecretNumber == secretNumber + 1) {
    alert("Close enough to the correct answer.");
}
else {
    alert("Wrong Guess! The Secret Number is " + secretNumber + ".");
}


// Chapter 31-34 task# 1
document.write(new Date());


// Chapter 31-34 task# 2
var monthsName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var now = new Date();
var month = now.getMonth();
var nameOfMonth = monthsName[month];
document.write("Current Month is: " + nameOfMonth)


// Chapter 31-34 task# 3
var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var now = new Date();
var theDay = now.getDay();
var nameOfToday = dayNames[theDay];
document.write("Today is " + nameOfToday);


// Chapter 31-34 task# 4
var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var now = new Date();
var theDay = now.getDay();
var nameOfToday = dayNames[theDay];
if (nameOfToday === "Sat" || nameOfToday === "Sun")
    document.write("“It’s Fun day");
else
    document.write("Today is " + nameOfToday);


// Chapter 31-34 task# 5
var now = new Date();
var theDate = now.getDate();
if (theDate < 16)
    document.write("First fifteen days of the month");
else
    document.write("Last days of the month");


// Chapter 31-34 task# 6
var minutes = 1000 * 60;
var date = new Date();
var elapsed = date.getTime();
var result = Math.round(elapsed / minutes);
document.write("Current Date: " + date + "<br>Elapsed milliseconds since January 1, 1970: " + elapsed +
    "<br>Elapsed minutes since January 1, 1970: " + result)


// Chapter 31-34 task# 7
var date = new Date();
var hours = date.getHours();
if (hours <= 12)
    document.write("It's AM");
else
    document.write("It's PM");


// Chapter 31-34 task# 8
var laterDate = new Date();
laterDate.setFullYear(2020, 11, 31);
document.write("Later Date: " + laterDate);


// Chapter 31-34 task# 9
var date1 = new Date("06/18/2015");
var date2 = new Date();
var Difference_In_Time = date2.getTime() - date1.getTime();
var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);

document.write(Math.floor(Difference_In_Days) + " days have passed since 1st Ramadan, 2015");


// Chapter 31-34 task# 10
date1 = new Date();
date2 = new Date("Jan 01, 2015 00:00:00")
var seconds = Math.floor(Math.abs(date1 - date2) / 1000);
document.write("On referece Date: " + date2 + "<br>" + seconds + " had passed since beginning of 2015");


// Chapter 31-34 task# 11
var d = new Date();
document.write("Current Date: " + d)
d.setHours(d.getHours() - 1);
document.write("<br> 1 hour ago, it was: " + d);


// Chapter 31-34 task# 12
var d = new Date();
document.write("Current Date: " + d)
d.setFullYear(d.getFullYear() - 100)
document.write("<br> 1 hour ago, it was: " + d);


// Chapter 31-34 task# 13
var age = prompt("Enter your age:");
var d = new Date();
var year = d.getFullYear() - age;
document.write("Your Age is: " + age + "<br>Your Birth Year is: " + year);



//Chapter 31-34 task# 14
var customerName = prompt("Enter Your Name:");
customerName = customerName.toUpperCase();
var date = new Date();
var monthsName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var month = date.getMonth();
var units = 412;
var charges = 18;

var NetAmount = units * charges;
var LatePayment = 240;
var GrossAmount = NetAmount + LatePayment;
document.write("<h1>K-Electric Bill</h1><br>Customer Name: <b>" + customerName + "</b><br>Month: <b>" + monthsName[month] +
    "</b><br>Number of Units: <b>" + units + "</b><br>Charges Per Unit: <b>" + charges + "</b><br><br>Net Amount Payable (within Due Date): <b>" +
    NetAmount + "</b><br>Late Payment Surcharge: <b>" + LatePayment + "</b><br>Gross Amount Payable (after Due Date): <b>" + GrossAmount)


// Chapter 35-38 task# 1
function date() {
    var d = new Date();
    document.write(d)
}

date();


// Chapter 35-38 task# 2
function greeting(a, b) {
    document.write(a + " " + b)
}
greeting("Muneeba", "Younus")


// Chapter 35-38 task# 3
function sum(a, b) {
    return (a + b);
}
var a = Number(prompt("Enter Number 1"))
var b = Number(prompt("Enter Number 2"))
var result = sum(a, b);
document.write(result)


// Chapter 35-38 task# 4
function calculator(n1, n2, op) {
    switch (op) {
        case "+": {
            return n1 + n2;
        }
        case "-": {
            return n1 - n2;
        }
        case "*": {
            return n1 * n2;
        }
        case "/": {
            return n1 / n2;
        }
    }
}
var n1 = Number(prompt("Enter value 1"))
var n2 = Number(prompt("Enter value 2"))
var op = prompt("Enter operator")
var result = calculator(n1, n2, op);
document.write(n1 + op + n2 + " = " + result)


// Chapter 35-38 task# 5
function square() {
    var value = prompt("Enter any number to get its square value: ");
    document.write("Square of " + value + " is " + value * value)
}
square();


// Chapter 35-38 task# 6
function calculateFactorial(num) {
    var factorial = 1;
    for (var i = 1; i <= num; i++)
        factorial = factorial * i;

    document.write("Factorial of " + num + " is " + factorial)
}
var num = prompt("Enter value to calculate factorial: ")
calculateFactorial(num);


// Chapter 35-38 task# 7
function series(startingValue, endingValue) {
    for (var i = startingValue; i <= endingValue; i++)
        document.write(i + " ")
}
var startingValue = prompt("Enter Starting Value: ")
var endingValue = prompt("Enter Ending Value: ")
series(startingValue, endingValue);


// Chapter 35-38 task# 8
function calculateHypotenuse(base, perpendicular) {
    var baseSquare = calculateSquare(base);
    var perpendicularSquare = calculateSquare(perpendicular);
    var hypotenuse = Math.sqrt(baseSquare + perpendicularSquare);

    document.write("Base: " + base + "<br>Perpendicular: " + perpendicular + "<br>Hypotenuse: " + hypotenuse)

}
function calculateSquare(a) {
    a = a * a;
    return a
}

var base = Number(prompt("Enter Base Value:"))
var perpendicular = Number(prompt("Enter Perpendicular Value:"));

calculateHypotenuse(base, perpendicular);



// Chapter 35-38 task# 9
//   (i) arguments as variable
function calculateArea(height, width) {
    var area = height * width;
    document.write("Area of the triangle is: " + area)
}
var height = prompt("Enter height:")
var width = prompt("Enter width")

calculateArea(height, width);


//       (ii) arguments as value
function calculateArea(h, w) {
    var area = h * w;
    document.write("Area of the triangle is: " + area)
}
var height = prompt("Enter height:")
var width = prompt("Enter width")

calculateArea(height, width);


// Chapter 35-38 task# 10
function isPalindrome(str) {
    var check = "";
    for (var i = str.length - 1; i >= 0; i--) {
        check += str[i]
    }
    if (str === check) {
        document.write(str + " is Palindrome")
    }
    else {
        document.write(str + " is not Palindrome")
    }
}
var string = prompt("Enter any Palindrome word to check")
isPalindrome(string)


// Chapter 35-38 task# 11
function titleCase(str) {
    var splitStr = str.toLowerCase().split(' ');
    for (var i = 0; i < splitStr.length; i++) {
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
    return splitStr.join(' ');
}
document.write("Capitalized String: " + titleCase("the quick brown fox"));


// Chapter 35-38 task# 12
function longestWord(string) {
    var str = string.split(" ");
    var longest = 0;
    var word = null;
    for (var i = 0; i < str.length; i++) {
        if (longest < str[i].length) {
            longest = str[i].length;
            word = str[i];
        }
    }
    document.write("Longest Word is: " + word)
}
longestWord("Web Tutorial Development ")


// Chapter 35-38 task# 13
function counter(str, l) {
    str = str.toLowerCase();
    var count = 0;
    for (var i = 0; i < str.length; i++) {
        if (str.charAt(i) == l)
            count++;
    }
    document.write("Number of occurences of <b>'" + l + "' </b>in the string: <b>'" + str + "' </b>is: " + count);
}

counter("muneeba", "e")


// Chapter 35-38 task# 14
function calcCircumference(radius) {
    document.write("Radius: " + radius + "<br>Circumference of Circle: " + 2 * Math.PI * radius)
}
function calcArea(radius) {
    document.write("Radius: " + radius + "<br>Area of Circle: " + Math.PI * radius * radius)
}

var radius = Number(prompt("Enter radius:"));
calcCircumference(radius);
calcArea(radius);
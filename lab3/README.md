# Lab 3

## Todo:

*Codesandbox link:* https://codesandbox.io/s/todo-marie-serroyen-yiwbro?file=/classes/App.js

## ES2017 .padEnd() & .padStart():

*Codepen link examples:* https://codepen.io/marieserroyen/pen/dyJbmVN

These methodes pad a string to a certain length with another string. 

*.padEnd()* <br/>
You can use this feature if you need to put a string in a certain length field. If you have a name field that is 10 characters long but your name is Marie, you still need to fill 5 characters. With the following code you will add 5 spaces behind your name. <br/>
    **Example:**<br/>
    let name = 'Marie'.padEnd(10);<br/>
    console.log(name);  <br/>
    Result: “Marie     “<br/>
If your name is 4 characters long this methode wil add 6 spaces behind your name. <br/>

*.padStart()* is the opposite of .pasEnd() and will add spaces in front of your name. </br>
**Example:**</br>
let name = 'Marie'.padStart(10);</br>
console.log(name);  </br>
Result: “     Marie“</br>

You don’t need to add spaces to the string, you can also give it an argument which is then used to pad the string. </br>
**Example:**</br>
let name = 'Marie'.padEnd(10, “*”);</br>
console.log(name);  </br>
Result: “Marie*****“</br>





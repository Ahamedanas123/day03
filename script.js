//iteration for in loop in json
var student = {
    "name" : "anas",
    "age" : "21",
    "mail":"abc@gmail.com"
}
for ( var i in student){
console.log(i,student[i])}

// iteration for loop in json
var student = [{
    "name" : "anas",
    "age" : "21",
},
{
    "name" : "ahamed",
    "age" : "21",
}];
for ( var i=0;i<student.length;i++){
console.log(student[i].name,student[i].age)}

//create resume using json

var student = {
    "name" : "Ahamed Anas Ali A",
    "age" : "21",
    "gender" : "male",
    "education" : "B.E mech",
    "cgpa" : "7.8",
    "skill set" : "javascript",
    "mail":"ahamedanasali0@gmail.com"
}
for ( var i in student){
console.log(i,student[i])}

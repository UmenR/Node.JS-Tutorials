/**
 * Created by ummi on 4/25/2017.
 */

var name= "umen";

function greetSin(somename){
    console.log("Ayubowan "+somename+"!!!")
}

function greetEng(somename) {
    console.log("Hello "+somename+"!!!")
}



exports.username = name;
exports.SinhalaGreeting = greetEng;
module.exports.EnglishGreeting = greetSin;
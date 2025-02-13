function showAlert(){
    alert('Hello! This is a JavaScript alert');
}
function changeText(){
    document.getElementById('text').innerHTML = 'Text Changed';
}
function handleClick(){
    document.getElementById('clickMessage').innerHTML = "Button Clicked";
}
function validateForm(){
    let name = document.getElementById('name').value;
    if(name ==''){
        alert('Please enter your name.');
        return false;
    }
    return true;
}
function checknumber(){
    let num = parseInt(document.getElementById('number Input').value);
    let result = num > 10 ? 'Greater than 10' : '10 or less';
    document.getElementById('numberResult').innerHTML = result;
}
function checkAge(){
    let age = parseInt(document.getElementById('ageInput').value);
    if(age >= 18) {
        document.getElementById('ageResult').innerHTML = "You are an adult";
    } else {
        document.getElementById('ageResult').innerHTML = "You are an minor";
    }
}
function checknumber(){
    let num = parseInt(document.getElementById('numberInput').value);
    let result = num > 10 ? 'Greater than 10' : '10 0r less';
    document.getElementById('numberResult').innerHTML = result;
}
function checkAge() {
    let age = parseInt(document.getElementById('ageInput').value);
    if(age >= 18) { 
        document.getElementById('ageResult').innerHTML = 'You are an adult';
     } else {
        document.getElementById('ageResult').innerHTML = 'You are an minor';
     }
     
}
function displayArrayItem() {
    let items = ['Apple','Banana','Cherry','Date','Mango'];
    let index = parseInt(document.getElementById('arrayIndex').value);
    let result = items[index] || 'Invalid index';
    document.getElementById( 'arrayResult' ).innerHTML = result;
}
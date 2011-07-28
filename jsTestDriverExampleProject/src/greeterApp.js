/**
 * 
 */
myapp={};
myapp.Greeter= function(){};

myapp.Greeter.prototype.greet = function(name){
	return "Hello "+name+"!";
};
suppressAlert=true;

function checkNumbersOnly(element,message){
    var numericExpression= /^[0-9]+$/;
    if(element.value.match(numericExpression)){
        return true;
    }else{
       return showAlert(element,message);        
    }
}
function checkElementValue(element){
	return element.value;
}
function checkMsg(msg){
	return msg;
}
function simpleNumbersOnly(number){
	var numericExpression=/^[0-9]+$/;
	var result=false;
	(number.match(numericExpression))?result=true:result=false;
	return result;
	
}

function checkLettersOnly(element,message){
    var letterExpression =/^[a-zA-Z]+$/;
    if(element.value.match(letterExpression)){
        return true;
    }else{
        return showAlert(element,message);
    }
}
function checkLength(element,minVal, maxVal,message){
    if(element.value.length >= minVal && element.value.length <= maxVal){
        return true;
    }else{
        return showAlert(element,message);
    }
}
function checkEmail(element,message){
    var validExpression=/^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-Z0-9]{2,4}$/;
    if(element.value.match(validExpression)){
        return true;
    }else{
        return showAlert(element,message);
    }
}
function checkSelection(element,badMatch,message){
    
    if(element.value==badMatch){
        return showAlert(element,message);
    }else{
        return true;
    }
}
function checkAlphaNumeric(element,message){
    var alphaNumeric=/^[0-9a-zA-Z\s]+$/;
    if(element.value.match(alphaNumeric)){
        return true;
    }else{
        return showAlert(element,message);
    }
}

function showAlert(element,message){
	if(!suppressAlert){
    alert(message);
    element.focus();
}
    return false;
}
/**
 * 
 */
myapp={};
myapp.Greeter= function(){};

myapp.Greeter.prototype.greet = function(name){
	return "Hello "+name+"!";
};

function checkNumbersOnly(element,message){
    var numericExpression= /^[0-9]+$/;
    if(element.value.match(numericExpression)){
        return true;
    }else{
       return showAlert(element,message);        
    }
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


checkAlphaNumericTest = TestCase('checkAlphaNumericTest');

checkAlphaNumericTest.prototype.setUp= function(){
	element=document.createElement('p');
	element.value='abcDEDfe';
	elementFail=document.createElement('p');
	elementFail.value='123456&';
	document.body.appendChild(element);
	document.body.appendChild(elementFail);
	msg='Testing CheckLength';
	
};

checkAlphaNumericTest.prototype.testCheckAlphaNumeric= function(){
	assertTrue(checkAlphaNumeric(element,msg));
	assertFalse(checkAlphaNumeric(elementFail, msg));
	
};
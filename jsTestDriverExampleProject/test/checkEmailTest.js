/**
 * 
 */

checkEmailTest = TestCase('checkEmailTest');

checkEmailTest.prototype.setUp= function(){
	element=document.createElement('p');
	element.value='david.bethke@gmail.com';
	elementFail=document.createElement('p');
	elementFail.value='david@bethke@gmail.com';
	document.body.appendChild(element);
	document.body.appendChild(elementFail);
	msg='Testing checkEmail';
	
};

checkEmailTest.prototype.testCheckEmail= function(){
	assertTrue(checkEmail(element,msg));
	assertFalse(checkEmail(elementFail, msg));
	
};
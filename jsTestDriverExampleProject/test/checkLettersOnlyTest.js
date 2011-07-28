/**
 * 
 */

checkLettersOnlyTest = TestCase('checkLettersOnlyTest');

checkLettersOnlyTest.prototype.setUp= function(){
	element=document.createElement('p');
	element.value='abcDEDfe';
	elementFail=document.createElement('p');
	elementFail.value='123456';
	document.body.appendChild(element);
	document.body.appendChild(elementFail);
	msg='Testing checkLettersOnly';
	
};

checkLettersOnlyTest.prototype.testCheckLettersOnly= function(){
	assertTrue(checkLettersOnly(element,msg));
	assertFalse(checkLettersOnly(elementFail, msg));
	
};
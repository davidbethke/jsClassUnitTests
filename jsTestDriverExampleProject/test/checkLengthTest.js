/**
 * 
 */
/**
 * 
 */

checkLengthTest = TestCase('checkLengthTest');

checkLengthTest.prototype.setUp= function(){
	element=document.createElement('p');
	element.value='abcDEDfe';
	elementFail=document.createElement('p');
	elementFail.value='123456';
	document.body.appendChild(element);
	document.body.appendChild(elementFail);
	msg='Testing CheckLength';
	
};

checkLengthTest.prototype.testCheckLength= function(){
	assertTrue(checkLength(element,1,8,msg));
	assertFalse(checkLength(elementFail,1,5, msg));
	
};
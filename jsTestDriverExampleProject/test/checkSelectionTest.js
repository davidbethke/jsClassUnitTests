/**
 * 
 */

checkSelectionTest = TestCase('checkSelectionTest');

checkSelectionTest.prototype.setUp= function(){
	element=document.createElement('p');
	element.value='abcDEFghi';
	elementFail=document.createElement('p');
	elementFail.value='123456';
	document.body.appendChild(element);
	document.body.appendChild(elementFail);
	msg='Testing checkSelection';
	badMatch='123456';
	
};

checkSelectionTest.prototype.testCheckSelection= function(){
	assertTrue(checkSelection(element,badMatch,msg));
	assertFalse(checkSelection(elementFail,badMatch, msg));
	
};
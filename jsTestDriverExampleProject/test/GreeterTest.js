/**
 * 
 */
/**
 * 
 */

GreeterTest = TestCase("GreeterTest");

GreeterTest.prototype.setUp=function(){
	console.log("Begin:sertup");
	
};

GreeterTest.prototype.testGreet = function(){
	var greeter = new myapp.Greeter();
	assertEquals("Hello World!",greeter.greet("World"));
};

checkNumbersOnlyTest=TestCase("checkNumbersOnlyTest");

checkNumbersOnlyTest.prototype.testCheckNumbersOnlyTest= function(){
	
		var text=document.createTextNode('123456');
		//var element=document.createElement('div');
		//element.id='testElement';
		//element.appendChild(text);
		/*:DOC element=<div>123456</div> */
		//document.getElementsByTagName('div').appendChild(text);
		//element.appendChild(text);
		//document.body.appendChild(element);
		var msg= 'this is a message';
	
		assertTrue(checkNumbersOnly(element,msg));
		
};

checkMsgTest = TestCase('checkMsgTest');

checkMsgTest.prototype.testCheckMsg=function(){
	var msg='Message';
	assertEquals('Message',checkMsg(msg));
};

simpleNumbersOnlyTest = TestCase('simpleNumbersOnlyTest');

simpleNumbersOnlyTest.prototype.testSimpleNumbersOnly=function(){
	var number='12345';
	//assertEquals(true,simpleNumbersOnly(number));
	assertTrue(simpleNumbersOnly(number));
	
};
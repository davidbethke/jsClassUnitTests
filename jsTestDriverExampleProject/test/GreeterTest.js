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
	
		var element=document.createTextNode('123456');
		document.body.appendChild(element);
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
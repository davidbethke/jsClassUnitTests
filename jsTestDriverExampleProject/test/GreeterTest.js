/**
 * 
 */
/**
 * 
 */

GreeterTest = TestCase("GreeterTest");

GreeterTest.prototype.setUp=function(){
	console.log("Begin:sertup");
	var text=document.createTextNode('123456');
	var element=document.createElement('div');
	element.id='testElement';
	element.appendChild(text);
	
	
};

GreeterTest.prototype.testGreet = function(){
	var greeter = new myapp.Greeter();
	assertEquals("Hello World!",greeter.greet("World"));
};

checkNumbersOnlyTest=TestCase("checkNumbersOnlyTest");

checkNumbersOnlyTest.prototype.testCheckNumbersOnlyTest= function(){
	
		text=document.createTextNode('123456');
		 element=document.createElement('p');
		element.id='testElement';
		//element.appendChild(text);
		element.value='123456';
		
		div = document.createElement('div');
		div.setAttribute('id', 'foo');
		var p = document.createElement('p');
		div.appendChild(p);
		p.innerHTML = "bar";
		div.id = 'foo';
		
		  
		  document.body.appendChild(element);
		  //$("p").add("div");
		  /*:DOCfoo=<div><p>bar</p></div>*/
		
		//document.getElementsByTagName('div').appendChild(text);
		//element.appendChild(text);
		//document.body.appendChild(element);
		var msg= 'this is a message';
		//assertNotNull(document.getElementById('testElement'));
		//assertEquals('123456',checkElementValue(element));
		assertTrue(checkNumbersOnly(element, msg));
		//assertTrue(checkNumbersOnly(element,msg));
		
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
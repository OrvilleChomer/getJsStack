<!DOCTYPE html>
<html lang="en">

	<head>
		<title>JS Stack Demo</title>
		<meta name = "viewport" content = "user-scalable=no, width = device-width">
		<meta name="apple-mobile-web-app-capable" content="yes">		
		<meta http-equiv="PRAGMA" content="NO-CACHE" />
	</head>
	
	<body style="margin-left:80px;">
		<h1>JavaScript Stack Demo</h1>
		
		<p>It can be handy to be able to get an object containing JavaScript's current
		call stack.
		</p>
		<p>
		Can be useful debugging code when the browser's call stack viewer is just not 
		cutting it!
		
		<br><br>This demo:
		<ul>
		 	<li>makes multiple JavaScript function calls (including doing some recursion)</li>
		 	<li>and then calls the:   getJsStack()   function to get the call stack data</li>
		 	<li>and finally, it takes that data and displays in as some table output</li>
		</ul>
		<p>You can find it in the following Github repo:<br>
		<a href="https://github.com/OrvilleChomer/getJsStack" target="getJsStack">https://github.com/OrvilleChomer/getJsStack</a>
		</p>
		<p>
		Press the <i>Demonstrate Function</i> button below to see it work:
		</p>
		<button onclick="doDemo1()">Demonstrate Function</button>
		
		<div id="results"></div>
		
		<script src="./stackDemo.js"></script>
		<script src="./getJsStack.js"></script>
	</body>
</html>
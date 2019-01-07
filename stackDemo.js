   /***************************************************************
   
      Github Repo:   https://github.com/OrvilleChomer/getJsStack
      
      Released:      Monday, Jan 7, 2019
      
      File:          stackDemo.js
      
      
      works along with "index.php" to demonstrate the usage of
      the:     getJsStack()   function.
   
	***************************************************************/	

	function doDemo1() {
		anotherFunction();
	} // end of function doDemo1()
	
	
	
	
	function anotherFunction() {
		andAnotherFunction();
	} // end of function anotherFunction()
	
	
	
	function andAnotherFunction() {
		doSomeRecursion(0);
	} // end of function andAnotherFunction()	
	
	
	
	function doSomeRecursion(nLevel) {
		nLevel = nLevel + 1;
		
		if (nLevel < 10) {
			doSomeRecursion(nLevel);
		} else {
			var stackInfo = getJsStack();
			outputResults(stackInfo);
		} // end if
	} // end of function doSomeRecursion()
	
	
	
	function outputResults(stackInfo) {
		var results = document.getElementById("results");
		var s=[];
		var nMax = stackInfo.stackByIndex.length;
		var n, stackEntry;
		
		s[s.length] = "<table border='1'>";
		s[s.length] = "<tr>";
		s[s.length] = "<td>stackInfo.timestamp:</td>";
		s[s.length] = "<td>"+stackInfo.timestamp+"</td>";
		s[s.length] = "</tr>";
		s[s.length] = "</table>";
		
		s[s.length] = "<table border='1'>";
		s[s.length] = "<tr>";
		s[s.length] = "<td><b>.funcName</b></td>";
		s[s.length] = "<td><b>.jsFileUrl</b></td>";
		s[s.length] = "<td><b>.lineNum</b></td>";
		s[s.length] = "<td><b>.column</b></td>";
		s[s.length] = "<td><b>.stackDepth</b></td>";
		s[s.length] = "</tr>";
		
		for (n=0;n<nMax;n++) {
			stackEntry = stackInfo.stackByIndex[n];
			
			s[s.length] = "<tr>";
			s[s.length] = "<td>"+stackEntry.funcName+"</td>";
			s[s.length] = "<td>"+stackEntry.jsFileUrl+"</td>";
			s[s.length] = "<td align='right'>"+stackEntry.lineNum+"&nbsp;</td>";
			s[s.length] = "<td align='right'>"+stackEntry.column+"&nbsp;</td>";
			s[s.length] = "<td align='right'>"+stackEntry.stackDepth+"&nbsp;</td>";
			s[s.length] = "</tr>";			
		} // next n
		
		s[s.length] = "</table>";
		
		results.innerHTML = s.join("");
	} // end of function ouputResults()
	
   /***************************************************************
   
      Github Repo:   https://github.com/OrvilleChomer/getJsStack
      
      Released:      Monday, Jan 7, 2019
      
      File:          getJsStack.js
   
	***************************************************************/	





	
   /***************************************************************
   
   	   Call this function in your code when you need the call
   	   stack data as it currently stands.
   	   
   	   Returns an object which has these properties:
   	   
   	      .timestamp        - when this function was called for this info
   	      .stackByIndex[]   - an indexed array of {stackEntry} objects.
   	      
   	   Each {stackEntry} object has the following properties:
   	    
   	      .funcName         - name of the function that was called.
   	      
   	      .jsFileUrl        - path to the file that contains the line
   	                          of code that is calling the function.
   	     
   	      .stackDepth       - what level down in the stack is this call.
   	      
   	      .lineNum          - the line# in the file where the function is being called.
   	      
   	      .column           - column# in file where function call starts at.
   
	***************************************************************/	
	function getJsStack() {
		try {
			thisWillThrowAnError.everyTime();
		} catch(err) {
			var stackDta = err.stack.split("\n");
			var stackInfo = {};
			var stack = [];
			var nMax = stackDta.length;
			var sValue,nPos,sValue2;
			var n,stackEntry;
			
			stackInfo.timestamp = new Date();
			
			if (nMax>1) {
				for (n=1;n<nMax;n++) {
					sValue = stackDta[n];
					stackEntry = {};
					stackEntry.funcName = sValue.split("@")[0];
					sValue = sValue.split("@")[1];
					stackEntry.jsFileUrl = "";
					stackEntry.stackDepth = nMax - n;
					
					nPos = sValue.indexOf("?");
					
					if (nPos > -1) {
						stackEntry.jsFileUrl = sValue.substr(0,nPos);
					} // end if
					
					sValue = sValue.split(":");
					
					if (stackEntry.jsFileUrl === "") {
						// protocol plus rest of main url
						sValue2 = sValue[0] + ":" + sValue[1];
						
						if (sValue.length-2 > 2) {
							sValue2 = sValue2 + ":" + sValue[2]; // handle port if there
						} // end if
						
						stackEntry.jsFileUrl = sValue2;
					} // end if
					
					
					stackEntry.column = sValue[sValue.length-1]-0;
					stackEntry.lineNum = sValue[sValue.length-2]-0;
					stack[stack.length] = stackEntry;
				} // next n
			} // end if
			
			stackInfo.stackByIndex = stack.reverse();
			
			return stackInfo;
		} // end try/catch
	} // end of function getJsStack() 
(function(){
	
	'use strict';

	var generateTable = function(){

		var count 	=0,
			content = {
				recipient:"",
				title:"",
				messageBody:""
			},
			colCount = Object.keys(content).length;
		var table = document.getElementsByClassName("dash-board");
		
		var row,
			content.recipient = document.getElementsByClassName("recipent"),
			content.title = document.getElementsByClassName("notice-title"),
			content.messageBody = document.getElementsByClassName("message-body");
		
		while(count < colCount){
			row = table.insertRow(-),
			var cell = row.insertCell(-1);
			Object.entries(content).forEach{
				cell.innerHTML = value;	
			}
			 count++;
		}
		return table;
	};
})();
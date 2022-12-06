var input = document.querySelector("#textbox");
input.focus();// when refreshed
var queue = ["calc-1","calc-2","calc-3","calc-4","calc-5"]; //for history
var clear = document.querySelector("#clear"); //clear option for calc
clear.addEventListener("click" , function(){  //listener for clear button in calc
	input.value = "";
})

var buttons = document.querySelectorAll(".button");  
buttons.forEach(function(currentBtn){  //listeners for buttons
	currentBtn.addEventListener("click" , function(currentBtn){
		var currentInp = input.value;
		console.log(currentInp);
		if(this.value=="space"){
			input.value = input.value + " ";
		}
		else if(this.value!="="){
			input.value = input.value + this.value;
		}
		if(currentInp==""){
			input.value = this.value;
			console.log(input.value);
		}
		input.focus();
		if(this.value == "="){
		var val = input.value;
 	    var arr = val.split(" ");
		console.log(input.value);
		console.log(arr);
		var op1 = parseFloat(arr[0]);
		var opt = arr[1];
		var op2 = parseFloat(arr[2]);
		switch(opt){
			case "+":
				var res = op1+op2;
				input.value = res;
				break;
			case "-":
				var res = op1-op2;
				input.value = res;
				break;
			case "*" :
				var res = op1*op2;
				input.value = res;
				break;
			case "/" :
				var res = op1/op2;
				input.value = res;
				break;
			default :
				var res = "check the rules first! :)"
		}
		queue[4] = queue[3];
		queue[3] = queue[2];
		queue[2] = queue[1]; 
		queue[1] = queue[0];
		queue[0] = val+" = "+res;
		document.querySelector("#calc1").innerHTML = queue[0];
		document.querySelector("#calc2").innerHTML = queue[1];
		document.querySelector("#calc3").innerHTML = queue[2];
		document.querySelector("#calc4").innerHTML = queue[3];
		document.querySelector("#calc5").innerHTML = queue[4];
	}
	})
});



input.addEventListener("keyup" , function(event){ //listeners for key presses
 	if(event.key=="Escape"){                      // here keyup event is used because, keypress doesn't detect 
 		input.value = "";                         // backspace or escape or enter which are essential 
 	}                                             // for the calculator
	if(event.key=="Enter" || event.key=="="){
		var val = input.value;
 	    var arr = val.split(" ");
 	    console.log(event.key);
 	    console.log(arr);
		var op1 = parseFloat(arr[0]);
		var opt = arr[1];
		var op2 = parseFloat(arr[2]);
		switch(opt){
			case "+":
				var res = op1+op2;
				input.value = res;
				break;
			case "-":
				var res = op1-op2;
				input.value = res;
				break;
			case "*" :
				var res = op1*op2;
				input.value = res;
				break;
			case "/" :
				var res = op1/op2;
				input.value = res;
				break;
			default :
				var res = "check the rules first! :)"     //for default input
		}
		queue[4] = queue[3]                               // for queue structure. You can even use loops to 
		queue[3] = queue[2];                              // make it happen but writing it in a sequence of
		queue[2] = queue[1];                              // steps made it easier to understand.
		queue[1] = queue[0];
		queue[0] = val+" : "+res;
		document.querySelector("#calc1").innerHTML = queue[0];
		document.querySelector("#calc2").innerHTML = queue[1];
		document.querySelector("#calc3").innerHTML = queue[2];
		document.querySelector("#calc4").innerHTML = queue[3];
		document.querySelector("#calc5").innerHTML = queue[4];
	}
});

// thanks for your time and looking into my code. If you have encountered any bugs, I request you to contact
// me through linkedin or gmail(midhunmareedu@gmail.com)
var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var deletebtn = document.querySelectorAll(".deletebtn");
// var deletebtn = document.getElementsByClassName("deletebtn");


// <<<<<<<add delete button on the right of items>>>>>>>>
// the 3rd parameter of addEventListener can be true/false. For some situations, there are parent element and child element both have EventListener. 
// For setting true, it will execute parent's EventListener then child's EventListenser; For setting false, it will execute child's EventListenser then parent's EventListener.
// for most of situations, the 3rd parameter is set to false.
for(var i=0; i< deletebtn.length; i++){
	deletebtn[i].addEventListener("click", removeParent, false);
}

function removeParent() {
	event.target.removeEventListener("click", removeParent, false);
	// when click remove eventListener
	event.target.parentNode.remove();
	// remove the parent element of a button (li) when the button is clicked.
  }

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var btn = document.createElement("button");
	// create a button
	btn.innerHTML = "-";
	// give the button innerHTML context 
	btn.addEventListener("click", function(){
		removeParent();
	})
	//  add eventListener function to the button

	var li = document.createElement("li");
	li.appendChild(btn);	
	// add btn into child element of li
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

// >>>>> click on a list item and change it's class <<<<<
// e = e || window.event是js在事件處理相容IE和非IE的寫法
// JS的event.srcElement與event.target（觸發事件對象）
// IE下,event對象有srcElement属性,但是沒有target屬性;
// Firefox下,event對象有target屬性,但是沒有srcElement屬性.但他们的作用相同，即：
// firefox 下的 event.target = IE 下的 event.srcElement
         
function getEventTarget(e){
	e = e || window.event;
	return event.target || event.srcElement;
}

ul.addEventListener("click", function(e){
	var target = getEventTarget(e);
	target.classList.toggle("done");
})

// version2 click on a list item and change it's class
// ul.onclick = function(){
// 	var target = event.target || event.srcElement;
// 	target.classList.toggle("done");
// }

// >>>>>>>>> add button after item <<<<<<<<




button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);


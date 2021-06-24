const todolist= document.getElementsByTagName('li');
for(var i = 0 ; i < todolist.length ; i++){
  const span = document.createElement('SPAN');
  const text = document.createTextNode('\u00D7');
  span.className="close";
  span.appendChild(text)
  todolist[i].appendChild(span);
} 
 const close = document.getElementsByClassName('close');
for(var i = 0; i<close.length; i++){
     close[i].onclick= function(){
         var div = this.parentElement;
    div.style.display ="none";
    }
}
const list = document.querySelector('ul'); 
list.addEventListener("click",function (event) {
    if(event.target.tagName==="LI"){
        event.target.classList.toggle("checked");

    }
},false)
function create() {
    const li =document.createElement('li');
    const input = document.getElementById('todo').value;
    const txt = document.createTextNode(input);
    li.appendChild(txt);
    if(input===""){
      alert("Type something");
    }
    else{
        document.getElementById("list").appendChild(li);
    }
    document.getElementById('todo').value =""
   var span = document.createElement('span');
   var text = document.createTextNode("\u00D7");
   span.classList="close";
   span.appendChild(text);
   li.appendChild(span);
   for(var i = 0 ; i < close.length; i++){
       close[i].onclick = function () {
           var div = this.parentElement;
           div.style.display="none";
       }
   }
   
}
function clearAll(){
var li =document.getElementsByName('li')
var del = document.getElementById("list");
    del.remove(li);

}
         
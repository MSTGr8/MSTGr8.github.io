const SpeechRecognition=window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition=new SpeechRecognition();
function save(){
    note=document.getElementById('message');
    var html="";
    var stored=localStorage.getItem("notes")
    if(stored == null)
    {
      storedObj=[];
    }
    else
    {
      storedObj=JSON.parse(stored);
    }
    storedObj.push(note.value);
    localStorage.setItem("notes" , JSON.stringify(storedObj));
    note.value="";
    show();
}
function show(){
  var html="";
    var stored=localStorage.getItem("notes")
    if(stored == null)
    {
      storedObj=[];
    }
    else
    {
      storedObj=JSON.parse(stored);
    }
    localStorage.setItem("notes" , JSON.stringify(storedObj));
  storedObj.forEach(function(element, index){
     html+=`<div class="bg-white rounded-lg">
    <div class="w-96 border-t-8 border-gray-900 rounded-lg flex">
      <div class="w-1/3 pt-6 flex justify-center">
        
      </div>
      <div class="w-full pt-9 pr-4">
        <h3 class="font-bold text-gray-500">`+(index+1)+`</h3>
        <p class="py-4 text-sm text-gray-600">`+element+`</p>
      </div>
    </div>

    <div class="p-4 flex space-x-4">
     <button id=`+index+` onclick="deleteme(this.id)" class="w-1/2 px-4 py-3 text-center bg-green-400 rounded-lg hover:bg-pink-700 hover:text-white font-bold text-sm">Delete Note</button>
    </div>
  </div>`;
    });
    if(storedObj.length != 0){
      document.getElementById("notes area").innerHTML=html;
    }
    else{
      document.getElementById("notes area").innerHTML="Nothing to show here";
    }
}
function deleteme(index){
  console.log(index);
  var stored=localStorage.getItem("notes")
    if(stored == null)
    {
      storedObj=[];
    }
    else
    {
      storedObj=JSON.parse(stored);
    }
    storedObj.splice(index , 1);
    localStorage.setItem("notes" , JSON.stringify(storedObj));
    show();
}
recognition.onstart=function(){
    console.log("started");
};
recognition.onresult=function(event){
    const current = event.resultIndex;
    var output=event.results[current][0].transcript;
    document.getElementById("message").value=output;
};
function speech(){
    recognition.start();
}

function save(){
    tit= document.getElementById("email");
    note=document.getElementById('message');
    var html="";
    var stored=localStorage.getItem("notes")
    if(stored==null)
    {
      stored=[];
    }
    else
    {
      stored=JSON.parse(stored);
    }
    stored.push(note.value);
    localStorage.setItem(stored,JSON.stringify(stored));
    stored.forEach(function(element, index){
     html+=`<div class="bg-white rounded-lg">
    <div class="w-96 border-t-8 border-pink-600 rounded-lg flex">
      <div class="w-1/3 pt-6 flex justify-center">
        
      </div>
      <div class="w-full pt-9 pr-4">
        <h3 class="font-bold text-green-700">`+tit.value+`</h3>
        <p class="py-4 text-sm text-purple-400">`+note.value+`</p>
      </div>
    </div>

    <div class="p-4 flex space-x-4">
     <button class="w-1/2 px-4 py-3 text-center text-pink-100 bg-pink-600 rounded-lg hover:bg-pink-700 hover:text-white font-bold text-sm">Delete Note</button>
    </div>
  </div>`;
    document.getElementById("notes area").innerHTML+=html;

    });
    tit.value="";
    note.value="";
}

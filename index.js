function save(){
    tit= document.getElementById("email");
    note=document.getElementById('message');
    var html="";
    html+="<li>";
    html+="<div m-11 p-11>";
    html+='<h3 class="text-3xl text-green-700 text-opacity-100">'+tit.value+"</h3>";
    html+='<p class="text-base text-purple-700 text-opacity-100">'+note.value+"</p>";
    html+="</div>"
    html+="</li>"
    document.getElementById("notes area").innerHTML+=html;
    tit.value="";
    note.value="";
}

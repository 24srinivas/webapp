function getfile(file,callback){
  var xhr=new XMLHttpRequest();
  xhr.overrideMimeType("application/json");
  xhr.open("GET",file,true);
  xhr.onreadystatechange=function(){
    if(xhr.readyState === 4 && xhr.status =="200"){
      callback(xhr.responseText);
    }
};
xhr.send(null);
}
getfile("data.json",function(text){
  var data=JSON.parse(text);
  console.log(data);
  details(data.basics);
  detail(data.obj);
})
var child = document.querySelector(".childone");
var children = document.querySelector(".childtwo");

function details(det){
  var img =document.createElement("img");
  img.src=det.image;
  child.appendChild(img);
 var name=document.createElement("h3");
 name.textContent=det.name;
 child.appendChild(name);
 var phoneno=document.createElement("h3");
 phoneno.textContent=det.phoneno;
 child.appendChild(phoneno);
 var mail=document.createElement("a");
 mail.href="mailto:srinivas@gmail.com";
 mail.textContent=det.email;
 child.appendChild(mail);
 var ad=document.createElement("h1");
 ad.textContent=det.v;
 child.appendChild(ad);
 var addr=document.createElement("hr");
 child.appendChild(addr);

 var add=document.createElement("h3");
 add.textContent=det.address;
 child.appendChild(add);
 var ca=document.createElement("h1");
 ca.textContent=det.c;
 children.appendChild(ca);

}
function detail(det){
  var hr=document.createElement("hr");
  children.appendChild(hr);
  var b=document.createElement("h3");
  b.textContent=det.main;
  children.appendChild(b);

}

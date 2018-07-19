// function getfile(file,callback){
//   var xhr=new XMLHttpRequest();
//   xhr.overrideMimeType("application/json");
//   xhr.open("GET",file,true);
//   xhr.onreadystatechange=function(){
//     if(xhr.readyState === 4 && xhr.status =="200"){
//       callback(xhr.responseText);
//     }
// };
// xhr.send(null);
// }
// getfile("data.json",function(text){
//   var data=JSON.parse(text);
//   console.log(data);
//   details(data.basics);
//   detail(data.obj);
//  education(data.education);
//  skill(data.skills);
// })
var child = document.querySelector(".childone");
var child1 = document.querySelector(".childtwo");

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
 child1.appendChild(ca);

}
function detail(det){
  var hr=document.createElement("hr");
  child1.appendChild(hr);
  var b=document.createElement("h3");
  b.textContent=det.main;
  child1.appendChild(b);

}

function education(edu){

  var education=document.createElement("h3");
  education.textContent="Education Qualification";
  child1.appendChild(education);

  var line=document.createElement("hr");
  child1.appendChild(line);

  for(i=0;i<edu.length;i++){

    var deg=document.createElement("h3");
    deg.textContent=edu[i].degree;
    child1.appendChild(deg);

    var edu1=document.createElement("li");
    var edu2=document.createElement("li");
    edu2.textContent=edu[i].institute;
    edu1.textContent=edu[i].data;
    child1.appendChild(edu2);
    child1.appendChild(edu1);


  }
}
  function skill(tech){

      var title=document.createElement("h3");
      title.textContent="Technical skills";
      child1.appendChild(title);

      var line=document.createElement("hr");
      child1.appendChild(line);

      var skilldata=document.createElement("table");
      skilldata.border="1";
      child1.appendChild(skilldata);

      tabledata="";
      for(i=0;i<tech.length;i++)
      {
         tabledata+="<tr> <td>"+tech[i].data+"<td>"+tech[i].lang;
      }
      skilldata.innerHTML=tabledata;
  }

  function achi(a)
  {
    var title=document.createElement("h3");
    title.textContent="Achivements:";
    child1.appendChild(title);

    var line=document.createElement("hr");
    child1.appendChild(line);

    var skilldata=document.createElement("table");
    skilldata.border="1";
    child1.appendChild(skilldata);

    tabledata="";
    for(i=0;i<a.length;i++)
    {
       tabledata+="<tr><td>"+a[i].title+"<td>"+a[i].rank;
    }
    skilldata.innerHTML=tabledata;

  }

function loadjson(file){
  return new Promise((resolve,reject)=>{
  return fetch(file).then(response=>{
    if(response.ok){
      resolve(response.json());
    }
    else {
      reject(new Error("error"));
    }

  })
  })
}

var newfile = loadjson("data.json");
  newfile.then(data=>{
    details(data.basics);
    detail(data.obj);
    education(data.education);
    skill(data.skills);
    achi(data.achivements);
  })



  
function toggleSubmenu() {
  const submenu = document.getElementById("submenu");
  if (submenu.style.display === "block") {
    submenu.style.display = "none";
  } else {
    submenu.style.display = "block";
  }
}

// Call toggleSubmenu() when hovering over the "Me" link
const meLink = document.querySelector("nav a[href='me.html']");
meLink.addEventListener("mouseover", toggleSubmenu);

// Keep the submenu open when hovering over its items
const submenuItems = document.querySelectorAll("#submenu li");
submenuItems.forEach(item => {
  item.addEventListener("mouseover", () => {
    submenu.style.display = "block";
  });
});



function open1(){
  document.getElementById('hidden').style.display='block';
  document.getElementById('perumal').style.display='none';
  document.getElementById('Performane').style.display='none';
}
function open2(){
  document.getElementById('hidden').style.display='none';
  document.getElementById('perumal').style.display='block';
  document.getElementById('Performane').style.display='none';
}
function open3(){
  document.getElementById('hidden').style.display='none';
  document.getElementById('perumal').style.display='none';
  document.getElementById('Performane').style.display='block';
}







                                            //Schedule meeting

 let aam=document.getElementById('popupu')                                         
function openpopupu(){
        aam.classList.add('popupu1');
}
function closepopupu(){
      aam.classList.remove('popupu1');
}










function openclick1(){
  document.getElementById('panimalar').style.display='block';
  document.getElementById('Engineering').style.display='none';
  document.getElementById('feedback').style.display='none';
  document.getElementById('Reviews').style.display='none';
}
function openclick2(){
  document.getElementById('panimalar').style.display='none';
  document.getElementById('Engineering').style.display='block';
  document.getElementById('feedback').style.display='none';
  document.getElementById('Reviews').style.display='none';


}
function openclick4(){
  document.getElementById('panimalar').style.display='none';
  document.getElementById('Engineering').style.display='none';
  document.getElementById('feedback').style.display='block';
  document.getElementById('Reviews').style.display='none';
}
function openclick5(){
  document.getElementById('panimalar').style.display='none';
  document.getElementById('Engineering').style.display='none';
  document.getElementById('feedback').style.display='none';
  document.getElementById('Reviews').style.display='block';
}
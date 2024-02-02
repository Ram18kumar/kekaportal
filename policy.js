
const config = {
    type: 'doughnut',
    data: data,
  };
const data = {
    labels: [
      'Red',
      'Blue',
      'Yellow'
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [300, 50, 100],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)'
      ],
      hoverOffset: 4
    }]
  };
 

   //HIDE AND SHOW DIV USING ONCLICK
   // function openinsert(sectionId) {
  // Add this code to your policy.js file
function openinsert1(){
  document.getElementById('insert1').style.display='block';
  document.getElementById('insert2').style.display='none';
  document.getElementById('insert3').style.display='none';
  document.getElementById('insert4').style.display='none';
  document.getElementById('insert5').style.display='none';
  
}
function openinsert2(){
  document.getElementById('insert1').style.display='none';
  document.getElementById('insert2').style.display='block';
  document.getElementById('insert3').style.display='none';
  document.getElementById('insert4').style.display='none';
  document.getElementById('insert5').style.display='none';
}
function openinsert3(){
  document.getElementById('insert1').style.display='none';
  document.getElementById('insert2').style.display='none';
  document.getElementById('insert3').style.display='block';
  document.getElementById('insert4').style.display='none';
  document.getElementById('insert5').style.display='none';
}
function openinsert4(){
  document.getElementById('insert1').style.display='none';
  document.getElementById('insert2').style.display='none';
  document.getElementById('insert3').style.display='none';
  document.getElementById('insert4').style.display='block';
  document.getElementById('insert5').style.display='none';
}
function openinsert4(){
  document.getElementById('insert1').style.display='none';
  document.getElementById('insert2').style.display='none';
  document.getElementById('insert3').style.display='none';
  document.getElementById('insert4').style.display='block';
  document.getElementById('insert5').style.display='none';
}
function openinsert5(){
  document.getElementById('insert1').style.display='none';
  document.getElementById('insert2').style.display='none';
  document.getElementById('insert3').style.display='none';
  document.getElementById('insert4').style.display='none';
  document.getElementById('insert5').style.display='block';
}

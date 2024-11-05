const rightBox =document.getElementById('right');
const leftBox =document.getElementById('left');
const tasks =document.querySelectorAll('.task') ;



tasks.forEach(task => {

task.addEventListener('dragstart',function(e){

   let selected =e.target;

   rightBox.addEventListener('dragover',function(e){
    e.preventDefault();
   })

   rightBox.addEventListener('drop',function(e){
    e.preventDefault();
    rightBox.appendChild(selected);
    selected=null;


   })

   leftBox.addEventListener('dragover',function(e){
    e.preventDefault();
   })

   leftBox.addEventListener('drop',function(e){
    e.preventDefault();
    leftBox.appendChild(selected);
    selected=null;


   })
})


})




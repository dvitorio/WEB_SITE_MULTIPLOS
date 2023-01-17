const countVisitors = document.getElementById('countVisitors');
let counter = document.getElementById('counter');


counter.addEventListener('load', ()=>{
     for(var i = 0; i < counter.length; i++){
          counter = 0;
          document.getElementById('counter').value = counter++;
     }
});




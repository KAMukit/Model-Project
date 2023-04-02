'use strict';

let model=document.querySelector('.modal');
let overlay=document.querySelector('.overlay')
let btnCloseModel=document.querySelector('.close-modal')
let btnOpenModel=document.querySelectorAll('.show-modal')


for(let i=0;i<btnOpenModel.length;i++){
  btnOpenModel[i].addEventListener('click',function(){
    model.classList.remove('hidden');
    overlay.classList.remove('hidden')
  })

  let closeModel=function(){
    model.classList.add('hidden');
    overlay.classList.add('hidden')
  }

  btnCloseModel.addEventListener('click',closeModel
  )
  overlay.addEventListener('click',closeModel)
}

document.addEventListener('keydown',function(e){
  if(e.key==="Escape"){
    if(!model.classList.contains('hidden')){
      closeModel();
    }
  }

})


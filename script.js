const cards = document.querySelectorAll('.card')
const dropzones = document.querySelectorAll('.dropzone')
const groupstatus = document.querySelectorAll('.status')
const groupbtndeletetask = document.querySelectorAll('.btndeleteTask')


  cards.forEach(card => {
    card.addEventListener('dragstart', dragstart)
    card.addEventListener('drag', drag)
    card.addEventListener('dragend', dragend)

  })

function dragstart(){
  dropzones.forEach( dropzone => dropzone.classList.add('highlight'))
  this.classList.add('is-dragging')  
}
function drag(){
}
function dragend(){
  dropzones.forEach( dropzone => dropzone.classList.remove('highlight'))
  this.classList.remove('is-dragging')
}

dropzones.forEach(dropzone => {
  dropzone.addEventListener('dragenter', dragenter)
  dropzone.addEventListener('dragover', dragover)
  dropzone.addEventListener('dragleave', dragleave)
  dropzone.addEventListener('drop', drop)
})

function dragenter(){
}
function dragover(){
  this.classList.add('over')
  const cardBeingDragged = document.querySelector('.is-dragging')
  this.appendChild(cardBeingDragged)
}
function dragleave(){
  this.classList.remove('over')
}
function drop(){
  this.classList.remove('over')
}

document.querySelector('.addtask').addEventListener("click", addtask)

function addtask(){
  cardinsert = document.querySelector('.card').cloneNode( true )
  document.querySelector('#initial').appendChild(cardinsert)
  cardinsert.addEventListener('dragstart', dragstart)
  cardinsert.addEventListener('drag', drag)
  cardinsert.addEventListener('dragend', dragend)
}

const btnRemoveTask = document.querySelector('.removetask')
btnRemoveTask.addEventListener("click", removeTask)
function removeTask(){
  if(btnRemoveTask.classList.contains("clicked")){
    btnRemoveTask.classList.remove('clicked')
    groupstatus.forEach(status =>{
      status.classList.add('show')
      status.classList.remove('hide')
    })
    groupbtndeletetask.forEach(btnDeleteTask =>{
      btnDeleteTask.classList.add('hide')
      btnDeleteTask.classList.remove('show')
    })
  }else{
    groupstatus.forEach(status =>{
      status.classList.add('hide')
      status.classList.remove('show')
    })
    groupbtndeletetask.forEach(btnDeleteTask =>{
      btnDeleteTask.classList.add('show')
      btnDeleteTask.classList.remove('hide')
    })
    btnRemoveTask.classList.add('clicked')
  }  
}
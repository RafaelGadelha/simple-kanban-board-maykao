const cards = document.querySelectorAll('.card')
const dropzones = document.querySelectorAll('.dropzone')
const groupbtndeletetask = document.querySelectorAll('.btndeleteTask')
const groupstatus = document.querySelectorAll('.status')
addIdCards()
addFuncDeleteTask()



function addIdCards(){
  let cards = document.querySelectorAll('.card')
  cards.forEach(function(card, index){
    card.addEventListener('dragstart', dragstart)
    card.addEventListener('drag', drag)
    card.addEventListener('dragend', dragend)
    card.setAttribute('id', 'card'+ index);
  })
}

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
function dragover(ev){
  ev.preventDefault();
  this.classList.add('over')
  const cardBeingDragged = document.querySelector('.is-dragging')
  this.appendChild(cardBeingDragged)
}
function dragleave(){
  this.classList.remove('over')
}
function drop(ev){
  ev.preventDefault()
  this.classList.remove('over')
  
  let cardsTodo = document.querySelectorAll(".todo> .card> .status")
  cardsTodo.forEach(cardTodo =>{
    cardTodo.classList.remove("blue", "green")
    cardTodo.classList.add("yellow")
  })
  let cardsProgress = document.querySelectorAll(".progress> .card> .status")
  cardsProgress.forEach(cardProgress =>{
    cardProgress.classList.remove("yellow", "green")
    cardProgress.classList.add("blue")
  })
  let cardsDone = document.querySelectorAll(".done> .card> .status")
  cardsDone.forEach(cardDone =>{
    cardDone.classList.remove("blue", "yellow")
    cardDone.classList.add("green")
  })

}

document.querySelector('.addtask').addEventListener("click", addTask)

function addTask(e){
  e.preventDefault();
  console.log('chamou')
  let card = document.createElement('div')
    card.classList.add('card')
    card.setAttribute('draggable', true)
      let statusBar = document.createElement('div')
        statusBar.classList.add('status', 'yellow')
      card.appendChild(statusBar)
      let btnDeleteTask = document.createElement('div')
        btnDeleteTask.classList.add('btndeleteTask', 'hide')
        let linkDeleteTask = document.createElement('a')
          linkDeleteTask.setAttribute('href', '#')
          linkDeleteTask.innerHTML = 'X'
          btnDeleteTask.appendChild(linkDeleteTask)
      card.appendChild(btnDeleteTask)
      let content = document.createElement('div')
        content.classList.add('content')
        let inputTaskTitle = document.createElement('input')
          inputTaskTitle.setAttribute('type', 'text')
          inputTaskTitle.setAttribute('name', 'taskTitle')
          inputTaskTitle.setAttribute('value', '')
          inputTaskTitle.setAttribute('placeholder', 'Task Title')
        content.appendChild(inputTaskTitle)
      card.appendChild(content)
      let description = document.createElement('div')
        description.classList.add('description')
        let descriptionText = document.createElement('textarea')
          descriptionText.setAttribute('placeholder', 'Task description')
          descriptionText.classList.add('description-text')
          description.appendChild(descriptionText)
      card.appendChild(description)
document.querySelector('#initial').appendChild(card)
addIdCards()
addFuncDeleteTask() 
}

const btnRemoveTask = document.querySelector('.removetask')
btnRemoveTask.addEventListener("click", removeTask)
function removeTask(e){
  e.preventDefault();
  const groupbtndeletetask = document.querySelectorAll('.btndeleteTask')
  const groupstatus = document.querySelectorAll('.status')
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

function addFuncDeleteTask(){
  let groupbtndeletetask = document.querySelectorAll('.btndeleteTask')
  groupbtndeletetask.forEach(btnDeleteTask =>{
    btnDeleteTask.addEventListener('click', deleteTask)
  })
}

function deleteTask(e){
  e.preventDefault();
  id = this.parentElement.getAttribute('id')
  document.querySelector("#"+id).remove()
}
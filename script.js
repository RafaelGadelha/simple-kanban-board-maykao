const cards = document.querySelectorAll('.card')
const dropzones = document.querySelectorAll('.dropzone')

cards.forEach(card => {
  card.addEventListener('dragstart', dragstart)
  card.addEventListener('drag', drag)
  card.addEventListener('dragend', dragend)

})

function dragstart(){
  console.log('CARD: Start dragging')
}
function drag(){
  console.log('CARD: Is dragging')
}
function dragend(){
  console.log('CARD: Stop drag')
}

dropzones.forEach(dropzone => {
  dropzone.addEventListener('dragenter', dragenter)
  dropzone.addEventListener('dragover', dragover)
  dropzone.addEventListener('dragleave', dragleave)
  dropzone.addEventListener('drop', drop)
})

function dragenter(){
  console.log('DROPZONE: Enter in zone')
}
function dragover(){
  console.log('DROPZONE: Over')
}
function dragleave(){
  console.log('DROPZONE: Leave')
}
function drop(){
  console.log('DROPZONE: dropped')
}
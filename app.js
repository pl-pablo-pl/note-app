
let $ = document

const inputElem = $.querySelector('#input-field')
const btnSaveElem = $.querySelector('#btn-save')
const btnDeleteElem = $.querySelector('#btn-delete')
const colorsBox = $.querySelectorAll('.color-box')
const notesContainer = $.querySelector('#listed')

colorsBox.forEach((color)=>{
color.addEventListener('click',event=>{
    let colorTarget=event.target.style.backgroundColor
    inputElem.style.backgroundColor=colorTarget
})
})

function generatornote(){
    let devElem=$.createElement('dev')
    devElem.className='card shadow-sm rounded'
  let mainColor=inputElem.style.backgroundColor
  devElem.style.backgroundColor=mainColor


    let pElem=$.createElement('p')
    pElem.className='card-text p-3'
    pElem.innerHTML=inputElem.value

    devElem.append(pElem)
    notesContainer.append(devElem)

    inputElem.value=''
    inputElem.style.backgroundColor='#fff'
}

btnSaveElem.addEventListener('click',generatornote)

btnDeleteElem.addEventListener('click',(e)=>{
    inputElem.value=''
    inputElem.style.backgroundColor='#fff'
})

notesContainer.addEventListener('click',e=>{
    e.target.parentElement.remove()
})


inputElem.addEventListener('keydown',function(event){
    if(event.keyCode===13){
            generatornote()
    }
})

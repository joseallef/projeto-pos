var botAdd = document.querySelector('#add-comentario')
var con = document.querySelector('div#comentarios')

getComment()

let cont = 1;
botAdd.addEventListener('click', ()=>{    
    if(cont == 1){
        let textarea = document.createElement('textarea')
        let input = document.createElement('input')
        textarea.cols = '90'
        textarea.rows = '10'
        textarea.id = 'textarea'
        input.classList.add('button')
        input.type = 'submit'
        input.id = "btnPub"
        input.value = 'Publicar'
        textarea.placeholder = 'Comentar...'
        con.appendChild(textarea)
        con.appendChild(input)
        cont++;
        habBotao()
        publicar()
    }else {
        alert('Digite seu comentario!');
    }
})

function habBotao(){
    botAdd.disabled  == false ? botAdd.disabled = true : botAdd.disabled = false
}

function publicar(){
    var btnPublicar = document.getElementById('btnPub')
    let tex = document.getElementById('textarea')
    if(btnPublicar){
        btnPublicar.addEventListener('click', ()=>{
            tex.addEventListener('keyup', (e)=>{
                tex.style.background = '#FFFFFF'
            })
            if(tex.value !== ""){
                saveComment(tex.value)
                tex.value = ''
                habBotao()
                //window.location.reload()
                getComment()
            }else{
                tex.style.background = '#FFDDDD'
                alert("Campo vazio! digite seu comentario")
                tex.focus()
            }

        })
    }
    
}
function saveComment(data){
    let dt = []
    dt.push(data)
    var vString = JSON.stringify(dt)
    localStorage.setItem('post', `${getComment()} , ${dt}`)
    console.log(dt[1])

}

function getComment(){
    let tagP = document.querySelector('p')
    let i = 0;
    let v = JSONId()
    while(i <= JSON.parse(v))
    {
        tagP.innerHTML = localStorage.getItem('post')
        i++
        console.log(i)
     
   
    }
    console.log(JSON.parse(v)) 
    return localStorage.getItem('post')
}
function JSONId(){
    let valueId = JSON.stringify(localStorage.getItem('id'))
    return valueId
}

function setId(){
    let id = 0;
    if(!localStorage.getItem('id')){
        localStorage.setItem('id', id)
    }
    id = localStorage.getItem('id')
    id++
    localStorage.setItem('id', id)
 
    return id
}
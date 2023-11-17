const form = document.getElementById('form-atividade')
form.addEventListener('submit', function(e){
 e.preventDefault()

const inputNomeAtividade = document.getElementById('nome-atividade')

let item = document.createElement('li')
item.innerText = inputNomeAtividade.value
item.addEventListener('click', function(e) {
e.target.style.textDecoration = "line-through";
})




const lista = document.querySelector('ul')
 lista.append(item)

 inputNomeAtividade.value = ''



})
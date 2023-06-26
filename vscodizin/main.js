const form = document.getElementById('formulario');
const Email = document.getElementById('Email');
const Senha = document.getElementById('Senha');


form.addEventListener('submit', function(e) {

    e.preventDefault()
    window.localStorage.setItem('nomeUsuario', Email.value);
    window.location.href = 'home.html'
    
    e.preventDefault()
    window.localStorage.setItem('nomeUsuario', Senha.value);
    window.location.href = 'home.html'
})
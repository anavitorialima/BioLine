import { auth } from './firebase.js'
import { signInWithEmailAndPassword, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js"

document.addEventListener('DOMContentLoaded', () => {
    const formLogin = document.querySelector('.form-login')
    const emailInput = document.querySelector('.email-admin')
    const senhaInput = document.querySelector('.senha-admin')
    const linkSair = document.querySelector('.link-sair')
    const formPost = document.querySelector('.form-post')
    const titulologin = document.querySelector('.titulo-login')
    const mensagens = document.querySelector('.mensagens')

    // mensagens
    const alertaUsuario = (alertaUsuario)=>{
        mensagens.innerHTML = alertaUsuario
    }
        
    //Limpas mensagem
    const limparmensagem = () =>{
        setInterval(()=>{
            mensagens.innerHTML =''
        },3000)
    }

    if (formLogin) {
        formLogin.addEventListener('submit', (e) => {
            e.preventDefault()
            const email = emailInput.value
            const senha = senhaInput.value

            if (formLogin) {
                signInWithEmailAndPassword(auth, email, senha)
                    .then((userCredential) => {
                        const user = userCredential.user
                        alertaUsuario('Usuário logado com sucesso.')
                        limparmensagem()
                        emailInput.value = ''
                        senhaInput.value = ''
                    })
                    .catch(() => {
                       alertaUsuario('Verifique a sua conexão ou o email e senha')
                       limparmensagem()
                    })
            }

        })
    }

    if (linkSair) {
        linkSair.addEventListener('click', () => {
            signOut(auth)
                .then(() => {
                    alertaUsuario('Logout realizado com sucesso.')
                    limparmensagem()
                })
                .catch(() => {
                    alertaUsuario('Ocorreu um erro Inesperado.')
                    limparmensagem()
                })

        })
    }

     //Mudanças de estado
    onAuthStateChanged(auth, (user) => {
        if (user) {
            const uid = user.uid

            // Verificação de Elementos

            if (linkSair) linkSair.classList.remove('hide')
            if (formLogin) formLogin.classList.add('hide')
            if (formPost) formPost.classList.remove('hide')
            if (titulologin) titulologin.innerHTML = 'Acesso Liberado.'
        } else {
            if (linkSair) linkSair.classList.add('hide')
            if (formLogin) formLogin.classList.remove('hide')
            if (formPost) formPost.classList.add('hide')
            if (titulologin) titulologin.innerHTML = 'FAÇA O LOGIN NO SITE!!'
        }

    })




})


function login() {
    const user = document.getElementById('username').value;
    const pass = document.getElementById('password').value;
    const msg = document.getElementById('message');
  
    const usuarioCorreto = 'admin';
    const senhaCorreta = '1234'

    
    if (user && pass) {
        localStorage.setItem('logado', 'true');
        localStorage.setItem('usuario', user); // salva o nome do usuário (opcional)
        window.location.href = "painel.html";
    } else {
      msg.style.color = 'red';
      msg.textContent = 'Usuário ou senha incorretos.';
    }
  }
  
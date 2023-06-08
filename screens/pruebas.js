const openMenu = document.querySelector("[data-menuOpen]");
const closeMenu = document.querySelector("[data-menuClose]");
const menu = document.querySelectorAll('.menu__nav');
const openLogin = document.querySelector("[data-loginOpen]");
const closeLogin = document.querySelector("[data-loginClose]");
const modal = document.querySelector("[data-modal]");

openMenu.addEventListener('click', () => {
  menu.forEach(menu_element => menu_element.classList.add('active'));
});

closeMenu.addEventListener('click', () => {
  menu.forEach(menu_element => menu_element.classList.remove('active'));
});

openLogin.addEventListener('click', () => {
  modal.style.display = 'block';
});

closeLogin.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Validar el formulario de inicio de sesión
const loginForm = document.querySelector("[data-loginForm]");
const loginBtn = document.querySelector("[data-loginBtn]");
const errorMessage = loginForm.querySelector('.error-message');
const accessModal = document.querySelector(".loged__modal");
let loggedIn = false;

const loged = () => {
  accessModal.textContent = loggedIn ? 'Ingreso correcto!' : 'Ingreso fallido!';
  accessModal.querySelector('.material-symbols-outlined.xxxl').textContent = loggedIn ? 'check_circle' : 'close';

  setTimeout(() => {
    accessModal.style.display = 'none';
  }, 3000);
};

const logedBtn = () => {
  loginBtn.classList.toggle('btn_red');
  loginBtn.textContent = loggedIn ? 'Salir' : 'Ingresar';
  loginBtn.querySelector('.material-symbols-outlined').textContent = loggedIn ? 'logout' : 'login';
};

loginBtn.addEventListener('click', () => {
  const emailInput = loginForm.querySelector('[data-type="email"]');
  const passwordInput = loginForm.querySelector('[data-type="password"]');

  const emailValid = emailInput.value === 'user@example.com';
  const passwordValid = passwordInput.value === 'password123';

  if (emailValid && passwordValid) {
    loggedIn = true;
    logedBtn();
    loged();
    // Realizar acciones adicionales después de iniciar sesión correctamente
  } else {
    loggedIn = false;
    logedBtn();
    loged();
    // Realizar acciones adicionales después de iniciar sesión incorrectamente
  }
});

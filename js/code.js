const expReg ={
  firstName: /^[a-zA-Z0-9\_\-]{4,16}$/,
  lastName: /^[a-zA-ZÀ-ÿ\s-]{1,40}$/,
  email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  password: /^.{4,12}$/,
};
const inputs = document.getElementsByTagName("input");
let arrayInputs = Array.from(inputs)
arrayInputs.forEach((input) =>{
  input.addEventListener("keyup", validateForm);
});
function validateForm({ target }){
  expReg[`${target.name}`].test(target.value)
  ? (target.classList.add('pass'), target.classList.remove('error'))
  : (target.classList.remove('pass'), target.classList.add('error'), document.querySelector('#'+target.name).insertAdjacentHTML('afterend', '<p>'+target.name+' cannot be empty</p>'))

}
let ElOpen = document.querySelector('.open__btn');
let ElModal = document.querySelector('.modal__main');
let elInpEmail = document.querySelector('#email');
let elInpPassword = document.querySelector('#password');
let elSpinner = document.querySelector('.spinner');
let body = document.querySelector('body');

const dataKey = []

function validateEmail(email) {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

ElOpen.addEventListener('click', function (e) {
    e.preventDefault()
    let emailVal = elInpEmail.value.trim().toLowerCase();
    let passwordVal = elInpPassword.value;
    if(!validateEmail(emailVal) || passwordVal.length < 8){
        elInpEmail.style.border ='1px solid red'
        elInpEmail.style.boxShadow ='0px 0px 5px red'
        elInpPassword.style.border ='1px solid red'
        elInpPassword.style.boxShadow ='0px 0px 5px red'
    }else {
        setTimeout(() => {
            ElModal.classList.add('openBlock');
            elInpEmail.style.border ='1px solid #FFFFFF'
            elInpEmail.style.boxShadow ='none'
            elInpPassword.style.border ='1px solid #FFFFFF'
            elInpPassword.style.boxShadow ='none'
        }, 1000);
        setTimeout(()=>{
            body.style.opacity = '0.8'
            elSpinner.style.display ='block'
        },100)
        console.log('go');
    }
    setTimeout(()=>{
            body.style.opacity = '1'
            elSpinner.style.display ='none'
    },1100)
    setTimeout(()=>{
        elSpinner.style.display ='none'
        ElModal.classList.remove('openBlock');
    },3000)
})


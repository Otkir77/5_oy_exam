let log = document.querySelector('.log')
let pass = document.querySelector('.pass')
let btn_1 = document.querySelector('#btn-1')
let btn_2 = document.querySelector('#btn-2')
let div = document.querySelector('.savol_divi')

btn_1.addEventListener( 'click' , () => {
    if (log.value === 1234 , pass.value === 4321 ) {
        alert('Hammasi togri')
    } 
    else  {
        alert('Kiritilgan malumotlar xato')
    }
})

btn_2.addEventListener( 'click' , () => {
    let str = document.createElement('p')
    let a = prompt("Bermoqchi bolgan savolingizni va uning javobi bolgan variantlarni kiriting")
    str.innerHTML = a
    div.appendChild(str)
})
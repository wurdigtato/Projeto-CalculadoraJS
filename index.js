document.addEventListener('DOMContentLoaded', function() {
    const boxNum2 = document.getElementById('num-two');
    const radios = document.querySelectorAll('input[type="radio"]'); // Seleciona todos os radio buttons

    // Função para verificar se o radio 'sqr' está marcado
    function updateVisibility() {
        if (document.getElementById('sqr').checked) {
            boxNum2.classList.add('hidden');
        } else {
            boxNum2.classList.remove('hidden');
        }
    }

    // Verifica o estado inicial
    updateVisibility();

    // Adiciona evento de mudança para todos os radios
    radios.forEach(radio => {
        radio.addEventListener('change', updateVisibility);
    });
});


function teste() {
    let num1 = Number(document.getElementById('num-one').value)
    let num2 = Number(document.getElementById('num-two').value)
    let total = 0
    let add = document.getElementById('add')
    let sub = document.getElementById('sub')
    let mult = document.getElementById('mult')
    let div = document.getElementById('div')
    let sqr = document.getElementById('sqr')
    let result = document.getElementById('result')

    if (add.checked) {
        total = num1 + num2 
    } else if (sub.checked){
        total = num1 - num2
    } else if (mult.checked){
        total = num1 * num2 
    } else if (div.checked) {
        total = num1 / num2
    } else if (sqr.checked) {
        total = Math.sqrt(num1)
    }
    
    if (Number.isInteger(total)){
        result.innerHTML = `${total}`
    } else {
        result.innerHTML = `${total.toFixed(2)}`
    }

}

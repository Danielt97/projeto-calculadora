// Seleciona o visor da calculadora
const display = document.getElementById('display');

// Seleciona todos os botões da calculadora
const buttons = document.querySelectorAll('.buttons button');

// Adiciona um evento de clique a cada botão
buttons.forEach(button => {
  button.addEventListener('click', () => {
    // Verifica se o botão clicado é o '=' (calcular)
    if (button.innerText === '=') {
      try {
        // Calcula a expressão no visor e exibe o resultado
        display.value = eval(display.value);
      } catch (error) {
        // Exibe 'Erro' caso ocorra algum erro de cálculo
        display.value = 'Erro';
      }
    } else if (button.innerText === 'C') {
      // Limpa o visor se o botão clicado for 'C' (limpar)
      display.value = '';
    } else {
      // Adiciona o valor do botão ao visor
      display.value += button.innerText;
    }
  });
});

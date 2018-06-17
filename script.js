let nome = prompt("Digite seu nome");
let idade = prompt(`Olá, ${nome}. Digite sua idade`);
let emprestimo = prompt(`Qual o valor do seu emprestimo?`);
let salario = prompt(`Quanto voce recebe por mes?`);

if(idade >= 56 || idade <= 21 || emprestimo < 1000 || emprestimo > salario * 15 ){
    // menina, aqui é o seguinte: se a idade for maior que cinquenta e seis e menor que 21, 
    // se o emprestimo for menor que 1000 e se o valor recebido na variável for maior ao valor da variável 
    // emprestimo vezes quinze, ele nega seu empréstimo 
    alert(`Sinto muito, ${nome}, seu empréstimo foi negado.`);
}else{
    // aqui ele diz que se nenhum dos parametros do if for verdade ele aprova o emprestimo 
    alert(`Parabens, ${nome}. Seu empréstimo foi aprovado!`);
}

// dá pra fazer ele de um jeito mais longo. do jeito que eu fiz, ele pergunta tudo e depois nega/aprova o emprestimo.
// dá pra fazer ele perguntar um por um e negar logo depois da RTCIceTransportStateChangedEvent. eu fiz do jeito mais simples.

// SINTA-SE A VONTADE PRA FAZER QUALQUER MODIFICAÇÃO QUE VC ACHAR NECESSÁRIA
// 1. Desconto de Compra
function calcularDesconto(preco, tipoCliente) {
    if (tipoCliente === "membro") {
      return preco * 0.9; // 10% desconto
    } else {
      return preco;
    }
  }
  
  console.log("Desconto:", calcularDesconto(100, "membro")); // Output: 90
  
  
  // 2. Classificação de Notas
  function classificarNota(nota) {
    if (nota >= 70) {
      return "Aprovado";
    } else if (nota >= 50) {
      return "Recuperação";
    } else {
      return "Reprovado";
    }
  }
  
  console.log("Classificação:", classificarNota(65)); // Output: Recuperação
  
  
  // 3. Verificação de Idade
  function verificarIdade(idade) {
    if (idade < 18) {
      return "Menor de idade";
    } else if (idade >= 18 && idade <= 64) {
      return "Maior de idade";
    } else {
      return "Idoso";
    }
  }
  
  console.log("Idade:", verificarIdade(20)); // Output: Maior de idade
  
  
  // 4. Cálculo de Frete
  function calcularFrete(peso) {
    if (peso <= 5) {
      return 20;
    } else if (peso <= 20) {
      return 50;
    } else {
      return 100;
    }
  }
  
  console.log("Frete:", calcularFrete(12)); // Output: 50
  
  
  // 5. Classificação de Temperatura
  function classificarTemperatura(temperatura) {
    if (temperatura < 15) {
      return "Frio";
    } else if (temperatura <= 25) {
      return "Agradável";
    } else {
      return "Quente";
    }
  }
  
  console.log("Temperatura:", classificarTemperatura(22)); // Output: Agradável
  
  
  
  // Laços de Repetição
  
  // 1. Contagem Regressiva
  function contagemRegressiva(inicio) {
    for (let i = inicio; i >= 0; i--) {
      process.stdout.write(i + (i === 0 ? "" : ", ")); // Avoid trailing comma
    }
    console.log(); 
  
  }
  
  contagemRegressiva(5); // Output: 5, 4, 3, 2, 1, 0
  
  
  // 2. Tabuada de Multiplicação
  function gerarTabuada(numero) {
    for (let i = 1; i <= 10; i++) {
      console.log(`${numero} x ${i} = ${numero * i}`);
    }
  }
  
  gerarTabuada(3);
  
  
  // 3. Soma dos Números
  function somaNumeros(n) {
    let soma = 0;
    let i = 1;
    while (i <= n) {
      soma += i;
      i++;
    }
    return soma;
  }
  
  console.log("Soma:", somaNumeros(4)); // Output: 10
  
  
  // 4. Impressão de Números Pares
  function imprimirPares(limite) {
    for (let i = 0; i <= limite; i += 2) {
      process.stdout.write(i + (i === limite ? "" : ", ")); 
    }
    console.log(); 
  }
  
  imprimirPares(10); // Output: 0, 2, 4, 6, 8, 10
  
  
  // 5. Fatorial de um Número
  function calcularFatorial(numero) {
    if (numero === 0) return 1; // Base case for fatorial
    let fatorial = 1;
    for (let i = 1; i <= numero; i++) {
      fatorial *= i;
    }
    return fatorial;
  }
  
  console.log("Fatorial:", calcularFatorial(5)); // Output: 120
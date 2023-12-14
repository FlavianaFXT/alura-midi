# alura-midi
Projeto Javascript desenvolvido no curso "Javascript para Web: Crie páginas dinâmicas" da Alura.

## CONHECENDO O JAVASCRIPT

### 1.Clicando no botão

Adiciono ``controls`` às tags ``audio`` no arquivo html
Recarrego a página e aparecem os controles de reprodução dos áudios que desejo inserir no meu projeto

O CSS destes controles costumam ser muito complicados, e é aí que vamos passar os controles para os botões do nosso MIDI. Sendo assim, para tornar nosso projeto mais interativo, utilizamos a linguagem Javascript pata tornar os botões clicáveis.

Tiramos os ``controls`` das tags ``audio`` e partimos então para as tags ``button`` no arquivo html. Nela vamos utilizar o atributo ``onclick`` para dar funcionalidade aos nossos botões da maneira que desejamos.

``onclick="alert('Pom')"``

Clicando no botão Pom no nosso navegador, aparecerá o alert que inserimos. Sendo assim, já identificamos o evento de clique funconando para este botão.

### 2. Conectar JS com o HTML

  Para realizar a inserção do evento de clique somente com o HTML, teriamos um grande trabalho de ter de fazê-lo linha por linha para cada ``button``.
  Dessa forma, o Javascript vem para facilitar a inserção de eventos como esse. Assim, criamos agora o arquivo JS e conectamos ele ao arquivo HTML.

  Novo arquivo: ``main.js`` (por convenção, utiliza-se o nome main no arquivo JS principal da aplicação)

  Conecta o arquivo JS ao HTML inserindo a seguinte expressão no header do arquivo:
  
  ```bash
      <script src='./main.js'></script>
  ```
Para testar se a conexão foi realizada, no arquivo JS posso inserir:
 
  ```bash
alert('Hello World!');
```

Ao atualizar nossa aplicação no navegador, essa mensagem deve aparecer na tela.

![image](https://github.com/FlavianaFXT/alura-midi/assets/113718720/b06f1c1e-2087-48e3-9640-07d9ca4cfbba)

### 3. Buscar um Elemento

  Para fazer a busca de elemento do HTML para ser utilizado no JS, utilizaremos a função ``querySelector('')``.

  Se o elemento a ser buscado for uma tag: ``querySelector('nome-da-tag')``
  Se o elemento a ser buscado for uma classe: ``querySelector('.nome-da-classe')``
  Se o elemento a ser buscado for um id: ``querySelector('#nome-do-id')``

  Aqui, utilizaremos a classe de cada botão, inserindo então no JS:

  ```bash
document.querySelector('.tecla_pom')
```

### EXERCICIO PARA PRÀTICA:

A partir deste código a seguir, escreva o código em JavaScript capaz de selecionar o elemento HTML input do tipo telefone:

HTML
```bash
<h1> Alura Fone </h1>
 <section class="teclado">
    <input type="button" value="1">
    <input type="button" value="2">
    <input type="button" value="3">
    <input type="button" value="4">
    <input type="button" value="5">
    <input type="button" value="6">
    <input type="button" value="7">
    <input type="button" value="8">
    <input type="button" value="9">
    <input type="button" value="*">
    <input type="button" value="0">
    <input type="button" value="#">
  </section>
  <input type="tel" placeholder="Digite seu telefone">
```

CSS

```bash
* {
  box-sizing: border-box;
}

body {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #191919;
  min-height: 100vh;
}

input {
  border: none;
  color: inherit;
  font-size: inherit;
  font-weight: inherit;
  font-family: inherit;
}

h1 {
  font-family: 'Montserrat', sans-serif;
  font-size: 24px;
  color: #fff;
}

.teclado {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px; 
  background-color: #cccccc;
  border-radius: 30px;
  padding: 10px;
}

input[type=button] {
  border-radius: 20px;
  cursor: pointer;
  font-family: 'Montserrat', sans-serif;
  height: 80px;
  width: 80px;
}

input[type=tel] {
  background-color: #cccccc;
  border-radius: 10px;
  font-family: monospace;
  font-size: 22px;
  height: 40px;
  margin-bottom: 24px;
  padding: 10px;
  text-align: center;
  width: 280px;
}
```

*Como fazer:*

Abra o editor de código de sua preferência;

Crie dois arquivos: desafio.html e desafio-estilo.css;

Copie o código acima e cole dentro da tag < body> do arquivo chamado desafio.html e o código CSS no arquivo desafio-estilo.css;

Para resolver este desafio, você pode usar apenas a aba Console da ferramenta DevTools;

Para saber mais: https://www.alura.com.br/artigos/html-css-e-js-definicoes?_gl=1*1kvs4nu*_ga*MTAyMjIzNjI2OC4xNzAxODc3NTU5*_ga_1EPWSW3PCS*MTcwMjU2NTkxMC4yLjEuMTcwMjU3MDQxNy4wLjAuMA..*_fplc*Z3Y1QzdnMzRWa29BcjlHMWJlS2p5MDhCOFpBMXdpQ2pheFVkU2F3dDIlMkJNck9HSHNTVjZ2T3RxTWYlMkZ5V3JZUHQyaU5Cc0lERFBrc1JKUlJGVFFESlZwaWZkTzRMdHpxVUJNbGczQUpxVXByZzRJR3VoVUNKSENzNlZKSzI4USUzRCUzRA..

## FUNÇÕES



  


// ---------------------------------------------------------------------
//                       LISTA DE PALAVRAS
// ---------------------------------------------------------------------
const words = [
    { word: "abacaxi", hint: "Fruta tropical de sabor doce e ácido, coberta por uma coroa" },
    { word: "abismo", hint: "Profunda depressão natural ou figurativa" },
    { word: "acácia", hint: "Gênero de árvore com flores amarelas" },
    { word: "adaga", hint: "Arma branca curta e pontiaguda" },
    { word: "afago", hint: "Carinho ou gesto de ternura" },
    { word: "algodão", hint: "Fibra branca usada para fazer tecidos" },
    { word: "alho", hint: "Temperinho de sabor e aroma fortes, muito usado na cozinha" },
    { word: "amarelo", hint: "Cor primária entre o verde e o laranja no espectro de luz" },
    { word: "andorinha", hint: "Pequena ave migratória que simboliza primavera" },
    { word: "anel", hint: "Peça de joalheria circular usada no dedo" },
    { word: "anjo", hint: "Ser celestial frequentemente representado com asas" },
    { word: "antigo", hint: "Adjetivo que significa muito velho ou do passado" },
    { word: "apito", hint: "Pequeno dispositivo que emite som agudo quando soprado" },
    { word: "aranha", hint: "Aracnídeo com oito pernas que tece teias" },
    { word: "areia", hint: "Conjunto de minúsculos grãos, comum em praias e desertos" },
    { word: "atum", hint: "Peixe muito consumido em saladas e sanduíches" },
    { word: "aviação", hint: "Transporte aéreo e uso de aviões" },
    { word: "azul", hint: "Cor do céu em um dia claro" },
    { word: "bacalhau", hint: "Peixe salgado muito popular na culinária portuguesa" },
    { word: "balanço", hint: "Brinquedo que vai para frente e para trás" },
    { word: "banheiro", hint: "Cômodo da casa usado para higiene pessoal" },
    { word: "bicho", hint: "Termo genérico para animal ou inseto" },
    { word: "bloco", hint: "Peça sólida ou unidade de construção" },
    { word: "borboleta", hint: "Inseto com asas coloridas que passa por metamorfose" },
    { word: "cacto", hint: "Planta espinhosa típica de regiões áridas" },
    { word: "cadeira", hint: "Móvel usado para sentar" },
    { word: "calafrio", hint: "Sensação de arrepio ou frio repentino" },
    { word: "cama", hint: "Móvel para dormir e descansar" },
    { word: "camisa", hint: "Peça de roupa que cobre o tronco e braços" },
    { word: "caneta", hint: "Instrumento para escrever com tinta" },
    { word: "capivara", hint: "Maior roedor do mundo, típico da América do Sul" },
    { word: "caranguejo", hint: "Crustáceo com pinças que vive em praias e mangues" },
    { word: "caverna", hint: "Cavidade natural formada em rochas ou montanhas" },
    { word: "cebola", hint: "Vegetal que faz chorar ao ser cortado" },
    { word: "céu", hint: "Atmosfera visível acima de nós, geralmente azul" },
    { word: "cidadão", hint: "Habitante de uma cidade ou país, com direitos e deveres" },
    { word: "clima", hint: "Conjunto de condições atmosféricas de uma região" },
    { word: "coelho", hint: "Mamífero com orelhas longas, muito associado à Páscoa" },
    { word: "cometa", hint: "Corpo celeste com núcleo gelado e cauda luminosa" },
    { word: "coragem", hint: "Força moral para enfrentar medo ou perigo" },
    { word: "corvo", hint: "Ave negra de grande inteligência" },
    { word: "criatura", hint: "Ser vivo, frequentemente usado para seres fantásticos" },
    { word: "culinária", hint: "Arte de cozinhar e preparar refeições" },
    { word: "curioso", hint: "Quem tem grande vontade de aprender coisas novas" },
    { word: "dado", hint: "Objeto de jogo com faces numeradas de 1 a 6" },
    { word: "dente", hint: "Estrutura presente na boca usada para mastigar" },
    { word: "deserto", hint: "Região árida com pouca vegetação e chuva" },
    { word: "dinossauro", hint: "Antigo réptil gigante que habitou a Terra no passado" },
    { word: "doce", hint: "Preparação açucarada ou sobremesa saborosa" },
    { word: "dragão", hint: "Criatura lendária que cospe fogo" },
    { word: "elefante", hint: "Grande mamífero com tromba e presas" },
    { word: "esquilo", hint: "Roedor que vive em árvores e come nozes" },
    { word: "estrela", hint: "Corpo celeste que brilha no espaço, como o Sol" },
    { word: "fada", hint: "Criatura mística com poderes mágicos e asas" },
    { word: "foca", hint: "Mamífero marinho que vive em águas frias" },
    { word: "fogo", hint: "Fenômeno de combustão que libera calor e luz" },
    { word: "fruta", hint: "Alimento geralmente doce que nasce das flores" },
    { word: "gato", hint: "Felino doméstico conhecido por sua agilidade" },
    { word: "girafa", hint: "Mamífero africano de pescoço longo" },
    { word: "grama", hint: "Planta rasteira que cobre o solo em jardins" },
    { word: "harmonia", hint: "Combinação agradável de elementos, paz de conjunto" },
    { word: "imagem", hint: "Representação visual de algo ou alguém" },
    { word: "ímpar", hint: "Número que não é divisível por 2" },
    { word: "isolamento", hint: "Estado de permanecer separado ou sozinho" },
    { word: "javali", hint: "Porco selvagem com presas proeminentes" },
    { word: "janela", hint: "Abertura em paredes que permite entrada de luz e ar" },
    { word: "jogo", hint: "Atividade lúdica com regras e objetivos" },
    { word: "jornal", hint: "Publicação periódica contendo notícias" },
    { word: "leão", hint: "Grande felino, considerado o 'rei da selva'" },
    { word: "lobo", hint: "Mamífero canídeo que vive em matilhas" },
    { word: "lua", hint: "Satélite natural que orbita a Terra" },
    { word: "luta", hint: "Combate físico ou confronto esportivo" },
    { word: "macaco", hint: "Primata ágil, vive em árvores ou florestas" },
    { word: "magia", hint: "Prática de feitiços ou efeitos sobrenaturais" },
    { word: "mar", hint: "Grande massa de água salgada que cobre partes do planeta" },
    { word: "melancia", hint: "Fruta grande de polpa vermelha e casca verde" },
    { word: "menina", hint: "Criança do sexo feminino" },
    { word: "menta", hint: "Erva aromática de sabor refrescante" },
    { word: "moinho", hint: "Construção usada para moer grãos, movida pelo vento ou água" },
    { word: "morango", hint: "Pequena fruta vermelha com sementes na superfície" },
    { word: "morte", hint: "Cessação definitiva da vida" },
    { word: "música", hint: "Arte de combinar sons e silêncio de forma harmoniosa" },
    { word: "nuvem", hint: "Conjunto de gotículas de água suspensas no ar" },
    { word: "nível", hint: "Altura ou estágio de algo, patamar" },
    { word: "onda", hint: "Oscilação que se move em meios como água ou ar" },
    { word: "ovelha", hint: "Mamífero ovino que produz lã" },
    { word: "palhaço", hint: "Artista circense que faz brincadeiras e palhaçadas" },
    { word: "pato", hint: "Ave aquática com bico chato e pés palmados" },
    { word: "pedra", hint: "Pequeno pedaço sólido de rocha" },
    { word: "peixe", hint: "Animal vertebrado que vive na água e respira por brânquias" },
    { word: "pintura", hint: "Arte de pintar quadros, paredes ou objetos" },
    { word: "planeta", hint: "Corpo celeste que orbita uma estrela" },
    { word: "pneu", hint: "Peça de borracha que reveste rodas de veículos" },
    { word: "porco", hint: "Mamífero doméstico criado para consumo" },
    { word: "quadro", hint: "Moldura que pode conter uma pintura ou imagem" },
    { word: "quente", hint: "Algo em alta temperatura" },
    { word: "rato", hint: "Pequeno roedor que vive em tocas" },
    { word: "relâmpago", hint: "Descarga elétrica atmosférica, acompanhada de trovão" },
    { word: "roda", hint: "Peça circular que gira em torno de um eixo" },
    { word: "roupa", hint: "Vestimenta usada para cobrir e proteger o corpo" },
    { word: "sabiá", hint: "Ave canora conhecida por seu belo canto" },
    { word: "sapato", hint: "Calçado usado para proteger os pés" },
    { word: "sombra", hint: "Região escura formada pela obstrução da luz" },
    { word: "sol", hint: "Estrela central do sistema solar" },
    { word: "tartaruga", hint: "Réptil com casco resistente que se retrai" },
    { word: "tigre", hint: "Grande felino listrado encontrado na Ásia" },
    { word: "tomate", hint: "Fruto vermelho, muito utilizado em molhos e saladas" },
    { word: "tornado", hint: "Fenômeno climático com ventos giratórios muito intensos" },
    { word: "uva", hint: "Fruta em cachos utilizada para fazer vinho" },
    { word: "urso", hint: "Mamífero grande, peludo e onívoro" },
    { word: "velocidade", hint: "Rapidez com que algo se desloca" },
    { word: "vento", hint: "Movimento do ar em diferentes direções" },
    { word: "viagem", hint: "Deslocamento de um lugar a outro para lazer ou trabalho" },
    { word: "víbora", hint: "Tipo de serpente venenosa" },
    { word: "xadrez", hint: "Jogo de estratégia com peças brancas e pretas" },
    { word: "xixi", hint: "Termo coloquial para urina" },
    { word: "zangado", hint: "Sentindo raiva ou aborrecimento" },
    { word: "zebra", hint: "Mamífero africano com listras pretas e brancas" },
    { word: "zumbi", hint: "Cadáver reanimado em histórias de terror" },
    { word: "zumba", hint: "Atividade que mistura dança e ginástica aeróbica" }
  ];
  

    // ---------------------------------------------------------------------
    //                       VARIÁVEIS GLOBAIS
    // ---------------------------------------------------------------------
    let selectedObj = null;    // Guardará { word, hint }
    let selectedWord = "";     // Guardará a string da palavra
    let correctLetters = [];
    let wrongLetters = [];
    let mistakes = 0;
    const maxMistakes = 6;

    // Seletores de elementos HTML
    const wordEl = document.getElementById("word");
    const wrongEl = document.getElementById("wrong-letters");
    const hangmanImg = document.getElementById("hangman-image");
    const notificationContainer = document.getElementById("notification-container");
    const keyboardContainer = document.getElementById("keyboard");
    const restartButton = document.getElementById("restart-button");
    const hintButton = document.getElementById("hint-button");

    // ---------------------------------------------------------------------
    //                       FUNÇÕES PRINCIPAIS
    // ---------------------------------------------------------------------

    /**
     * Sorteia um objeto (com { word, hint }) do array
     */
    function pickRandomWord() {
        return words[Math.floor(Math.random() * words.length)];
    }

    /**
     * Mostra as letras certas na tela, sublinhando espaços vazios.
     */
    function displayWord() {
        // Monta cada letra (ou espaço em branco)
        wordEl.innerHTML = selectedWord
          .split("")
          .map((letter) => {
            return `
              <span class="letter">
                ${correctLetters.includes(letter) ? letter : ""}
              </span>
            `;
          })
          .join("");
      
        // Pega o texto real sem quebras/espacos e converte pra minúsculo
        const innerWord = wordEl.innerText
          .replace(/\n/g, "")
          .replace(/\s/g, "")
          .toLowerCase();
          
        // Exemplo de log pra ver o que está acontecendo
        console.log("innerWord:", innerWord);
        console.log("selectedWord:", selectedWord);
      
        // Se todas as letras foram adivinhadas
        if (innerWord === selectedWord.toLowerCase()) {
          notificationContainer.innerText = "Parabéns! Você ganhou!";
          notificationContainer.classList.add("animate-win");
      
          fireConfetti();
          blinkBackgroundColors();
          endGame();
        }
      }
      
      /**
       * Atualiza as letras erradas e a imagem da forca
       */
      function updateWrongLetters() {
        wrongEl.innerText = `Letras Erradas: ${wrongLetters.join(" ")}`;
        hangmanImg.src = `img/forca${mistakes}.png`;
      
        if (mistakes === maxMistakes) {
          notificationContainer.innerText = `Você perdeu! A palavra era "${selectedWord}".`;
          notificationContainer.classList.add("animate-lose");
          endGame();
        }
      }
      
      /**
       * Desativa todos os botões do "teclado".
       */
      function endGame() {
        const keys = document.querySelectorAll(".key");
        keys.forEach((key) => {
          key.disabled = true;
        });
      }
      
      /**
       * Verifica se a letra clicada está na palavra.
       */
      function guessLetter(letter) {
        // Se a palavra contiver a letra
        if (selectedWord.toLowerCase().includes(letter)) {
          if (!correctLetters.includes(letter)) {
            correctLetters.push(letter);
            displayWord();
          }
        } else {
          // Letra errada
          if (!wrongLetters.includes(letter)) {
            wrongLetters.push(letter);
            mistakes++;
      
            // Efeito "fica avermelhado" a cada erro
            document.body.style.backgroundColor = `rgb(255, ${255 - mistakes * 20}, ${255 - mistakes * 20})`;
      
            updateWrongLetters();
          }
        }
      }
      
      /**
       * Cria o teclado virtual (a-z).
       * (Se quiser, inclua acentos aqui)
       */
      function createKeyboard() {
        keyboardContainer.innerHTML = "";
        const letters = "abcdefghijklmnopqrstuvwxyz".split("");
      
        letters.forEach((letter) => {
          const button = document.createElement("button");
          button.classList.add("key");
          button.innerText = letter;
      
          button.addEventListener("click", () => {
            guessLetter(letter);
            button.disabled = true;
          });
      
          keyboardContainer.appendChild(button);
        });
      }
      
      /**
       * Mostra a dica da palavra
       */
      function showHint() {
        if (selectedObj && selectedObj.hint) {
          notificationContainer.innerText = selectedObj.hint;
          hintButton.disabled = true; 
        }
      }
      
      /**
       * Reinicia ou inicia o jogo
       */
      function initGame() {
        selectedObj = pickRandomWord();
        selectedWord = selectedObj.word; // ex: "borboleta"
      
        correctLetters = [];
        wrongLetters = [];
        mistakes = 0;
      
        hangmanImg.src = "img/forca0.png";
        notificationContainer.innerText = "";
        notificationContainer.classList.remove("animate-win", "animate-lose");
        wrongEl.innerText = "Letras Erradas:";
        wordEl.innerHTML = "";
        keyboardContainer.innerHTML = "";
        document.body.style.backgroundColor = "#f5f5f5";
      
        hintButton.disabled = false;
      
        createKeyboard();
        displayWord();
      }
      
      /**
       * Efeito pisca-fundo
       */
      function blinkBackgroundColors() {
        const originalColor = "#f5f5f5";
        const colors = ["#ff7675", "#fdcb6e", "#00cec9", "#6c5ce7", "#fab1a0"];
      
        let i = 0;
        const intervalId = setInterval(() => {
          document.body.style.backgroundColor = colors[i];
          i = (i + 1) % colors.length;
        }, 300);
      
        setTimeout(() => {
          clearInterval(intervalId);
          document.body.style.backgroundColor = originalColor;
        }, 3000);
      }
      
      /**
       * Solta confetes (canvas-confetti)
       */
      function fireConfetti() {
        const end = Date.now() + 3 * 1000;
        const colors = ["#e67e22", "#2ecc71", "#9b59b6", "#f1c40f"];
      
        (function frame() {
          confetti({ particleCount: 5, angle: 60, spread: 55, origin: { x: 0 }, colors });
          confetti({ particleCount: 5, angle: 120, spread: 55, origin: { x: 1 }, colors });
          if (Date.now() < end) requestAnimationFrame(frame);
        })();
      }
      
      // ---------------------------------------------------------------------
      // EVENTOS DE CLIQUE E INICIALIZAÇÃO
      // ---------------------------------------------------------------------
      restartButton.addEventListener("click", initGame);
      hintButton.addEventListener("click", showHint);
      initGame();
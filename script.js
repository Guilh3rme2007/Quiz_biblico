const startButton = document.querySelector('.start-quiz');
const questionContainer = document.querySelector('.questions-container');
const answersContainer = document.querySelector('.answers-container');
const questionElement = document.querySelector('.question');
const nextQuestion = document.querySelector('.next-question');

let currentQuestionIndex = 0;
let score = 0;


const maxQuestions = 10;
let askedQuestions = [];

function getRandomQuestions(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

const questions = [
    {
        question: "Qual é o menor livro da Bíblia?",
        answers: [
            { text: "Judas", correct: false },
            { text: "2 João", correct: true },
            { text: "Obadias", correct: false },
            { text: "Filemom", correct: false }
        ]
    },
    {
        question: "Quantos Apóstolos Jesus tinha?",
        answers: [
            { text: "10", correct: false },
            { text: "12", correct: true },
            { text: "14", correct: false },
            { text: "15", correct: false }
        ]
    },
    {
        question: "Quantos livros tem o Novo Testamento?",
        answers: [
            { text: "27", correct: true },
            { text: "39", correct: false },
            { text: "66", correct: false },
            { text: "23", correct: false }
        ]
    },
    {
        question: "Em que monte Jesus foi crucificado?",
        answers: [
            { text: "Monte Sinai", correct: false },
            { text: "Monte das Oliveiras", correct: false },
            { text: "Gólgota", correct: true },
            { text: "Monte Carmelo", correct: false }
        ]
    },
    {
        question: "Qual foi o primeiro milagre de Jesus?",
        answers: [
            { text: "Cura do cego", correct: false },
            { text: "Transformar água em vinho", correct: true },
            { text: "Multiplicação dos pães", correct: false },
            { text: "Caminhar sobre as águas", correct: false }
        ]
    },
    {
        question: "Quem traiu Jesus por 30 moedas de prata?",
        answers: [
            { text: "Pedro", correct: false },
            { text: "Judas Iscariotes", correct: true },
            { text: "Tiago", correct: false },
            { text: "João", correct: false }
        ]
    },
    {
        question: "Qual é o maior mandamento segundo Jesus?",
        answers: [
            { text: "Amar a Deus acima de tudo", correct: true },
            { text: "Não matar", correct: false },
            { text: "Guardar o sábado", correct: false },
            { text: "Honrar pai e mãe", correct: false }
        ]
    },
    {
        question: "Qual era a profissão de Jesus?",
        answers: [
            { text: "Pescador", correct: false },
            { text: "Carpinteiro", correct: true },
            { text: "Ferreiro", correct: false },
            { text: "Pastor", correct: false }
        ]
    },
    {
        question: "Qual o profeta que desafiou os profetas de Baal no Monte Carmelo?",
        answers: [
            { text: "Isaías", correct: false },
            { text: "Elias", correct: true },
            { text: "Jeremias", correct: false },
            { text: "Ezequiel", correct: false }
        ]
    },
    {
        question: "Quem foi lançado na cova dos leões?",
        answers: [
            { text: "Daniel", correct: true },
            { text: "Ezequiel", correct: false },
            { text: "Jeremias", correct: false },
            { text: "Isaías", correct: false }
        ]
    },
    {
        question: "Qual é o primeiro livro da Bíblia?",
        answers: [
            { text: "Gênesis", correct: true },
            { text: "Êxodo", correct: false },
            { text: "Levítico", correct: false },
            { text: "Números", correct: false }
        ]
    },
    {
        question: "Qual o nome do segundo rei de Israel?",
        answers: [
            { text: "Davi", correct: true },
            { text: "Saul", correct: false },
            { text: "Salomão", correct: false },
            { text: "Ezequias", correct: false }
        ]
    },
    {
        question: "Qual o maior livro da Bíblia?",
        answers: [
            { text: "Salmos", correct: true },
            { text: "Isaías", correct: false },
            { text: "Jeremias", correct: false },
            { text: "Ezequiel", correct: false }
        ]
    },
    {
        question: "Quem foi o primeiro homem criado por Deus?",
        answers: [
            { text: "Adão", correct: true },
            { text: "Eva", correct: false },
            { text: "Noé", correct: false },
            { text: "Abraão", correct: false }
        ]
    },
    {
        question: "Qual é o nome do apóstolo conhecido como 'o discípulo amado'?",
        answers: [
            { text: "Pedro", correct: false },
            { text: "João", correct: true },
            { text: "Tiago", correct: false },
            { text: "André", correct: false }
        ]
    },
    {
        question: "Quantos dias e noites choveu durante o dilúvio de Noé?",
        answers: [
            { text: "30", correct: false },
            { text: "40", correct: true },
            { text: "50", correct: false },
            { text: "60", correct: false }
        ]
    },
    {
        question: "Onde Jesus nasceu?",
        answers: [
            { text: "Jerusalém", correct: false },
            { text: "Belém", correct: true },
            { text: "Nazareth", correct: false },
            { text: "Galileia", correct: false }
        ]
    },
    {
        question: "Onde José e seus irmãos habitaram depois da morte de seu pai?",
        answers: [
            { text: "Egito", correct: true },
            { text: "Canaã", correct: false },
            { text: "Mesopotâmia", correct: false },
            { text: "Babilônia", correct: false }
        ]
    },
    {
        question: "Quem foi o profeta que confrontou o rei Davi sobre seu pecado com Bate-Seba?",
        answers: [
            { text: "Natã", correct: true },
            { text: "Elias", correct: false },
            { text: "Isaías", correct: false },
            { text: "Jeremias", correct: false }
        ]
    },
    {
        question: "Qual é o nome do rio onde Jesus foi batizado?",
        answers: [
            { text: "Rio Nilo", correct: false },
            { text: "Rio Jordão", correct: true },
            { text: "Rio Eufrates", correct: false },
            { text: "Rio Tigre", correct: false }
        ]
    },
    {
        question: "Quem era o rei da Babilônia quando Daniel foi lançado na cova dos leões?",
        answers: [
            { text: "Ciro", correct: false },
            { text: "Nabucodonosor", correct: false },
            { text: "Dario", correct: true },
            { text: "Belsazar", correct: false }
        ]
    },
    {
        question: "Qual é o nome do apóstolo que escreveu o livro de Apocalipse?",
        answers: [
            { text: "Pedro", correct: false },
            { text: "João", correct: true },
            { text: "Tiago", correct: false },
            { text: "André", correct: false }
        ]
    },
    {
        question: "Qual o nome do Apóstolo que era perseguidor dos cristãos antes de sua conversão?",
        answers: [
            { text: "Pedro", correct: false },
            { text: "Paulo", correct: true },
            { text: "Tiago", correct: false },
            { text: "André", correct: false }
        ]
    },
    {
        question: "Qual é a candeia do corpo segundo Jesus?",
        answers: [
            { text: "O coração", correct: false },
            { text: "Os olhos", correct: true },
            { text: "A boca", correct: false },
            { text: "As mãos", correct: false }
        ]
    },
    {
        question: "Em que cidade Zaqueu encontrou Jesus?",
        answers: [
            { text: "Jerusalém", correct: false },
            { text: "Jericó", correct: true },
            { text: "Cezareia", correct: false },
            { text: "Roma", correct: false }
        ]
    },
    {
        question: "Quem foi o profeta que interpretou os sonhos do faraó no Egito?",
        answers: [
            { text: "Moisés", correct: false },
            { text: "José", correct: true },
            { text: "Elias", correct: false },
            { text: "Isaías", correct: false }
        ]
    },
    {
        question: "Quais são os frutos do Espírito segundo Gálatas 5:22-23?",
        answers: [
            { text: "Amor, alegria, paz, paciência, benignidade, bondade, fidelidade, mansidão, domínio próprio", correct: true },
            { text: "Fé, esperança, caridade, humildade, obediência", correct: false },
            { text: "Sabedoria, entendimento, conselho, fortaleza, ciência", correct: false },
            { text: "Justiça, santidade, verdade, misericórdia, graça", correct: false }
        ]
    },
    {
        question: "Qual não é um dos Dez Mandamentos?",
        answers: [
            { text: "Não matarás", correct: false },
            { text: "Não roubarás", correct: false },
            { text: "Não mentirás", correct: false },
            { text: "Não amarás ao próximo", correct: true }
        ]
    },
    {
        question: "Quem foi o primeiro mártir cristão?",
        answers: [
            { text: "Pedro", correct: false },
            { text: "Estevão", correct: true },
            { text: "Tiago", correct: false },
            { text: "Paulo", correct: false }
        ]
    },
    {
        question: "Quem foi resuscitado por Jesus após quatro dias de morte?",
        answers: [
            { text: "Lázaro", correct: true },
            { text: "Jairo", correct: false },
            { text: "Nicodemos", correct: false },
            { text: "Bartimeu", correct: false }
        ]
    },
    {
        question: "Jonas foi engolido por um grande peixe",
        answers: [
            { text: "Verdadeiro", correct: true },
            { text: "Falso", correct: false }
        ]
    },
    {
        question: "Qual o último livro do Novo Testamento?",
        answers: [
            { text: "Judas", correct: false },
            { text: "Apocalipse", correct: true },
            { text: "Hebreus", correct: false },
            { text: "Tiago", correct: false }
        ]
    },
    {
        question: "Qual é o nome do discípulo que duvidou da ressurreição de Jesus até ver as marcas dos cravos em suas mãos?",
        answers: [
            { text: "Pedro", correct: false },
            { text: "Tomé", correct: true },
            { text: "João", correct: false },
            { text: "Tiago", correct: false }
        ]
    },
    {
        question: "Qual é o último livro do Antigo Testamento?",
        answers: [
            { text: "Malaquias", correct: true },
            { text: "Ageu", correct: false },
            { text: "Zacarias", correct: false },
            { text: "Miquéias", correct: false }
        ]
    },
    {
        question: "Quantos capítulos tem o livro de Salmos?",
        answers: [
            { text: "150", correct: true },
            { text: "100", correct: false },
            { text: "200", correct: false },
            { text: "50", correct: false }
        ]
    },
    {
        question: "O que o povo adorou enquanto Moisés estava no monte Sinai recebendo os Dez Mandamentos?",
        answers: [
            { text: "Um bezerro de ouro", correct: true },
            { text: "Uma serpente de bronze", correct: false },
            { text: "Uma estátua de prata", correct: false },
            { text: "Um anjo", correct: false }
        ]
    },
    {
        question: "Quem foi lançado na fornalha ardente por se recusar a adorar uma estátua de ouro?",
        answers: [
            { text: "Sadraque, Mesaque e Abednego", correct: true },
            { text: "Daniel, Davi e Jonas", correct: false },
            { text: "Elias, Moisés e Josué", correct: false },
            { text: "Eliseu, Naum e Habacuque", correct: false }
        ]
    },
    {
        question: "Getsemani é o nome do jardim onde Jesus orou antes de ser preso?",
        answers: [
            { text: "Verdadeiro", correct: true },
            { text: "Falso", correct: false }
        ]
    },
    {
        question: "Qual era a profissão de Mateus antes de seguir Jesus?",
        answers: [
            { text: "Pescador", correct: false },
            { text: "Carpinteiro", correct: false },
            { text: "Cobrador de impostos", correct: true },
            { text: "Pastor", correct: false }
        ]
    },
    {
        question: "Paulo escreveu quantas cartas no Novo Testamento?",
        answers: [
            { text: "10", correct: false },
            { text: "13", correct: true },
            { text: "7", correct: false },
            { text: "5", correct: false }
        ]
    },
    {
        question: "Paulo disse que os crentes de Corinto estavam divididos",
        answers: [
            { text: "Verdadeiro", correct: true },
            { text: "Falso", correct: false }
        ]
    },
    {
        question: "O texto de 1 Coríntios 6:19-20 fala que somente o corpo dos líderes é templo do Espírito Santo",
        answers: [
            { text: "Verdadeiro", correct: false },
            { text: "Falso", correct: true }
        ]
    },
    {
        question: "A santa ceia foi instituída como uma sobremesa após o jantar",
        answers: [
            { text: "Verdadeiro", correct: false },
            { text: "Falso", correct: true }
        ]
    },
    {
        question: "Quem é o consolador prometido por Jesus em João 14?",
        answers: [
            { text: "O Espírito Santo", correct: true },
            { text: "O anjo Gabriel", correct: false },
            { text: "João Batista", correct: false },
            { text: "Pedro", correct: false }
        ]
    },
    {
        question: "Qual dessas opções não é uma das bem-aventuranças mencionadas por Jesus no Sermão da Montanha?",
        answers: [
            { text: "Bem-aventurados os humildes de espírito", correct: false },
            { text: "Bem-aventurados os que choram", correct: false },
            { text: "Bem-aventurados os perversos de coração", correct: true },
            { text: "Bem-aventurados os pacificadores", correct: false }
        ]
    },
    {
        question: "Quais foram as promessas feitas pelo diabo a Jesus durante as tentações no deserto?",
        answers: [
            { text: "Poder, riqueza e fama", correct: false },
            { text: "Reino do mundo, poder e glória", correct: true },
            { text: "Vida eterna, saúde e paz", correct: false },
            { text: "Sabedoria, força e coragem", correct: false }
        ]
    },
    {
        question: "Quais eram os tipos de solo mencionados na parábola do semeador?",
        answers: [
            { text: "Solo rochoso, solo arenoso, solo fértil e solo pedregoso", correct: false },
            { text: "Solo à beira do caminho, solo pedregoso, solo com espinhos e solo fértil", correct: true },
            { text: "Solo úmido, solo seco, solo fértil e solo infértil", correct: false },
            { text: "Solo montanhoso, solo plano, solo fértil e solo árido", correct: false }
        ]
    },
    {
        question: "Qual animal falou com Balaão?",
        answers: [
            { text: "Cavalo", correct: false },
            { text: "Jumento", correct: true },
            { text: "Cão", correct: false },
            { text: "Leão", correct: false }
        ]
    },
    {
        question: "O dicípulo Lucas era pescador?",
        answers: [
            { text: "Verdadeiro", correct: false },
            { text: "Falso", correct: true }
        ]
    },
    {
        question: "Tiago afirmou que a fé sem obras é morta?",
        answers: [
            { text: "Verdadeiro", correct: true },
            { text: "Falso", correct: false }
        ]
    },
    {
        question: "Tiago afirma que o homem de coração dobrado é amigo de Deus?",
        answers: [
            { text: "Verdadeiro", correct: false },
            { text: "Falso", correct: true }
        ]
    },
    {
        question: "Tiago afirma que somos tentados por Deus?",
        answers: [
            { text: "Verdadeiro", correct: false },
            { text: "Falso", correct: true }
        ]
    },
    {
        question: "Segundo Tiago a língua é um fogo que pode contaminar todo o corpo?",
        answers: [
            { text: "Verdadeiro", correct: true },
            { text: "Falso", correct: false }
        ]
    },
    {
        question: "Qual filho de Jacó foi vendido como escravo pelos seus irmãos?",
        answers: [
            { text: "Efraim", correct: false },
            { text: "José", correct: true },
            { text: "Levi", correct: false },
            { text: "Judá", correct: false }
        ]
    },
    {
        question: "Contra que animais Davi lutou quando era jovem?",
        answers: [
            { text: "Leão e urso", correct: true },
            { text: "Leão e lobo", correct: false },
            { text: "Urso e lobo", correct: false },
            { text: "Leão e leopardo", correct: false }
        ]
    },
    {
        question: "Qual é o simbolo do Espírito Santo mencionado no batismo de Jesus?",
        answers: [
            { text: "Pomba", correct: true },
            { text: "Fogo", correct: false },
            { text: "Vento", correct: false },
            { text: "Água", correct: false }
        ]
    },
    {
        question: "Quem foi o profeta que ungiu Saul como o primeiro rei de Israel?",
        answers: [
            { text: "Samuel", correct: true },
            { text: "Elias", correct: false },
            { text: "Eliseu", correct: false },
            { text: "Natã", correct: false }
        ]
    },
    {
        question: "Quem foi a primeira pessoa a ver Jesus ressuscitado?",
        answers: [
            { text: "Pedro", correct: false },
            { text: "Maria Madalena", correct: true },
            { text: "João", correct: false },
            { text: "Tomé", correct: false }
        ]
    },
    {
        question: "Onde Moisés recebeu os Dez Mandamentos?",
        answers: [
            { text: "Monte Sinai", correct: true },
            { text: "Monte Horebe", correct: false },
            { text: "Monte Ararat", correct: false },
            { text: "Monte Carmelo", correct: false }
        ]
    },
    {
        question: "Onde cairam as sementes que deram fruto cem, sessenta e trinta vezes?",
        answers: [
            { text: "No solo rochoso", correct: false },
            { text: "No solo à beira do caminho", correct: false },
            { text: "No solo com espinhos", correct: false },
            { text: "No solo fértil", correct: true }
        ]
    },
    {
        question: "A fruta proibida que Adão e Eva comeram era maçã?",
        answers: [
            { text: "Verdadeiro", correct: false },
            { text: "Falso", correct: true }
        ]
    },
    {
        question: "Quantas virgens são mencionadas na parábola de Jesus?",
        answers: [
            { text: "6", correct: false },
            { text: "8", correct: false },
            { text: "10", correct: true },
            { text: "12", correct: false }
        ]
    },
    {
        question: "Tarso, Lícia, Sidom, Jope são cidades ou nomes de pessoas?",
        answers: [
            { text: "Cidades", correct: true },
            { text: "Nomes de pessoas", correct: false }
        ]
    },
    {
        question: "Jonas pregou em Nínive?",
        answers: [
            { text: "Verdadeiro", correct: true },
            { text: "Falso", correct: false }
        ]
    },
    {
        question: "Qual é o nome do gigante que Davi derrotou com uma funda?",
        answers: [
            { text: "Golias", correct: true },
            { text: "Goliath", correct: false },
            { text: "Goliathus", correct: false },
            { text: "Goliathes", correct: false }
        ]
    },
    {
        question: "Qual foi o profeta que teve uma visão de um vale de ossos secos?",
        answers: [
            { text: "Ezequiel", correct: true },
            { text: "Isaías", correct: false },
            { text: "Jeremias", correct: false },
            { text: "Daniel", correct: false }
        ]
    },
    {
        question: "Quem foi o pai de João Batista?",
        answers: [
            { text: "Zacarias", correct: true },
            { text: "José", correct: false },
            { text: "Pedro", correct: false },
            { text: "Tiago", correct: false }
        ]
    },
    {
        question:"Qual foi o profeta que viu o trono de Deus em uma visão?",
        answers: [
            { text: "Isaías", correct: true },
            { text: "Ezequiel", correct: false },
            { text: "Jeremias", correct: false },
            { text: "Daniel", correct: false }
        ]
    },
    {
        question: "Qual foi o autor do livro de Atos dos Apóstolos?",
        answers: [
            { text: "Pedro", correct: false },
            { text: "Lucas", correct: true },
            { text: "João", correct: false },
            { text: "Tiago", correct: false }
        ]
    }
]


startButton.addEventListener('click', startQuiz);
nextQuestion.addEventListener('click', displayNextQuestion);

function startQuiz() {
    const shuffledQuestions = getRandomQuestions([...questions]);
    askedQuestions = shuffledQuestions.slice(0, maxQuestions);
    currentQuestionIndex = 0;
    score = 0;
    startButton.classList.add('hide');
    questionContainer.classList.remove('hide');
    displayNextQuestion();
}

function displayNextQuestion() {
    resetState();

    if(askedQuestions.length === currentQuestionIndex){
        return finishQuiz();
    }

    const currentQuestion = askedQuestions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;

    const shuffledAnswers = getRandomQuestions([...currentQuestion.answers]);

    shuffledAnswers.forEach(answers => {
        const button = document.createElement('button');
        button.textContent = answers.text;
        button.classList.add('button', 'answers');
        if(answers.correct){
            button.dataset.correct = answers.correct;
        }
        answersContainer.appendChild(button);
        button.addEventListener('click', selectAnswer);
    })
}

function resetState() {
    while (answersContainer.firstChild){
        answersContainer.removeChild(answersContainer.firstChild);
    }

    document.body.removeAttribute('class');
    nextQuestion.classList.add('hide');
}

function selectAnswer(event) {
    const selectedButton = event.target;
    if(selectedButton.dataset.correct){
        document.body.classList.add('correct');
        score++;
    }else{
        document.body.classList.add('wrong');
    }

    document.querySelectorAll('.answers').forEach(button => {
        if(button.dataset.correct){
            button.classList.add('correct');
        }else{
            button.classList.add('wrong');
        }

        button.disabled = true;
    })

    nextQuestion.classList.remove('hide');
    currentQuestionIndex++;
}

function finishQuiz() {
    const totalQuestions = askedQuestions.length;
    const performance = Math.floor((score / totalQuestions) * 100);

    let mensage = "";

    switch (true) {
        case (performance >= 90):
            mensage = "Excelente!";
            break;
        case (performance >= 70):
            mensage = "Muito bom!";
            break;
        case (performance >= 50):
            mensage = "Bom!";
            break;
        default:
            mensage = "Precisa melhorar!";
    }

    questionElement.innerHTML =
      `
      <h2 class = "final-message"> Quiz Finalizado!</h2> 
      <p class="final-message"> Você acertou ${score} de ${totalQuestions} perguntas.
      <br> Desempenho: ${performance}%. ${mensage}
      <span>Resultado: ${mensage}</span>
      </p>
      <button onclick="startQuiz()" class="button">Recomeçar Quiz</button>
      `;
}
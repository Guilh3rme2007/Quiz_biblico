const startButton = document.querySelector('.start-quiz');

const questionContainer = document.querySelector('#multiple-choices-conteiner');
const textQuestionContainer = document.querySelector('#text-input-conteiner')

const mcQuestionElement = document.querySelector('#mc-question')
const mcAnswersContainer = document.querySelector('#mc-answers-conteiner');

const txQuestionElement = document.querySelector('#text-question');
const txAnswersInput = document.querySelector('#text-answer-input');
const textSubmitContent = document.querySelector('#text-submit-button');
const textFeedback = document.querySelector('#text-feedback');


const nextQuestion = document.querySelector('.next-question');

let currentQuestionIndex = 0;
let score = 0;


const questions = [
    {
        type: "mc",
        question: "Qual é o menor livro da Bíblia?",
        answers: [
            { text: "Judas", correct: false },
            { text: "2 João", correct: true },
            { text: "Obadias", correct: false },
            { text: "Filemom", correct: false }
        ]
    },
    {
        type: "mc",
        question: "Complete o versículo: Respondeu-lhe Jesus: Eu sou o ..., e a verdade, e a vida; ninguém vem ao Pai senão por mim. João 14:6",
        answers: [
            { text: "caminho", correct: true},
            { text: "melhor", correct: false},
            { text: "primeiro", correct: false},
            { text: "atalho", correct: false}
        ]
    },
    {
        type: "mc",
        question: "Quantos Apóstolos Jesus tinha?",
        answers: [
            { text: "10", correct: false },
            { text: "12", correct: true },
            { text: "14", correct: false },
            { text: "15", correct: false }
        ]
    },
    {
        type: "mc",
        question: "Quantos livros tem o Novo Testamento?",
        answers: [
            { text: "27", correct: true },
            { text: "39", correct: false },
            { text: "66", correct: false },
            { text: "23", correct: false }
        ]
    },
    {
        type: "mc",
        question: "Em que monte Jesus foi crucificado?",
        answers: [
            { text: "Monte Sinai", correct: false },
            { text: "Monte das Oliveiras", correct: false },
            { text: "Gólgota", correct: true },
            { text: "Monte Carmelo", correct: false }
        ]
    },
    {
        type: "mc",
        question: "Qual foi o primeiro milagre de Jesus?",
        answers: [
            { text: "Cura do cego", correct: false },
            { text: "Transformar água em vinho", correct: true },
            { text: "Multiplicação dos pães", correct: false },
            { text: "Caminhar sobre as águas", correct: false }
        ]
    },
    {
        type: "mc",
        question: "Quem traiu Jesus por 30 moedas de prata?",
        answers: [
            { text: "Pedro", correct: false },
            { text: "Judas Iscariotes", correct: true },
            { text: "Tiago", correct: false },
            { text: "João", correct: false }
        ]
    },
    {
        type: "mc",
        question: "Qual é o maior mandamento segundo Jesus?",
        answers: [
            { text: "Amar a Deus acima de todas as coisas", correct: true },
            { text: "Não matar", correct: false },
            { text: "Guardar o sábado", correct: false },
            { text: "Honrar pai e mãe", correct: false }
        ]
    },
    {
        type: "mc",
        question: "Qual era a profissão de Jesus?",
        answers: [
            { text: "Pescador", correct: false },
            { text: "Carpinteiro", correct: true },
            { text: "Ferreiro", correct: false },
            { text: "Pastor", correct: false }
        ]
    },
    {
        type: "mc",
        question: "Qual o profeta que desafiou os profetas de Baal no Monte Carmelo?",
        answers: [
            { text: "Isaías", correct: false },
            { text: "Elias", correct: true },
            { text: "Jeremias", correct: false },
            { text: "Ezequiel", correct: false }
        ]
    },
    {
        type: "mc",
        question: "Quem foi lançado na cova dos leões?",
        answers: [
            { text: "Daniel", correct: true },
            { text: "Ezequiel", correct: false },
            { text: "Jeremias", correct: false },
            { text: "Isaías", correct: false }
        ]
    },
    {
        type: "mc",
        question: "Quem foi o sumo sacerdote que condenou Jesus perante Pilatos?",
        answers: [
            { text: "Caifás", correct: true },
            { text: "Anás", correct: false },
            { text: "Herodes", correct: false },
            { text: "Gamaliel", correct: false }
        ]
    },
    {
        type: "mc",
        question: "Quantas pragas Deus enviou sobre o Egito?",
        answers: [
            { text: "7", correct: false },
            { text: "10", correct: true },
            { text: "12", correct: false },
            { text: "5", correct: false }
        ]
    },
    {
        type: "mc",
        question: "Em qual livro bíblico encontramos a história de Sansão?",
        answers: [
            { text: "Juízes", correct: true },
            { text: "Rute", correct: false },
            { text: "Samuel", correct: false },
            { text: "Reis", correct: false }
        ]
    },
    {
        type: "mc",
        question: "Qual o nome da cidade onde Paulo teve a visão do 'Macedônio' pedindo ajuda?",
        answers: [
            { text: "Atenas", correct: false },
            { text: "Jerusalém", correct: false },
            { text: "Trôade", correct: true },
            { text: "Corinto", correct: false }
        ]
    },
    {
        type: "mc",
        question: "Quem foi o pai de Abraão?",
        answers: [
            { text: "Isaque", correct: false },
            { text: "Noé", correct: false },
            { text: "Terá", correct: true },
            { text: "Jacó", correct: false }
        ]
    },
    {
        type: "mc",
        question: "O livro de Salmos é dividido em quantos livros ou coleções?",
        answers: [
            { text: "3", correct: false },
            { text: "5", correct: true },
            { text: "7", correct: false },
            { text: "4", correct: false }
        ]
    },
    {
        type: "mc",
        question: "Qual o nome da esposa de Moisés?",
        answers: [
            { text: "Miriã", correct: false },
            { text: "Zípora", correct: true },
            { text: "Joquebede", correct: false },
            { text: "Raquel", correct: false }
        ]
    },
    {
        type: "mc",
        question: "Qual apóstolo foi escolhido para substituir Judas Iscariotes?",
        answers: [
            { text: "Barnabé", correct: false },
            { text: "Matias", correct: true },
            { text: "Silas", correct: false },
            { text: "Timóteo", correct: false }
        ]
    },
    {
        type: "mc",
        question: "Jesus andou sobre qual mar/lago?",
        answers: [
            { text: "Mar Morto", correct: false },
            { text: "Mar Vermelho", correct: false },
            { text: "Mar da Galileia (ou Lago de Genesaré)", correct: true },
            { text: "Rio Jordão", correct: false }
        ]
    },
    {
        type: "mc",
        question: "Qual profeta foi levado ao céu por um redemoinho?",
        answers: [
            { text: "Eliseu", correct: false },
            { text: "Elias", correct: true },
            { text: "Isaías", correct: false },
            { text: "Jeremias", correct: false }
        ]
    },
    {
        type: "mc",
        question: "Quem foi o sumo sacerdote que condenou Jesus perante Pilatos?",
        answers: [
            { text: "Caifás", correct: true },
            { text: "Anás", correct: false },
            { text: "Herodes", correct: false },
            { text: "Gamaliel", correct: false }
        ]
    },
    {
        type: "mc",
        question: "Quantas pragas Deus enviou sobre o Egito?",
        answers: [
            { text: "7", correct: false },
            { text: "10", correct: true },
            { text: "12", correct: false },
            { text: "5", correct: false }
        ]
    },
    {
        type: "mc",
        question: "Em qual livro bíblico encontramos a história de Sansão?",
        answers: [
            { text: "Juízes", correct: true },
            { text: "Rute", correct: false },
            { text: "Samuel", correct: false },
            { text: "Reis", correct: false }
        ]
    },
    {
        type: "mc",
        question: "Qual o nome da cidade onde Paulo teve a visão do 'Macedônio' pedindo ajuda?",
        answers: [
            { text: "Atenas", correct: false },
            { text: "Jerusalém", correct: false },
            { text: "Trôade", correct: true },
            { text: "Corinto", correct: false }
        ]
    },
    {
        type: "mc",
        question: "Quem foi o pai de Abraão?",
        answers: [
            { text: "Isaque", correct: false },
            { text: "Noé", correct: false },
            { text: "Terá", correct: true },
            { text: "Jacó", correct: false }
        ]
    },
    {
        type: "mc",
        question: "O livro de Salmos é dividido em quantos livros ou coleções?",
        answers: [
            { text: "3", correct: false },
            { text: "5", correct: true },
            { text: "7", correct: false },
            { text: "4", correct: false }
        ]
    },
    {
        type: "mc",
        question: "Qual o nome da esposa de Moisés?",
        answers: [
            { text: "Miriã", correct: false },
            { text: "Zípora", correct: true },
            { text: "Joquebede", correct: false },
            { text: "Raquel", correct: false }
        ]
    },
    {
        type: "mc",
        question: "Qual apóstolo foi escolhido para substituir Judas Iscariotes?",
        answers: [
            { text: "Barnabé", correct: false },
            { text: "Matias", correct: true },
            { text: "Silas", correct: false },
            { text: "Timóteo", correct: false }
        ]
    },
    {
        type: "mc",
        question: "Jesus andou sobre qual mar/lago?",
        answers: [
            { text: "Mar Morto", correct: false },
            { text: "Mar Vermelho", correct: false },
            { text: "Mar da Galileia (ou Lago de Genesaré)", correct: true },
            { text: "Rio Jordão", correct: false }
        ]
    },
    {
        type: "mc",
        question: "Qual é o primeiro livro da Bíblia?",
        answers: [
            { text: "Gênesis", correct: true },
            { text: "Êxodo", correct: false },
            { text: "Levítico", correct: false },
            { text: "Números", correct: false }
        ]
    },
    {
        type: "mc",
        question: "Qual o nome do segundo rei de Israel?",
        answers: [
            { text: "Davi", correct: true },
            { text: "Saul", correct: false },
            { text: "Salomão", correct: false },
            { text: "Ezequias", correct: false }
        ]
    },
    {
        type: "mc",
        question: "Qual o maior livro da Bíblia?",
        answers: [
            { text: "Salmos", correct: true },
            { text: "Isaías", correct: false },
            { text: "Jeremias", correct: false },
            { text: "Ezequiel", correct: false }
        ]
    },
    {
        type: "mc",
        question: "Quem foi o primeiro homem criado por Deus?",
        answers: [
            { text: "Adão", correct: true },
            { text: "Eva", correct: false },
            { text: "Noé", correct: false },
            { text: "Abraão", correct: false }
        ]
    },
    {
        type: "mc",
        question: "Qual é o nome do apóstolo conhecido como 'o discípulo amado'?",
        answers: [
            { text: "Pedro", correct: false },
            { text: "João", correct: true },
            { text: "Tiago", correct: false },
            { text: "André", correct: false }
        ]
    },
    {
        type: "mc",
        question: "Quantos dias e noites choveu durante o dilúvio de Noé?",
        answers: [
            { text: "30", correct: false },
            { text: "40", correct: true },
            { text: "50", correct: false },
            { text: "60", correct: false }
        ]
    },
    {
        type: "mc",
        question: "Onde Jesus nasceu?",
        answers: [
            { text: "Jerusalém", correct: false },
            { text: "Belém", correct: true },
            { text: "Nazareth", correct: false },
            { text: "Galileia", correct: false }
        ]
    },
    {
        type: "mc",
        question: "Onde José e seus irmãos habitaram depois da morte de seu pai?",
        answers: [
            { text: "Egito", correct: true },
            { text: "Canaã", correct: false },
            { text: "Mesopotâmia", correct: false },
            { text: "Babilônia", correct: false }
        ]
    },
    {
        type: "mc",
        question: "Quem foi o profeta que confrontou o rei Davi sobre seu pecado com Bate-Seba?",
        answers: [
            { text: "Natã", correct: true },
            { text: "Elias", correct: false },
            { text: "Isaías", correct: false },
            { text: "Jeremias", correct: false }
        ]
    },
    {
        type: "mc",
        question: "Qual é o nome do rio onde Jesus foi batizado?",
        answers: [
            { text: "Rio Nilo", correct: false },
            { text: "Rio Jordão", correct: true },
            { text: "Rio Eufrates", correct: false },
            { text: "Rio Tigre", correct: false }
        ]
    },
    {
        type: "mc",
        question: "Quem era o rei da Babilônia quando Daniel foi lançado na cova dos leões?",
        answers: [
            { text: "Ciro", correct: false },
            { text: "Nabucodonosor", correct: false },
            { text: "Dario", correct: true },
            { text: "Belsazar", correct: false }
        ]
    },
    {
        type: "mc",
        question: "Qual é o nome do apóstolo que escreveu o livro de Apocalipse?",
        answers: [
            { text: "Pedro", correct: false },
            { text: "João", correct: true },
            { text: "Tiago", correct: false },
            { text: "André", correct: false }
        ]
    },
    {
        type: "mc",
        question: "Qual o nome do Apóstolo que era perseguidor dos cristãos antes de sua conversão?",
        answers: [
            { text: "Pedro", correct: false },
            { text: "Paulo", correct: true },
            { text: "Tiago", correct: false },
            { text: "André", correct: false }
        ]
    },
    {
        type: "mc",
        question: "Qual é a candeia do corpo segundo Jesus?",
        answers: [
            { text: "O coração", correct: false },
            { text: "Os olhos", correct: true },
            { text: "A boca", correct: false },
            { text: "As mãos", correct: false }
        ]
    },
    {
        type: "mc",
        question: "Em que cidade Zaqueu encontrou Jesus?",
        answers: [
            { text: "Jerusalém", correct: false },
            { text: "Jericó", correct: true },
            { text: "Cezareia", correct: false },
            { text: "Roma", correct: false }
        ]
    },
    {
        type: "mc",
        question: "Quem foi o profeta que interpretou os sonhos do faraó no Egito?",
        answers: [
            { text: "Moisés", correct: false },
            { text: "José", correct: true },
            { text: "Elias", correct: false },
            { text: "Isaías", correct: false }
        ]
    },
    {
        type: "mc",
        question: "Quais são os frutos do Espírito segundo Gálatas 5:22-23?",
        answers: [
            { text: "Amor, alegria, paz, paciência, benignidade, bondade, fidelidade, mansidão, domínio próprio", correct: true },
            { text: "Fé, esperança, caridade, humildade, obediência", correct: false },
            { text: "Sabedoria, entendimento, conselho, fortaleza, ciência", correct: false },
            { text: "Justiça, santidade, verdade, misericórdia, graça", correct: false }
        ]
    },
    {
        type: "mc",
        question: "Qual não é um dos Dez Mandamentos?",
        answers: [
            { text: "Não matarás", correct: false },
            { text: "Não roubarás", correct: false },
            { text: "Não mentirás", correct: false },
            { text: "Não amarás ao próximo", correct: true }
        ]
    },
    {
        type: "mc",
        question: "Quem foi o primeiro mártir cristão?",
        answers: [
            { text: "Pedro", correct: false },
            { text: "Estêvão", correct: true },
            { text: "Tiago", correct: false },
            { text: "Paulo", correct: false }
        ]
    },
    {
        type: "mc",
        question: "Quem foi ressuscitado por Jesus após quatro dias de morte?",
        answers: [
            { text: "Lázaro", correct: true },
            { text: "Jairo", correct: false },
            { text: "Nicodemos", correct: false },
            { text: "Bartimeu", correct: false }
        ]
    },
    {
        type: "mc",
        question: "Jonas foi engolido por um grande peixe",
        answers: [
            { text: "Verdadeiro", correct: true },
            { text: "Falso", correct: false }
        ]
    },
    {
        type: "mc",
        question: "Qual o último livro do Novo Testamento?",
        answers: [
            { text: "Judas", correct: false },
            { text: "Apocalipse", correct: true },
            { text: "Hebreus", correct: false },
            { text: "Tiago", correct: false }
        ]
    },
    {
        type: "mc",
        question: "Qual é o nome do discípulo que duvidou da ressurreição de Jesus até ver as marcas dos cravos em suas mãos?",
        answers: [
            { text: "Pedro", correct: false },
            { text: "Tomé", correct: true },
            { text: "João", correct: false },
            { text: "Tiago", correct: false }
        ]
    },
    {
        type: "mc",
        question: "Qual é o último livro do Antigo Testamento?",
        answers: [
            { text: "Malaquias", correct: true },
            { text: "Ageu", correct: false },
            { text: "Zacarias", correct: false },
            { text: "Miquéias", correct: false }
        ]
    },
    {
        type: "mc",
        question: "Quantos capítulos tem o livro de Salmos?",
        answers: [
            { text: "150", correct: true },
            { text: "100", correct: false },
            { text: "200", correct: false },
            { text: "50", correct: false }
        ]
    },
    {
        type: "mc",
        question: "O que o povo adorou enquanto Moisés estava no monte Sinai recebendo os Dez Mandamentos?",
        answers: [
            { text: "Um bezerro de ouro", correct: true },
            { text: "Uma serpente de bronze", correct: false },
            { text: "Uma estátua de prata", correct: false },
            { text: "Um anjo", correct: false }
        ]
    },
    {
        type: "mc",
        question: "Quem foi lançado na fornalha ardente por se recusar a adorar uma estátua de ouro?",
        answers: [
            { text: "Sadraque, Mesaque e Abednego", correct: true },
            { text: "Daniel, Davi e Jonas", correct: false },
            { text: "Elias, Moisés e Josué", correct: false },
            { text: "Eliseu, Naum e Habacuque", correct: false }
        ]
    },
    {
        type: "mc",
        question: "Getsêmani é o nome do jardim onde Jesus orou antes de ser preso?",
        answers: [
            { text: "Verdadeiro", correct: true },
            { text: "Falso", correct: false }
        ]
    },
    {
        type: "mc",
        question: "Qual era a profissão de Mateus antes de seguir Jesus?",
        answers: [
            { text: "Pescador", correct: false },
            { text: "Carpinteiro", correct: false },
            { text: "Cobrador de impostos", correct: true },
            { text: "Pastor", correct: false }
        ]
    },
    {
        type: "mc",
        question: "Paulo escreveu quantas cartas no Novo Testamento?",
        answers: [
            { text: "10", correct: false },
            { text: "13", correct: true },
            { text: "7", correct: false },
            { text: "5", correct: false }
        ]
    },
    {
        type: "mc",
        question: "Paulo disse que os crentes de Corinto estavam divididos",
        answers: [
            { text: "Verdadeiro", correct: true },
            { text: "Falso", correct: false }
        ]
    },
    {
        type: "mc",
        question: "O texto de 1 Coríntios 6:19-20 fala que somente o corpo dos líderes é templo do Espírito Santo",
        answers: [
            { text: "Verdadeiro", correct: false },
            { text: "Falso", correct: true }
        ]
    },
    {
        type: "mc",
        question: "A santa ceia foi instituída como uma sobremesa após o jantar",
        answers: [
            { text: "Verdadeiro", correct: false },
            { text: "Falso", correct: true }
        ]
    },
    {
        type: "mc",
        question: "Quem é o consolador prometido por Jesus em João 14?",
        answers: [
            { text: "O Espírito Santo", correct: true },
            { text: "O anjo Gabriel", correct: false },
            { text: "João Batista", correct: false },
            { text: "Pedro", correct: false }
        ]
    },
    {
        type: "mc",
        question: "Qual dessas opções não é uma das bem-aventuranças mencionadas por Jesus no Sermão da Montanha?",
        answers: [
            { text: "Bem-aventurados os humildes de espírito", correct: false },
            { text: "Bem-aventurados os que choram", correct: false },
            { text: "Bem-aventurados os perversos de coração", correct: true },
            { text: "Bem-aventurados os pacificadores", correct: false }
        ]
    },
    {
        type: "mc",
        question: "Quais foram as promessas feitas pelo diabo a Jesus durante as tentações no deserto?",
        answers: [
            { text: "Poder, riqueza e fama", correct: false },
            { text: "Reino do mundo, poder e glória", correct: true },
            { text: "Vida eterna, saúde e paz", correct: false },
            { text: "Sabedoria, força e coragem", correct: false }
        ]
    },
    {
        type: "mc",
        question: "Quais eram os tipos de solo mencionados na parábola do semeador?",
        answers: [
            { text: "Solo rochoso, solo arenoso, solo fértil e solo pedregoso", correct: false },
            { text: "Solo à beira do caminho, solo pedregoso, solo com espinhos e solo fértil", correct: true },
            { text: "Solo úmido, solo seco, solo fértil e solo infértil", correct: false },
            { text: "Solo montanhoso, solo plano, solo fértil e solo árido", correct: false }
        ]
    },
    {
        type: "mc",
        question: "Qual animal falou com Balaão?",
        answers: [
            { text: "Cavalo", correct: false },
            { text: "Jumento", correct: true },
            { text: "Cão", correct: false },
            { text: "Leão", correct: false }
        ]
    },
    {
        type: "mc",
        question: "O discípulo Lucas era pescador?",
        answers: [
            { text: "Verdadeiro", correct: false },
            { text: "Falso", correct: true }
        ]
    },
    {
        type: "mc",
        question: "Tiago afirmou que a fé sem obras é morta?",
        answers: [
            { text: "Verdadeiro", correct: true },
            { text: "Falso", correct: false }
        ]
    },
    {
        type: "mc",
        question: "Tiago afirma que o homem de coração dobrado é amigo de Deus?",
        answers: [
            { text: "Verdadeiro", correct: false },
            { text: "Falso", correct: true }
        ]
    },
    {
        type: "mc",
        question: "Tiago afirma que somos tentados por Deus?",
        answers: [
            { text: "Verdadeiro", correct: false },
            { text: "Falso", correct: true }
        ]
    },
    {
        type: "mc",
        question: "Segundo Tiago, a língua é um fogo que pode contaminar todo o corpo?",
        answers: [
            { text: "Verdadeiro", correct: true },
            { text: "Falso", correct: false }
        ]
    },
    {
        type: "mc",
        question: "Qual filho de Jacó foi vendido como escravo pelos seus irmãos?",
        answers: [
            { text: "Efraim", correct: false },
            { text: "José", correct: true },
            { text: "Levi", correct: false },
            { text: "Judá", correct: false }
        ]
    },
    {
        type: "mc",
        question: "Contra que animais Davi lutou quando era jovem?",
        answers: [
            { text: "Leão e urso", correct: true },
            { text: "Leão e lobo", correct: false },
            { text: "Urso e lobo", correct: false },
            { text: "Leão e leopardo", correct: false }
        ]
    },
    {
        type: "mc",
        question: "Qual é o símbolo do Espírito Santo mencionado no batismo de Jesus?",
        answers: [
            { text: "Pomba", correct: true },
            { text: "Fogo", correct: false },
            { text: "Vento", correct: false },
            { text: "Água", correct: false }
        ]
    },
    {
        type: "mc",
        question: "Quem foi o profeta que ungiu Saul como o primeiro rei de Israel?",
        answers: [
            { text: "Samuel", correct: true },
            { text: "Elias", correct: false },
            { text: "Eliseu", correct: false },
            { text: "Natã", correct: false }
        ]
    },
    {
        type: "mc",
        question: "Quem foi a primeira pessoa a ver Jesus ressuscitado?",
        answers: [
            { text: "Pedro", correct: false },
            { text: "Maria Madalena", correct: true },
            { text: "João", correct: false },
            { text: "Tomé", correct: false }
        ]
    },
    {
        type: "mc",
        question: "Onde Moisés recebeu os Dez Mandamentos?",
        answers: [
            { text: "Monte Sinai", correct: true },
            { text: "Monte Horebe", correct: false },
            { text: "Monte Ararat", correct: false },
            { text: "Monte Carmelo", correct: false }
        ]
    },
    {
        type: "mc",
        question: "Onde caíram as sementes que deram fruto cem, sessenta e trinta vezes?",
        answers: [
            { text: "No solo rochoso", correct: false },
            { text: "No solo à beira do caminho", correct: false },
            { text: "No solo com espinhos", correct: false },
            { text: "No solo fértil", correct: true }
        ]
    },
    {
        type: "mc",
        question: "A fruta proibida que Adão e Eva comeram era maçã?",
        answers: [
            { text: "Verdadeiro", correct: false },
            { text: "Falso", correct: true }
        ]
    },
    {
        type: "mc",
        question: "Quantas virgens são mencionadas na parábola de Jesus?",
        answers: [
            { text: "6", correct: false },
            { text: "8", correct: false },
            { text: "10", correct: true },
            { text: "12", correct: false }
        ]
    },
    {
        type: "mc",
        question: "Tarso, Lícia, Sidom, Jope são cidades ou nomes de pessoas?",
        answers: [
            { text: "Cidades", correct: true },
            { text: "Nomes de pessoas", correct: false }
        ]
    },
    {
        type: "mc",
        question: "Jonas pregou em Nínive?",
        answers: [
            { text: "Verdadeiro", correct: true },
            { text: "Falso", correct: false }
        ]
    },
    {
        type: "mc",
        question: "Qual é o nome do gigante que Davi derrotou com uma funda?",
        answers: [
            { text: "Golias", correct: true },
            { text: "Goliath", correct: false },
            { text: "Goliathus", correct: false },
            { text: "Goliathes", correct: false }
        ]
    },
    {
        type: "mc",
        question: "Qual foi o profeta que teve uma visão de um vale de ossos secos?",
        answers: [
            { text: "Ezequiel", correct: true },
            { text: "Isaías", correct: false },
            { text: "Jeremias", correct: false },
            { text: "Daniel", correct: false }
        ]
    },
    {
        type: "mc",
        question: "Quem foi o pai de João Batista?",
        answers: [
            { text: "Zacarias", correct: true },
            { text: "José", correct: false },
            { text: "Pedro", correct: false },
            { text: "Tiago", correct: false }
        ]
    },
    {
        type: "mc",
        question:"Qual foi o profeta que viu o trono de Deus em uma visão?",
        answers: [
            { text: "Isaías", correct: true },
            { text: "Ezequiel", correct: false },
            { text: "Jeremias", correct: false },
            { text: "Daniel", correct: false }
        ]
    },
    {
        type: "mc",
        question: "Qual foi o autor do livro de Atos dos Apóstolos?",
        answers: [
            { text: "Pedro", correct: false },
            { text: "Lucas", correct: true },
            { text: "João", correct: false },
            { text: "Tiago", correct: false }
        ]
    },
    {
        type: "mc",
        question: "Paulo é uma pessoa ou uma cidade?",
        answers: [
            { text: "Cidade", correct: false},
            { text: "Pessoa", correct: true}
        ]
    },
    {
        type: "mc",
        question: "Herodes é uma pessoa ou uma cidade?",
        answers: [
            { text: "Cidade", correct: false},
            { text: "Pessoa", correct: true}
        ]
    },
    {
        type: "mc",
        question: "Tiago é uma pessoa ou uma cidade?",
        answers: [
            { text: "Cidade", correct: false},
            { text: "Pessoa", correct: true}
        ]
    },
    {
        type: "mc",
        question: "Barnabé é uma pessoa ou uma cidade?",
        answers: [
            { text: "Cidade", correct: false},
            { text: "Pessoa", correct: true}
        ]
    },
    {
        type: "mc",
        question: "Simeão é uma pessoa ou uma cidade?",
        answers: [
            { text: "Cidade", correct: false},
            { text: "Pessoa", correct: true}
        ]
    },
    {
        type: "mc",
        question: "Saulo é uma pessoa ou uma cidade?",
        answers: [
            { text: "Cidade", correct: false},
            { text: "Pessoa", correct: true}
        ]
    },
    {
        type: "mc",
        question: "Cornélio é uma pessoa ou uma cidade?",
        answers: [
            { text: "Cidade", correct: false},
            { text: "Pessoa", correct: true}
        ]
    },
    {
        type: "mc",
        question: "Prócoro é uma pessoa ou uma cidade?",
        answers: [
            { text: "Cidade", correct: false},
            { text: "Pessoa", correct: true}
        ]
    },
    {
        type: "mc",
        question: "Nicanor é uma pessoa ou uma cidade?",
        answers: [
            { text: "Cidade", correct: false},
            { text: "Pessoa", correct: true}
        ]
    },
    {
        type: "mc",
        question: "Marta é uma pessoa ou uma cidade?",
        answers: [
            { text: "Cidade", correct: false},
            { text: "Pessoa", correct: true}
        ]
    },
    {
        type: "mc",
        question: "Timóteo é uma pessoa ou uma cidade?",
        answers: [
            { text: "Cidade", correct: false},
            { text: "Pessoa", correct: true}
        ]
    },
    {
        type: "mc",
        question: "Levi é uma pessoa ou uma cidade?",
        answers: [
            { text: "Cidade", correct: false},
            { text: "Pessoa", correct: true}
        ]
    },
    {
        type: "mc",
        question: "Ananias é uma pessoa ou uma cidade?",
        answers: [
            { text: "Cidade", correct: false},
            { text: "Pessoa", correct: true}
        ]
    },
    {
        type: "mc",
        question: "Eneias é uma pessoa ou uma cidade?",
        answers: [
            { text: "Cidade", correct: false},
            { text: "Pessoa", correct: true}
        ]
    },
    {
        type: "mc",
        question: "Silas é uma pessoa ou uma cidade?",
        answers: [
            { text: "Cidade", correct: false},
            { text: "Pessoa", correct: true}
        ]
    },
    {
        type: "mc",
        question: "Zebedeu é uma pessoa ou uma cidade?",
        answers: [
            { text: "Cidade", correct: false},
            { text: "Pessoa", correct: true}
        ]
    },
    {
        type: "mc",
        question: "Tomé é uma pessoa ou uma cidade?",
        answers: [
            { text: "Cidade", correct: false},
            { text: "Pessoa", correct: true}
        ]
    },
    {
        type: "mc",
        question: "Bartolomeu é uma pessoa ou uma cidade?",
        answers: [
            { text: "Cidade", correct: false},
            { text: "Pessoa", correct: true}
        ]
    },
    {
        type: "mc",
        question: "Alfeu é uma pessoa ou uma cidade?",
        answers: [
            { text: "Cidade", correct: false},
            { text: "Pessoa", correct: true}
        ]
    },
    {
        type: "mc",
        question: "Simão é uma pessoa ou uma cidade?",
        answers: [
            { text: "Cidade", correct: false},
            { text: "Pessoa", correct: true}
        ]
    },
    {
        type: "mc",
        question: "Lázaro é uma pessoa ou uma cidade?",
        answers: [
            { text: "Cidade", correct: false},
            { text: "Pessoa", correct: true}
        ]
    },
    {
        type: "mc",
        question: "Ai é uma pessoa ou uma cidade?",
        answers: [
            { text: "Cidade", correct: true},
            { text: "Pessoa", correct: false}
        ]
    },
    {
        type: "mc",
        question: "Cesareia é uma pessoa ou uma cidade?",
        answers: [
            { text: "Cidade", correct: true},
            { text: "Pessoa", correct: false}
        ]
    },
    {
        type: "mc",
        question: "Betânia é uma pessoa ou uma cidade?",
        answers: [
            { text: "Cidade", correct: true},
            { text: "Pessoa", correct: false}
        ]
    },
    
    {
        type: "mc",
        question: "Filístia é uma pessoa ou uma cidade?",
        answers: [
            { text: "Cidade", correct: true},
            { text: "Pessoa", correct: false}
        ]
    },
    {
        type: "mc",
        question: "Galileia é uma pessoa ou uma cidade?",
        answers: [
            { text: "Cidade", correct: true},
            { text: "Pessoa", correct: false}
        ]
    },
    {
        type: "mc",
        question: "Damasco é uma pessoa ou uma cidade?",
        answers: [
            { text: "Cidade", correct: true},
            { text: "Pessoa", correct: false}
        ]
    },
    {
        type: "mc",
        question: "Tarso é uma pessoa ou uma cidade?",
        answers: [
            { text: "Cidade", correct: true},
            { text: "Pessoa", correct: false}
        ]
    },
    {
        type: "mc",
        question: "Bitínia é uma pessoa ou uma cidade?",
        answers: [
            { text: "Cidade", correct: true},
            { text: "Pessoa", correct: false}
        ]
    },
    {
        type: "mc",
        question: "Cirene é uma pessoa ou uma cidade?",
        answers: [
            { text: "Cidade", correct: true},
            { text: "Pessoa", correct: false}
        ]
    },
    {
        type: "mc",
        question: "Emaús é uma pessoa ou uma cidade?",
        answers: [
            { text: "Cidade", correct: true},
            { text: "Pessoa", correct: false}
        ]
    },
    {
        type: "mc",
        question: "Betsaida é uma pessoa ou uma cidade?",
        answers: [
            { text: "Cidade", correct: true},
            { text: "Pessoa", correct: false}
        ]
    },
    {
        type: "mc",
        question: "Samaria é uma pessoa ou uma cidade?",
        answers: [
            { text: "Cidade", correct: true},
            { text: "Pessoa", correct: false}
        ]
    },
    {
        type: "mc",
        question: "Bereia é uma pessoa ou uma cidade?",
        answers: [
            { text: "Cidade", correct: true},
            { text: "Pessoa", correct: false}
        ]
    },
    {
        type: "mc",
        question: "Jope é uma pessoa ou uma cidade?",
        answers: [
            { text: "Cidade", correct: true},
            { text: "Pessoa", correct: false}
        ]
    },
    {
        type: "mc",
        question: "Antioquia é uma pessoa ou uma cidade?",
        answers: [
            { text: "Cidade", correct: true},
            { text: "Pessoa", correct: false}
        ]
    },
    {
        type: "mc",
        question: "Sidom é uma pessoa ou uma cidade?",
        answers: [
            { text: "Cidade", correct: true},
            { text: "Pessoa", correct: false}
        ]
    },
    {
        type: "mc",
        question: "Malta é uma pessoa ou uma cidade?",
        answers: [
            { text: "Cidade", correct: true},
            { text: "Pessoa", correct: false}
        ]
    },
    {
        type: "mc",
        question: "Quem foi o profeta que foi engolido por um grande peixe?",
        answers: [
            { text: "Elias", correct: false },
            { text: "Jonas", correct: true },
            { text: "Jeremias", correct: false },
            { text: "Isaías", correct: false }
        ]
    },
    {
        type: "mc",
        question: "Qual era o nome original de Pedro, um dos 12 apóstolos?",
        answers: [
            { text: "Saulo", correct: false },
            { text: "Simão", correct: true },
            { text: "João", correct: false },
            { text: "André", correct: false }
        ]
    },
    {
        type: "mc",
        question: "Qual era a nação de origem da Rainha de Sabá?",
        answers: [
            { text: "Etiópia", correct: false },
            { text: "Arábia", correct: true },
            { text: "Egito", correct: false },
            { text: "Assíria", correct: false }
        ]
    },
    {
        type: "mc",
        question: "Quem matou o gigante Golias?",
        answers: [
            { text: "Saul", correct: false },
            { text: "Davi", correct: true },
            { text: "Sansão", correct: false },
            { text: "Jônatas", correct: false }
        ]
    },
    {
        type: "mc",
        question: "Quantos livros a Bíblia tem no total (Antigo e Novo Testamento)?",
        answers: [
            { text: "60", correct: false },
            { text: "72", correct: false },
            { text: "66", correct: true },
            { text: "39", correct: false }
        ]
    },
    {
        type: "mc",
        question: "Qual o livro do Antigo Testamento que não menciona a palavra 'Deus'?",
        answers: [
            { text: "Cantares de Salomão", correct: false },
            { text: "Ester", correct: true },
            { text: "Obadias", correct: false },
            { text: "Jonas", correct: false }
        ]
    },
    {
        type: "mc",
        question: "Jesus ressuscitou a filha de qual homem?",
        answers: [
            { text: "Lázaro", correct: false },
            { text: "Nicodemos", correct: false },
            { text: "Zaqueu", correct: false },
            { text: "Jairo", correct: true }
        ]
    },
    {
        type: "mc",
        question: "Quem foi a mãe de João Batista?",
        answers: [
            { text: "Maria", correct: false },
            { text: "Isabel", correct: true },
            { text: "Ana", correct: false },
            { text: "Sara", correct: false }
        ]
    },
    {
        type: "mc",
        question: "Qual o nome do anjo que anunciou o nascimento de Jesus a Maria?",
        answers: [
            { text: "Miguel", correct: false },
            { text: "Gabriel", correct: true },
            { text: "Rafael", correct: false },
            { text: "Uriel", correct: false }
        ]
    },
    {
        type: "mc",
        question: "Qual a festa judaica que celebra a libertação do povo de Israel do Egito?",
        answers: [
            { text: "Tabernáculos", correct: false },
            { text: "Páscoa", correct: true },
            { text: "Pentecostes", correct: false },
            { text: "Purim", correct: false }
        ]
    }
];

const textQuestions = [
    {
        type: "text",
        question: "Respondeu-lhe Jesus: Eu sou o ..., e a verdade, e a vida; ninguém vem ao Pai senão por mim. (João 14:6)",
        correctAnswer: "caminho"
    },
    {
        type: "text",
        question: "Mas o fruto do Espírito é: ..., alegria, paz, longanimidade, benignidade, bondade, fidelidade, mansidão, domínio próprio. (Gálatas 5:22)",
        correctAnswer: "amor"
    },
    {
        type: "text",
        question: "Não se turbe o vosso coração; credes em Deus, crede também em ... . (João 14:1)",
        correctAnswer: "mim"
    },
    {
        type: "text",
        question: "Não vos ... com este mundo, mas transformai-vos pela renovação da vossa mente. (Romanos 12:2)",
        correctAnswer: "conformeis"
    },
    {
        type: "text",
        question: "O que é nascido da carne é ... ; e o que é nascido do Espírito é espírito. (João 3:6)",
        correctAnswer: "carne"
    },
    {
        type: "text",
        question: "Porque Deus amou ao mundo de tal maneira que deu o seu Filho unigênito, para que todo o que nele crê não pereça, mas tenha a ... eterna. (João 3:16)",
        correctAnswer: "vida"
    },
    {
        type: "text",
        question: "No princípio era o ..., e o Verbo estava com Deus, e o Verbo era Deus. (João 1:1)",
        correctAnswer: "verbo"
    },
    {
        type: "text",
        question: "Veio para o que era seu, e os seus não o ... . (João 1:11)",
        correctAnswer: "receberam"
    },
    {
        type: "text",
        question: "Se vivemos no Espírito, ... também no Espírito. (Gálatas 5:25)",
        correctAnswer: "andemos"
    },
    {
        type: "text",
        question: "Ora, a fé é a certeza de coisas que se esperam, a convicção de ... que se não veem. (Hebreus 11:1)",
        correctAnswer: "fatos"
    },
    {
        type: "text",
        question: "Faço um decreto pelo qual os ... tremam e temam perante o Deus de Daniel, porque ele é o Deus vivo. (Daniel 6:26)",
        correctAnswer: "homens"
    }
];

const allQuestions = [...questions, ...textQuestions];
const maxQuestions = 10;
let askedQuestions = [];


function getRandomQuestions(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

startButton.addEventListener('click', startQuiz);
nextQuestion.addEventListener('click', displayNextQuestion);


function startQuiz() {
    const shuffledQuestions = getRandomQuestions([...allQuestions]);
    askedQuestions = shuffledQuestions.slice(0, maxQuestions);
    currentQuestionIndex = 0;
    score = 0;
    startButton.classList.add('hide');

    questionContainer.classList.add('hide');
    textQuestionContainer.classList.add('hide');

    displayNextQuestion();
}

function displayNextQuestion() {
    resetState();

    if(currentQuestionIndex >= askedQuestions.length){
        return finishQuiz();
    }

    const currentQuestion = askedQuestions[currentQuestionIndex];

    if(currentQuestion.type === "mc"){
        questionContainer.classList.remove('hide');
        mcQuestionElement.textContent = currentQuestion.question;

        const shuffledAnswers = getRandomQuestions([...currentQuestion.answers]);

        shuffledAnswers.forEach(answers => {    
            const button = document.createElement('button');
            button.textContent = answers.text;
            button.classList.add('button', 'answers');
            if(answers.correct){
                button.dataset.correct = answers.correct;
            }
        mcAnswersContainer.appendChild(button);
        button.addEventListener('click', selectAnswer);
    })

    } else if (currentQuestion.type === "text") {
        textQuestionContainer.classList.remove('hide');
        txQuestionElement.textContent = currentQuestion.question;

        textSubmitContent.onclick = submitTextAnswer;
    }
    
}

function resetState() {
    while (mcAnswersContainer.firstChild) {
        mcAnswersContainer.removeChild(mcAnswersContainer.firstChild);
    }

    document.body.removeAttribute('class');

    questionContainer.classList.add('hide');
    textQuestionContainer.classList.add('hide');
    nextQuestion.classList.add('hide');

    txAnswersInput.value = '';
    textFeedback.classList.add('hide');
    textFeedback.textContent = '';
    textSubmitContent.disabled = false;

}

function selectAnswer(event) {
    const selectedButton = event.target;
    const isCorrect = selectedButton.dataset.correct === "true";

    if (isCorrect) {
        document.body.classList.add('correct');
        score++;
    } else {
        document.body.classList.add('wrong');
    }

    document.querySelectorAll('.answers').forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add('correct');
        } else {
            button.classList.add('wrong');
        }

        button.disabled = true;
    })

    nextQuestion.classList.remove('hide');
    currentQuestionIndex++;
}

function submitTextAnswer() {
    const currentQuestion = askedQuestions[currentQuestionIndex];
    const userAnswer = txAnswersInput.value.trim().toLowerCase();
    const correctAnswer = currentQuestion.correctAnswer.toLowerCase();

    textSubmitContent.disabled = true;
    document.body.classList.remove('correct', 'wrong');

    if(userAnswer === correctAnswer) {
        document.body.classList.add('correct');
        textFeedback.textContent = 'Correto!';
        score++;
    } else {
        document.body.classList.add('wrong');
        textFeedback.textContent = `Errado. A resposta correta era: "${currentQuestion.correctAnswer}"`;
    }

    textFeedback.classList.remove('hide');
    nextQuestion.classList.remove('hide');
    currentQuestionIndex ++;
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

    questionContainer.classList.add('hide');
    textQuestionContainer.classList.add('hide');
    nextQuestion.classList.add('hide');

    mcQuestionElement.innerHTML =
      `
      <h2 class = "final-message"> Quiz Finalizado!</h2> 
      <p class="final-message"> Você acertou ${score} de ${totalQuestions} perguntas.
      <br> Desempenho: ${performance}%.
      <span>Resultado: ${mensage}</span>
      </p>
      `;

    questionContainer.classList.remove('hide');

    const restartButton = document.createElement('button');
    restartButton.textContent = 'Recomeçar Quiz';
    restartButton.classList.add('button', 'start-quiz');
    restartButton.addEventListener('click', startQuiz)

    while (mcAnswersContainer.firstChild) {
        mcAnswersContainer.removeChild(mcAnswersContainer.firstChild);
    }
    mcAnswersContainer.appendChild(restartButton);
    
}
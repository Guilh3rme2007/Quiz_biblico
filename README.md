# Quiz Bíblico

Quiz bíblico interativo desenvolvido em HTML, CSS e JavaScript.

## Modos de jogo

Na tela principal, escolha uma das quatro modalidades:

1. **Modo Geral:** reúne todas as perguntas de múltipla escolha/verdadeiro ou falso e todas as atividades de completar versículos.
2. **Modo Bem-aventuranças:** apresenta perguntas e atividades de completar trechos relacionadas às Bem-aventuranças de Mateus 5:3-12.
3. **Modo Completar Versículo:** apresenta exclusivamente os trechos bíblicos com resposta digitada.
4. **Modo Somente Perguntas:** apresenta exclusivamente questões de múltipla escolha e verdadeiro ou falso, sem atividades de digitação.

Cada rodada seleciona até 10 questões aleatórias do conjunto disponível na modalidade escolhida. Ao final, o jogador visualiza a quantidade de acertos e o percentual de desempenho, podendo jogar novamente ou retornar ao menu principal.

## Como executar

Abra o arquivo `index.html` em um navegador moderno. Não é necessário instalar dependências ou executar um servidor.

## Estrutura

- `index.html`: tela inicial, seleção de modos e estrutura do quiz.
- `styles.css`: identidade visual e layout responsivo.
- `script.js`: banco de perguntas, filtros por modalidade, sorteio, correção e resultados.
- `images/`: imagens utilizadas pelo projeto.

## Observações

As perguntas originais do projeto foram preservadas. O modo Bem-aventuranças possui um conjunto próprio de perguntas baseado em Mateus 5:3-12. As perguntas desse modo foram acrescentadas sem misturá-las às demais modalidades.

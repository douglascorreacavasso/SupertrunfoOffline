# Super Trunfo Offline

Jogo de cartas de comparar atributos, para celular e computador, que funciona sem internet.
30 baralhos, 1.385 cartas.

## Como abrir

- **No PC:** dê dois cliques em `INICIAR_NO_PC.bat` (abre o jogo no navegador pelo endereço http://localhost:8765). Se não tiver Python, abra o `index.html` direto no Chrome; o jogo funciona, só não instala como aplicativo.
- **No celular:** publique a pasta no GitHub Pages (abaixo) e abra o link. No Chrome do Android, use "Adicionar à tela inicial" para virar aplicativo.

## Publicar no GitHub (grátis)

1. Crie um repositório público, por exemplo `super-trunfo-offline`.
2. Envie todo o conteúdo desta pasta (index.html, decks/, sw.js, manifest.json, ícones).
3. Em Settings > Pages, escolha a branch `main` e a pasta `/ (root)`.
4. O site fica em `https://SEU-USUARIO.github.io/super-trunfo-offline/`.
5. No jogo, em Configurações > "Link para baixar o jogo", cole esse endereço. O botão ▦ do topo passa a mostrar o QR Code dele.

## Fluxo do jogo

1. Número de jogadores (2 a 6).
2. Lista de baralhos em carrossel, miniaturas ou nomes. Tocar num baralho baixa só ele (imagens e dados) para o aparelho. Baralhos já baixados ficam com brilho dourado. Para apagar, Configurações > Baralhos no aparelho.
3. Modo: contra o celular (IA com QI) ou com amigos, cada um no seu celular, usando o mesmo código.
4. Mão de cartas: escolha a carta e o atributo; a carta aparece grande. No modo com amigos, digite o número da carta de cada um; o jogo tira essas cartas de quem perdeu e põe na mão de quem ganhou.
5. Resultado da rodada (ganhou, perdeu, empate), fim de jogo com resumo.

## Contra o celular

- A IA nunca vê a sua carta. Ela conhece o baralho, conta as cartas que já saíram e aprende o seu estilo (se você costuma jogar cartas fortes ou fracas) e quais atributos dão certo para ela. A memória fica no aparelho, por baralho.
- Fácil (QI 75), Médio (100), Difícil (130), Gênio (170), ou qualquer valor de 60 a 200 na barra.
- "Aprende sozinho": o QI sobe com a experiência até o teto que você escolher. Se ficar difícil demais, baixe o QI ou o teto.

## Compartilhar sem internet (Bluetooth)

Botão 📲 no topo. Marque os baralhos baixados e escolha:
- **Enviar o jogo + baralhos:** gera `super-trunfo-offline.html` com o jogo inteiro e as imagens. Abre o menu Compartilhar do celular (Bluetooth, Quick Share, AirDrop). Quem recebe abre o arquivo no navegador e joga sem internet.
- **Enviar só os baralhos:** gera um `.json` para quem já tem o jogo; a pessoa importa em "Recebi um arquivo".

Um site não consegue ligar o Bluetooth sozinho: por isso o caminho é o menu Compartilhar do próprio celular.

## Imagens

Veja `FONTES_E_LICENCAS.csv` (uma linha por carta).
- 749 cartas já trazem a foto no pacote (pasta `decks/`).
- 306 cartas buscam a foto livre da Wikipédia na hora em que o baralho é baixado (precisa de internet nesse momento).
- 145 cartas do LoL e do Arcane usam a arte oficial da Riot, também buscada ao baixar.
- 185 cartas (Marvel, DC, Games, Gravity Falls, parte do Arcane, Prefeitáveis 2012) estão com arte gerada. Use o **Coletor de imagens** (Configurações, ou "Ver cartas e trocar imagens" no baralho): ele pesquisa no Wikimedia Commons e no Openverse, abre Google/Bing, e aceita foto do aparelho ou link. O botão "Baixar ZIP" salva as escolhidas com a lista de créditos.

Atenção: imagens de personagens da Marvel, DC, Gravity Falls e de jogos têm direitos dos estúdios. Para uso pessoal tudo bem; antes de publicar no GitHub, prefira imagens com licença livre.

## Créditos e licenças

- Baralhos de carros, aviões, foguetes, dinossauros, animais, tanques, arranha-céus, megacidades, sistemas planetários, esportes radicais, futebol e tênis: projeto [trump-cards](https://github.com/yanexr/trump-cards) de yanexr, licença MIT (`LICENCA_trump-cards_MIT.txt`). Fotos do Wikimedia Commons, crédito em cada carta.
- Cefalópodes e civilizações: catálogo do douglas, fotos do Wikimedia Commons. Os valores que estavam vazios foram preenchidos com estimativas.
- League of Legends: dados do Data Dragon da Riot (via projeto super-trunfo-lol). Projeto de fã, gratuito, sem ligação com a Riot Games.
- Prefeitáveis 2012: dados abertos do TSE reunidos pelo projeto transparencia/super-trunfo.
- Motos, insetos, cogumelos, drinks, milkshakes, aves, peixes, móveis e filósofos: valores aproximados reunidos para o jogo; personagens: estimativas de fã de 0 a 100.
- QR Code: qrcode-generator (Kazuhiko Arase, MIT). Fonte Lilita One (SIL OFL 1.1).
- "Super Trunfo" é marca registrada da Grow. Antes de publicar, considere outro nome (troque a constante `NOME_JOGO` e o logo no `index.html`).

## Para quem programa

O código-fonte está em um arquivo só (`index.html`). Os baralhos ficam em `decks/<id>.js` no formato `STDeck({...})`.

<h1 id="topo">NWFS - Rodada de cases </h1>
  
Endereço surge: **[promobit_joy_ricardo.surge.sh](http://promobit_joy_ricardo.surge.sh)**

  * [Indice](#funciona)
      * [O Desafio](#desafio)
      * [Requisitos funcionais](#funcionais)
      * [Requisitos não funcionais](#naofuncionais)
      * [Extras](#extras)
  * [Imagens](#imagens)
      * [Estrura de Pastas e Arquivos](#estrutura)
      * [Tela Desktop Inicial](#inicial)
      * [Tela Desktop Inicial usando Filtros](#filtros)
      * [Tela Detalhes Desktop de um Filme escolhido ](#detalhesdesktop)
      * [Tela Inicial Mobile](#celular1)
      * [Tela Inicial Mobile usando Filtros](#celular2)
      * [Tela Detalhes Mobile de um Filme escolhido](#celular3)
   * [Tecnologias usadas](#tecs)
  * [Como executar na sua máquina](#executar)
      * [Conhecendo o cli do react](#conhecendo)
      * [Instalando o cli do react](#instalando)
         * [Instalando com Yarn](#instyarn)
         * [Instalando com Npm](#instnpm)
      * [Criando a app com o cli do React](#criando)
         * [Criando com create-react-app](#createreact)
         * [criando com Npx](#criandocomnpx)
      * [Subindo App](#subindoapp)
         * [Subindo com Yarn](#subindocomyarn)
         * [Subindo com npm](#subindocomnpm)
  * [Getting Started with Create React App](#create)

***

<h2>Case 01 - Frontend - Listagem de Filmes Usando TMDB </h2>
<h4>Empresa: Promobit</h4>
<h4>Enunciado: 🇧🇷</h4>
<h4>Linguagens/Frameworks: React </h4>
<h4>Dificuldade: 💡💡</h4>
<h4>Tarefa: Listagem dos filmes.</h4>

[Promobit/front-end-challenge](https://github.com/Promobit/front-end-challenge)

<h4 align="right"><a href="#topo">Topo</a></h4>

***

<h2 id="desafio">O DESAFIO</h2>

***
Usando a API de filmes **[themovidb](https://developers.themoviedb.org/3/getting-started/introduction)** gratuita themoviedb em sua versão 3, você será responsável por criar uma listagem dos filmes mais populares do dia, consultando o endpoint [GET /movie/popular](https://developers.themoviedb.org/3/movies/get-popular-movies) para realizar a listagem. Ao clicar em um item dessa listagem, outra página com os detalhes do filme escolhido deve ser exibida. Para acessar mais detalhes sobre o filme, você pode consultar o endpoint [GET /movie/{movie_id}](https://developers.themoviedb.org/3/movies/get-movie-details).

Para garantir que o usuário encontre o filme que está procurando, essa lista deverá ser paginada.

Siga o **[layout do figma sugerido](https://www.figma.com/file/rM7WPqhLY9ObnGzSCeWLxB/Teste-Front-End)**. Não há necessidade de ser pixel perfect mas respeite a composição, fontes e cores.

<h4 align="right"><a href="#topo">Topo</a></h4>

<h2 id="funcionais">Requisitos Funcionais</h2>

***

 🎥 O usuário deve ter acesso a uma listagem dos filmes mais populares do dia

 🎥 O usuário deve conseguir paginar a lista para encontrar novos filmes

 🎥 O usuário deve ter acesso a uma outra página com detalhes sobre o filme, ao clicar em um item na listagem

 🎥 A página com detalhes de um filme deve possuir uma rota própria e estar preparada para ser indexada em mecanismos de pesquisa

<h4 align="right"><a href="#topo">Topo</a></h4>

<h2 id="naofuncionais">Requisitos não Funcionais</h2>

***

 🎥 O app deverá ser criado usando [React](https://reactjs.org/)

 Na raiz do projeto, será necessário incluir um arquivo README.md com as instruções para construir seu projeto localmente. Opcionalmente você pode detalhar as razões pelas escolhas de ferramentas e técnicas aplicadas ao desafio.

 🎥 O app deverá se comportar da mesma forma na última versão estável dos seguintes browsers: Chrome, Firefox, Edge

 🎥 O app deverá ser responsivo

<h4 align="right"><a href="#topo">Topo</a></h4>

<h2 id="extras">Extras</h2>

***

Temos insights que nos levam a acreditar que os usuários dessa lista costumam ter uma experiência melhor se conseguirem criar um filtro usando seus gêneros favoritos. Portanto, você também poderá criar filtros de filmes por gênero nessa listagem. Note que um novo endpoint deverá ser consultado para obter uma lista dos possíveis gêneros a serem filtrados, GET /genre/movie/list.

 🎥 O usuário deve conseguir filtrar os filmes listados por gênero, com a possibilidade de usar mais de um gênero
 🎥 O usuário deve conseguir remover filtros e a listagem deve ser atualizada de acordo com o filtro removido
 🎥 O usuário deve conseguir voltar para a página de listagem de filmes com os filtros ainda ativos

<h4 align="right"><a href="#topo">Topo</a></h4>

## Critérios de avaliação
***

💻 Boas práticas de desenvolvimento como: html semântico, componentização, design patterns, clean code\
🪄 Domínio das ferramentas e linguagens que compõe um app de frontend moderno\
📒 Documentação: explicação para construir o app localmente, histórico e workflow de git
***
<h2 id= "executar">Como executar na sua máquina</h2>
<br>

<h2 id="conhecendo">Conhecendo o cli do react</h2>

***
Como de costume, atualmente está sendo uma boa prática os frameworks possuírem um __cli (client)__ para ajudar na utilização do mesmo, assim como os outros o React também adotou esse padrão e criou seu cli, o famoso create-react-app. Com ele conseguimos criar uma aplicação em React, com boa parte das configurações realizadas (podem ser customizadas), com isso, conseguimos focar mais no aprendizado e desenvolvimento.

<h2 id="instalando">Instalando o cli do React</h2>

***
Para realizarmos a instalação do cli podemos realizar de duas maneiras: com **[yarn](https://blog.matheuscastiglioni.com.br/categoria/arquitetura/)** ou **[npm](https://www.npmjs.com/)**.

Não irei abordar como instalar ambos gerenciadores de pacotes ou dependência, porém, o processo instalação pode facilmente ser encontrado na documentação oficial de ambos.

<h4 align="right"><a href="#topo">Topo</a></h4>

<h3 id="instyarn"> Instalando com Yarn</h3>

***
Para realizar a instalação com Yarn, podemos rodar o comando global add:

```javascript
yarn global add create-react-app
```

<h3 id="instnpm">Instalando com npm</h3>

Para realizar a instalação com npm, podemos rodar o comando install -g ou i -g:
```javascript
npm install -g create-react-app
```
Ou
```javascript
npm i -g create-react-app
```
>Obs: Em ambos os casos estamos instalando o create-react-app como global, para que possa ser rodado em qualquer lugar do nosso terminal e compartilhado a mesma versão em todos os projetos (em alguns casos o pessoal preferem utilizar uma versão para cada projeto).

<h4 align="right"><a href="#topo">Topo</a></h4>

<h2 id="criando">Criando a app com o cli do react</h2>

***
Pronto, agora que já temos nosso cli instalado, podemos finalmente criar a nossa app, o processo pode ser feito de duas maneiras diferentes, sendo elas: com o create-react-app ou npx.

A única diferença é que com o create-react-app precisamos tê-lo instalado em nossa máquina, agora o npx irá executar o create-react-app sem instalá-lo na máquina local.

<h3 id="createreact">Criando com create-react-app</h3>

***
Para criar uma aplicação com o create-react-app podemos fazer de duas maneiras: Em uma pasta já existente ou em uma nova pasta.

#### Criando em uma nova pasta

Para criarmos a aplicação (estou chamando de aplicação para melhor entendimento do post), em uma nova pasta apenas rodamos o create-react-app seguido pelo noma da aplicação:

```javascript
create-react-app minha-primeira-app
```
[![asciicast](https://asciinema.org/a/7LyJl6oJdxUKh9wcQ1aPDf1px.svg)](https://asciinema.org/a/7LyJl6oJdxUKh9wcQ1aPDf1px)

<h4 align="right"><a href="#topo">Topo</a></h4>

### Criando em uma pasta já existente

***
Assim como podemos criar uma nova pasta, também podemos utilizar uma pasta já existente para criar nossa aplicação em React. A diferença é que devemos navegar até a pasta pelo terminal (cd caminho_ate_a_pasta) e em vez de passar um nome para o create-react-app passamos um . (para referenciar a pasta atual):

```javascript
create-react-app .
```

[![asciicast](https://asciinema.org/a/mxaR9nEp8CEjd97GPdBwny945.svg)](https://asciinema.org/a/mxaR9nEp8CEjd97GPdBwny945)
<h3 id="criandocomnpx">Criando com npx</h3>

***
Além de utilizar o create-react-app já instalado na máquina, podemos pedir para o npx executá-lo e criar nossa aplicação, nesse caso a instalação do create-react-app não precisa e nem será feita:

```javascript
npx create-react-app minha-primeira-app
```
[![asciicast](https://asciinema.org/a/xAvouJ8DhoI8ELZc20LRX4nBN.svg)](https://asciinema.org/a/xAvouJ8DhoI8ELZc20LRX4nBN)

>Obs: A opção de utilizar uma pasta já existente, também vale para o npx e deve ser feita da mesma maneira, apenas adicionando o npx na frente do comando, ou seja, precisamos navegar até a pasta (cd) para executar o comando e passar um . em vez de um nome.

<h4 align="right"><a href="#topo">Topo</a></h4>

<h2 id="subindoapp">Subindo nossa app</h2>
Com a nossa aplicação criada, podemos subí-la de duas maneiras, através do yarn ou npm, isso vai depender da sua preferência ou gosto por um desses gerenciadores de pacote.

<h3 id="subindocomyarn">Subindo app com yarn</h3>
Para subir a app utilizando o yarn precisamos apenas rodar o comando start:

```javascript
yarn start
```
<h3 id="subindocomnpm">Subindo app com npm</h3>

De forma semelhante ao yarn, com o npm precisamos também rodar o start:
```javascript
npm start
```
ou
```javascript
npm run start
```
Em ambos os casos, assim que nossa app subir, o navegador será automaticamente aberto com uma página principal padrão (default) do React.

![image](https://user-images.githubusercontent.com/89301596/180660775-7ba2d02d-a913-4d4d-a8d6-bf905a4137fa.png)

<h4 align="right"><a href="#topo">Topo</a></h4>

***

<h2 id="imagens">Imagens</h2>

<h3 id = "estrutura">Estrutura de Pastas e Arquivos</h3>

![image](https://user-images.githubusercontent.com/89301596/180656939-b7ba2169-b792-4d57-bf6f-b15234c18110.png)

<h4 align="right"><a href="#topo">Topo</a></h4>

<h3 id = "inicial">Tela Inicial</h3>

![image](https://user-images.githubusercontent.com/89301596/180657348-91d9afae-6825-4ac6-a379-f2699ea43783.png)

<h4 align="right"><a href="#topo">Topo</a></h4>

<h3 id = "filtros">Tela Inicial usando Filtros</h3>

![image](https://user-images.githubusercontent.com/89301596/180662147-6b9bbec5-463f-4d27-ad1d-1f287bfaa06d.png)

<h4 align="right"><a href="#topo">Topo</a></h4>

<h3 align="center" id = "detalhesdesktop">Detalhes de um filme escolhido</h3>

![image](https://user-images.githubusercontent.com/89301596/180662228-ebb1cf65-cdb5-4f39-94c8-34f4137ce8fa.png)
![image](https://user-images.githubusercontent.com/89301596/180662271-eb74febb-ec01-4c99-b1c3-d0122aa0608a.png)

<h4 align="right"><a href="#topo">Topo</a></h4>


<h3 align="center" id="celular1">Tela Mobile Inicial + Paginação</h3>


<p align="center" float="center">
<img src="https://user-images.githubusercontent.com/89301596/180662569-bb10ad66-8a33-4a0a-af34-b01b6f0668af.png" alt="mobile1" width="300px">
<img src="https://user-images.githubusercontent.com/89301596/180662690-7fbfec07-cb1d-4199-acbe-3cb4cbbb05ac.png" alt="mobile2" width="300px">
</p>
<h4 align="right"><a href="#topo">Topo</a></h4>


<h3 align="center" id="celular2">Tela Inicial com filtro aplicados</h3>


<p align="center" float="center">
<img src="https://user-images.githubusercontent.com/89301596/180662844-acdd06b3-2225-4319-8b6f-d4466df8ed31.png" alt="mobile3" width="300px">
<img src="https://user-images.githubusercontent.com/89301596/180663012-b34969f0-87d8-4de6-a0ed-53c83931be69.png" alt="mobile4" width="300px">
</p>

<h4 align="right"><a href="#topo">Topo</a></h4>


<h3 align="center" id="celular3">Tela Detalhes de um filme escolhido</h3>


<p align="center" float="center">
<img src="https://user-images.githubusercontent.com/89301596/180663133-56817ef0-f3cd-4b11-bf3b-7e68e0939595.png" alt="mobile5" width="300px">
<img src="https://user-images.githubusercontent.com/89301596/180663166-01047e7f-067e-4eef-9532-3dd21202fbf5.png" alt="mobile6" width="300px">
<img src="https://user-images.githubusercontent.com/89301596/180663199-72b70704-f8cb-4946-9b68-1ccbfde5117f.png" alt="mobile7" width="300px">
<img src="https://user-images.githubusercontent.com/89301596/180663247-72f4dd69-286d-44aa-bae0-c1830bc0e540.png" alt="mobile7" width="300px">
</p>
<h4 align="right"><a href="#topo">Topo</a></h4>


<h2 id="tecs">Tecnologias Usadas</h2>

📌<a href="https://reactjs.org/" target="_blank">React</a>

📌<a href="https://axios-http.com/" target="_blank">axios</a>

📌<a href="https://date-fns.org/" target="_blank">date-fns</a>

📌<a href="https://www.npmjs.com/package/react-player" target="_blank">react-player</a>

📌<a href="https://www.npmjs.com/package/react-paginate" target="_blank">react-Paginate</a>

📌<a href="https://reactrouter.com/" target="_blank">react-router-dom</a>

📌<a href="https://styled-components.com/" target="_blank">styled-component</a>

📌<a href="https://www.npmjs.com/package/react-circular-progressbar" target="_blank">react-circular-progressbar</a>

***

<h2 id = "create">Getting Started with Create React App</h2>

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
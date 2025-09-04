Teste-CMS-Puck

-- Como rodar o projeto:
rode no seu terminal git clone https://github.com/TonyzCataldo/teste-cms
npm install
npm build
npm start

--Contexto e aprendizados:
Tive algumas dificuldades com a ferramenta Puck, principalmente com a parte de edição do layout de edição de páginas... mas com algum esforço e revirando a documentação consegui entender como usar os overrides, Drawer, Outline, Fields e etc....

--Trade-offs e decisões:
Quanto a criação dos componentes do puck decidi a seguinte abordagem: criar dois tipos de componentes... os primarios que são o corpo do site como Headings (titulos) e containers que são altamente manipulaveis para que o usuario possa alterar tamanhos, espaçamentos e etc e os componentes "pré prontos" que já tragam um container com os componentes primarios ajustados (Header, Section, Cards) para que o usuario consiga usar eles para entender como criar e alterar os componentes primarios deles para obter o layout que deseja...

--Próximos passos:
eu buscaria lidar melhor com questoes de responsividade por exemplo passando uma forma do usuario lidar com o container grid diminuindo o numero de colunas conforme a diminuicao da tela, ou no container flex passando flex-wrap conforme tal tamanho de tela e etc... no mais seguiria com a mesma abordagem de componentes primarios e componentes "pré prontos" para trazer opcoes de partes do layout prontas (mas sempre customizaveis pelo usuario)

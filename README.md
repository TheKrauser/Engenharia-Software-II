# Engenharia de Software II

## Grupo

* > ✨ [Gabriel Jonathan de Matos](https://github.com/GabrielJonat)
* > 🧠 [Gustavo de Oliveira Garrido](https://github.com/gustavoogarrido)
* > 🎮 [Kevin Cairé Leandro](https://github.com/TheKrauser)
* > 💻 [Pedro Henrique Sardela Correa](https://github.com/PedroHSCorrea)


---

## Documentação
> [Modelo de Negócios](https://github.com/TheKrauser/Engenharia-Software-II/blob/main/Docs/Modelo%20de%20Neg%C3%B3cios.docx)
> * Público alvo, formas de monetização, testes, concorrentes e faturamento.

> [Quadro Kanban](https://github.com/users/TheKrauser/projects/1)
> * Quadro de gerenciamento do projeto, onde serão postadas as atividades a se fazer, em andamento e/ou concluídas.

---

## LinkArts

### 🎵 Site de Relacionamento entre Artistas e Empresas 🎵
O projeto consiste em um site que visa facilitar o relacionamento entre artistas e empresas. O site servirá como um intermédio na comunição entre um artista e um contratante, visando fechar contratos (a partir da plataforma) e definir agendas. Funcionará de forma a possibilitar que pessoas ou empresas interessadas possam encontrar e pesquisar por diferentes portfólios de artistas, facilitando a apresentação de possíveis relacionamentos profissionais, por isso, o software deverá ter as seguintes características:

* Tipos de perfis:
  * 🆓 **Principal**: Qualquer pessoa poderá criar;
  * 🎨 **Artista**: Assinantes do serviço, é destinado a impulsionar sua visibilidade na plataforma e diminuir a taxa cobrada pelo serviço; 
  * 💼 **Corporativo**: Serve para quem busca contratar os serviços de artistas, ou seja, um perfil destinado a empresas, e por esse motivo, é preciso que o usuário comprove, a partir de documentação, a existência de sua empresa ou pessoa.
     
* O perfil **Principal** pode criar seu perfil e personalizá-lo de formas bem flexíveis, tanto para ajudá-lo em seu trabalho quanto para possíveis contratantes visualizá-los, ou seja, ele poderá salvar músicas das quais ele conhece e sabe tocar, áudios relacionados ao instrumental e ao vocal, letras, partituras, além de informações que envolvem marketing, como nome, idade, cidade, experiência, instrumentos que toca, estilo musical, entre outras informações. É preciso destacar que a personalização do perfil será o mais flexível ao usuário, disponibilizando a ele a possibilidade de definir o que ele quer que possa ser visto por outros e o que não poderá. Como a plataforma também servirá como ferramenta profissional, além de salvar os áudios, fotos e textos, também poderá fazer mixagens e algumas edições de áudio.
  
* O perfil **Artista** dará um selo ao perfil principal, definindo-o como um perfil verificado. O que significa ser um perfil verificado: a taxa cobrada no pagamento quando um pagamento é fechado, que é de 20%, será reduzida para 10% quando esse pagamento for entre um perfil Corporativo e um perfil Artista; há uma aba no site em que aparecerá apenas os perfis verificados, ordenados a partir dos quais tem a melhor avaliação em relação a quantidade de avaliações; caso esteja sendo pesquisado perfis no geral, sem filtro, os perfis verificados terão prioridade na exibição (ou seja, caso haja dois perfis com a mesma quantidade e qualidade de avaliações, o perfil que é verificado aparecerá a frente)
    
* O perfil **Corporativo** também dará um selo ao perfil principal, para garantir esse selo é preciso provar a existência da pessoa ou corporação a partir de CPF ou CNPJ, essa comprovação será necessária para se realizar um pagamento na plataforma, isso visa assegurar a segurança no site.

---

## Tecnologias Utilizadas
> - FrontEnd: **HTML e CSS ou Razor**
> 
> - BackEnd: **JavaScript e Angular ou C# e .NET MVC**
>   
> - Mobile: **---**
> 
> - Banco de Dados: **MySQL ou Oracle SQL**

---

## Nível de Dificuldade
**- Quantidade de tabelas. Quais tabelas?**
> * Perfil Principal
> * Perfil de Artista
> * Perfil Corporativo
> * Músicas
> * Pagamentos
> * Agenda

**- Quantidade de dores (Casos de Uso). Quais Dores?**
> * Checar Agenda
> * Enviar Mensagem
> * Ver Perfil
> * Buscar Perfil
> * Personalizar Perfil
> * Registrar Músicas
> * Alterar Músicas
> * Apagar Músicas
> * Adicionar Letra
> * Adicionar Áudio
> * Receber Pagamento
> * Realizar Pagamento 
> * Fechar Contrato
> * Avaliar Perfil

**- Quantidade de relatórios. Quais relatórios?**
> * Relatório de Ganhos
> * Relatório de Encomendas

**- Quantidade de Telas. Quais telas?**
> * Tela Principal
> * Mensagens
> * Configurações
> * Agenda
> * Perfil
> * Serviço
> * Cadastrar Pagamento
> * Fechar Contrato

## Casos de Uso
![Casos de Uso PNG](https://github.com/TheKrauser/Engenharia-Software-II/blob/main/Docs/use-cases.png)

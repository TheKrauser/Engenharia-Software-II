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

### 🎵 Site de Relacionamento entre Músicos e Empresas 🎵
O projeto consiste em um site que visa facilitar o relacionamento entre músicos e empresas. O site servirá como um intermédio na comunição entre o artista e um contratante, visando fechar contratos (a partir da plataforma) e definir agendas. Funcionará de forma a possibilitar que pessoas ou empresas interessadas possam encontrar e pesquisar por diferentes portfólios de músicos, facilitando a apresentação de possíveis relacionamentos profissionais, por isso, o software deverá ter as seguintes características:

* Tipos de perfis:
  * 🆓 **Gratuito**: Qualquer pessoa poderá criar;
  * 🎨 **Artista**: Assinantes do serviço, é destinado a impulsionar sua visibilidade na plataforma e aumentar o número de agendamentos que podem ser feitos, todo usuário pagante entra nesse tipo de perfil, porém, existem planos diferentes no qual o usuário pode escolher; 
  * 💼 **Corporativo**: Serve para quem busca contratar os serviços de artistas, ou seja, um perfil destinado a empresas, e por esse motivo, é preciso que o usuário comprove, a partir de documentação, a existência de sua empresa ou pessoa.
  * 📈 **Administrador**: É o perfil que terá acesso total ao sistema, podendo realizar alterações nos perfis, bloquear ou banir usuários e acessar telas específicas para administração, como registros de últimas contas que foram criadas, gráficos de ganhos, quais serviços estão sendo mais requisitados, etc.
     
* O perfil **Gratuito** pode criar seu perfil e personalizá-lo de formas bem flexíveis, tanto para ajudá-lo em seu trabalho quanto para possíveis contratantes visualizá-los, ou seja, ele poderá salvar músicas das quais ele conhece e sabe tocar, áudios relacionados ao instrumental e ao vocal, letras, partituras, além de informações que envolvem marketing, como nome, idade, cidade, experiência, instrumentos que toca, estilo musical, entre outras informações. É preciso destacar que a personalização do perfil será o mais flexível ao usuário, disponibilizando a ele a possibilidade de definir o que ele quer que possa ser visto por outros e o que não poderá.
  
* O perfil **Artista** dará um selo ao perfil gratuito, definindo-o como um perfil verificado. O que significa ser um perfil verificado: a taxa cobrada no pagamento quando um pagamento é fechado, que é de 15%, será reduzida para 7% (para pagamentos feitos com intermédio da plataforma). Também terá a vantagem de aumentar o número de agendamentos possíveis que ele pode fazer no mês, aumentando de 5 para 10, 20 ou ilimitado, dependendo do plano escolhido. Há uma aba no site em que aparecerá apenas os perfis verificados, ordenados a partir dos quais tem a melhor avaliação em relação a quantidade de avaliações; caso esteja sendo pesquisado perfis no geral, sem filtro, os perfis verificados terão prioridade na exibição (ou seja, caso haja dois perfis com a mesma quantidade e qualidade de avaliações, o perfil que é verificado aparecerá a frente).
    
* O perfil **Corporativo** também dará um selo ao perfil principal, para garantir esse selo é preciso provar a existência da pessoa ou corporação a partir de CPF ou CNPJ, essa comprovação será necessária para se realizar um pagamento na plataforma, isso visa assegurar a segurança no site.

* O perfil **Administrador** é quem terá controle sobre o site e tudo que tem nele, pela própria interface do site, poderá fazer mudanças rápidas como alterar detalhes no perfil de um usuário ou ver registros de auditoria relacionados a contas que foram criadas, pagamentos realizados, agendamentos feitos ou cancelados e gráficos. O perfil também terá a habilidade de criar outros perfis de administrador, também com acesso total ao sistema, porém, sem a opção de criar outros perfis de administrador.

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
> * Perfil de Artista
> * Perfil Corporativo
> * Perfil do Administrador
> * Configurações
> * Músicas
> * Pagamentos
> * Agenda
> * Mensagens
> * Tabelas Relacionais

**- Quantidade de dores (Casos de Uso). Quais Dores?**
> * Checar Agenda
> * Alterar Agenda
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
> * Cadastrar Opção de Pagamento
> * Excluir Opção de Pagamento
> * Criar Serviço
> * Aceitar Serviço
> * Cancelar Serviço
> * Avaliar Perfil
> * Alterar Configurações
> * Adicionar aos Favoritos
> * Checar Notificações
> * Bloquear Usuário
> * Banir Usuário
> * Assinar Serviço

**- Quantidade de relatórios. Quais relatórios?**
> * Ganhos
> * Agendamentos
> * Contas Criadas
> * Usuários Assinantes

**- Quantidade de Telas. Quais telas?**
> * Tela Principal
> * Mensagens
> * Configurações
> * Agenda
> * Perfil
> * Serviço
> * Cadastrar Pagamento
> * Fechar Contrato
> * Tela geral de Administração
> * Assinar Serviço
> * Opção de Pagamento
> * Notificações
> * Favoritos

## Casos de Uso
![Casos de Uso PNG]((https://github.com/TheKrauser/Engenharia-Software-II/blob/main/Docs/Novos%20Casos%20de%20Uso/use-cases.png))

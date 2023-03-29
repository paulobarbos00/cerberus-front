# UC05: ALTERAR um grupo de links  
Objetivo: Este caso de uso possibilita ao usuário altere dados dos grupos de links que ele tem acesso: nome, descrição e tags  
Ator: Usuário geral   
Pré-Condições: Ter realizado o # UC01 e tem permissão para alterar o grupo de links  
  
Fluxo principal:  
1.	Sistema exibe os grupos de links já inseridos [A1]  
2.	Usuário seleciona as opções do grupo de links desejados  
3.	Sistema verifica se o usuário tem acesso ao grupo de links selecionado [A2]  
4.	Sistema exibe opções do grupo de links  
5.	Usuário seleciona a opção de alterar o grupo  
6.	Sistema exibe uma janela de formulário (nome, descrição e tags) com os dados preenchido para serem alterados  
7.	Usuário submete as informações desejadas [A3]  
8.	Sistema altera o grupo de links e retorna a página de grupos inseridos  
9.	caso de uso encerrado  
  
Fluxo de Exceção:    
A1 - Não foi inserido nenhum grupo de link  
1.	A tela é exibida com uma mensagem informando que não há grupos de links inseridos  
2.	caso de uso encerrado  
  
A2 - O grupo selecionado é privado e o usuário não tem acesso  
1.	Sistema informa que o usuário não tem acesso para alterar o grupo
2.	Volta para página de grupos de links (passo 1)  
  
A3 - Nome do grupo vazio  
1.	Sistema impede a submissão, informando que o nome do grupo está vazio  
2.	Sistema exibe no formulário novamente (passo 7)  
  
—-------------------------------------------  
  
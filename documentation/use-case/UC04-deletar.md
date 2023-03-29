# UC04: DELETAR um grupo de links  
Objetivo: Este caso de uso possibilita ao usuário deletar os grupos de links que ele tem acesso  
Ator: Usuário geral   
Pré-Condições: Ter realizado o # UC01 e tem permissão para alterar o grupo de links  
  
Fluxo principal:  
1.	Sistema exibe os grupos de links já inseridos [A1]  
2.	Usuário seleciona as opções do grupo de links desejados  
3.	Sistema verifica se o usuário tem acesso ao grupo de links selecionado [A2]  
4.	Sistema exibe opções do grupo de links  
5.	Usuário seleciona a opção de deletar o grupo  
6.	Sistema emite uma confirmação da ação  
7.	Usuário confirma [B1]  
8.	Sistema excluir grupo de links e retorna a página de grupos inseridos  
9.	caso de uso encerrado  
  
Fluxo de Exceção:  
A1 - Não foi inserido nenhum grupo de link  
1.	A tela é exibida com uma mensagem informando que não há grupos de links inseridos  
2.	caso de uso encerrado  
  
A2 - O grupo selecionado é privado e o usuário não tem acesso  
1.	Sistema informa que o usuário não tem acesso ao grupo selecionado
2.	Volta para página de grupos de links (passo 1)

Fluxo Alternativo:  
B1 - O Usuário cancela ação  
1.	Sistema volta para página de grupos de links  
2.	caso de uso encerrado  
  
  
---------------------------------------------  
  

# UC03: VISUALIZAR conteúdo do grupo de links  
Objetivo: Este caso de uso possibilita o usuário visualizar os links inseridos dentro do grupo de links.   
Ator: Usuário geral  
Pré-Condições: Ter realizado o # UC01 e tem permissão para visualizar o grupo de links  
  
Fluxo principal:  
1.	Sistema exibe os grupos de links já inseridos [A1]  
2.	Usuário seleciona o grupo de links desejados  
3.	Sistema verifica se o usuário tem acesso ao grupo de links selecionado [A2]  
4.	Sistema exibe o conteúdo do grupo de links  
5.	caso de uso encerrado  
  
Fluxo de Exceção:    
A1 - Não foi inserido nenhum grupo de link  
1.	A tela é exibida com uma mensagem informando que não há grupos de links inseridos  
2.	caso de uso encerrado  
  
A2 - O grupo selecionado é privado e o usuário não tem acesso  
1.	Sistema informa que o usuário não tem acesso ao grupo
2.	Volta para página de grupos de links (passo 1)  
  
---------------------------------------------  
 

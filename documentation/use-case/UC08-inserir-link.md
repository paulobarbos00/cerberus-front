# UC08: INSERIR um link no grupo de links  
Objetivo: Este caso de uso possibilita ao usuário inserir links nos grupos de links para melhor organização.  
Ator: Usuário geral   
Pré-Condições: Ter realizado o # UC01 e tem permissão para alterar o grupo de links  
  
Fluxo principal:  
1.	Sistema exibe lista de grupo de links que o usuário tem permissão  
2.	Usuário realiza o UC03  
3.	Sistema exibe menu com as opções do grupo de link  
4.	Usuário seleciona a opção de inserir links (RN02) [A1]  
5.	Sistema exibe formulário para colocar as informações (nome curto, URL e tags) do link  
6.	Usuário submete as informações solicitadas  
7.	Sistema adiciona o link no grupo e retorna a página do grupo de link  
8.	caso de uso encerrado  
  
  
Fluxo de Exceção:  
A1 - Usuário já atingiu o limite máximo links adicionados em um grupo  
1.	Sistema exibe uma mensagem informando que o usuário não pode adicionar mais links por já ter atingido o limite máximo.  
2.	Sistema retorna a página do grupo de link (passo 1)  
3.	caso de uso encerrado  
  
  
—-------------------------------------------  
  

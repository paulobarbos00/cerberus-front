# UC02: INSERIR um grupo de links  
Objetivo: Este caso de uso possibilita ao usuário inserir os grupos de links  
Ator: Usuário geral   
Pré-Condições: Ter realizado o # UC01  
  
Fluxo principal:  
1.	Sistema exibe menu com as opções  
2.	Usuário seleciona a opção de inserir grupo de links (RN01) [A1]  
3.	Sistema exibe formulário para colocar as informações, nome, descrição e tags do grupo de links  
4.	Usuário submete as informações solicitadas [A2]  
5.	Sistema cria o grupo de links e retorna a página principal  
6.	caso de uso encerrado  
  
Fluxo de Exceção:  
A1 - Usuário já atingiu o limite máximo de grupos de links criado  
1.	Sistema exibe uma mensagem informando que o usuário não pode criar mais grupos de links por já ter atingido o limite máximo.  
2.	Sistema retorna a página principal  
3.	caso de uso encerrado  
  
A2 - Nome do grupo vazio  
1.	Sistema impede a submissão, informando que o nome do grupo está vazio  
2.	retorna passo passo 3  
  
—-------------------------------------------  
  

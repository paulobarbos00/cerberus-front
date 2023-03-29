# UC10: DELETAR um link  
Objetivo: Este caso de uso possibilita ao usuário deletar um link indesejado  
Ator: Usuário geral   
Pré-Condições: Ter realizado o # UC01 e tem permissão para alterar o grupo de links  
  
Fluxo principal:  
1.	Sistema exibe os links dentro dos grupos de links já inseridos [A1]  
2.	Usuário seleciona as opções do link desejados  
3.	Sistema verifica se o usuário tem acesso ao grupo de links selecionado [A2]  
4.	Sistema exibe opções do link 
5.	Usuário seleciona a opção de deletar o link  
6.	Sistema emite uma confirmação da ação  
7.	Usuário confirma [B1]  
8.	Sistema excluir o link e retorna a página de grupos inseridos  
9.	caso de uso encerrado    
  
Fluxo de Exceção:  
A1 - Não foi inserido nenhum link  
1.	A tela é exibida com uma mensagem informando que não há links inseridos no grupo  
2.	caso de uso encerrado  
  
A2 - O link selecionado é privado e o usuário não tem acesso  
1.	Sistema informa que o usuário não tem acesso para deletar o link selecionado
2.	Volta para página de grupos de links (passo 1)  

Fluxo Alternativo:
B1- O Usuário cancela ação  
1.  Usuário seleciona a opção de cancelar ação de deletar
2.	Sistema volta para página de grupos de links (passo 1)  

  
—-------------------------------------------  
  

# UC09: ALTERAR um link  
Objetivo: Este caso de uso possibilita ao usuário altere dados de um link que ele tem acesso: nome, URL e tags  
Ator: Usuário geral   
Pré-Condições: Ter realizado o UC01 e tem permissão para alterar o grupo de links  
  
Fluxo principal:  
1.	Sistema exibe os links dentro dos grupos de links já inseridos [A1]  
2.	Usuário seleciona as opções do link desejados  
3.	Sistema verifica se o usuário tem acesso ao grupo de links selecionado [A2]  
4.	Sistema exibe opções do link 
5.	Usuário seleciona a opção de alterar o link  
6.	Sistema exibe uma janela de formulário (nome, URL e tags) com os dados preenchido para serem alterados  
7.	Usuário submete as informações desejadas [A3]  
8.	Sistema altera o link e retorna a página de grupos de links  
9.	caso de uso encerrado  
  
Fluxo de Exceção:  
A1 - Não foi inserido nenhum link  
1.	A tela é exibida com uma mensagem informando que não há links inseridos no grupo  
2.	caso de uso encerrado  
  
A2 - O link selecionado é privado e o usuário não tem acesso  
1.	Sistema informa que o usuário não tem acesso para alterar o link selecionado
2.	Volta para página de grupos de links (passo 1)  
  
A3 - URL do link vazio ou formato inválido
1.	Sistema impede a submissão, informando que o endereço de URL é invalido  
2.	Sistema reexibe formulário de alteração do link (passo 6)
  
—-------------------------------------------  
  

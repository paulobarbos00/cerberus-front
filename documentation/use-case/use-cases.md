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
  
Fluxo Alternativo:  
A1 - Usuário já atingiu o limite máximo de grupos de links criado  
1.	Sistema exibe uma mensagem informando que o usuário não pode criar mais grupos de links por já ter atingido o limite máximo.  
2.	Sistema retorna a página principal  
3.	caso de uso encerrado  
  
A2 - Nome do grupo vazio  
1.	Sistema impede a submissão, informando que o nome do grupo está vazio  
2.	caso de uso encerrado  
  
—-------------------------------------------  
  
# UC03: VISUALIZAR conteúdo do grupo de links  
Objetivo: Este caso de uso possibilita o usuário visualizar os links inseridos dentro do grupo de links.   
Ator: Usuário geral  
Pré-Condições: Ter realizado o # UC01 e tem permissão para visualizar o grupo de links  
  
Fluxo principal:  
1.	Sistema exibe os grupos de links já inseridos [A1]  
2.	Usuário escolhe o grupo de links desejados  
3.	Sistema verifica se o usuário tem acesso ao grupo de links selecionado [A2]  
4.	Sistema exibe o conteúdo do grupo de links  
5.	caso de uso encerrado  
  
Fluxo Alternativo:  
  
A1 - Não foi inserido nenhum grupo de link  
1.	A tela é exibida com uma mensagem informando que não há grupos de links inseridos  
2.	caso de uso encerrado  
  
A2 - O grupo selecionado é privado e o usuário não tem acesso  
3.	Volta para página de grupos de links  
4.	caso de uso encerrado  
  
---------------------------------------------  
  
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
7.	Usuário confirma [A3]  
8.	Sistema excluir grupo de links e retorna a página de grupos inseridos  
9.	caso de uso encerrado  
  
Fluxo Alternativo:  
A1 - Não foi inserido nenhum grupo de link  
1.	A tela é exibida com uma mensagem informando que não há grupos de links inseridos  
2.	caso de uso encerrado  
  
A2 - O grupo selecionado é privado e o usuário não tem acesso  
1.	Volta para página de grupos de links  
2.	caso de uso encerrado  
  
A3 - O Usuário cancela ação  
1.	Sistema volta para página de grupos de links  
2.	caso de uso encerrado  
  
  
---------------------------------------------  
  
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
  
Fluxo Alternativo:  
A1 - Não foi inserido nenhum grupo de link  
1.	A tela é exibida com uma mensagem informando que não há grupos de links inseridos  
2.	caso de uso encerrado  
  
A2 - O grupo selecionado é privado e o usuário não tem acesso  
1.	Volta para página de grupos de links  
2.	caso de uso encerrado  
  
A3 - Nome do grupo vazio  
1.	Sistema impede a submissão, informando que o nome do grupo está vazio  
2.	caso de uso encerrado  
  
—-------------------------------------------  
  
# UC06: PESQUISAR grupos de links  
Objetivo: Este caso de uso possibilita ao usuário pesquisar os grupos de links disponíveis de acordo com o que procura  
Ator: Usuário geral   
Pré-Condições: Ter realizado o # UC01  
  
Fluxo principal:  
1.	Sistema exibe na página inicial o campo de busca  
2.	Usuário digita o que deseja pesquisar e submete [A1]  
3.	Sistema verifica o texto e exibe uma lista de grupos de links com referência ao texto digitado [A2]  
4.	Usuário navega em uma lista com vários grupos de links  
5.	caso de uso encerrado  
  
Fluxo Alternativo:  
A1 - Nome do grupo vazio  
1.	Sistema impede a submissão, informando que o nome do grupo está vazio  
2.	caso de uso encerrado  
  
—-------------------------------------------  
  
# UC07: COMPARTILHAR um grupo de links  
Objetivo: Este caso de uso possibilita ao usuário compartilhar os grupos de links   
Ator: Usuário geral   
Pré-Condições: Ter realizado o # UC01 e # UC06  
  
Fluxo principal:  
1.	Sistema exibe listas de grupos de links já pesquisados  
2.	Usuário seleciona as opções do grupo de links desejados  
3.	Sistema exibe opções do grupo de links  
4.	Usuário seleciona a opção de compartilhar grupo de link  
5.	Sistema exibe o link para compartilhamento e copia para área de transferência.  
6.	caso de uso encerrado  
  
—-------------------------------------------  
  
# UC08: INSERIR um link no grupo de links  
Objetivo: Este caso de uso possibilita ao usuário inserir links nos grupos de links para melhor organização.  
Ator: Usuário geral   
Pré-Condições: Ter realizado o # UC01 e tem permissão para alterar o grupo de links  
  
Fluxo principal:  
1.	Sistema exibe lista de grupo de links que o usuário tem permissão  
2.	Usuário realiza o # UC03  
3.	Sistema exibe menu com as opções do grupo de link  
4.	Usuário seleciona a opção de inserir links (RN02) [A1]  
5.	Sistema exibe formulário para colocar as informações (nome curto, URL e tags) do link  
6.	Usuário submete as informações solicitadas  
7.	Sistema adiciona o link no grupo e retorna a página do grupo de link  
8.	caso de uso encerrado  
  
  
Fluxo Alternativo:  
A1 - Usuário já atingiu o limite máximo links adicionados em um grupo  
1.	Sistema exibe uma mensagem informando que o usuário não pode adicionar mais  links por já ter atingido o limite máximo.  
2.	Sistema retorna a página do grupo de link  
3.	caso de uso encerrado  
  
  
—-------------------------------------------  
  
  
 
  

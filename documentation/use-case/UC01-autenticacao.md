CASO DE USO  
  
# UC01: Autenticação e/ou Cadastro no Sistema    
Objetivo: Este caso de uso possibilita ao usuário se autenticar no sistema    
Ator: Usuário geral    
Pré-Condições: O usuário tem conta do Google.    
    
Fluxo principal:    
1.	Sistema exibe a página de login    
2.	Usuário seleciona a opção para se autenticar pela conta do Google    
3.	Sistema exibe janela para o usuário informar e-mail e senha da Google    
4.	Usuário submete informações de acesso da Google.    
5.	Sistema recebe informações da Google e autentica usuário [A1][B1]    
6.	Sistema exige página inicial    
7.	caso de uso encerrado    
    
Fluxo de Exceção:    
A1 - E-mail e/ou senha inválida    
1.	Sistema recebe informações de acesso invalido e retorna a página de login    
2.	caso de uso encerrado    

Fluxo Alternativo:
B1 - Primeiro acesso    
1.	Sistema recebe informações de acesso e cria usuário para o sistema    
2.	Sistema exige página inicial
3.	caso de uso encerrado    
    
—-------------------------------------------  
  

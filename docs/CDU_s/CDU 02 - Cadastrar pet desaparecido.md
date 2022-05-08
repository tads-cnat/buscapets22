# CDU Cadastrar um pet desaparecido

## 1. Descrição

O usuário logado no sistema irá cadastrar um pet desaparecido.

## 2. Atores
Usuários

## 3. Pré-condições

O usuário precisa estar cadastrado no site para poder cadastrar o pet desaparecido.  
O usuário precisa ter acessado sua conta para cadastrar o pet desaparecido.

## 4. Pós-condições

1. Após a publicação do pet desaparecido ter sido feita, ela ficará exposta no perfil do usuário. 
2. O mapa na página inicial irá exibir um ícone baseado no endereço cadastrado na publicação.
3. Caso o animal seja encontrado, a publicação ficará com um ícone simbolizando que ele foi encontrado. 

## 5. Fluxo Principal

1. O usuário acessa o site.
2. O usuário clica no botão “Cadastre seu pet” na parte superior do site.
3. O sistema verifica se o usuário está logado.
4. O sistema redireciona o usuário para página de cadastro.
5. O sistema apresenta uma página com informações para o usuário escolher.
   - Opção de cadastrar pet desaparecido.
   - Opção de cadastrar pet para adoção.
6. O usuário seleciona a opção de cadastrar pet desaparecido e clica em avançar.
7. O sistema apresenta uma tela para escolher o tipo de animal.
8. O usuário escolhe o tipo de animal e clica em avançar.
9. O sistema apresenta uma tela para escolher a cor do animal.
10. O usuário seleciona a cor do animal e clica em avançar.
11. O sistema apresenta uma tela para escolher a raça do animal.
12. O usuário seleciona a raça do animal e clica em avançar.
13. O sistema apresenta uma tela para inserir foto e nome do animal.
14. O usuário preenche os campos e clica em avançar.
15. O sistema apresenta uma tela com um mapa para selecionar a localização em que ele foi visto da última vez.
16. O usuário clica numa posição no mapa e clica em avançar.
17. O sistema apresenta uma tela para informações de contato (Nome do tutor, número do celular, recompensa*).
18. O usuário preenche os campos e clica em avançar.
19. O sistema apresenta uma tela com todas as informações preenchidas e solicita ao usuário uma confirmação.
20. O usuário clica em confirmar os dados.
21. O sistema persiste a informação.
22. O sistema redireciona o usuário para página "Meus Pets Desaparecidos".

## 6. Fluxos alternativos

1. O usuário acessa o site.
2. O usuário seleciona o botão no navbar "Entrar"
3. O sistema redireciona o usuário para página de acessar conta.
4. O usuário insere suas credenciais e seleciona "Entrar"
5. O sistema verifica as informações e se corretas, redireciona o usuário para página de conta.
6. O usuário seleciona a opção "Meus Pets Desaparecidos".
7. O sistema exibe uma página com a lista dos pets desaparecidos cadastrados pelo usuário.
8. O usuário clica no botão "Cadastrar pet".
9. O sistema o redireciona para página de cadastro de pet.
10. Segue o fluxo a partir da etapa 5 do fluxo principal.

## 7. Situações de erro

### 7.1 O usuário tenta cadastrar um pet sem estar logado no sistema

1. O usuário acessa o site.
2. O usuário clica no botão “Cadastre seu pet” na parte superior do site.
3. O sistema verifica se o usuário está logado.
4. O sistema detecta que o usuário não está logado e o redireciona para página de acessar.

### 7.2 O usuário tenta avançar a página sem escolher uma das opções dada pelo sistema

1. O usuário acessa o site.
2. O usuário clica no botão “Cadastre seu pet” na parte superior do site.
3. O sistema verifica se o usuário está logado.
4. O sistema redireciona o usuário para página de cadastro de pet.
5. O sistema apresenta uma página com informações para o usuário escolher.
   - Opção de cadastrar pet desaparecido.
   - Opção de cadastrar pet para adoção.
6. O usuário seleciona a opção de cadastrar pet desaparecido e clica em avançar.
7. O sistema apresenta uma tela com algumas opções.
8. O usuário não escolhe uma das opções e clica em avançar.
9. O sistema exibe uma mensagem de erro.

## 8. Regras de Negócio

[RN3] Apenas pessoas cadastradas no sistema podem cadastrar pets, tanto no caso de desaparecimento quanto para adoção.  
[RN5] O sistema cobra uma taxa sobre a recompensa.  

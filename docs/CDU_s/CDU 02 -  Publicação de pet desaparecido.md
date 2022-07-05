# CDU Criar publicação de um pet desaparecido

## 1. Descrição

O usuário logado no sistema irá criar uma publicação de pet desaparecido.

## 2. Atores

● Usuário cadastrado

## 3. Pré-condições

● O usuário precisa estar cadastrado no site para poder criar a publicação do pet desaparecido.  
● O usuário precisa ter acessado sua conta para criar a publicação do pet desaparecido.

## 4. Pós-condições

1. Após a publicação do pet desaparecido ter sido feita, ela ficará exposta no perfil do usuário.
2. O mapa na página inicial irá exibir um ícone baseado na cordenada cadastrada na publicação.

## 5. Fluxo Principal

1. O usuário acessa o site.
2. O usuário clica no botão “Criar publicação do pet” na parte superior do site.
3. O sistema redireciona o usuário para página de criação de publicação.
4. O sistema apresenta uma página com informações para o usuário escolher.
   - Opção de cadastrar pet desaparecido.
   - Opção de cadastrar pet para adoção.
5. O usuário seleciona a opção de cadastrar pet desaparecido e clica em avançar.
6. O sistema apresenta um formulário para preencher informações sobre o animal.
7. O usuário inicia preenchimento do formulário.
8. O sistema apresenta a opção "título" para o usuário preencher.
9. O usuário preenche o campo e segue para o próximo.
10. O sistema apresenta a opção "descrição" para o usuário preencher.
11. O usuário preenche o campo e segue para o próximo.
12. O sistema apresenta a opção "nome do pet" para o usuário preencher.
13. O usuário preenche o campo e segue para o próximo.
14. O sistema apresenta a opção "gênero do pet" para o usuário preencher.
15. O usuário preenche o campo e segue para o próximo.
16. O sistema apresenta a opção "data do desaparecimento" para o usuário preencher.
17. O usuário preenche o campo e segue para o próximo.
18. O sistema apresenta uma tela com um mapa para selecionar a localização em que ele foi visto da última vez.
19. O usuário clica numa posição no mapa e clica em avançar.
20. O sistema apresenta um campo para usuário preencher com "Nome do tutor, número do celular, recompensa(se possuir)".
21. O usuário preenche o campo e segue para o próximo.
22. O sistema apresenta uma tela com todas as informações preenchidas e solicita ao usuário uma confirmação.
23. O usuário clica em confirmar os dados.
24. O sistema persiste a informação.
25. O sistema redireciona o usuário para página "Meus Pets Desaparecidos".

## 6. Fluxos alternativos

1. O usuário acessa o site.
2. O usuário seleciona o botão no navbar "Entrar"
3. O sistema redireciona o usuário para página de acessar conta.
4. O usuário insere suas credenciais e seleciona "Entrar"
5. O sistema verifica as informações e se corretas, redireciona o usuário para página de conta.
6. O usuário seleciona a opção "Meus Pets Desaparecidos".
7. O sistema exibe uma página com a lista dos pets desaparecidos cadastrados pelo usuário.
8. O usuário clica no botão "Criar publicação do pet".
9. O sistema o redireciona para página de cadastro de pet.
10. Segue o fluxo a partir da etapa 5 do fluxo principal.

## 7. Situações de erro

### 7.1 O usuário tenta cadastrar um pet sem estar logado no sistema

1. O usuário acessa o site.
2. O usuário clica no botão “criar publicação do pet” na parte superior do site.

### 7.2 O usuário tenta avançar a página sem escolher uma das opções dada pelo sistema

1. O usuário acessa o site.
2. O usuário clica no botão “Cadastre seu pet” na parte superior do site.
4. O sistema redireciona o usuário para página de cadastro de pet.
5. O sistema apresenta uma página com informações para o usuário escolher.
   - Opção de criar publicação de pet desaparecido.
   - Opção de criar publicação de pet para adoção.
6. O usuário seleciona a opção de criar publicação de pet desaparecido e clica em avançar.
7. O sistema apresenta uma tela com algumas opções.
8. O usuário não preenche uma das opções obrigatórias e clica em avançar.
9. O sistema exibe uma mensagem de erro.

## 8. Regras de Negócio

[RN3] Apenas pessoas cadastradas no sistema podem criar publicações de pets, tanto no caso de desaparecimento quanto para adoção.  
 

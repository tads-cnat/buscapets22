# CDU12 - Comentar

## 1. Descrição

O usuário tem a possibilidade de fazer um comentário na publicação de um pet

## 2. Atores

● Usuário cadastrado

## 3. Pré-condições

1. Ter uma conta cadastrada
2. Existir uma publicação

## 4. Pós-condições

1. O comentário será enviado para o usuário
2. Notificar o usuário dono da publicação de que há um comentário

## 5. Fluxo Principal

1. O usuário clica na publicação do animal
2. O sistema exibe detalhes da publicação e uma área de comentários
3. O usuário clica em comentar e envia um comentário
4. O sistema persiste o comentário do usuário no banco de dados

## 6. Fluxos alternativos

## 7. Situações de erro

7.1. Se o usuário inserir mais de 300 caracteres, aparecerar uma mensagem de limite de caracteres
7.2. O usuário tenta enviar um comentário em branco

## 8. Regras de Negócio

[RN5] Somente usuários cadastrados podem comentar em uma publicação.

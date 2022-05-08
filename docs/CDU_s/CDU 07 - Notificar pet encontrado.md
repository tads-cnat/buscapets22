# CDU03: Notificar pet encontrado

## 1. Descrição

O usuário vai acessar a sua conta e em seguida  notifica que encontrou um pet anuciado no sistema...

## 2. Atores

● Usuário cadastrado

## 3. Pre-condições

● O usuário precisa ter um cadastro

## 4 .Pós-condições

1. Após a notificação do pet encontrado, o mesmo ficará no perfil do usuário.
2. Se o pet for encontrado, a publicação do pet ficará com um “Check” verde, assinalando que o animal voltou para o dono.

## 5. Fluxos Principal

### Estende ao CDU 4 visualizar publicação de pet

1. O usuário seleciona a opção de notificar pet encontrado
2. O sistema apresenta uma tela com um formulário com os seguintes campos:
   - Status do Pet
   - Local encontrado
   - Envia uma mensagem
   - Adicionar uma foto
3. O usuário preenche as informações e envia  
4. O sistema apresenta um notificação que informando do pet encontrado.

## 6. Fluxos Alternativos

## 7. Situações de erro

### O usuário não preenche um dos campos obrigatórios

- Status do pet
- Local encontrado
- Envia uma mensagem
- Adicionar uma foto

## 8. Regras de Negócio

- [RN3] Apenas pessoas cadastradas no sistema podem notificar que encontrou os pets, tanto no caso de desaparecimento quanto para adoção e pet encontrado

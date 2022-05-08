# CDU03: Cadastrar um pet encontrado

## 1. Descrição

O usuário vai acessar a sua conta e em seguida cadastrar pet encontrado e preencher as informações como: foto, local encontrado etc...

## 2. Atores

● Usuário cadastrado

## 3. Pre-condições

● O usuário precisa ter um cadastro

## 4 .Pós-condições

1. Após o cadastro do pet encontrado, o mesmo ficará no perfil do usuário.
2. Se o pet for devolvido, a publicação do pet ficará com um “Check” verde, assinalando que o animal voltou para o dono.

## 5. Fluxos Principal

### Estende ao CDU visualizar perfil

1. O usuário seleciona a opção de cadastrar pet encontrado
2. O sistema apresenta uma tela com um formulário com os seguintes campos:
   - Foto do pet
   - Data encontrada
   - Local encontrado
   - Gênero
   - Raça
   - Espécie (gato ou cachorro)
   - Cor predominante
   - Campo de texto disponível para observações relevantes
3. O usuário preenche as informações e envia  
4. O sistema apresenta a página do anúncio do pet encontrado.

## 6. Fluxos Alternativos

### Existem animais desaparecidos com o perfil semelhante

- Alternativamente ao passo 4, o sistema apresenta página com pets relacionados

## 7. Situações de erro

### O usuário não preenche um dos campos obrigatórios

- Foto do pet
- Data encontrada
- Local encontrado
- Gênero
- Espécie (gato ou cachorro)

## 8. Regras de Negócio

- [RN3] Apenas pessoas cadastradas no sistema podem cadastrar pets, tanto no caso de desaparecimento quanto para adoção e pet encontrado
- [RN?] A publicação não deixará de existir se o pet for encontrado, apenas ficará mostrando que o mesmo já se encontra devolvido

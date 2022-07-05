# CDU03: Cadastrar pet para adoção

## 1. Descrição

O usuário logado no sistema irá criar uma publicação de pet para adoção.

## 2. Atores

● Usuário cadastrado

## 3. Pré-condições

● O usuário precisa estar cadastrado no site para poder criar a publicação do pet para adoção.  
● O usuário precisa ter acessado sua conta para criar a publicação do pet para adoção.

## 4 .Pós-condições

1. Após o cadastro do pet para a adoção, o mesmo ficará no perfil do usuário.

## 5. Fluxo Principal

### Estende ao CDU visualizar perfil

1. O usuário seleciona a opção de cadastrar pet para adoção
2. O sistema apresenta uma tela com um formulário com os seguintes campos:
   - Foto do pet
   - Título
   - Descrição
   - Nome do Pet
   - Localização
   - Gênero
   - Opções de adoção ou desaparecimento
3. O usuário preenche as informações e envia  
4. O sistema apresenta a página do anúncio do pet para adoção.

## 6. Fluxos Alternativos

### Existem animais desaparecidos com o perfil semelhante

- Alternativamente ao passo 4, o sistema apresenta página com pets relacionados

## 7. Situações de erro

### O usuário não preenche um dos campos obrigatórios

- Foto do pet
- Título
- Descrição
- Nome do Pet
- Localização
- Gênero
- Opções de adoção ou desaparecimento

## 8. Regras de Negócio

- [RN3] Apenas pessoas cadastradas no sistema podem cadastrar pets, tanto no caso de desaparecimento quanto para adoção

# CDU 5 - Exibir minhas publicações

## 1. Descrição

O usuário vai acessar os pets cadastrados por ele no sistema.

## 2. Atores
Usuários

## 3. Pré-condições

O usuário precisa estar cadastrado no site.  
O usuário precisa ter acessado sua conta para exibir seus pets.

## 4. Pós-condições

1. O sistema irá exibir uma página com os pets cadastrados por ele.
2. Caso não tenha pet cadastrado, o sistema exibe uma mensagem de 'Nenhum pet cadastrado ainda.'

## 5. Fluxo Principal

1. O usuário acessa o site.
2. O usuário seleciona o botão no navbar "Entrar"
3. O sistema redireciona o usuário para página de acessar conta.
4. O usuário insere suas credenciais e seleciona "Entrar"
5. O sistema verifica as informações e se corretas, redireciona o usuário para página de conta.
6. O usuário seleciona a opção "Minhas publicações".
7. O sistema exibe uma página com os pets cadastrados pelo usuário.

## 6. Fluxos alternativos

### 6.1 Redirecionado após publicar um desaparecimento.

1. O usuário cadastra um pet desaparecido.
2. O sistema redireciona o usuário para a página de "Minhas publicações".

### 6.2 Exibir publicações ao ver um perfil

1. O usuário acessa o site
2. O usuário seleciona publicação a partir do mapa
3. O sistema exibe as informações da publicação
4. O usuário clica para ver o perfil do usuário que criou a publicação.
5. O sistema redireciona o usuário para página do perfil
6. O usuário exibe o perfil do usuário

## 7. Situações de erro

### 7.1 O usuário tenta acessar a página das suas publicações sem estar logado

1. O usuário acessa o site.
2. O usuário digita na barra de endereços o caminho para acessar a página de "Minhas publicações".
3. O sistema verifica se o usuário está logado.
4. O sistema detecta que o usuário não está logado e o redireciona para página de acessar.

### 7.2 O usuário não tem pets cadastrados

1. O usuário acessa o site.
2. O usuário seleciona o botão no navbar "Entrar"
3. O sistema redireciona o usuário para página de acessar conta.
4. O usuário insere suas credenciais e seleciona "Entrar"
5. O sistema verifica as informações e se corretas, redireciona o usuário para página de conta.
6. O usuário seleciona a opção "Minhas publicações".
7. O sistema exibe uma mensagem de alerta ('Nenhum publicação encontrada.') avisando sobre não ter pets.

## 8. Regras de Negócio

[RN3] Apenas pessoas cadastradas no sistema podem cadastrar pets, tanto no caso de desaparecimento quanto para adoção.  

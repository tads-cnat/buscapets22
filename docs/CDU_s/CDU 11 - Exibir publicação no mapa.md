# CDU 11 - Exibir publicação no mapa

## 1. Descrição

O usuário vê publicações feitas no sistema em um mapa

## 2. Atores

Usuários

## 3. Pré-condições

Nenhuma

## 4. Pós-condições

1. O sistema irá exibir um mapa com ícones das públicações feitas

## 5. Fluxo Principal

1. O usuário acessa o site.
2. O sistema exibe a página inicial
3. O usuário navega até a seção do mapa
4. O sistema exibe o mapa e ícones para cada publicação feita nele, indicando locais onde houve desaparecimentos de pets.

## 6. Fluxos alternativos

Nenhum identificado.

## 7. Situações de erro

### 7.1 API para exibir o mapa está fora do ar

1. O usuário acessa o site.
2. O sistema exibe a página inicial
3. O usuário navega até a seção do mapa
4. O sistema tenta exibir o mapa mas ele não carrega.
5. O sistema exibe uma mensagem de erro falando 'Não foi possível carregar o módulo do mapa.'

## 8. Regras de Negócio

[RN4] Livre acesso ao usuário que não possui cadastro para visualizar os anúncios sobre os pets.  

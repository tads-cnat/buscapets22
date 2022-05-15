# Versionamento de projeto


### Criar branch
  1. Ir para a branch main
  ```
  git checkout main
  ```
  2. Já na main, para evitar conflitos, obrigatoriamente, sempre atualize a main
  ```
  git pull
  ```
  3.  Crie uma branch que herda o conteúdo da branch main
      * **label**, se trata do tipo da issue quando ela é criada (documentation, bug, enhancement...), coloque no começo do nome da branch
      * **front-back-doc**, é qual parte do projeto se trata a branch. Pode ser front, back ou doc
      * **numero da issue**, é o número que a issue ganha ao ser criada, #6 por exemplo
  ```
  git checkout -b <numero da issue>/<front-back>
  ```
  4.  Para conferir se realmente está na branch que acabou de criar
  ```
  git branch
  ```
### Mandar branch para o repositório
  1.  Para commitar o código ao término das atividades
  2.  É usado o git commit msg linter para padronizar os commits
  ```
  git add .
  git commit -m "scope: mensagem"
  ```
  2. Para mandar a branch com os commits para o repositório
  ```
  git push
  ```

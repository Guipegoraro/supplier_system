<pre>
 data structures:   
 Suppliers  ↓  
            |-> business name (string)  
            |-> Main business (Office supplies, pc hardware, furniture...)  
            |-> CNPJ
            |-> website (string)  
            |-> annotations (string)  
            |-> Contacts (array with objects) ↓ (must have option to add as many as the user wants)  
                        |-> Telephone (string)  
                        |-> Email (string)  
                        |-> Address (string)
            |- Products (array with objects) ↓  
                        |-> Product name (string)  
                        |-> Price (number)  
                        |-> Current stock (number)  
             
  
 user accounts roles:  
 admin - ↓  
        |-> crud suppliers  
        |-> crud contacts  
        |-> crud produtcs  
        (inherits) purchasing manager ↓  
                         |-> crud cotations  
                         |-> consult cotations  
</pre>
  

AT - Desenvolvimento Web com React
Construir uma aplicação React que implemente o Sistema de Compras do Infnet, conforme elaborado nas aulas.

ATENÇÃO: Não é necessário construir a aplicação completa, mas procure seguir e cumprir os requisitos estabelecidos abaixo. O foco principal é em Fornecedores e Contatos.

A solução deve incluir os seguintes requisitos e critérios de correção:

1. Desenvolver aplicações que respondam à eventos com a atualização da interface
Modularização do código, separando os métodos de acesso ao banco de dados dos componentes de tela (30%). DONE
Otimização do handleChange dos campos. Não criar useState para cada campo (60%).DONE
Implementação do useEffect para as operações de acesso ao Firebase (90%).DONE
Implementação de links do react-router para montagem do menu de opções (100%).DONE

2. Desenvolver componentes usando React Hooks
Implementação do Componente de Login e Criação de Conta (30%). DONE
Implementação dos Componentes com as telas de Fornecedores e Contatos (60%).DONE
Implementação dos Componentes com as telas de Produtos e Cotações (90%).DONE
Implementação do Componente de Layout para navegação da aplicação (100%).DONE

3. Criar formulários web usando componentes ReactJS
Implementação da Autenticação e Criação de Conta pelo Firebase (30%).DONE
Implementação de Inclusão e Listagem de Fornecedores (60%).DONE 
Implementação de Inclusão e Listagem de Contatos (90%).DONE
Implementação de Exclusão de Fornecedores e Contatos (100%).DONE

4. Criar aplicações React com múltiplas páginas usando React Router
Implementação do Compomente de navegação (menu) e rotas (30%).DONE
Implementação de menu somente para usuários autenticados (60%).DONE
Implementação do menu dinâmico conforme o tipo de usuário (90%).DONE 
Implementação de Página Não Encontrada (100%).DONE
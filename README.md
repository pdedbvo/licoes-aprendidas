# Lições aprendidas · Grupo DBVO

Banco de lições aprendidas da empresa: o que aconteceu em cada empreendimento, empresa e time, como foi resolvido e o que fazer da próxima vez.

- Endereço (GitHub Pages): https://pdedbvo.github.io/licoes-aprendidas/
- Teste sem gravar no banco: `?demo` (ou `?demo=admin` para ver como administrador). Grava só no navegador.
- Fica fora do SharePoint: a Central de ferramentas só tem um link para cá.

## Abas
- **Banco** (abre aqui): categorias com "Todas" primeiro, busca em todos os campos (sem acento), filtros de onde, etapa e impacto. Clicar numa lição abre o detalhe; "Copiar link" gera `#licao=<id>`.
- **Nova lição**: formulário. Publica na hora, sem login. Campos: título, categoria, tipo (positiva/negativa), onde e quando, o que aconteceu, por que aconteceu, como foi resolvido, **lição aprendida** (obrigatória), o que fazer ou evitar, impacto, palavras-chave, link e nome.
- **Configurações**: categorias (qualquer pessoa cria; só administradores renomeiam ou excluem), listas de onde aconteceu e etapas (administradores), Acessos (administradores).

## Quem pode o quê
- Qualquer pessoa vê, procura, cria lições e cria categorias. Não precisa de login: o app entra sozinho com um login anônimo do Firebase, que identifica o navegador.
- Quem registrou a lição pode editar ou excluir por **24 horas**, no mesmo navegador. Isso é garantido pelas regras do Firestore, não só pela tela.
- Depois, só **administradores**: quem está na aba Acessos (`licoesAdmins/{email}`) ou é editor do Estúdio (`editores/{email}`).

## Arquivos
- `index.html`: layout e funcionamento (fonte N27 embutida).
- `dados.js`: configuração do Firebase, prazo de edição, categorias sugeridas e listas iniciais. As categorias sugeridas entram no banco junto com a primeira lição ou categoria criada; depois disso vale o que estiver no banco.
- `firestore.rules`: regras **completas** do Firestore do projeto `sharepoint-studio` (Estúdio + Onboarding + Lições aprendidas).

## Banco (Firebase sharepoint-studio)
| Coleção | O que guarda | Quem grava |
|---|---|---|
| `licoes` | Uma lição por documento | Qualquer pessoa cria; autor por 24h; administradores sempre |
| `licoesCategorias` | Categorias (id = nome sem acento) | Qualquer pessoa cria; administradores editam e excluem |
| `licoesConfig/listas` | Empreendimentos, empresas, times e etapas | Administradores |
| `licoesAdmins/{email}` | Administradores do banco | Administradores |

## Para colocar no ar (uma vez)
1. **GitHub Pages**: Settings → Pages → branch `main`, pasta `/root`.
2. **Firebase → Authentication → Método de login**: ativar **Anônimo**.
3. **Firebase → Firestore → Regras**: colar o arquivo `firestore.rules` inteiro e publicar. Ele já traz as regras do Estúdio e do Onboarding; se alguém mudar as regras do Onboarding depois, junte as duas partes antes de publicar.
4. **Central de ferramentas**: card "Lições aprendidas" apontando para o endereço acima.

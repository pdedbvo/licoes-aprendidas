/* =====================================================================
   LIÇÕES APRENDIDAS · GRUPO DBVO — CONFIGURAÇÃO E LISTAS INICIAIS
   As listas abaixo são o ponto de partida. Depois de publicado, quem muda
   categorias e listas é a aba Configurações do próprio app (grava no Firebase).
   Mantenha aspas e vírgulas.
   ===================================================================== */
window.LICOES_APP = {
  /* Firebase do SharePoint/Estúdio (sharepoint-studio). A chave web do Firebase é pública por natureza;
     quem protege os dados são as regras do Firestore (ver LEIAME.md). */
  firebase: { apiKey: "AIzaSyA1w_OOq478oTeTzebdaL29oCnvwFwWW3g", authDomain: "sharepoint-studio.firebaseapp.com", projectId: "sharepoint-studio" },

  contato: "mailto:sergio.f@edificabpo.com.br?subject=Li%C3%A7%C3%B5es%20aprendidas",

  /* Quantas horas o autor pode editar ou excluir a própria lição. Mude também nas regras do Firestore. */
  horasEdicao: 24,

  /* Categorias sugeridas: usadas só enquanto o banco não tem nenhuma categoria criada. */
  categorias: [
    { nome: "Terreno e viabilidade", d: "Compra de terreno, estudo de massa, viabilidade e premissas do negócio." },
    { nome: "Projetos e compatibilização", d: "Projetos, BIM, interferências, revisões e entregáveis." },
    { nome: "Aprovação e legalização", d: "Prefeitura, cartório, licenças, alvarás e habite-se." },
    { nome: "Suprimentos e contratos", d: "Compras, fornecedores, empreiteiros, prazos e contratos." },
    { nome: "Execução de obra", d: "Métodos, sequência executiva, produtividade e frentes de serviço." },
    { nome: "Qualidade e segurança", d: "Inspeções, retrabalho, patologias, segurança do trabalho." },
    { nome: "Comercial e marketing", d: "Lançamento, vendas, tabela, campanhas e atendimento ao cliente." },
    { nome: "Financeiro e jurídico", d: "Orçamento, fluxo de caixa, financiamento, distratos e questões legais." },
    { nome: "Entrega e pós-obra", d: "Vistoria, entrega de chaves, assistência técnica e garantia." },
    { nome: "Gestão e pessoas", d: "Rotinas, comunicação entre áreas, ferramentas, contratação e onboarding." }
  ],

  /* Onde aconteceu: os 3 tipos e as opções de cada um. */
  listas: {
    empreendimentos: ["BE01 · BE Garden", "BE02 · BE Deodoro", "BE03 · BE Bonifácio", "BE06 · BE São Paulo", "BE09 · BE Dumont", "BE Modelo"],
    empresas: ["DBVO", "DBVO Hub", "Edifica", "Delta Bravo Engenharia", "Delta Bravo Obras", "BE A Moradia do Futuro", "Engine", "Inside"],
    times: ["CSUA", "CSUM", "ENGO", "ENGE", "ENGA", "Operações", "Incorporação"],
    etapas: ["Terreno e viabilidade", "Projeto", "Aprovação", "Lançamento e vendas", "Suprimentos", "Obra", "Entrega", "Pós-obra", "Gestão do dia a dia"]
  }
};

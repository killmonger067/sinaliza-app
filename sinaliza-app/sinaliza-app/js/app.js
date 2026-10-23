const phrase = document.querySelector('#phrase');
  const count = document.querySelector('#charcount');
  const empty = document.querySelector('#empty');
  const result = document.querySelector('#result');
  const heading = document.querySelector('#result-heading');
  const explanation = document.querySelector('#result-explanation');
  const steps = document.querySelector('#steps');
  const translationText = document.querySelector('#translation-text');
  const demos = [
    {match:/olá.*tudo bem|tudo bem/i,title:'Cumprimento',description:'Este exemplo ilustra como uma frase poderá ser dividida em unidades de aprendizagem. Os sinais reais deverão ser inseridos após validação linguística.',items:[['Cumprimento','Adicionar vídeo validado do sinal correspondente a “olá”.'],['Pergunta / expressão facial','Adicionar demonstração validada para a pergunta e as expressões não manuais apropriadas.']]},
    {match:/qual é o seu nome|seu nome/i,title:'Perguntar o nome',description:'Uma pergunta pode exigir uma estrutura diferente da frase escrita em português. A sequência abaixo é apenas um espaço reservado para conteúdo validado.',items:[['Pergunta','Inserir a construção em Libras revisada por especialista.'],['Nome','Inserir vídeo do sinal adequado ao contexto.']]},
    {match:/obrigad/i,title:'Agradecimento',description:'O aplicativo poderá ensinar o sinal e explicar como posicionar e movimentar as mãos. A demonstração real será adicionada quando houver mídia confiável.',items:[['Agradecimento','Inserir vídeo validado do sinal de agradecimento.'],['Contexto','Explicar variações de expressão e contexto quando aplicável.']]},
    {match:/aprender libras|libras/i,title:'Falar sobre Libras',description:'Para traduzir uma frase completa, será necessário analisar o significado e a estrutura linguística, e não apenas trocar palavras isoladas por sinais.',items:[['Sujeito e intenção','Analisar o sentido da frase em português.'],['Estrutura em Libras','Inserir a tradução revisada e os vídeos correspondentes.']]}
  ];
  function updateCount(){count.textContent = `${phrase.value.length} / 500 caracteres`;}
  phrase.addEventListener('input',updateCount);
  document.querySelectorAll('[data-phrase]').forEach(button=>button.addEventListener('click',()=>{phrase.value=button.dataset.phrase;updateCount();phrase.focus();}));
  document.querySelector('#clear').addEventListener('click',()=>{phrase.value='';updateCount();phrase.focus();empty.style.display='flex';result.style.display='none';});
  document.querySelector('#translate').addEventListener('click',()=>{
    const text=phrase.value.trim();
    if(!text){phrase.focus();count.textContent='Digite uma frase para continuar.';return;}
    const demo=demos.find(d=>d.match.test(text));
    heading.textContent=demo?demo.title:'Frase recebida';
    translationText.textContent=text;
    explanation.textContent='Sua frase está pronta para ser explorada pelo widget oficial do VLibras. Clique no ícone flutuante do VLibras e siga as opções da ferramenta. A sequência abaixo é apenas uma demonstração do futuro fluxo do Sinaliza, não uma tradução linguística própria.';
    const items=demo?demo.items:[['Análise da frase','Identificar intenção, contexto e estrutura linguística.'],['Tradução validada','Conectar uma tradução revisada por pessoas fluentes em Libras.'],['Demonstração visual','Exibir vídeos ou animações dos sinais correspondentes.']];
    steps.replaceChildren();
    items.forEach((item,index)=>{const row=document.createElement('div');row.className='step';const num=document.createElement('div');num.className='num';num.textContent=String(index+1);const content=document.createElement('div');const title=document.createElement('strong');title.textContent=item[0];const desc=document.createElement('p');desc.textContent=item[1];content.append(title,desc);row.append(num,content);steps.append(row);});
    empty.style.display='none';result.style.display='block';
  });

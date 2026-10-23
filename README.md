# Sinaliza — protótipo web português para Libras

Este é um protótipo inicial de um aplicativo web educativo. A interface roda no navegador sem instalação nem chave de API. Foi adicionado o widget oficial do VLibras como recurso externo; ele exige conexão com a internet e pode depender de hospedagem por HTTP/HTTPS para funcionar corretamente.

## Como executar
1. Extraia a pasta `sinaliza-app` do arquivo ZIP.
2. Abra `index.html` com um navegador atualizado para conferir a interface.
3. Para testar o VLibras, publique a pasta em uma hospedagem HTTPS (por exemplo, GitHub Pages) e abra o endereço publicado com internet ativa.
4. No site publicado, clique no botão flutuante do VLibras, passe o cursor sobre o texto e selecione o texto que deseja traduzir, conforme a documentação oficial.
5. O botão **Preparar demonstração** organiza o fluxo didático do Sinaliza; ele não inicia diretamente a tradução do VLibras.

## Estrutura
- `index.html`: conteúdo e estrutura da página.
- `css/style.css`: aparência e adaptação para celular.
- `js/app.js`: comportamento da interface e exemplos demonstrativos.

## Limitação importante
O Sinaliza ainda **não possui um motor próprio de tradução nem contém vídeos próprios validados de sinais**. O widget oficial do VLibras foi integrado para oferecer um recurso externo de tradução de conteúdo web; essa integração não significa que o Sinaliza controle ou garanta a tradução do texto digitado. O widget e o serviço dependem da disponibilidade e das condições de uso do VLibras. Uma versão real precisa de um mecanismo de tradução português–Libras e de conteúdo audiovisual licenciado e validado por pessoas fluentes em Libras, incluindo gramática e expressões não manuais. Não use a demonstração como tradução correta para comunicação essencial.

## Próximas etapas sugeridas
1. Validar o widget oficial do VLibras na versão hospedada do site.
2. Estudar a documentação oficial da integração web e as condições de uso.
3. Avaliar conjuntos de dados português–glosa de Libras, como pt-br2libras-gloss, cuja licença indicada é CC BY-SA 4.0; conferir a licença e a adequação dos dados antes de qualquer redistribuição ou treino.
4. Obter validação linguística de especialistas e pessoas surdas fluentes em Libras.
5. Só então planejar um motor próprio de tradução contextual e uma camada visual com vídeos ou avatar.

## Publicação gratuita
Como esta primeira versão é estática, pode ser publicada em serviços de hospedagem estática, como GitHub Pages, conforme as condições e limites atuais do serviço.

## Referências consultadas
- VLibras oficial: https://www.gov.br/governodigital/pt-br/acessibilidade-e-usuario/vlibras/vlibras
- Documentação de integração web: https://vlibras.gov.br/doc/widget/installation/webpageintegration.html
- Catálogo de APIs governamentais: https://www.gov.br/conecta/catalogo/apis/vlibras
- Corpus pt-br2libras-gloss (Mendeley Data): https://data.mendeley.com/datasets/ryj88ckjww/2

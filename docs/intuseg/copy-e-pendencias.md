# INTUSeg: copy aplicada e pendências

Base: Variação 1 (Método) de `lp-copy-variacoes-corretoras.md` + Documento-Mãe Comercial v2 + briefing de LP v2
(clients/intus-hub/runs/2026-09-30/). A paleta, as fontes e os componentes do site de referência foram mantidos.

## Mapa das seções

| # | Seção no site | Conteúdo INTUSeg | Origem |
|---|---|---|---|
| 1 | Hero + mockup animado de grupo de WhatsApp | Headline, subheadline e CTAs da Variação 1 | Variação 1 |
| 2 | Antes/depois ("Onde o dia trava") | Hoje x Com a INTUSeg | Bloco de identificação + Documento-Mãe (passos 1 a 3) |
| 3 | Frase de rolagem | "Cada corretora tem um gargalo diferente..." | Variação 1 |
| 4 | Faixa de prova | Perfis de corretoras, sem nomes | Documento-Mãe (nota editorial) |
| 5 | Como trabalhamos (nova) | 4 passos | Variação 1 |
| 6 | Escolha o seu processo (6 cards + ilustrações) | Renovação, cotação, cadastro, documentos, regras das seguradoras, equipe e dono | Documento-Mãe, passo 3 |
| 7 | Onde o tempo se perde (4 círculos) | 20-35%, 2-4h, 8-15 min, Lei 14.430/22, com fonte | Documento-Mãe, passo 2 |
| 8 | Dois lados da mesma rotina | Equipe x dono | Documento-Mãe (renovação, cotação, regras, visão do dono) |
| 9 | Uma renovação em 6 passos + roda "Como começa" | Varredura a medição; diagnóstico a evolução contínua | Variação 2 (fluxo) + Documento-Mãe ("Como começa") |
| 10 | Casos (slider) | 6 situações, sem nomes e sem aspas | Documento-Mãe ("Mesmo processo, realidades diferentes") |
| 11 | Medição e confiança (nova) | Como medimos, ação registrada, para quem é | Documento-Mãe |
| 12 | Perguntas | 9 perguntas | Documento-Mãe |
| 13 | CTA final + rodapé | Headline de fechamento da Variação 1 | Variação 1 |

## Microcopy derivada (não está literal nos documentos)

Revisar com Diego e Marcio: itens "Hoje" e "Com a INTUSeg" da seção 2; título "Você não montou uma corretora para copiar dados de uma tela para outra"; legendas dos 3 tooltips de cada lado na seção 8; frases curtas dos 6 passos da seção 9; textos do mockup do hero (números e horários são fictícios, rotulados como "exemplo ilustrativo").

## Pendências antes de publicar

- **Porte mínimo ("equipe de 3 ou mais")**: está na seção 11 e é [CONFIRMAR] no Documento-Mãe.
- **Casos**: sem números ([NÚMERO]) e sem nomes (autorização pendente). A descrição da rede de franquias vem marcada [CONFIRMAR] no Documento-Mãe.
- **Preço, prazo da primeira entrega e relatório de medição**: ficaram de fora de propósito.
- **LGPD e segurança**: sem texto (pendente). O rodapé não tem política de privacidade nem termos.
- **Formulário**: `/api/lead` só valida e registra o lead nos logs do servidor (Vercel > Logs). Falta definir o destino (WhatsApp, e-mail ou CRM).
- **Logo**: wordmark de texto provisório. Falta a logo oficial e o favicon (hoje um "IS" provisório).
- **Imagem Open Graph**: não existe.
- **Domínio e INPI** (briefing, item 2).

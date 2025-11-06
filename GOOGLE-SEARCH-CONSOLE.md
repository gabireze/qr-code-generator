# 🔍 Guia Google Search Console

## 1️⃣ Configuração Inicial

### Adicionar Propriedade
1. Acesse: https://search.google.com/search-console
2. Clique em "Adicionar propriedade"
3. Escolha "Prefixo de URL"
4. Digite: `https://qr-code.gabireze.cloud`

### Métodos de Verificação

#### Opção 1: Tag HTML (Mais Simples)
Adicione no `<head>` do index.html:
```html
<meta name="google-site-verification" content="SEU_CODIGO_AQUI" />
```

#### Opção 2: Arquivo HTML
1. Baixe o arquivo fornecido pelo Google
2. Faça upload na raiz do site
3. Acesse: `https://qr-code.gabireze.cloud/google[código].html`

#### Opção 3: Google Analytics
Se já tiver GA instalado, pode usar esse método.

#### Opção 4: Google Tag Manager
Se já tiver GTM instalado, pode usar esse método.

## 2️⃣ Enviar Sitemap

Após verificação aprovada:
1. No menu lateral, clique em "Sitemaps"
2. Digite: `sitemap.xml`
3. Clique em "Enviar"
4. Aguarde indexação (pode levar dias/semanas)

## 3️⃣ Solicitar Indexação Manual

Para indexação rápida da homepage:
1. Use a ferramenta de inspeção de URL
2. Digite: `https://qr-code.gabireze.cloud`
3. Clique em "Solicitar indexação"

## 4️⃣ Verificações Importantes

### Coverage (Cobertura)
- Verifique páginas indexadas
- Corrija erros de rastreamento
- Monitore avisos

### Performance (Desempenho)
- Monitore impressões
- Analise CTR (taxa de cliques)
- Veja posição média
- Identifique principais consultas

### Core Web Vitals
- LCP (Largest Contentful Paint): < 2.5s
- FID (First Input Delay): < 100ms
- CLS (Cumulative Layout Shift): < 0.1

### Mobile Usability
- Certifique-se de que não há erros mobile
- Teste em diferentes dispositivos

## 5️⃣ URLs Importantes para Testar

### Google Tools
```
# Rich Results Test
https://search.google.com/test/rich-results?url=https://qr-code.gabireze.cloud

# Mobile-Friendly Test
https://search.google.com/test/mobile-friendly?url=https://qr-code.gabireze.cloud

# PageSpeed Insights
https://pagespeed.web.dev/analysis?url=https://qr-code.gabireze.cloud
```

### Social Media Debuggers
```
# Facebook Sharing Debugger
https://developers.facebook.com/tools/debug/?q=https://qr-code.gabireze.cloud

# Twitter Card Validator
https://cards-dev.twitter.com/validator

# LinkedIn Post Inspector
https://www.linkedin.com/post-inspector/inspect/https://qr-code.gabireze.cloud
```

## 6️⃣ Comandos de Busca Úteis

### Verificar Indexação
```
site:qr-code.gabireze.cloud
```

### Buscar por Título
```
intitle:"Gerador de QR Code"
```

### Verificar Backlinks
```
link:qr-code.gabireze.cloud
```

### Buscar Conteúdo Específico
```
site:qr-code.gabireze.cloud "qr code pix"
```

## 7️⃣ Schema.org Validation

Valide o structured data:
```
https://validator.schema.org/#url=https://qr-code.gabireze.cloud
```

## 8️⃣ Robots.txt Tester

Teste o robots.txt no GSC:
1. Menu lateral > Configurações > robots.txt
2. Verifique se está acessível
3. Teste URLs específicas

## 9️⃣ Configurações Recomendadas

### Taxa de Rastreamento
- Deixe em "Automático" (recomendado)
- Só ajuste se tiver problemas de servidor

### Segmentação Internacional
- País de destino: Brasil
- Idioma: Português (pt-BR)

### Propriedade de Conjunto de Domínios
Se tiver variações (www, não-www):
- Configure propriedade de conjunto
- Defina preferência de domínio

## 🔟 Monitoramento Regular

### Diário
- [ ] Verificar erros críticos
- [ ] Monitorar queries de busca

### Semanal
- [ ] Analisar desempenho de pesquisa
- [ ] Verificar novos backlinks
- [ ] Revisar Core Web Vitals

### Mensal
- [ ] Análise completa de tráfego
- [ ] Otimizar páginas com baixo desempenho
- [ ] Atualizar conteúdo se necessário
- [ ] Verificar concorrentes

## 📊 KPIs Principais

### Métricas de Sucesso
1. **Impressões**: Quantas vezes apareceu nos resultados
2. **Cliques**: Quantos cliques recebeu
3. **CTR**: Taxa de cliques (ideal > 3%)
4. **Posição Média**: Objetivo < 10 (primeira página)

### Objetivos (3 meses)
- 1000+ impressões/mês
- 50+ cliques/mês
- CTR > 5%
- Posição média < 20

### Objetivos (6 meses)
- 10.000+ impressões/mês
- 500+ cliques/mês
- CTR > 7%
- Posição média < 10

## 🎯 Palavras-chave Prioritárias

Monitore estas queries:
- gerador qr code
- criar qr code
- qr code grátis
- qr code online
- gerador qr code pix
- qr code whatsapp
- qr code personalizado

## 📱 Bing Webmaster Tools (Opcional)

Similar ao GSC, mas para Bing:
1. https://www.bing.com/webmasters
2. Adicionar site
3. Verificar propriedade
4. Enviar sitemap

## ⚠️ Problemas Comuns

### Site não indexa
- Verifique robots.txt
- Confirme sitemap.xml
- Solicite indexação manual
- Aguarde (pode levar semanas)

### Erros 404
- Corrija links quebrados
- Configure redirects 301

### Mobile issues
- Teste responsividade
- Corrija elementos muito próximos
- Ajuste viewport

### Core Web Vitals ruins
- Otimize imagens
- Minifique CSS/JS
- Use CDN
- Enable caching

---

**Importante**: SEO é um processo contínuo. Resultados levam tempo (3-6 meses).
**Foco**: Criar conteúdo de qualidade e melhorar a experiência do usuário.

# Gerador de QR Code Online

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)

> Gerador de QR Code gratuito, completo e sem limites. Suporte para múltiplos formatos incluindo URLs, WhatsApp, PIX, vCard, Wi-Fi, criptomoedas e muito mais.

**[Acesse aqui: qrcode.gabireze.cloud](https://qrcode.gabireze.cloud/)**

## GitAds Sponsored
[![Sponsored by GitAds](https://gitads.dev/v1/ad-serve?source=gabireze/qr-code-generator@github)](https://gitads.dev/v1/ad-track?source=gabireze/qr-code-generator@github)

## Funcionalidades

- **100% Gratuito** - Sem limites de uso, sem registro necessário
- **Privacidade Total** - Processamento local no navegador, dados nunca enviados ao servidor
- **Personalização Completa** - Cores, tamanhos e formas customizáveis
- **Múltiplos Formatos** - Exportação em PNG, JPG, SVG e PDF
- **Totalmente Responsivo** - Funciona em desktop, tablet e mobile
- **Alta Performance** - Geração instantânea de QR Codes
- **15+ Tipos Suportados** - URL, WhatsApp, PIX, vCard, Wi-Fi, Bitcoin e mais

## Tipos de QR Code Suportados

### Comunicação
- **URL** - Links para sites e páginas
- **Telefone** - Chamadas diretas
- **SMS** - Mensagens de texto
- **E-mail** - Com assunto e corpo pré-preenchidos
- **WhatsApp** - Com mensagem pré-definida

### Dados Pessoais
- **vCard** - Contato completo (padrão internacional)
- **MeCard** - Contato simplificado

### Pagamentos
- **PIX** - Pagamentos instantâneos brasileiros
- **Bitcoin** - Carteira Bitcoin
- **Ethereum** - Carteira Ethereum
- **Litecoin** - Carteira Litecoin
- **Bitcoin Cash** - Carteira BCH
- **Dogecoin** - Carteira Dogecoin
- **Monero** - Carteira Monero

### Outros
- **Localização** - Coordenadas GPS
- **Evento** - Calendário/iCal
- **Wi-Fi** - Configuração automática de rede

## Começando

### Requisitos

- Navegador moderno com suporte a JavaScript ES6+
- Conexão com internet (para carregar dependências CDN)

### Instalação

```bash
# Clone o repositório
git clone https://github.com/gabireze/qr-code-generator.git

# Entre no diretório
cd qr-code-generator

# Abra o index.html em um navegador
# Ou use um servidor local
python -m http.server 8000
# ou
npx serve
```

## Estrutura do Projeto

```
qr-code-generator/
├── index.html              # Página principal com gerador de QR Code
├── sobre.html              # Página sobre o projeto
├── privacidade.html        # Política de privacidade
├── config/                 # Arquivos de configuração
│   ├── nginx.conf         # Configuração Nginx
│   └── lighthouse.json    # Configuração Lighthouse
├── docs/                   # Documentação
│   ├── CRIAR-IMAGENS.md
│   ├── ESTRUTURA.md
│   ├── GOOGLE-SEARCH-CONSOLE.md
│   ├── LIGHTHOUSE-IMPROVEMENTS.md
│   ├── RESUMO-SEO.md
│   ├── SEO-CHECKLIST.md
│   └── SEO-README.md
├── public/                 # Arquivos públicos
│   ├── ads.txt            # Google AdSense
│   ├── robots.txt
│   ├── sitemap.xml
│   ├── manifest.json      # PWA manifest
│   └── assets/
│       ├── icons/         # Ícones do app
│       └── webfonts/      # Fontes web
├── scripts/                # Scripts auxiliares
│   ├── deploy.sh          # Script de deploy
│   ├── generate-icons.html # Gerador de ícones
│   └── generate-social-images.html # Gerador de imagens sociais
└── src/                    # Código fonte
    └── css/
        └── styles.css     # Estilos customizados
```

## Personalização

### Cores
- Cor do QR Code (foreground)
- Cor do fundo (background)
- Fundo transparente (PNG/SVG)
- Cor de fundo para JPG/PDF

### Tamanhos
- Predefinidos: 256px, 384px, 512px, 640px, 768px, 1024px
- Personalizado: qualquer tamanho a partir de 41px

### Estilos
- Módulos quadrados
- Módulos em pontos
- Módulos arredondados

### Qualidade
- 4 níveis de correção de erro (L, M, Q, H)
- Margem (quiet zone) configurável

## Tecnologias Utilizadas

- **HTML5** - Estrutura semântica com conteúdo educacional
- **Tailwind CSS** - Framework CSS via CDN
- **JavaScript ES6+** - Lógica da aplicação
- **QRCodeStyling** - Biblioteca para geração de QR Codes
- **jsPDF** - Exportação para PDF
- **Font Awesome** - Ícones

## Performance e SEO

- **Lighthouse Score**: 95+ (Performance, SEO, Acessibilidade, Best Practices)
- **SEO Otimizado**: Meta tags, Schema.org, Open Graph, Twitter Cards
- **Conteúdo Rico**: +5.500 palavras de conteúdo educacional sobre QR Codes
- **PWA Ready**: Manifest.json configurado para instalação como app
- **Google Analytics**: Integração com GA4
- **Google AdSense**: Configurado para monetização

## Conteúdo Educacional

O site inclui seções educacionais completas:

- **O que é QR Code e Como Funciona** - História, tecnologia e aplicações
- **Estrutura Técnica** - Componentes, versões e padrões de QR Code
- **Recursos e Funcionalidades** - Características do gerador
- **Aplicações Práticas** - Casos de uso reais em diversos setores
- **FAQ** - 14 perguntas frequentes com respostas detalhadas
- **Segurança e Privacidade** - Riscos, ameaças e boas práticas

## Privacidade e Segurança

- **Processamento 100% Local** - Dados nunca enviados ao servidor
- **Sem Armazenamento** - Nenhum QR Code ou informação pessoal é salva
- **Funciona Offline** - Após carregar a página, pode ser usado sem internet
- **Política de Privacidade** - Página dedicada detalhando tratamento de dados
- **Conformidade LGPD/GDPR** - Transparência total sobre cookies e analytics

## Deploy

### Produção

```bash
# Execute o script de deploy (requer sudo)
sudo bash scripts/deploy.sh
```

O script automaticamente:
1. Atualiza o código do repositório
2. Copia arquivos para /var/www/qrcode.gabireze.cloud
3. Configura permissões corretas
4. Recarrega o Nginx

### Pós-Deploy

1. Verificar o site em https://qrcode.gabireze.cloud
2. Adicionar o site no Google Search Console
3. Enviar sitemap: https://qrcode.gabireze.cloud/sitemap.xml
4. Testar rich results: https://search.google.com/test/rich-results
5. Validar performance com Lighthouse

## Contribuindo

Contribuições são bem-vindas! Por favor, siga estas etapas:

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'feat: Adiciona MinhaFeature'`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Abra um Pull Request

Veja [CONTRIBUTING.md](CONTRIBUTING.md) para mais detalhes sobre padrões de código e processo de contribuição.

## Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## Autor

**@gabireze**
- Website: [gabireze.com.br](https://gabireze.com.br/)
- GitHub: [@gabireze](https://github.com/gabireze)
- Email: contato@gabireze.com.br

## Agradecimentos

- [QRCodeStyling](https://github.com/kozakdenys/qr-code-styling) - Biblioteca principal para geração de QR Codes
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS utilitário
- [Font Awesome](https://fontawesome.com/) - Biblioteca de ícones
- [jsPDF](https://github.com/parallax/jsPDF) - Geração de PDF no navegador

## Links Úteis

- **Documentação**: [docs/](docs/)
- **Deploy**: [DEPLOY.md](DEPLOY.md)
- **SEO**: [docs/SEO-README.md](docs/SEO-README.md)
- **Git Commands**: [GIT-COMMANDS.md](GIT-COMMANDS.md)

---

Se este projeto foi útil para você, considere dar uma estrela no repositório!

<!-- GitAds-Verify: NX42DHB4NUQBQ7VXLYGKY5V3U57VEUE9 -->

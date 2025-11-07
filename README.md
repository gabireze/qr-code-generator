# 🎨 Gerador de QR Code Online

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)

> Gerador de QR Code gratuito, completo e sem limites. Suporte para múltiplos formatos incluindo URLs, WhatsApp, PIX, vCard, Wi-Fi, criptomoedas e muito mais.

🌐 **[Acesse aqui: qrcode.gabireze.cloud](https://qrcode.gabireze.cloud/)**

## ✨ Funcionalidades

- ✅ **100% Gratuito** - Sem limites de uso, sem registro necessário
- 🔒 **Privacidade Total** - Processamento local no navegador
- 🎨 **Personalização Completa** - Cores, tamanhos e formas customizáveis
- 📥 **Múltiplos Formatos** - Exportação em PNG, JPG, SVG e PDF
- 📱 **Totalmente Responsivo** - Funciona em desktop, tablet e mobile
- ⚡ **Alta Performance** - Geração instantânea de QR Codes
- 🌍 **15+ Tipos Suportados** - URL, WhatsApp, PIX, vCard, Wi-Fi, Bitcoin e mais

## 📋 Tipos de QR Code Suportados

### Comunicação
- 🔗 **URL** - Links para sites e páginas
- 📞 **Telefone** - Chamadas diretas
- 💬 **SMS** - Mensagens de texto
- 📧 **E-mail** - Com assunto e corpo pré-preenchidos
- 💚 **WhatsApp** - Com mensagem pré-definida

### Dados Pessoais
- 👤 **vCard** - Contato completo (padrão internacional)
- 📇 **MeCard** - Contato simplificado

### Pagamentos
- 🇧🇷 **PIX** - Pagamentos instantâneos brasileiros
- ₿ **Bitcoin** - Carteira Bitcoin
- Ξ **Ethereum** - Carteira Ethereum
- Ł **Litecoin** - Carteira Litecoin
- 💵 **Bitcoin Cash** - Carteira BCH
- 🐕 **Dogecoin** - Carteira Dogecoin
- 🔒 **Monero** - Carteira Monero

### Outros
- 📍 **Localização** - Coordenadas GPS
- 📅 **Evento** - Calendário/iCal
- 📶 **Wi-Fi** - Configuração automática de rede

## 🚀 Começando

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

## 📁 Estrutura do Projeto

```
qr-code-generator/
├── index.html              # Página principal
├── config/                 # Arquivos de configuração
│   ├── nginx.conf         # Configuração Nginx
│   └── lighthouse.json    # Configuração Lighthouse
├── docs/                   # Documentação
│   ├── CRIAR-IMAGENS.md
│   ├── GOOGLE-SEARCH-CONSOLE.md
│   ├── LIGHTHOUSE-IMPROVEMENTS.md
│   ├── RESUMO-SEO.md
│   ├── SEO-CHECKLIST.md
│   └── SEO-README.md
├── public/                 # Arquivos públicos
│   ├── .htaccess
│   ├── robots.txt
│   ├── sitemap.xml
│   ├── manifest.json      # PWA manifest
│   └── assets/
│       ├── icons/         # Ícones do app
│       └── webfonts/      # Fontes web
├── scripts/                # Scripts auxiliares
│   ├── deploy.sh          # Script de deploy
│   └── generate-icons.html # Gerador de ícones
└── src/                    # Código fonte
    ├── css/
    │   └── styles.css     # Estilos customizados
    └── js/
        └── app.js         # Lógica principal (planejado)
```

## 🎨 Personalização

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

## 🔧 Tecnologias Utilizadas

- **HTML5** - Estrutura semântica
- **Tailwind CSS** - Framework CSS via CDN
- **JavaScript ES6+** - Lógica da aplicação
- **QRCodeStyling** - Biblioteca para geração de QR Codes
- **jsPDF** - Exportação para PDF
- **Font Awesome** - Ícones

## 📊 Performance

- ⚡ **Lighthouse Score**: 95+ (Performance, SEO, Acessibilidade)
- 🔍 **SEO Otimizado**: Meta tags, Schema.org, Open Graph
- 📱 **PWA Ready**: Manifest.json configurado
- 🚀 **Fast Loading**: Código otimizado e minificado

## 🤝 Contribuindo

Contribuições são bem-vindas! Por favor, siga estas etapas:

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona MinhaFeature'`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👨‍💻 Autor

**Gabriel Reze (@gabireze)**
- Website: [gabireze.com.br](https://gabireze.com.br/)
- GitHub: [@gabireze](https://github.com/gabireze)

## 🌟 Agradecimentos

- [QRCodeStyling](https://github.com/kozakdenys/qr-code-styling) - Biblioteca principal
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS
- [Font Awesome](https://fontawesome.com/) - Ícones
- [jsPDF](https://github.com/parallax/jsPDF) - Geração de PDF

---

⭐ Se este projeto foi útil para você, considere dar uma estrela!

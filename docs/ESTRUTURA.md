# Estrutura de Diretórios - QR Code Generator

## 📂 Nova Organização

O repositório foi reorganizado seguindo as melhores práticas de desenvolvimento web:

```
qr-code-generator/
│
├── 📄 index.html              # Arquivo principal da aplicação
├── 📄 README.md               # Documentação principal
├── 📄 LICENSE                 # Licença MIT
├── 📄 CONTRIBUTING.md         # Guia de contribuição
├── 📄 .gitignore              # Arquivos ignorados pelo Git
│
├── 📁 config/                 # Configurações do projeto
│   ├── nginx.conf            # Configuração do servidor Nginx
│   └── lighthouse.json       # Config. de auditoria Lighthouse
│
├── 📁 docs/                   # Documentação do projeto
│   ├── CRIAR-IMAGENS.md      # Guia para criar imagens
│   ├── GOOGLE-SEARCH-CONSOLE.md  # Setup do Search Console
│   ├── LIGHTHOUSE-IMPROVEMENTS.md # Melhorias de performance
│   ├── RESUMO-SEO.md         # Resumo de otimizações SEO
│   ├── SEO-CHECKLIST.md      # Checklist de SEO
│   └── SEO-README.md         # Guia completo de SEO
│
├── 📁 public/                 # Arquivos públicos servidos
│   ├── .htaccess             # Config. Apache (URLs amigáveis)
│   ├── robots.txt            # Instruções para crawlers
│   ├── sitemap.xml           # Mapa do site para SEO
│   ├── manifest.json         # PWA manifest
│   │
│   └── 📁 assets/            # Recursos estáticos
│       ├── 📁 icons/         # Ícones da aplicação
│       │   ├── icon-192x192.png
│       │   ├── icon-512x512.png
│       │   └── icon.svg
│       │
│       └── 📁 webfonts/      # Fontes web (Font Awesome)
│           ├── fa-brands-400.ttf
│           ├── fa-brands-400.woff2
│           ├── fa-regular-400.ttf
│           ├── fa-regular-400.woff2
│           ├── fa-solid-900.ttf
│           ├── fa-solid-900.woff2
│           └── fa-v4compatibility.ttf
│
├── 📁 scripts/                # Scripts auxiliares
│   ├── deploy.sh             # Script de deploy automatizado
│   └── generate-icons.html   # Ferramenta para gerar ícones
│
└── 📁 src/                    # Código fonte
    ├── 📁 css/               # Estilos
    │   └── styles.css        # Estilos customizados
    │
    └── 📁 js/                # JavaScript
        └── app.js            # Lógica principal (planejado)
```

## 🎯 Benefícios da Nova Estrutura

### 1. **Organização Clara**
- Separação lógica entre código, configuração e documentação
- Fácil navegação e manutenção
- Estrutura escalável para crescimento futuro

### 2. **Melhores Práticas**
- Segue convenções da comunidade open source
- Facilita contribuições de outros desenvolvedores
- Prepare para build tools futuros (Webpack, Vite, etc.)

### 3. **SEO & Performance**
- Arquivos estáticos organizados em `/public/`
- Assets otimizados em `/public/assets/`
- Configurações de servidor separadas

### 4. **Desenvolvimento**
- Código fonte isolado em `/src/`
- Scripts de build/deploy em `/scripts/`
- Documentação centralizada em `/docs/`

## 🔧 Principais Mudanças

### Arquivos Movidos

| Antes | Depois |
|-------|--------|
| `*.md` (raiz) | `docs/*.md` |
| `nginx.conf` | `config/nginx.conf` |
| `lighthouse.json` | `config/lighthouse.json` |
| `robots.txt` | `public/robots.txt` |
| `sitemap.xml` | `public/sitemap.xml` |
| `.htaccess` | `public/.htaccess` |
| `icon-*.png` | `public/assets/icons/` |
| `webfonts/` | `public/assets/webfonts/` |
| `deploy.sh` | `scripts/deploy.sh` |
| `generate-icons.html` | `scripts/generate-icons.html` |
| `manifest.json` | `public/manifest.json` |

### Novos Arquivos

- `README.md` - Documentação principal profissional
- `LICENSE` - Licença MIT
- `CONTRIBUTING.md` - Guia para contribuidores
- `.gitignore` - Arquivos ignorados pelo Git
- `src/css/styles.css` - Estilos customizados
- `docs/ESTRUTURA.md` - Este arquivo

## 📝 Próximos Passos

### Opcionais (Futuros)
1. **Extrair JavaScript** para `src/js/app.js`
2. **Adicionar build process** (Webpack/Vite)
3. **Implementar testes** automatizados
4. **CI/CD Pipeline** (GitHub Actions)
5. **Docker** para containerização

### Manutenção
- Manter documentação atualizada
- Seguir estrutura para novos arquivos
- Atualizar caminhos em deploys

## 🚀 Deploy

### Importante!
Ao fazer deploy, certifique-se de:

1. **Atualizar caminhos** no servidor web
2. **Configurar root** para servir arquivos corretamente
3. **Configurar redirects** se necessário
4. **Testar links** de manifest.json e assets

### Exemplo Nginx

```nginx
server {
    listen 80;
    server_name qrcode.gabireze.cloud;
    root /var/www/qr-code-generator;
    index index.html;

    # Serve arquivos estáticos
    location /public/ {
        expires 30d;
        add_header Cache-Control "public, immutable";
    }

    # SPA fallback
    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

---

**Última atualização:** 06/11/2025  
**Responsável:** @gabireze

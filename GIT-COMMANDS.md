# Git Commands - Reorganização do Repositório

## 📋 Comandos para Executar

### 1. Verificar Status
```bash
git status
```

### 2. Adicionar Todos os Arquivos
```bash
# Adiciona todos os arquivos (novos, modificados e deletados)
git add -A

# OU adicionar por categoria:
git add .gitignore CONTRIBUTING.md LICENSE README.md REORGANIZACAO.md
git add config/ docs/ public/ scripts/ src/
git add index.html
```

### 3. Commit com Mensagem Descritiva
```bash
git commit -m "refactor: reorganiza estrutura do repositório completa

🎯 Principais Mudanças:
- Cria estrutura organizada: config/, docs/, public/, scripts/, src/
- Move arquivos para diretórios apropriados
- Adiciona README.md profissional e completo
- Adiciona LICENSE (MIT) e CONTRIBUTING.md
- Adiciona .gitignore com padrões comuns
- Atualiza referências em index.html e manifest.json
- Cria documentação completa em docs/

📁 Nova Estrutura:
- config/ → Configurações (nginx, lighthouse)
- docs/ → Documentação completa do projeto
- public/ → Arquivos públicos (assets, manifest, robots, sitemap)
- scripts/ → Scripts de automação (deploy, generate-icons)
- src/ → Código fonte (css/, js/)

📚 Documentação:
- README.md → Documentação principal
- CONTRIBUTING.md → Guia para contribuidores
- LICENSE → Licença MIT
- docs/ESTRUTURA.md → Detalhes da estrutura
- REORGANIZACAO.md → Resumo das mudanças

✨ Benefícios:
- Organização clara e profissional
- Preparado para contribuições open source
- Fácil manutenção e escalabilidade
- Melhores práticas da comunidade

Co-authored-by: GitHub Copilot"
```

### 4. Push para o Repositório
```bash
git push origin main

# Se houver erro, force push (use com cuidado):
# git push origin main --force
```

## 🔍 Comandos de Verificação

### Ver Arquivos que Serão Commitados
```bash
git status --short
```

### Ver Diferenças
```bash
# Ver todas as mudanças
git diff

# Ver mudanças em um arquivo específico
git diff index.html
```

### Ver Histórico
```bash
# Ver últimos commits
git log --oneline -5

# Ver mudanças do último commit
git show HEAD
```

## 🔄 Comandos de Rollback (Se Necessário)

### Desfazer Add (Unstage)
```bash
# Desfazer todos os adds
git reset

# Desfazer add de um arquivo específico
git reset HEAD <arquivo>
```

### Desfazer Commit (Local, antes do push)
```bash
# Desfaz último commit mas mantém as mudanças
git reset --soft HEAD~1

# Desfaz último commit e as mudanças
git reset --hard HEAD~1
```

### Reverter Mudanças em um Arquivo
```bash
# Reverte para a versão do último commit
git checkout -- <arquivo>
```

## 📊 Status Esperado

Após `git add -A`, você deve ver:

```
Mudanças a serem commitadas:
  (use "git restore --staged <file>..." para remover do stage)

  renamed:    .htaccess -> public/.htaccess
  renamed:    CRIAR-IMAGENS.md -> docs/CRIAR-IMAGENS.md
  renamed:    GOOGLE-SEARCH-CONSOLE.md -> docs/GOOGLE-SEARCH-CONSOLE.md
  renamed:    LIGHTHOUSE-IMPROVEMENTS.md -> docs/LIGHTHOUSE-IMPROVEMENTS.md
  renamed:    RESUMO-SEO.md -> docs/RESUMO-SEO.md
  renamed:    SEO-CHECKLIST.md -> docs/SEO-CHECKLIST.md
  renamed:    SEO-README.md -> docs/SEO-README.md
  renamed:    deploy.sh -> scripts/deploy.sh
  renamed:    generate-icons.html -> scripts/generate-icons.html
  renamed:    icon-192x192.png -> public/assets/icons/icon-192x192.png
  renamed:    icon-512x512.png -> public/assets/icons/icon-512x512.png
  renamed:    icon.svg -> public/assets/icons/icon.svg
  renamed:    lighthouse.json -> config/lighthouse.json
  renamed:    manifest.json -> public/manifest.json
  renamed:    nginx.conf -> config/nginx.conf
  renamed:    robots.txt -> public/robots.txt
  renamed:    sitemap.xml -> public/sitemap.xml
  renamed:    webfonts/ -> public/assets/webfonts/
  
  modified:   index.html
  
  new file:   .gitignore
  new file:   CONTRIBUTING.md
  new file:   LICENSE
  new file:   README.md
  new file:   REORGANIZACAO.md
  new file:   docs/ESTRUTURA.md
  new file:   src/css/styles.css
```

## ⚠️ Notas Importantes

1. **Backup**: Sempre tenha um backup antes de reorganizações grandes
2. **Branch**: Considere criar uma branch para testes primeiro:
   ```bash
   git checkout -b refactor/reorganize-structure
   ```
3. **Review**: Revise as mudanças antes do commit:
   ```bash
   git diff --cached
   ```
4. **Deploy**: Lembre-se de atualizar configurações de deploy após o push

## 🔗 Recursos

- [Git Documentation](https://git-scm.com/doc)
- [GitHub Guides](https://guides.github.com/)
- [Conventional Commits](https://www.conventionalcommits.org/)

---

**Preparado por:** @gabireze  
**Data:** 06/11/2025

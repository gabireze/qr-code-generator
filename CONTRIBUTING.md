# Contribuindo para o Gerador de QR Code

Obrigado por considerar contribuir para este projeto! 🎉

## 🤝 Como Contribuir

### Reportando Bugs

Se você encontrou um bug, por favor abra uma issue incluindo:

- Descrição clara do problema
- Passos para reproduzir
- Comportamento esperado vs. comportamento atual
- Screenshots (se aplicável)
- Informações do navegador e sistema operacional

### Sugerindo Melhorias

Sugestões são sempre bem-vindas! Abra uma issue com:

- Descrição detalhada da funcionalidade
- Por que você acha que seria útil
- Exemplos de uso (se aplicável)

### Pull Requests

1. **Fork** o repositório
2. **Clone** seu fork:
   ```bash
   git clone https://github.com/seu-usuario/qr-code-generator.git
   ```

3. **Crie uma branch** para sua feature:
   ```bash
   git checkout -b feature/minha-feature
   ```

4. **Faça suas alterações** seguindo as diretrizes abaixo

5. **Commit** suas mudanças:
   ```bash
   git commit -m "feat: adiciona nova funcionalidade"
   ```

6. **Push** para sua branch:
   ```bash
   git push origin feature/minha-feature
   ```

7. **Abra um Pull Request** descrevendo suas mudanças

## 📝 Diretrizes de Código

### JavaScript

- Use ES6+ syntax
- Mantenha funções pequenas e focadas
- Comente código complexo
- Use nomes descritivos para variáveis e funções

### HTML

- Use HTML5 semântico
- Mantenha acessibilidade (ARIA labels quando necessário)
- Valide com W3C Validator

### CSS

- Use classes Tailwind CSS quando possível
- Mantenha consistência com o design existente
- Mobile-first approach

## 🎨 Padrões de Commit

Use commits semânticos:

- `feat:` Nova funcionalidade
- `fix:` Correção de bug
- `docs:` Mudanças na documentação
- `style:` Formatação, ponto e vírgula, etc
- `refactor:` Refatoração de código
- `test:` Adição de testes
- `chore:` Tarefas de build, configs, etc

Exemplo: `feat: adiciona suporte para QR Code NFT`

## ✅ Checklist antes do PR

- [ ] Código está funcionando localmente
- [ ] Código segue os padrões do projeto
- [ ] Comentários foram adicionados onde necessário
- [ ] Documentação foi atualizada
- [ ] Não há console.logs desnecessários
- [ ] Testado em diferentes navegadores (Chrome, Firefox, Safari)
- [ ] Testado em dispositivos móveis

## 🧪 Testando

Execute a aplicação localmente:

```bash
# Com Python
python -m http.server 8000

# Com Node.js
npx serve

# Com PHP
php -S localhost:8000
```

Acesse: `http://localhost:8000`

## 📚 Recursos Úteis

- [Documentação QRCodeStyling](https://github.com/kozakdenys/qr-code-styling)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [MDN Web Docs](https://developer.mozilla.org/)

## 💬 Dúvidas?

Se tiver dúvidas, sinta-se à vontade para:

- Abrir uma issue de discussão
- Entrar em contato via [gabireze.com.br](https://gabireze.com.br)

---

Obrigado pela sua contribuição! ⭐

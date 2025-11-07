# Guia de Teste - Internacionalização

## Como Testar a Implementação

### Preparação

1. Abra o site: `https://qrcode.gabireze.cloud/`
2. Abra o DevTools (F12)
3. Vá na aba Console

---

## Teste 1: Detecção Automática

### Testar Português

1. Limpe o localStorage:
   ```javascript
   localStorage.clear()
   ```

2. Mude o idioma do navegador para Português:
   - **Chrome:** `chrome://settings/languages`
   - **Firefox:** `about:preferences#general` → Idiomas
   - **Edge:** `edge://settings/languages`

3. Recarregue a página (F5 ou Ctrl+R)

4. **Resultado Esperado:**
   - Site deve aparecer em **Português**
   - Header: "Gerador de QR Code"
   - Botão de idioma: [🌐 PT]

### Testar Inglês

1. Limpe o localStorage:
   ```javascript
   localStorage.clear()
   ```

2. Mude o idioma do navegador para Inglês (ou qualquer outro idioma que não seja português)

3. Recarregue a página

4. **Resultado Esperado:**
   - Site deve aparecer em **Inglês**
   - Header: "QR Code Generator"
   - Botão de idioma: [🌐 EN]

---

## Teste 2: Alternância Manual

1. Recarregue a página

2. Clique no botão de idioma [🌐 XX] no header

3. **Resultado Esperado:**
   - Todo o texto muda instantaneamente
   - PT → EN ou EN → PT
   - Botão atualiza de PT para EN (ou vice-versa)

4. Verifique que mudou:
   - ✓ Título do header
   - ✓ Subtítulo do header
   - ✓ Badges (Ilimitado/Unlimited, Privado/Private, Gratuito/Free)
   - ✓ Títulos das seções
   - ✓ Labels dos formulários
   - ✓ Placeholders dos inputs
   - ✓ Tooltips (passe o mouse sobre os botões)
   - ✓ Botões de download

---

## Teste 3: Persistência da Preferência

1. Alterne o idioma manualmente (clique no botão [🌐 XX])

2. Verifique no localStorage:
   ```javascript
   localStorage.getItem('qr-generator-lang')
   // Deve retornar "pt-BR" ou "en"
   ```

3. Recarregue a página (F5)

4. **Resultado Esperado:**
   - Site deve carregar no idioma que você escolheu
   - NÃO deve voltar para o idioma do navegador

5. Para resetar:
   ```javascript
   localStorage.removeItem('qr-generator-lang')
   ```

---

## Teste 4: Verificação de Meta Tags

1. Abra o DevTools → Elementos/Inspector

2. Procure pelo elemento `<html>`

3. **Resultado Esperado:**
   - `<html lang="pt-BR">` quando em Português
   - `<html lang="en">` quando em Inglês

4. Procure pela tag `<title>`

5. **Resultado Esperado:**
   - PT: "Gerador de QR Code Online Grátis - PNG, JPG, SVG, PDF | QR Code Generator"
   - EN: "Free Online QR Code Generator - PNG, JPG, SVG, PDF"

6. Procure por `<meta name="description">`

7. **Resultado Esperado:**
   - PT: "Crie QR Codes gratuitamente online!..."
   - EN: "Create QR Codes for free online!..."

---

## Teste 5: Formulários Dinâmicos

### Teste com WhatsApp

1. Clique no botão [WhatsApp]

2. Verifique os labels e placeholders

3. **Português Esperado:**
   - Label: "Número WhatsApp"
   - Placeholder: "+55 11 98765-4321"
   - Label: "Mensagem"
   - Placeholder: "Olá, gostaria de saber mais..."

4. Alterne para Inglês

5. **Inglês Esperado:**
   - Label: "WhatsApp Number"
   - Placeholder: "+1 555-123-4567"
   - Label: "Message"
   - Placeholder: "Hello, I would like to know more..."

### Teste com vCard

1. Clique no botão [vCard]

2. **Português Esperado:**
   - "Nome", "Organização", "Título", "Endereço", "Cidade", "Estado", "CEP", "País", "Website"

3. Alterne para Inglês

4. **Inglês Esperado:**
   - "Name", "Organization", "Title", "Address", "City", "State", "ZIP Code", "Country", "Website"

---

## Teste 6: Tooltips (Dicas)

1. Passe o mouse sobre os botões de tipo de conteúdo

2. **Português Esperado:**
   - Texto → "Texto livre"
   - URL → "URL"
   - Telefone → "Telefone"
   - WhatsApp → "WhatsApp"
   - etc.

3. Alterne para Inglês e passe o mouse novamente

4. **Inglês Esperado:**
   - Text → "Free text"
   - URL → "URL"
   - Phone → "Phone"
   - WhatsApp → "WhatsApp"
   - etc.

---

## Teste 7: Responsividade

### Desktop

1. Abra em tela cheia

2. Verifique que o seletor de idioma está visível no header

3. Textos completos devem aparecer ("Ilimitado", "Privado", "Gratuito")

### Mobile

1. Redimensione a janela para mobile (ou use DevTools → Toggle Device Toolbar)

2. Verifique que:
   - Seletor de idioma continua visível
   - Textos ainda estão corretos
   - Layout continua funcional

---

## Teste 8: Console de Erros

1. Abra DevTools → Console

2. Recarregue a página

3. Alterne entre idiomas

4. **Resultado Esperado:**
   - ❌ Nenhum erro deve aparecer
   - ✅ Pode ter um aviso sobre localStorage (normal em localhost)

---

## Teste 9: Evento de Mudança de Idioma

1. Abra o Console

2. Execute:
   ```javascript
   window.addEventListener('languageChanged', (e) => {
     console.log('Idioma mudou para:', e.detail.language);
   });
   ```

3. Alterne o idioma

4. **Resultado Esperado:**
   - Console deve mostrar: "Idioma mudou para: en" ou "Idioma mudou para: pt-BR"

---

## Teste 10: API do i18n

1. Abra o Console

2. Teste os métodos:

```javascript
// Ver idioma atual
i18n.getLanguage()
// Retorna: "pt-BR" ou "en"

// Obter tradução
i18n.t('header.title')
// PT: "Gerador de QR Code"
// EN: "QR Code Generator"

// Mudar idioma programaticamente
i18n.setLanguage('en')
// Todo o site muda para inglês

i18n.setLanguage('pt-BR')
// Todo o site muda para português

// Ver todas as traduções
i18n.translations
// Retorna o objeto completo com pt-BR e en
```

---

## Checklist Final

Marque cada item após testar:

- [ ] Detecção automática funciona (navegador PT → site PT)
- [ ] Detecção automática funciona (navegador EN → site EN)
- [ ] Botão de alternância muda todos os textos
- [ ] Preferência é salva no localStorage
- [ ] Preferência salva persiste após reload
- [ ] Meta tags são atualizadas (lang, title, description)
- [ ] Formulários dinâmicos aparecem traduzidos
- [ ] Placeholders estão corretos
- [ ] Tooltips estão traduzidos
- [ ] Funciona em desktop
- [ ] Funciona em mobile
- [ ] Sem erros no console
- [ ] Evento languageChanged dispara
- [ ] API i18n funciona

---

## Problemas Comuns

### O site não muda de idioma

**Solução:**
```javascript
// Limpe o cache e o localStorage
localStorage.clear()
location.reload(true) // Reload forçado
```

### Alguns textos não mudam

**Possível causa:** Falta o atributo `data-i18n`

**Solução:** Adicione o atributo no HTML:
```html
<span data-i18n="chave.da.traducao">Texto padrão</span>
```

### Idioma volta para o padrão

**Possível causa:** localStorage bloqueado

**Solução:** Verifique configurações de privacidade do navegador

---

## Reportar Problemas

Se encontrar algum problema:

1. Anote qual teste falhou
2. Tire uma screenshot
3. Copie mensagens de erro do console
4. Descreva os passos para reproduzir

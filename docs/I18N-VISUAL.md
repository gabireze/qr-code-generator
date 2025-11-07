# Demonstração Visual - Internacionalização

## Como Funciona

### 1. Detecção Automática

**Navegador em Português:**
```
🌐 Navigator Language: pt-BR
↓
✅ Site carrega em PORTUGUÊS
```

**Navegador em Inglês (ou qualquer outro idioma):**
```
🌐 Navigator Language: en-US / es / fr / de / etc
↓
✅ Site carrega em INGLÊS
```

---

## 2. Interface do Usuário

### Header com Seletor de Idioma

**Versão em Português:**
```
┌─────────────────────────────────────────────────────────────┐
│  🔲 Gerador de QR Code                                      │
│  Crie QR Codes grátis em PNG, JPG, SVG e PDF               │
│                                                              │
│  [♾️ Ilimitado] [🛡️ Privado] [⭐ Gratuito] [🌐 PT] ◄───┐  │
└─────────────────────────────────────────────────────────────┘
                                                          │
                                    Clique para alternar │
                                                          │
┌─────────────────────────────────────────────────────────────┐
│  🔲 QR Code Generator                                       │
│  Create QR Codes for free in PNG, JPG, SVG and PDF         │
│                                                              │
│  [♾️ Unlimited] [🛡️ Private] [⭐ Free] [🌐 EN] ◄────────┘  │
└─────────────────────────────────────────────────────────────┘
```

---

## 3. Seção de Configurações

### Português (pt-BR)
```
┌─────────────────────────────────────┐
│ ⚙️ Configurações                    │
├─────────────────────────────────────┤
│ Layout da prévia:                   │
│ [Lado a lado] [Vertical]            │
│                                      │
│ Tipo de conteúdo:                   │
│ [Texto] [URL] [Telefone] [E-mail]  │
│ [WhatsApp] [vCard] [Wi-Fi] [PIX]   │
│ [Bitcoin] [Ethereum]                │
│                                      │
│ Conteúdo:                           │
│ ┌─────────────────────────────────┐ │
│ │ Digite qualquer texto aqui...   │ │
│ └─────────────────────────────────┘ │
└─────────────────────────────────────┘
```

### English (en)
```
┌─────────────────────────────────────┐
│ ⚙️ Settings                         │
├─────────────────────────────────────┤
│ Preview layout:                     │
│ [Side by side] [Vertical]           │
│                                      │
│ Content type:                       │
│ [Text] [URL] [Phone] [Email]       │
│ [WhatsApp] [vCard] [Wi-Fi] [PIX]   │
│ [Bitcoin] [Ethereum]                │
│                                      │
│ Content:                            │
│ ┌─────────────────────────────────┐ │
│ │ Enter any text here...          │ │
│ └─────────────────────────────────┘ │
└─────────────────────────────────────┘
```

---

## 4. Formulários Dinâmicos

### Exemplo: Formulário de WhatsApp

**Português:**
```
┌─────────────────────────────────────┐
│ Número WhatsApp:                    │
│ ┌─────────────────────────────────┐ │
│ │ +55 11 98765-4321               │ │
│ └─────────────────────────────────┘ │
│                                      │
│ Mensagem:                           │
│ ┌─────────────────────────────────┐ │
│ │ Olá, gostaria de saber mais...  │ │
│ └─────────────────────────────────┘ │
└─────────────────────────────────────┘
```

**English:**
```
┌─────────────────────────────────────┐
│ WhatsApp Number:                    │
│ ┌─────────────────────────────────┐ │
│ │ +1 555-123-4567                 │ │
│ └─────────────────────────────────┘ │
│                                      │
│ Message:                            │
│ ┌─────────────────────────────────┐ │
│ │ Hello, I would like to know...  │ │
│ └─────────────────────────────────┘ │
└─────────────────────────────────────┘
```

---

## 5. Meta Tags (SEO)

### Português (pt-BR)
```html
<html lang="pt-BR">
<title>Gerador de QR Code Online Grátis - PNG, JPG, SVG, PDF</title>
<meta name="description" content="Crie QR Codes gratuitamente online! Suporte para URL, WhatsApp, PIX...">
<meta property="og:locale" content="pt_BR">
```

### English (en)
```html
<html lang="en">
<title>Free Online QR Code Generator - PNG, JPG, SVG, PDF</title>
<meta name="description" content="Create QR Codes for free online! Support for URL, WhatsApp, PIX...">
<meta property="og:locale" content="en_US">
```

---

## 6. Fluxo de Uso

```
┌─────────────────────────────────────────────────────────┐
│                    Usuário abre o site                  │
│                  qrcode.gabireze.cloud                  │
└────────────────────────┬────────────────────────────────┘
                         │
                         ▼
          ┌──────────────────────────────┐
          │ Tem preferência salva no     │
          │ localStorage?                │
          └──────┬───────────────┬───────┘
                 │ SIM           │ NÃO
                 ▼               ▼
        ┌─────────────┐   ┌─────────────────┐
        │ Usa idioma  │   │ Detecta idioma  │
        │ salvo       │   │ do navegador    │
        └──────┬──────┘   └────────┬────────┘
               │                   │
               │  ┌────────────────┘
               │  │
               ▼  ▼
        ┌──────────────────┐
        │ pt / pt-BR?      │
        └──────┬─────┬─────┘
          SIM  │     │ NÃO
               ▼     ▼
        ┌────────┐ ┌────────┐
        │   PT   │ │   EN   │
        └────────┘ └────────┘
               │     │
               └──┬──┘
                  │
                  ▼
        ┌─────────────────────┐
        │ Site carregado no   │
        │ idioma apropriado   │
        └─────────────────────┘
                  │
                  ▼
        ┌─────────────────────┐
        │ Usuário pode        │
        │ alternar manualmente│
        │ clicando em [🌐 XX] │
        └─────────────────────┘
```

---

## 7. Persistência de Preferência

```
Visita 1:
┌────────────────────────────────────┐
│ Navegador: en-US                   │
│ ↓ detecta automaticamente          │
│ Site: ENGLISH                      │
│ ↓ usuário clica [🌐 EN]            │
│ Site: PORTUGUESE                   │
│ ✓ salva "pt-BR" no localStorage    │
└────────────────────────────────────┘

Visita 2:
┌────────────────────────────────────┐
│ Navegador: en-US                   │
│ ↓ verifica localStorage            │
│ ✓ encontra "pt-BR"                 │
│ Site: PORTUGUESE (preferência)     │
└────────────────────────────────────┘
```

---

## 8. Sem Mudança de URL

❌ **NÃO será assim:**
- `https://qrcode.gabireze.cloud/pt/`
- `https://qrcode.gabireze.cloud/en/`
- `https://pt.qrcode.gabireze.cloud/`
- `https://en.qrcode.gabireze.cloud/`

✅ **Será assim:**
- Uma única URL: `https://qrcode.gabireze.cloud/`
- Idioma muda dinamicamente via JavaScript
- Melhor para compartilhamento
- Mais simples de manter

---

## 9. Vantagens da Implementação

✅ **Detecção Automática**
   - Funciona "out of the box"
   - Usuário não precisa fazer nada

✅ **Escolha Manual**
   - Botão visível e fácil de usar
   - Alterna com um clique

✅ **Persistência**
   - Lembra da escolha do usuário
   - Usa localStorage

✅ **SEO Otimizado**
   - Meta tags atualizadas
   - hreflang apropriado
   - Open Graph correto

✅ **Performance**
   - Tudo client-side
   - Sem requisições extras
   - Instantâneo

✅ **Manutenível**
   - Fácil adicionar novos idiomas
   - Traduções centralizadas
   - Código limpo e organizado

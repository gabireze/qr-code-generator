# 🎨 Guia para Criar Imagens do Site

## 📋 Lista de Imagens Necessárias

### 1. Open Graph Image (og-image.png)
- **Tamanho**: 1200 x 630 pixels
- **Formato**: PNG ou JPG
- **Uso**: Prévia ao compartilhar no Facebook, LinkedIn, WhatsApp

#### Sugestões de Design:
```
+--------------------------------------------------+
|                                                  |
|          [ÍCONE QR CODE GRANDE]                 |
|                                                  |
|     Gerador de QR Code Online Grátis            |
|                                                  |
|  📱 WhatsApp | 💰 PIX | 📧 E-mail | 📍 GPS      |
|                                                  |
|           qrcode.gabireze.cloud                 |
|                                                  |
+--------------------------------------------------+
```

#### Ferramentas Recomendadas:
- **Canva**: https://www.canva.com/create/og-image/
- **Figma**: https://www.figma.com
- **Remove.bg**: Para remover fundos
- **Flaticon**: Para ícones (https://www.flaticon.com)

#### Cores Sugeridas:
- Fundo: `#0f172a` (azul escuro)
- Texto principal: `#ffffff` (branco)
- Destaques: `#3b82f6` (azul)

---

### 2. Favicons

#### favicon-16x16.png
- **Tamanho**: 16 x 16 pixels
- **Uso**: Aba do navegador (pequeno)

#### favicon-32x32.png
- **Tamanho**: 32 x 32 pixels
- **Uso**: Aba do navegador (normal)

#### Sugestão de Design:
- Ícone simples de QR code
- Fundo transparente ou sólido
- Cores: preto/branco ou azul/branco

#### Gerador Automático:
```
https://realfavicongenerator.net/
```
1. Faça upload de uma imagem 512x512
2. Ajuste as configurações
3. Baixe o pacote completo

---

### 3. Apple Touch Icon

#### apple-touch-icon.png
- **Tamanho**: 180 x 180 pixels
- **Formato**: PNG
- **Uso**: Ícone quando salvar no iOS

#### Importante:
- iOS adiciona cantos arredondados automaticamente
- Use a imagem completa (sem bordas arredondadas)
- Fundo sólido (não transparente)

---

### 4. PWA Icons

#### icon-192x192.png
- **Tamanho**: 192 x 192 pixels
- **Uso**: Progressive Web App (splash screen)

#### icon-512x512.png
- **Tamanho**: 512 x 512 pixels
- **Uso**: Progressive Web App (alta resolução)

#### Design:
- Logo/ícone do QR Code centralizado
- Fundo: `#0f172a`
- Bordas: 20px de padding interno

---

## 🛠️ Como Criar as Imagens

### Método 1: Canva (Recomendado para Iniciantes)

1. **Criar og-image.png**:
```
1. Acesse: https://www.canva.com
2. Crie design personalizado: 1200 x 630 px
3. Use template "Facebook Post" ou "LinkedIn Post"
4. Adicione:
   - Fundo azul escuro (#0f172a)
   - Título "Gerador de QR Code Online Grátis"
   - Ícone de QR code (busque em elementos)
   - Adicione ícones: WhatsApp, PIX, E-mail
   - URL do site na parte inferior
5. Baixe como PNG
```

2. **Criar Favicons**:
```
1. Use a mesma logo do og-image
2. Crie em 512x512 px
3. Simplifique o design (apenas ícone)
4. Baixe como PNG
5. Use https://realfavicongenerator.net/ para gerar todos
```

### Método 2: Figma (Para Designers)

```figma
Frame: 1200x630 (og-image)

Layers:
├── Background (Fill: #0f172a)
├── QR Code Icon (vetorial)
├── Title (Font: Inter Bold, 48px)
├── Features Icons (24px each)
└── URL Text (Font: Inter Regular, 24px)
```

### Método 3: Photoshop/GIMP

```
1. Novo documento: 1200 x 630 px
2. Fundo: #0f172a
3. Adicione textos e ícones
4. Exportar para Web (PNG-24)
```

---

## 📦 Recursos Gratuitos

### Ícones
- **Font Awesome**: https://fontawesome.com (mesmo usado no site)
- **Heroicons**: https://heroicons.com
- **Flaticon**: https://www.flaticon.com
- **Icons8**: https://icons8.com

### Fontes
- **Inter**: https://fonts.google.com/specimen/Inter
- **Roboto**: https://fonts.google.com/specimen/Roboto
- **Poppins**: https://fonts.google.com/specimen/Poppins

### Cores (Paleta do Site)
```css
/* Background */
#0f172a - Azul escuro principal
#1e293b - Azul médio
#334155 - Azul claro

/* Destaques */
#3b82f6 - Azul brilhante
#60a5fa - Azul claro

/* Texto */
#ffffff - Branco
#e2e8f0 - Cinza claro
#94a3b8 - Cinza médio
```

---

## 🎯 Template Pronto (Texto)

### Para og-image.png:
```
Linha 1: [Ícone de QR Code centralizado]
Linha 2: "Gerador de QR Code"
Linha 3: "Online • Grátis • Ilimitado"
Linha 4: 📱 💰 📧 📍 🌐 ₿
Linha 5: "qrcode.gabireze.cloud"

Fundo: Gradiente azul escuro
Estilo: Moderno e minimalista
```

---

## ✅ Checklist de Qualidade

### og-image.png
- [ ] Tamanho: 1200x630 px
- [ ] Texto legível em preview pequeno
- [ ] Sem texto muito próximo das bordas
- [ ] Fundo contrastante
- [ ] URL visível
- [ ] Tamanho < 300KB

### Favicons
- [ ] Reconhecíveis mesmo pequenos
- [ ] Alto contraste
- [ ] Simples (sem detalhes excessivos)
- [ ] Fundo transparente ou sólido

### PWA Icons
- [ ] Padding interno (safe area)
- [ ] Centralizados
- [ ] Fundo sólido
- [ ] Alta qualidade

---

## 📤 Após Criar as Imagens

### 1. Otimizar Tamanho
```bash
# Usando TinyPNG (online)
https://tinypng.com

# Ou ImageOptim (Mac)
# Ou GIMP (export with compression)
```

### 2. Upload no Servidor
```bash
# Coloque os arquivos na raiz do site:
/var/www/qrcode.gabireze.cloud/og-image.png
/var/www/qrcode.gabireze.cloud/favicon-16x16.png
/var/www/qrcode.gabireze.cloud/favicon-32x32.png
/var/www/qrcode.gabireze.cloud/apple-touch-icon.png
/var/www/qrcode.gabireze.cloud/icon-192x192.png
/var/www/qrcode.gabireze.cloud/icon-512x512.png
```

### 3. Testar
```
# Teste o og-image:
https://developers.facebook.com/tools/debug/?q=https://qrcode.gabireze.cloud

# Teste os favicons:
Abra o site e verifique a aba do navegador
```

---

## 🎨 Exemplo de Prompt para IA (DALL-E, Midjourney)

Se quiser usar IA para gerar imagens:

```
"Create a modern, minimalist social media preview image (1200x630px) 
for a QR Code generator website. Dark blue background (#0f172a), 
large QR code icon in the center, white text saying 'Free QR Code 
Generator', icons for WhatsApp, PIX, Email, and WiFi below, website 
URL 'qrcode.gabireze.cloud' at bottom. Professional, clean design."
```

---

## 💡 Dicas Finais

1. **Consistência**: Use as mesmas cores e estilo em todas as imagens
2. **Simplicidade**: Menos é mais, especialmente em favicons
3. **Contraste**: Certifique-se de que texto seja legível
4. **Teste**: Veja como ficam em diferentes tamanhos
5. **Backup**: Salve arquivos editáveis (.psd, .fig) para futuras alterações

---

**Ferramentas All-in-One**:
- https://realfavicongenerator.net/ - Gera todos os favicons
- https://www.canva.com - Design gráfico fácil
- https://www.figma.com - Design profissional

**Tempo estimado**: 30-60 minutos para criar todas as imagens

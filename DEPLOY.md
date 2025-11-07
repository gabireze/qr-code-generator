# 🚀 Guia de Deploy - QR Code Generator

## 📋 Informações do Servidor

- **Domínio**: qrcode.gabireze.cloud
- **Servidor**: srv1056346
- **Diretório Web**: `/var/www/qrcode.gabireze.cloud`
- **Nginx Config**: `/etc/nginx/sites-available/qrcode.gabireze.cloud`
- **SSL**: Let's Encrypt (renovação automática)

## 🔄 Deploy Automático

### Fazer deploy de novas alterações:

```bash
# 1. Conecte-se ao servidor
ssh hostinger

# 2. Navegue até o diretório do projeto
cd ~/qr-code-generator

# 3. Execute o script de deploy
sudo bash scripts/deploy.sh
```

O script irá:
- ✅ Fazer `git pull` do repositório
- ✅ Copiar os arquivos atualizados
- ✅ Ajustar permissões
- ✅ Recarregar o Nginx

## 📦 Deploy Manual (se necessário)

```bash
# Atualizar código
cd ~/qr-code-generator
git pull origin main

# Copiar arquivos
sudo cp index.html /var/www/qrcode.gabireze.cloud/
sudo cp -r src /var/www/qrcode.gabireze.cloud/
sudo cp -r public /var/www/qrcode.gabireze.cloud/

# Ajustar permissões
sudo chown -R www-data:www-data /var/www/qrcode.gabireze.cloud
sudo chmod -R 755 /var/www/qrcode.gabireze.cloud

# Recarregar Nginx
sudo nginx -t
sudo systemctl reload nginx
```

## 🔍 Verificar Status

```bash
# Status do Nginx
sudo systemctl status nginx

# Testar configuração
sudo nginx -t

# Ver logs em tempo real
sudo tail -f /var/log/nginx/error.log
sudo tail -f /var/log/nginx/access.log

# Testar o site
curl -I https://qrcode.gabireze.cloud
```

## 🛠️ Comandos Úteis

### Limpar cache do navegador
```bash
# Adicionar timestamp para forçar atualização
# Edite o index.html e adicione ?v=TIMESTAMP nos arquivos CSS/JS
```

### Renovar certificado SSL (manual)
```bash
sudo certbot renew
sudo systemctl reload nginx
```

## 📊 Estrutura de Arquivos no Servidor

```
/var/www/qrcode.gabireze.cloud/
├── index.html
├── src/
│   ├── css/
│   │   └── styles.css
│   └── js/
│       └── (arquivos JS)
└── public/
    ├── manifest.json
    ├── robots.txt
    ├── sitemap.xml
    └── assets/
        ├── icons/
        └── webfonts/
```

## 🔐 Segurança

- SSL/TLS: Let's Encrypt com renovação automática
- Headers de segurança configurados no Nginx
- Permissões adequadas (755 para diretórios, 644 para arquivos)

## 📝 Outros Sites no Servidor

### Portas em Uso:
- **3000**: Nekomoji (PM2)
- **3001**: Bitcoin Bot (PM2)
- **3002**: Password Generator (PM2)
- **8080**: Stirling PDF (Docker)

### Domínios Ativos:
- api.gabireze.cloud → Porta 3002 (Password API)
- gabireze.cloud → Porta 3001 (Bitcoin Bot API)
- nekomoji.chat → Porta 3000 (App principal)
- pdf.gabireze.cloud → Porta 8080 (Stirling PDF)
- **qrcode.gabireze.cloud** → Site estático

## 🐛 Troubleshooting

### Site não carrega (403 Forbidden)
```bash
# Verificar permissões
ls -la /var/www/qrcode.gabireze.cloud
sudo chown -R www-data:www-data /var/www/qrcode.gabireze.cloud
```

### Nginx não reinicia
```bash
# Ver erro detalhado
sudo nginx -t
sudo systemctl status nginx
sudo journalctl -xeu nginx.service
```

### Certificado SSL expirado
```bash
# Forçar renovação
sudo certbot renew --force-renewal
sudo systemctl reload nginx
```

## 📞 Suporte

Em caso de problemas, verificar:
1. Logs do Nginx: `/var/log/nginx/error.log`
2. Status do serviço: `sudo systemctl status nginx`
3. Configuração: `sudo nginx -t`

---

**Última atualização**: 06/11/2025

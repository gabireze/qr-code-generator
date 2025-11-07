#!/bin/bash

# Script de deploy para qrcode.gabireze.cloud
# Execute com: bash deploy.sh

echo "🚀 Iniciando deploy do Gerador de QR Code..."

# Configurações
DOMAIN="qrcode.gabireze.cloud"
WEB_ROOT="/var/www/$DOMAIN"
NGINX_CONF="/etc/nginx/sites-available/$DOMAIN"

# Cores para output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Verificar se está rodando como root
if [ "$EUID" -ne 0 ]; then 
    echo -e "${RED}❌ Por favor, execute como root ou com sudo${NC}"
    exit 1
fi

# Criar diretório do site
echo -e "${YELLOW}📁 Criando diretório do site...${NC}"
mkdir -p $WEB_ROOT
cp index.html $WEB_ROOT/
cp robots.txt $WEB_ROOT/
cp sitemap.xml $WEB_ROOT/
cp manifest.json $WEB_ROOT/

# Criar diretório para imagens (você precisa adicionar as imagens depois)
mkdir -p $WEB_ROOT/images
echo -e "${YELLOW}⚠️  Lembre-se de adicionar as imagens em $WEB_ROOT/:${NC}"
echo "   - og-image.png (1200x630)"
echo "   - favicon-16x16.png"
echo "   - favicon-32x32.png"
echo "   - apple-touch-icon.png"
echo "   - icon-192x192.png"
echo "   - icon-512x512.png"

# Configurar permissões
echo -e "${YELLOW}🔒 Configurando permissões...${NC}"
chown -R www-data:www-data $WEB_ROOT
chmod -R 755 $WEB_ROOT

# Configurar Nginx
echo -e "${YELLOW}⚙️  Configurando Nginx...${NC}"
if [ -f "nginx.conf" ]; then
    cp nginx.conf $NGINX_CONF
    ln -sf $NGINX_CONF /etc/nginx/sites-enabled/$DOMAIN
    echo -e "${GREEN}✅ Configuração do Nginx copiada${NC}"
else
    echo -e "${RED}❌ Arquivo nginx.conf não encontrado${NC}"
fi

# Testar configuração do Nginx
echo -e "${YELLOW}🧪 Testando configuração do Nginx...${NC}"
nginx -t

if [ $? -eq 0 ]; then
    echo -e "${GREEN}✅ Configuração do Nginx válida${NC}"
    
    # Recarregar Nginx
    echo -e "${YELLOW}🔄 Recarregando Nginx...${NC}"
    systemctl reload nginx
    echo -e "${GREEN}✅ Nginx recarregado${NC}"
else
    echo -e "${RED}❌ Erro na configuração do Nginx. Corrija os erros antes de continuar.${NC}"
    exit 1
fi

# Configurar SSL com Let's Encrypt (se certbot estiver instalado)
if command -v certbot &> /dev/null; then
    echo -e "${YELLOW}🔐 Deseja configurar SSL com Let's Encrypt? (s/n)${NC}"
    read -r response
    if [[ "$response" =~ ^[Ss]$ ]]; then
        certbot --nginx -d $DOMAIN
        echo -e "${GREEN}✅ SSL configurado${NC}"
    fi
else
    echo -e "${YELLOW}⚠️  Certbot não encontrado. Instale para configurar SSL:${NC}"
    echo "   sudo apt install certbot python3-certbot-nginx"
fi

# Resumo
echo ""
echo -e "${GREEN}================================================${NC}"
echo -e "${GREEN}🎉 Deploy concluído com sucesso!${NC}"
echo -e "${GREEN}================================================${NC}"
echo ""
echo -e "📍 Site: ${GREEN}https://$DOMAIN${NC}"
echo -e "📂 Diretório: ${YELLOW}$WEB_ROOT${NC}"
echo -e "⚙️  Nginx config: ${YELLOW}$NGINX_CONF${NC}"
echo ""
echo -e "${YELLOW}📋 Próximos passos:${NC}"
echo "1. Adicionar as imagens necessárias em $WEB_ROOT/"
echo "2. Verificar o site em https://$DOMAIN"
echo "3. Adicionar o site no Google Search Console"
echo "4. Enviar o sitemap: https://$DOMAIN/sitemap.xml"
echo "5. Testar SEO em: https://search.google.com/test/rich-results"
echo ""

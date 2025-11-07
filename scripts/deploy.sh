#!/bin/bash

# Script de deploy automatizado para qrcode.gabireze.cloud
# Execute com: sudo bash scripts/deploy.sh

echo "🚀 Iniciando deploy do QR Code Generator..."

# Configurações
PROJECT_DIR="$HOME/qr-code-generator"
DOMAIN="qrcode.gabireze.cloud"
WEB_ROOT="/var/www/$DOMAIN"

# Cores para output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Verificar se está no diretório correto
if [ ! -f "index.html" ]; then
    echo -e "${RED}❌ Erro: Execute este script do diretório raiz do projeto${NC}"
    exit 1
fi

# Atualizar código do repositório
echo -e "${BLUE}📥 Atualizando código do repositório...${NC}"
git pull origin main

if [ $? -ne 0 ]; then
    echo -e "${RED}❌ Erro ao atualizar repositório${NC}"
    exit 1
fi

# Criar/limpar diretório do site
echo -e "${YELLOW}📁 Preparando diretório do site...${NC}"
sudo mkdir -p $WEB_ROOT
sudo rm -rf $WEB_ROOT/*

# Copiar arquivos da aplicação
echo -e "${BLUE}📦 Copiando arquivos...${NC}"
sudo cp index.html $WEB_ROOT/
sudo cp -r src $WEB_ROOT/
sudo cp -r public $WEB_ROOT/

# Configurar permissões
echo -e "${YELLOW}🔒 Configurando permissões...${NC}"
sudo chown -R www-data:www-data $WEB_ROOT
sudo chmod -R 755 $WEB_ROOT

# Recarregar Nginx
echo -e "${BLUE}🔄 Recarregando Nginx...${NC}"
sudo nginx -t

if [ $? -eq 0 ]; then
    sudo systemctl reload nginx
    echo -e "${GREEN}✅ Nginx recarregado com sucesso${NC}"
else
    echo -e "${RED}❌ Erro na configuração do Nginx${NC}"
    exit 1
fi

# Limpar cache do Cloudflare (opcional)
# Descomente se usar Cloudflare
# echo -e "${BLUE}🧹 Limpando cache do Cloudflare...${NC}"
# curl -X POST "https://api.cloudflare.com/client/v4/zones/YOUR_ZONE_ID/purge_cache" \
#      -H "Authorization: Bearer YOUR_API_TOKEN" \
#      -H "Content-Type: application/json" \
#      --data '{"purge_everything":true}'

# Resumo
echo ""
echo -e "${GREEN}================================================${NC}"
echo -e "${GREEN}   🎉 Deploy concluído com sucesso!${NC}"
echo -e "${GREEN}================================================${NC}"
echo ""
echo -e "📍 Site: ${GREEN}https://$DOMAIN${NC}"
echo -e "📂 Diretório: ${YELLOW}$WEB_ROOT${NC}"
echo -e "⏰ Data: ${BLUE}$(date '+%Y-%m-%d %H:%M:%S')${NC}"
echo ""
echo -e "${GREEN}✨ Acesse: https://$DOMAIN${NC}"
echo ""
echo "2. Verificar o site em https://$DOMAIN"
echo "3. Adicionar o site no Google Search Console"
echo "4. Enviar o sitemap: https://$DOMAIN/sitemap.xml"
echo "5. Testar SEO em: https://search.google.com/test/rich-results"
echo ""

#!/bin/bash

###############################################################################
# Script de Instalação - Gerador de QR Code
# Para servidor KVM Hostinger
# 
# Uso: sudo bash scripts/install.sh
###############################################################################

set -e

# Cores para output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Configurações
DOMAIN="qrcode.gabireze.cloud"
PROJECT_DIR="/var/www/qrcode.gabireze.cloud"
REPO_DIR="$(pwd)"

echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${BLUE}   Instalação - Gerador de QR Code${NC}"
echo -e "${BLUE}   Domínio: ${DOMAIN}${NC}"
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo ""

# Verificar se está rodando como root
if [[ $EUID -ne 0 ]]; then
   echo -e "${RED}❌ Este script deve ser executado como root (sudo)${NC}" 
   exit 1
fi

echo -e "${YELLOW}📋 Verificando requisitos...${NC}"

# Verificar se Nginx está instalado
if ! command -v nginx &> /dev/null; then
    echo -e "${RED}❌ Nginx não encontrado. Instalando...${NC}"
    apt update
    apt install -y nginx
else
    echo -e "${GREEN}✓ Nginx já instalado${NC}"
fi

# Verificar se Certbot está instalado
if ! command -v certbot &> /dev/null; then
    echo -e "${YELLOW}⚠️  Certbot não encontrado. Instale para SSL:${NC}"
    echo -e "${BLUE}   sudo apt install certbot python3-certbot-nginx${NC}"
else
    echo -e "${GREEN}✓ Certbot já instalado${NC}"
fi

echo ""
echo -e "${YELLOW}📁 Criando estrutura de diretórios...${NC}"

# Criar diretório do projeto
mkdir -p "$PROJECT_DIR"
mkdir -p /var/log/nginx

echo -e "${GREEN}✓ Diretórios criados${NC}"

echo ""
echo -e "${YELLOW}📦 Copiando arquivos do projeto...${NC}"

# Copiar arquivos principais
cp -r "$REPO_DIR"/* "$PROJECT_DIR/"

# Ajustar permissões
chown -R www-data:www-data "$PROJECT_DIR"
chmod -R 755 "$PROJECT_DIR"

echo -e "${GREEN}✓ Arquivos copiados${NC}"

echo ""
echo -e "${YELLOW}⚙️  Configurando Nginx...${NC}"

# Copiar configuração do Nginx
cp "$REPO_DIR/config/nginx.conf" "/etc/nginx/sites-available/$DOMAIN"

# Criar link simbólico
ln -sf "/etc/nginx/sites-available/$DOMAIN" "/etc/nginx/sites-enabled/$DOMAIN"

# Remover configuração padrão se existir
if [ -f "/etc/nginx/sites-enabled/default" ]; then
    rm -f /etc/nginx/sites-enabled/default
    echo -e "${GREEN}✓ Configuração padrão removida${NC}"
fi

# Testar configuração do Nginx
echo ""
echo -e "${YELLOW}🧪 Testando configuração do Nginx...${NC}"
if nginx -t; then
    echo -e "${GREEN}✓ Configuração válida${NC}"
else
    echo -e "${RED}❌ Erro na configuração do Nginx${NC}"
    exit 1
fi

# Recarregar Nginx
echo ""
echo -e "${YELLOW}🔄 Recarregando Nginx...${NC}"
systemctl reload nginx
echo -e "${GREEN}✓ Nginx recarregado${NC}"

echo ""
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${GREEN}✅ Instalação concluída com sucesso!${NC}"
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo ""

# Verificar se SSL já está configurado
if [ ! -f "/etc/letsencrypt/live/$DOMAIN/fullchain.pem" ]; then
    echo -e "${YELLOW}⚠️  Certificado SSL não encontrado${NC}"
    echo ""
    echo -e "${BLUE}Para configurar SSL/HTTPS, execute:${NC}"
    echo -e "${GREEN}sudo certbot --nginx -d $DOMAIN -d www.$DOMAIN${NC}"
    echo ""
else
    echo -e "${GREEN}✓ Certificado SSL já configurado${NC}"
    echo ""
fi

echo -e "${BLUE}📊 Status dos serviços:${NC}"
systemctl status nginx --no-pager -l | head -n 5

echo ""
echo -e "${BLUE}🌐 Acesse seu site em:${NC}"
echo -e "${GREEN}   http://$DOMAIN${NC}"
if [ -f "/etc/letsencrypt/live/$DOMAIN/fullchain.pem" ]; then
    echo -e "${GREEN}   https://$DOMAIN${NC}"
fi

echo ""
echo -e "${BLUE}📂 Diretório do projeto:${NC}"
echo -e "${GREEN}   $PROJECT_DIR${NC}"

echo ""
echo -e "${BLUE}📝 Logs do Nginx:${NC}"
echo -e "${GREEN}   tail -f /var/log/nginx/$DOMAIN.access.log${NC}"
echo -e "${GREEN}   tail -f /var/log/nginx/$DOMAIN.error.log${NC}"

echo ""
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"

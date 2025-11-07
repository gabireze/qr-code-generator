// i18n.js - Internationalization support for QR Code Generator
// Supports Portuguese (pt-BR) and English (en)

const translations = {
  'pt-BR': {
    // Meta tags
    'meta.title': 'Gerador de QR Code Online Grátis - PNG, JPG, SVG, PDF | QR Code Generator',
    'meta.description': 'Crie QR Codes gratuitamente online! Suporte para URL, WhatsApp, PIX, vCard, Wi-Fi, E-mail, Bitcoin, Ethereum e mais. Baixe em PNG, JPG, SVG ou PDF. Personalize cores, tamanho e formato.',
    'meta.keywords': 'gerador qr code, qr code grátis, criar qr code, qr code online, qr code whatsapp, qr code pix, qr code vcard, qr code wifi, qr code bitcoin, qr code personalizado, gerar qr code, qr code generator',
    
    // Header
    'header.title': 'Gerador de QR Code',
    'header.subtitle': 'Crie QR Codes grátis em PNG, JPG, SVG e PDF',
    'header.unlimited': 'Ilimitado',
    'header.private': 'Privado',
    'header.free': 'Gratuito',
    
    // Settings Section
    'settings.title': 'Configurações',
    'settings.layout': 'Layout da prévia',
    'settings.layout.side': 'Lado a lado',
    'settings.layout.vertical': 'Vertical',
    'settings.contentType': 'Tipo de conteúdo',
    
    // Content Types
    'contentType.free': 'Texto',
    'contentType.url': 'URL',
    'contentType.tel': 'Telefone',
    'contentType.sms': 'SMS',
    'contentType.email': 'E-mail',
    'contentType.whatsapp': 'WhatsApp',
    'contentType.vcard': 'vCard',
    'contentType.mecard': 'MeCard',
    'contentType.geo': 'Local',
    'contentType.event': 'Evento',
    'contentType.wifi': 'Wi-Fi',
    'contentType.pix': 'PIX',
    'contentType.bitcoin': 'Bitcoin',
    'contentType.ethereum': 'Ethereum',
    'contentType.litecoin': 'Litecoin',
    'contentType.bitcoincash': 'BCH',
    'contentType.dogecoin': 'Dogecoin',
    'contentType.monero': 'Monero',
    
    // Content Type Tooltips
    'tooltip.free': 'Texto livre',
    'tooltip.url': 'URL',
    'tooltip.tel': 'Telefone',
    'tooltip.sms': 'SMS',
    'tooltip.email': 'E-mail',
    'tooltip.whatsapp': 'WhatsApp',
    'tooltip.vcard': 'vCard',
    'tooltip.mecard': 'MeCard',
    'tooltip.geo': 'Localização',
    'tooltip.event': 'Evento',
    'tooltip.wifi': 'Wi‑Fi',
    'tooltip.pix': 'PIX',
    'tooltip.bitcoin': 'Bitcoin',
    'tooltip.ethereum': 'Ethereum',
    'tooltip.litecoin': 'Litecoin',
    'tooltip.bitcoincash': 'Bitcoin Cash',
    'tooltip.dogecoin': 'Dogecoin',
    'tooltip.monero': 'Monero',
    'tooltip.layoutSide': 'QR Code ao lado (fixo 512px)',
    'tooltip.layoutVertical': 'QR Code abaixo (responsivo)',
    
    // Form Labels & Placeholders
    'label.content': 'Conteúdo',
    'label.url': 'URL',
    'label.phone': 'Telefone',
    'label.message': 'Mensagem',
    'label.email': 'E-mail',
    'label.to': 'Para',
    'label.subject': 'Assunto',
    'label.body': 'Corpo',
    'label.whatsappPhone': 'Número (com DDI)',
    'label.whatsappMessage': 'Mensagem',
    'label.name': 'Nome',
    'label.fullName': 'Nome completo',
    'label.organization': 'Empresa',
    'label.company': 'Empresa',
    'label.title': 'Título',
    'label.position': 'Cargo',
    'label.address': 'Endereço',
    'label.city': 'Cidade',
    'label.state': 'Estado',
    'label.zip': 'CEP',
    'label.country': 'País',
    'label.website': 'Website',
    'label.siteUrl': 'Site/URL',
    'label.latitude': 'Latitude',
    'label.longitude': 'Longitude',
    'label.eventTitle': 'Título',
    'label.location': 'Local',
    'label.description': 'Descrição',
    'label.startDate': 'Início (UTC)',
    'label.endDate': 'Fim (UTC)',
    'label.ssid': 'SSID',
    'label.password': 'Senha',
    'label.authentication': 'Autenticação',
    'label.security': 'Segurança',
    'label.hidden': 'Rede oculta',
    'label.hiddenNetwork': 'Rede oculta',
    'label.pixKey': 'Chave PIX',
    'label.pixName': 'Nome do recebedor',
    'label.pixCity': 'Cidade',
    'label.pixValue': 'Valor (opcional)',
    'label.pixIdentifier': 'Identificador (opcional)',
    'label.pixMessage': 'Mensagem (opcional)',
    'label.amount': 'Valor',
    'label.cryptoAddress': 'Endereço da Carteira',
    'label.cryptoAmount': 'Valor',
    'label.cryptoLabel': 'Nome/Label (opcional)',
    'label.cryptoMessage': 'Mensagem (opcional)',
    'label.btcAddress': 'Endereço Bitcoin',
    'label.btcAmount': 'Valor (BTC)',
    'label.ethAddress': 'Endereço Ethereum',
    'label.ethValue': 'Valor (Wei)',
    'label.ethChainId': 'Chain ID',
    'label.ltcAddress': 'Endereço Litecoin',
    'label.ltcAmount': 'Valor (LTC)',
    'label.bchAddress': 'Endereço Bitcoin Cash',
    'label.bchAmount': 'Valor (BCH)',
    'label.dogeAddress': 'Endereço Dogecoin',
    'label.dogeAmount': 'Valor (DOGE)',
    'label.xmrAddress': 'Endereço Monero',
    'label.xmrAmount': 'Valor (XMR)',
    'label.xmrDesc': 'Descrição (opcional)',
    'label.search': 'Busca/label (opcional)',
    'label.zoom': 'Zoom (1-20, opcional)',
    
    // Placeholders
    'placeholder.freeText': 'Digite qualquer texto aqui...',
    'placeholder.url': 'https://exemplo.com',
    'placeholder.phone': '+55XXXXXXXXXXX',
    'placeholder.smsText': 'Texto da SMS',
    'placeholder.message': 'Olá!',
    'placeholder.email': 'usuario@dominio.com',
    'placeholder.subject': 'Assunto do e-mail',
    'placeholder.body': 'Mensagem...',
    'placeholder.whatsappPhone': '55XXXXXXXXXXX',
    'placeholder.whatsappMessage': 'Olá, gostaria de saber mais...',
    'placeholder.name': 'João Silva',
    'placeholder.organization': 'Empresa XYZ',
    'placeholder.title': 'Desenvolvedor',
    'placeholder.address': 'Rua Exemplo, 123',
    'placeholder.city': 'São Paulo',
    'placeholder.state': 'SP',
    'placeholder.zip': '01234-567',
    'placeholder.country': 'Brasil',
    'placeholder.website': 'https://exemplo.com',
    'placeholder.latitude': '-23.5505',
    'placeholder.longitude': '-46.6333',
    'placeholder.eventTitle': 'Reunião de Equipe',
    'placeholder.location': 'Sala de Conferências',
    'placeholder.description': 'Discussão sobre o projeto...',
    'placeholder.ssid': 'MinhaRedeWiFi',
    'placeholder.password': 'senha123',
    'placeholder.pixKey': 'email@exemplo.com',
    'placeholder.pixName': 'João Silva',
    'placeholder.pixCity': 'São Paulo',
    'placeholder.pixValue': '0.00',
    'placeholder.amount': '10.00',
    'placeholder.btcAddress': '1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa',
    'placeholder.btcAmount': '0.001',
    'placeholder.btcLabel': 'Doação',
    'placeholder.btcMessage': 'Obrigado!',
    'placeholder.ethAddress': '0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb',
    'placeholder.ethValue': '1000000000000000000',
    'placeholder.ethChainId': '1 (Mainnet)',
    'placeholder.ltcAddress': 'LQTpS3VaYTjCr4s9Y1r6J5q3v4n8m2',
    'placeholder.ltcAmount': '0.5',
    'placeholder.ltcLabel': 'Pagamento',
    'placeholder.bchAddress': 'qr7fzmep8g7h7ymfxy74lgc0v950j3r2959lhtxxsl',
    'placeholder.bchAmount': '0.01',
    'placeholder.bchLabel': 'Compra',
    'placeholder.dogeAddress': 'DH5yaieqoZN36fDVciNyRueRGvGLR3mr7L',
    'placeholder.dogeAmount': '100',
    'placeholder.dogeLabel': 'Muito wow!',
    'placeholder.xmrAddress': '4AdUndXHHZ6cfufTMvppY6JwXNouMBzSkbLYfpAV5Usx...',
    'placeholder.xmrAmount': '0.5',
    'placeholder.xmrDesc': 'Pagamento privado',
    'placeholder.cryptoAddress': 'Endereço da carteira',
    'placeholder.cryptoAmount': '0.001',
    'placeholder.cryptoLabel': 'Etiqueta (opcional)',
    'placeholder.cryptoMessage': 'Mensagem (opcional)',
    'placeholder.customWidth': 'ex.: 600',
    
    // Customization
    'customize.title': 'Personalização',
    'customize.foreground': 'Cor principal',
    'customize.background': 'Cor de fundo',
    'customize.size': 'Tamanho (px)',
    'customize.errorCorrection': 'Correção de erro',
    'customize.margin': 'Margem',
    'customize.margin.full': 'Margem (quiet zone, px)',
    'customize.format': 'Formato de download',
    'customize.qrColor': 'Cor do QR',
    'customize.bgColor': 'Cor de fundo',
    'customize.moduleShape': 'Forma dos módulos',
    'customize.presetSize': 'Tamanho predefinido',
    'customize.customWidth': 'Largura personalizada (px)',
    'customize.fileName': 'Nome do arquivo',
    'customize.transparentBg': 'Fundo transparente (PNG/SVG)',
    'customize.jpgBg': 'Fundo do JPG/PDF',
    
    // Module Shapes
    'shape.square': 'Quadrados',
    'shape.dots': 'Pontos',
    'shape.rounded': 'Arredondado',
    
    // Error Correction Levels
    'errorLevel.L': 'L (Baixa)',
    'errorLevel.M': 'M (Média)',
    'errorLevel.Q': 'Q (Alta)',
    'errorLevel.H': 'H (Máxima)',
    
    // Preview Section
    'preview.title': 'Prévia e exportação',
    'preview.download': 'Baixar QR Code',
    'preview.downloadAs': 'Baixar como',
    'preview.generating': 'Gerando QR Code...',
    'preview.empty': 'Preencha os campos para gerar o QR Code',
    
    // Stats and Actions
    'stats.characters': '{count} caracteres',
    'stats.character': '{count} caractere',
    'button.clear': 'Limpar',
    'hint.suggestedSize': 'Tamanho sugerido: {size} px • ECC {ecc}',
    
    // Download Formats
    'format.png': 'PNG',
    'format.jpg': 'JPG',
    'format.svg': 'SVG',
    'format.pdf': 'PDF',
    
    // Security Options
    'security.none': 'Nenhuma',
    'security.nopass': 'Sem senha (Aberta)',
    'security.wep': 'WEP',
    'security.wpa': 'WPA/WPA2/WPA3',
    'security.wpa2': 'WPA2',
    'security.wpa3': 'WPA3',
    'security.sae': 'SAE (WPA3)',
    
    // Footer
    'footer.madeWith': 'Feito com',
    'footer.by': 'por',
    'footer.allRightsReserved': 'Todos os direitos reservados',
    'footer.privacy': 'Privacidade',
    'footer.terms': 'Termos',
    'footer.about': 'Sobre',
    
    // Misc
    'yes': 'Sim',
    'no': 'Não',
    'optional': 'opcional',
    'required': 'obrigatório',
    
    // SEO Sections
    'seo.whatIs.title': 'O que é QR Code?',
    'seo.whatIs.p1': 'QR Code (Quick Response Code) é um código de barras bidimensional que pode ser facilmente escaneado usando a câmera de smartphones e tablets. Criado no Japão em 1994 pela empresa Denso Wave, o QR Code revolucionou a forma como compartilhamos informações digitalmente.',
    'seo.whatIs.p2': 'Diferente dos códigos de barras tradicionais que armazenam dados apenas horizontalmente, os QR Codes armazenam informações tanto horizontal quanto verticalmente, permitindo guardar muito mais dados em um espaço menor. Um QR Code pode conter até 4.296 caracteres alfanuméricos ou 7.089 caracteres numéricos.',
    'seo.whatIs.p3': 'Nossa ferramenta de geração de QR Code online permite criar códigos personalizados gratuitamente, com suporte para múltiplos formatos de exportação (PNG, JPG, SVG, PDF) e diversos tipos de conteúdo, desde URLs simples até configurações complexas de Wi-Fi e pagamentos PIX.',
    
    'seo.features.title': 'Funcionalidades do Gerador de QR Code',
    'seo.features.customization.title': 'Personalização Completa',
    'seo.features.customization.desc': 'Customize as cores do QR Code e do fundo, escolha entre diferentes formas de módulos (quadrados, pontos, arredondados) e ajuste o tamanho conforme sua necessidade.',
    'seo.features.formats.title': 'Múltiplos Formatos',
    'seo.features.formats.desc': 'Exporte seu QR Code em PNG para web, JPG para impressão, SVG para design vetorial ou PDF para documentos. Todos os formatos em alta qualidade, até 1024px.',
    'seo.features.privacy.title': 'Privacidade Garantida',
    'seo.features.privacy.desc': 'Todos os QR Codes são gerados localmente no seu navegador. Suas informações nunca são enviadas para nossos servidores, garantindo total privacidade e segurança.',
    'seo.features.unlimited.title': 'Uso Ilimitado',
    'seo.features.unlimited.desc': 'Crie quantos QR Codes quiser, sem limites de uso, sem registro necessário e completamente gratuito. Use para projetos pessoais ou comerciais sem restrições.',
    'seo.features.quality.title': 'Controle de Qualidade',
    'seo.features.quality.desc': 'Ajuste o nível de correção de erros (L, M, Q, H) para garantir que seu QR Code funcione mesmo se estiver parcialmente danificado ou sujo.',
    'seo.features.responsive.title': '100% Responsivo',
    'seo.features.responsive.desc': 'Interface otimizada para desktop, tablet e smartphone. Crie seus QR Codes em qualquer dispositivo, a qualquer hora e em qualquer lugar.',
    
    'seo.types.title': 'Tipos de QR Code Suportados',
    'seo.types.urls.title': 'URLs e Links',
    'seo.types.urls.desc': 'Crie QR Codes para sites, páginas de redes sociais, portfólios online ou qualquer URL. Perfeito para cartões de visita digitais, materiais impressos e campanhas de marketing.',
    'seo.types.urls.item1': '✓ Sites e landing pages',
    'seo.types.urls.item2': '✓ Redes sociais (Instagram, LinkedIn, Twitter)',
    'seo.types.urls.item3': '✓ YouTube e plataformas de vídeo',
    'seo.types.communication.title': 'Comunicação',
    'seo.types.communication.desc': 'Facilite o contato com QR Codes para WhatsApp, SMS, telefone e e-mail. Clientes podem entrar em contato instantaneamente sem precisar digitar números ou endereços.',
    'seo.types.communication.item1': '✓ WhatsApp com mensagem pré-definida',
    'seo.types.communication.item2': '✓ SMS e ligações telefônicas',
    'seo.types.communication.item3': '✓ E-mail com assunto e corpo',
    'seo.types.payment.title': 'PIX e Pagamentos',
    'seo.types.payment.desc': 'Gere QR Codes PIX compatíveis com o padrão brasileiro de pagamentos instantâneos. Ideal para comerciantes, freelancers e vendas online.',
    'seo.types.payment.item1': '✓ PIX estático e dinâmico',
    'seo.types.payment.item2': '✓ Valor fixo ou aberto',
    'seo.types.payment.item3': '✓ Identificador personalizado',
    'seo.types.contact.title': 'Contatos (vCard/MeCard)',
    'seo.types.contact.desc': 'Compartilhe informações de contato completas que podem ser salvas diretamente na agenda do smartphone. Perfeito para networking e eventos.',
    'seo.types.contact.item1': '✓ Nome, empresa e cargo',
    'seo.types.contact.item2': '✓ Telefone, e-mail e site',
    'seo.types.contact.item3': '✓ Endereço completo',
    'seo.types.wifi.title': 'Wi-Fi',
    'seo.types.wifi.desc': 'Permita que visitantes se conectem à sua rede Wi-Fi instantaneamente, sem precisar digitar senhas complicadas. Ideal para cafés, restaurantes e escritórios.',
    'seo.types.wifi.item1': '✓ Suporte WPA/WPA2/WPA3',
    'seo.types.wifi.item2': '✓ Redes abertas e ocultas',
    'seo.types.wifi.item3': '✓ Conexão automática',
    'seo.types.crypto.title': 'Criptomoedas',
    'seo.types.crypto.desc': 'Receba pagamentos em Bitcoin, Ethereum, Litecoin, Dogecoin e outras criptomoedas. Simplifique transações com endereços em formato QR Code.',
    'seo.types.crypto.item1': '✓ Bitcoin, Ethereum, Litecoin',
    'seo.types.crypto.item2': '✓ Bitcoin Cash, Dogecoin, Monero',
    'seo.types.crypto.item3': '✓ Valor e mensagem opcionais',
    
    'seo.useCases.title': 'Casos de Uso do QR Code',
    'seo.useCases.marketing.title': 'Marketing e Publicidade',
    'seo.useCases.marketing.desc': 'Use QR Codes em materiais impressos como flyers, cartazes, banners e embalagens para direcionar clientes para seu site, promoções especiais, vídeos promocionais ou páginas de redes sociais. Meça a eficácia de suas campanhas offline de forma digital.',
    'seo.useCases.restaurant.title': 'Restaurantes e Cardápios Digitais',
    'seo.useCases.restaurant.desc': 'Substitua cardápios físicos por versões digitais acessíveis via QR Code. Economize em impressão, facilite atualizações de menu e preços, e ofereça uma experiência moderna aos clientes. Use nosso gerador gratuito para criar QR Codes com links para seu cardápio online.',
    'seo.useCases.events.title': 'Eventos e Check-in',
    'seo.useCases.events.desc': 'Facilite o check-in de participantes em eventos, conferências e festas. Use QR Codes em ingressos eletrônicos, crachás e convites. Compartilhe programações, mapas do evento e informações importantes instantaneamente.',
    'seo.useCases.education.title': 'Educação e Treinamento',
    'seo.useCases.education.desc': 'Professores e instrutores podem usar QR Codes para compartilhar materiais de estudo, links para vídeos educacionais, questionários online e recursos adicionais. Torne o aprendizado mais interativo e acessível.',
    'seo.useCases.retail.title': 'Varejo e E-commerce',
    'seo.useCases.retail.desc': 'Adicione QR Codes em produtos para informações adicionais, manuais de instruções, vídeos de demonstração ou avaliações de clientes. Use em vitrines para compras diretas via smartphone, facilitando vendas omnichannel.',
    'seo.useCases.realestate.title': 'Imobiliário',
    'seo.useCases.realestate.desc': 'Coloque QR Codes em placas de "Vende-se" ou "Aluga-se" para que interessados acessem instantaneamente fotos, tours virtuais, informações completas do imóvel e formulários de contato, mesmo fora do horário comercial.',
    
    'seo.howTo.title': 'Como Criar um QR Code?',
    'seo.howTo.step1.title': 'Escolha o tipo de conteúdo',
    'seo.howTo.step1.desc': 'Selecione entre URL, WhatsApp, PIX, vCard, Wi-Fi, E-mail, Bitcoin, ou qualquer outro tipo suportado. Nossa ferramenta oferece mais de 15 tipos diferentes de QR Codes.',
    'seo.howTo.step2.title': 'Preencha as informações',
    'seo.howTo.step2.desc': 'Insira os dados necessários nos campos correspondentes. Para URLs, digite o endereço completo. Para PIX, informe sua chave, nome e cidade. O formulário se adapta automaticamente ao tipo escolhido.',
    'seo.howTo.step3.title': 'Personalize o design',
    'seo.howTo.step3.desc': 'Ajuste as cores do QR Code e do fundo, escolha o formato dos módulos (quadrados, pontos ou arredondados), defina o tamanho e o nível de correção de erros conforme sua necessidade.',
    'seo.howTo.step4.title': 'Baixe e use',
    'seo.howTo.step4.desc': 'Escolha o formato de exportação (PNG, JPG, SVG ou PDF) e faça o download. Seu QR Code está pronto para ser usado em materiais impressos, digitais ou compartilhado nas redes sociais.',
    
    'seo.faq.title': 'Perguntas Frequentes (FAQ)',
    'seo.faq.q1.question': 'O gerador de QR Code é realmente gratuito?',
    'seo.faq.q1.answer': 'Sim! Nosso gerador de QR Code é 100% gratuito, sem limites de uso, sem necessidade de registro e sem marcas d\'água. Você pode criar quantos QR Codes quiser para uso pessoal ou comercial.',
    'seo.faq.q2.question': 'Os QR Codes gerados expiram?',
    'seo.faq.q2.answer': 'Não! Os QR Codes gerados são estáticos e permanentes. Uma vez criados, funcionarão para sempre, desde que o conteúdo vinculado (como uma URL) continue acessível. Não há data de expiração.',
    'seo.faq.q3.question': 'Minhas informações são armazenadas no servidor?',
    'seo.faq.q3.answer': 'Não. Todos os QR Codes são gerados localmente no seu navegador usando JavaScript. Nenhuma informação é enviada para nossos servidores, garantindo total privacidade e segurança dos seus dados. Acesse qrcode.gabireze.cloud e crie seus códigos com segurança.',
    'seo.faq.q4.question': 'Qual formato devo escolher para impressão?',
    'seo.faq.q4.answer': 'Para impressão em alta qualidade, recomendamos SVG (vetorial) ou PNG com tamanho mínimo de 512px. O formato PDF também é excelente para documentos impressos. Para impressões grandes (banners, cartazes), use 1024px ou SVG.',
    'seo.faq.q5.question': 'O que é correção de erros (ECC)?',
    'seo.faq.q5.answer': 'A correção de erros permite que o QR Code seja lido mesmo se estiver parcialmente danificado ou sujo. Níveis: L (7%), M (15%), Q (25%), H (30%). Quanto maior o nível, mais resistente, mas o código fica mais denso.',
    'seo.faq.q6.question': 'Posso usar cores personalizadas no QR Code?',
    'seo.faq.q6.answer': 'Sim! Você pode personalizar tanto a cor do QR Code quanto a cor de fundo. No entanto, certifique-se de usar cores com bom contraste (escuro sobre claro ou vice-versa) para garantir a leitura correta pelos scanners.',
    'seo.faq.q7.question': 'Qual o tamanho mínimo recomendado?',
    'seo.faq.q7.answer': 'Para cartões de visita, use no mínimo 2x2 cm (256px). Para posters e banners, 10x10 cm ou mais (512-1024px). A distância de leitura ideal é aproximadamente 10 vezes o tamanho do QR Code.',
    'seo.faq.q8.question': 'Posso rastrear quantas vezes meu QR Code foi escaneado?',
    'seo.faq.q8.answer': 'QR Codes estáticos (gerados por esta ferramenta) não possuem rastreamento. Para rastrear escaneamentos, você pode usar um encurtador de URL com analytics (como Bitly) e criar um QR Code com essa URL encurtada.',
    
    'seo.tips.title': 'Dicas para Criar QR Codes Eficientes',
    'seo.tips.shortUrls.title': 'Use URLs Curtas',
    'seo.tips.shortUrls.desc': 'URLs mais curtas geram QR Codes menos densos e mais fáceis de escanear. Use encurtadores de URL quando necessário para melhorar a legibilidade.',
    'seo.tips.test.title': 'Teste Antes de Imprimir',
    'seo.tips.test.desc': 'Sempre teste seu QR Code com diferentes aplicativos de leitura e smartphones antes de imprimir em grande quantidade. Verifique se todas as informações estão corretas.',
    'seo.tips.contrast.title': 'Contraste é Importante',
    'seo.tips.contrast.desc': 'Mantenha bom contraste entre o QR Code e o fundo. O ideal é usar cores escuras sobre fundos claros. Evite cores muito similares que podem dificultar a leitura.',
    'seo.tips.size.title': 'Tamanho Adequado',
    'seo.tips.size.desc': 'Considere a distância de leitura. Para visualização próxima (cartões), 2-3 cm é suficiente. Para distâncias maiores (outdoors), aumente proporcionalmente o tamanho.',
    
    'seo.footer.about.title': 'Sobre o Gerador de QR Code',
    'seo.footer.about.desc': 'Ferramenta gratuita e completa para criar QR Codes personalizados online. Suporte para diversos formatos incluindo URLs, WhatsApp, PIX, vCard, Wi-Fi, criptomoedas e muito mais. Exporte em PNG, JPG, SVG ou PDF.',
    'seo.footer.formats.title': 'Formatos Suportados',
    'seo.footer.formats.item1': '• URLs e Links',
    'seo.footer.formats.item2': '• WhatsApp e SMS',
    'seo.footer.formats.item3': '• PIX e Pagamentos',
    'seo.footer.formats.item4': '• vCard e MeCard',
    'seo.footer.formats.item5': '• Wi-Fi e Redes',
    'seo.footer.formats.item6': '• Bitcoin, Ethereum, Litecoin',
    'seo.footer.formats.item7': '• E-mail e Telefone',
    'seo.footer.formats.item8': '• Eventos e Localização',
    'seo.footer.resources.title': 'Recursos',
    'seo.footer.resources.item1': '✓ 100% Gratuito',
    'seo.footer.resources.item2': '✓ Sem limites de uso',
    'seo.footer.resources.item3': '✓ Personalização completa',
    'seo.footer.resources.item4': '✓ Múltiplos formatos de exportação',
    'seo.footer.resources.item5': '✓ Alta qualidade (até 1024px)',
    'seo.footer.resources.item6': '✓ Sem marca d\'água',
    'seo.footer.resources.item7': '✓ Privacidade garantida',
    'seo.footer.copyright': '© 2025 Gerador de QR Code - Desenvolvido por',
    'seo.footer.tagline': 'QR Code Generator | Gerador de Código QR Online | Criar QR Code Grátis'
  },
  
  'en': {
    // Meta tags
    'meta.title': 'Free Online QR Code Generator - PNG, JPG, SVG, PDF',
    'meta.description': 'Create QR Codes for free online! Support for URL, WhatsApp, PIX, vCard, Wi-Fi, Email, Bitcoin, Ethereum and more. Download in PNG, JPG, SVG or PDF. Customize colors, size and format.',
    'meta.keywords': 'qr code generator, free qr code, create qr code, qr code online, whatsapp qr code, pix qr code, vcard qr code, wifi qr code, bitcoin qr code, custom qr code, generate qr code',
    
    // Header
    'header.title': 'QR Code Generator',
    'header.subtitle': 'Create QR Codes for free in PNG, JPG, SVG and PDF',
    'header.unlimited': 'Unlimited',
    'header.private': 'Private',
    'header.free': 'Free',
    
    // Settings Section
    'settings.title': 'Settings',
    'settings.layout': 'Preview layout',
    'settings.layout.side': 'Side by side',
    'settings.layout.vertical': 'Vertical',
    'settings.contentType': 'Content type',
    
    // Content Types
    'contentType.free': 'Text',
    'contentType.url': 'URL',
    'contentType.tel': 'Phone',
    'contentType.sms': 'SMS',
    'contentType.email': 'Email',
    'contentType.whatsapp': 'WhatsApp',
    'contentType.vcard': 'vCard',
    'contentType.mecard': 'MeCard',
    'contentType.geo': 'Location',
    'contentType.event': 'Event',
    'contentType.wifi': 'Wi-Fi',
    'contentType.pix': 'PIX',
    'contentType.bitcoin': 'Bitcoin',
    'contentType.ethereum': 'Ethereum',
    'contentType.litecoin': 'Litecoin',
    'contentType.bitcoincash': 'BCH',
    'contentType.dogecoin': 'Dogecoin',
    'contentType.monero': 'Monero',
    
    // Content Type Tooltips
    'tooltip.free': 'Free text',
    'tooltip.url': 'URL',
    'tooltip.tel': 'Phone',
    'tooltip.sms': 'SMS',
    'tooltip.email': 'Email',
    'tooltip.whatsapp': 'WhatsApp',
    'tooltip.vcard': 'vCard',
    'tooltip.mecard': 'MeCard',
    'tooltip.geo': 'Location',
    'tooltip.event': 'Event',
    'tooltip.wifi': 'Wi‑Fi',
    'tooltip.pix': 'PIX',
    'tooltip.bitcoin': 'Bitcoin',
    'tooltip.ethereum': 'Ethereum',
    'tooltip.litecoin': 'Litecoin',
    'tooltip.bitcoincash': 'Bitcoin Cash',
    'tooltip.dogecoin': 'Dogecoin',
    'tooltip.monero': 'Monero',
    'tooltip.layoutSide': 'QR Code on the side (fixed 512px)',
    'tooltip.layoutVertical': 'QR Code below (responsive)',
    
    // Form Labels & Placeholders
    'label.content': 'Content',
    'label.url': 'URL',
    'label.phone': 'Phone',
    'label.message': 'Message',
    'label.email': 'Email',
    'label.to': 'To',
    'label.subject': 'Subject',
    'label.body': 'Body',
    'label.whatsappPhone': 'Number (with country code)',
    'label.whatsappMessage': 'Message',
    'label.name': 'Name',
    'label.fullName': 'Full name',
    'label.organization': 'Company',
    'label.company': 'Company',
    'label.title': 'Title',
    'label.position': 'Position',
    'label.address': 'Address',
    'label.city': 'City',
    'label.state': 'State',
    'label.zip': 'ZIP Code',
    'label.country': 'Country',
    'label.website': 'Website',
    'label.siteUrl': 'Website/URL',
    'label.latitude': 'Latitude',
    'label.longitude': 'Longitude',
    'label.eventTitle': 'Title',
    'label.location': 'Location',
    'label.description': 'Description',
    'label.startDate': 'Start (UTC)',
    'label.endDate': 'End (UTC)',
    'label.ssid': 'SSID',
    'label.password': 'Password',
    'label.authentication': 'Authentication',
    'label.security': 'Security',
    'label.hidden': 'Hidden network',
    'label.hiddenNetwork': 'Hidden network',
    'label.pixKey': 'PIX Key',
    'label.pixName': 'Recipient name',
    'label.pixCity': 'City',
    'label.pixValue': 'Amount (optional)',
    'label.pixIdentifier': 'Identifier (optional)',
    'label.pixMessage': 'Message (optional)',
    'label.amount': 'Amount',
    'label.cryptoAddress': 'Wallet Address',
    'label.cryptoAmount': 'Amount',
    'label.cryptoLabel': 'Name/Label (optional)',
    'label.cryptoMessage': 'Message (optional)',
    'label.btcAddress': 'Bitcoin Address',
    'label.btcAmount': 'Amount (BTC)',
    'label.ethAddress': 'Ethereum Address',
    'label.ethValue': 'Value (Wei)',
    'label.ethChainId': 'Chain ID',
    'label.ltcAddress': 'Litecoin Address',
    'label.ltcAmount': 'Amount (LTC)',
    'label.bchAddress': 'Bitcoin Cash Address',
    'label.bchAmount': 'Amount (BCH)',
    'label.dogeAddress': 'Dogecoin Address',
    'label.dogeAmount': 'Amount (DOGE)',
    'label.xmrAddress': 'Monero Address',
    'label.xmrAmount': 'Amount (XMR)',
    'label.xmrDesc': 'Description (optional)',
    'label.search': 'Search/label (optional)',
    'label.zoom': 'Zoom (1-20, optional)',
    
    // Placeholders
    'placeholder.freeText': 'Enter any text here...',
    'placeholder.url': 'https://example.com',
    'placeholder.phone': '+1XXXXXXXXXX',
    'placeholder.smsText': 'SMS text',
    'placeholder.message': 'Hello!',
    'placeholder.email': 'user@domain.com',
    'placeholder.subject': 'Email subject',
    'placeholder.body': 'Message...',
    'placeholder.whatsappPhone': '1XXXXXXXXXX',
    'placeholder.whatsappMessage': 'Hello, I would like to know more...',
    'placeholder.name': 'John Smith',
    'placeholder.organization': 'XYZ Company',
    'placeholder.title': 'Developer',
    'placeholder.address': '123 Example St',
    'placeholder.city': 'New York',
    'placeholder.state': 'NY',
    'placeholder.zip': '10001',
    'placeholder.country': 'USA',
    'placeholder.website': 'https://example.com',
    'placeholder.latitude': '40.7128',
    'placeholder.longitude': '-74.0060',
    'placeholder.eventTitle': 'Team Meeting',
    'placeholder.location': 'Conference Room',
    'placeholder.description': 'Project discussion...',
    'placeholder.ssid': 'MyWiFiNetwork',
    'placeholder.password': 'password123',
    'placeholder.pixKey': 'email@example.com',
    'placeholder.pixName': 'John Smith',
    'placeholder.pixCity': 'New York',
    'placeholder.pixValue': '0.00',
    'placeholder.amount': '10.00',
    'placeholder.btcAddress': '1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa',
    'placeholder.btcAmount': '0.001',
    'placeholder.btcLabel': 'Donation',
    'placeholder.btcMessage': 'Thank you!',
    'placeholder.ethAddress': '0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb',
    'placeholder.ethValue': '1000000000000000000',
    'placeholder.ethChainId': '1 (Mainnet)',
    'placeholder.ltcAddress': 'LQTpS3VaYTjCr4s9Y1r6J5q3v4n8m2',
    'placeholder.ltcAmount': '0.5',
    'placeholder.ltcLabel': 'Payment',
    'placeholder.bchAddress': 'qr7fzmep8g7h7ymfxy74lgc0v950j3r2959lhtxxsl',
    'placeholder.bchAmount': '0.01',
    'placeholder.bchLabel': 'Purchase',
    'placeholder.dogeAddress': 'DH5yaieqoZN36fDVciNyRueRGvGLR3mr7L',
    'placeholder.dogeAmount': '100',
    'placeholder.dogeLabel': 'Much wow!',
    'placeholder.xmrAddress': '4AdUndXHHZ6cfufTMvppY6JwXNouMBzSkbLYfpAV5Usx...',
    'placeholder.xmrAmount': '0.5',
    'placeholder.xmrDesc': 'Private payment',
    'placeholder.cryptoAddress': 'Wallet address',
    'placeholder.cryptoAmount': '0.001',
    'placeholder.cryptoLabel': 'Label (optional)',
    'placeholder.cryptoMessage': 'Message (optional)',
    'placeholder.customWidth': 'e.g.: 600',
    
    // Customization
    'customize.title': 'Customization',
    'customize.foreground': 'Foreground color',
    'customize.background': 'Background color',
    'customize.size': 'Size (px)',
    'customize.errorCorrection': 'Error correction',
    'customize.margin': 'Margin',
    'customize.margin.full': 'Margin (quiet zone, px)',
    'customize.format': 'Download format',
    'customize.qrColor': 'QR color',
    'customize.bgColor': 'Background color',
    'customize.moduleShape': 'Module shape',
    'customize.presetSize': 'Preset size',
    'customize.customWidth': 'Custom width (px)',
    'customize.fileName': 'File name',
    'customize.transparentBg': 'Transparent background (PNG/SVG)',
    'customize.jpgBg': 'JPG/PDF background',
    
    // Module Shapes
    'shape.square': 'Squares',
    'shape.dots': 'Dots',
    'shape.rounded': 'Rounded',
    
    // Error Correction Levels
    'errorLevel.L': 'L (Low)',
    'errorLevel.M': 'M (Medium)',
    'errorLevel.Q': 'Q (High)',
    'errorLevel.H': 'H (Maximum)',
    
    // Preview Section
    'preview.title': 'Preview and Export',
    'preview.download': 'Download QR Code',
    'preview.downloadAs': 'Download as',
    'preview.generating': 'Generating QR Code...',
    'preview.empty': 'Fill in the fields to generate the QR Code',
    
    // Stats and Actions
    'stats.characters': '{count} characters',
    'stats.character': '{count} character',
    'button.clear': 'Clear',
    'hint.suggestedSize': 'Suggested size: {size} px • ECC {ecc}',
    
    // Download Formats
    'format.png': 'PNG',
    'format.jpg': 'JPG',
    'format.svg': 'SVG',
    'format.pdf': 'PDF',
    
    // Security Options
    'security.none': 'None',
    'security.nopass': 'No password (Open)',
    'security.wep': 'WEP',
    'security.wpa': 'WPA/WPA2/WPA3',
    'security.wpa2': 'WPA2',
    'security.wpa3': 'WPA3',
    'security.sae': 'SAE (WPA3)',
    
    // Footer
    'footer.madeWith': 'Made with',
    'footer.by': 'by',
    'footer.allRightsReserved': 'All rights reserved',
    'footer.privacy': 'Privacy',
    'footer.terms': 'Terms',
    'footer.about': 'About',
    
    // Misc
    'yes': 'Yes',
    'no': 'No',
    'optional': 'optional',
    'required': 'required',
    
    // SEO Sections
    'seo.whatIs.title': 'What is a QR Code?',
    'seo.whatIs.p1': 'QR Code (Quick Response Code) is a two-dimensional barcode that can be easily scanned using smartphone and tablet cameras. Created in Japan in 1994 by Denso Wave, QR Codes revolutionized the way we share information digitally.',
    'seo.whatIs.p2': 'Unlike traditional barcodes that store data only horizontally, QR Codes store information both horizontally and vertically, allowing much more data to be stored in a smaller space. A QR Code can contain up to 4,296 alphanumeric characters or 7,089 numeric characters.',
    'seo.whatIs.p3': 'Our online QR Code generator tool allows you to create custom codes for free, with support for multiple export formats (PNG, JPG, SVG, PDF) and various content types, from simple URLs to complex Wi-Fi configurations and PIX payments.',
    
    'seo.features.title': 'QR Code Generator Features',
    'seo.features.customization.title': 'Complete Customization',
    'seo.features.customization.desc': 'Customize the QR Code and background colors, choose from different module shapes (squares, dots, rounded) and adjust the size to your needs.',
    'seo.features.formats.title': 'Multiple Formats',
    'seo.features.formats.desc': 'Export your QR Code in PNG for web, JPG for printing, SVG for vector design or PDF for documents. All formats in high quality, up to 1024px.',
    'seo.features.privacy.title': 'Privacy Guaranteed',
    'seo.features.privacy.desc': 'All QR Codes are generated locally in your browser. Your information is never sent to our servers, ensuring complete privacy and security.',
    'seo.features.unlimited.title': 'Unlimited Use',
    'seo.features.unlimited.desc': 'Create as many QR Codes as you want, with no usage limits, no registration required and completely free. Use for personal or commercial projects without restrictions.',
    'seo.features.quality.title': 'Quality Control',
    'seo.features.quality.desc': 'Adjust the error correction level (L, M, Q, H) to ensure your QR Code works even if partially damaged or dirty.',
    'seo.features.responsive.title': '100% Responsive',
    'seo.features.responsive.desc': 'Interface optimized for desktop, tablet and smartphone. Create your QR Codes on any device, anytime and anywhere.',
    
    'seo.types.title': 'Supported QR Code Types',
    'seo.types.urls.title': 'URLs and Links',
    'seo.types.urls.desc': 'Create QR Codes for websites, social media pages, online portfolios or any URL. Perfect for digital business cards, printed materials and marketing campaigns.',
    'seo.types.urls.item1': '✓ Websites and landing pages',
    'seo.types.urls.item2': '✓ Social media (Instagram, LinkedIn, Twitter)',
    'seo.types.urls.item3': '✓ YouTube and video platforms',
    'seo.types.communication.title': 'Communication',
    'seo.types.communication.desc': 'Facilitate contact with QR Codes for WhatsApp, SMS, phone and email. Customers can get in touch instantly without typing numbers or addresses.',
    'seo.types.communication.item1': '✓ WhatsApp with pre-defined message',
    'seo.types.communication.item2': '✓ SMS and phone calls',
    'seo.types.communication.item3': '✓ Email with subject and body',
    'seo.types.payment.title': 'PIX and Payments',
    'seo.types.payment.desc': 'Generate PIX QR Codes compatible with the Brazilian instant payment standard. Ideal for merchants, freelancers and online sales.',
    'seo.types.payment.item1': '✓ Static and dynamic PIX',
    'seo.types.payment.item2': '✓ Fixed or open amount',
    'seo.types.payment.item3': '✓ Custom identifier',
    'seo.types.contact.title': 'Contacts (vCard/MeCard)',
    'seo.types.contact.desc': 'Share complete contact information that can be saved directly to the smartphone contact list. Perfect for networking and events.',
    'seo.types.contact.item1': '✓ Name, company and position',
    'seo.types.contact.item2': '✓ Phone, email and website',
    'seo.types.contact.item3': '✓ Complete address',
    'seo.types.wifi.title': 'Wi-Fi',
    'seo.types.wifi.desc': 'Allow visitors to connect to your Wi-Fi network instantly without typing complicated passwords. Ideal for cafes, restaurants and offices.',
    'seo.types.wifi.item1': '✓ WPA/WPA2/WPA3 support',
    'seo.types.wifi.item2': '✓ Open and hidden networks',
    'seo.types.wifi.item3': '✓ Automatic connection',
    'seo.types.crypto.title': 'Cryptocurrencies',
    'seo.types.crypto.desc': 'Receive payments in Bitcoin, Ethereum, Litecoin, Dogecoin and other cryptocurrencies. Simplify transactions with addresses in QR Code format.',
    'seo.types.crypto.item1': '✓ Bitcoin, Ethereum, Litecoin',
    'seo.types.crypto.item2': '✓ Bitcoin Cash, Dogecoin, Monero',
    'seo.types.crypto.item3': '✓ Optional amount and message',
    
    'seo.useCases.title': 'QR Code Use Cases',
    'seo.useCases.marketing.title': 'Marketing and Advertising',
    'seo.useCases.marketing.desc': 'Use QR Codes on printed materials like flyers, posters, banners and packaging to direct customers to your website, special promotions, promotional videos or social media pages. Measure the effectiveness of your offline campaigns digitally.',
    'seo.useCases.restaurant.title': 'Restaurants and Digital Menus',
    'seo.useCases.restaurant.desc': 'Replace physical menus with digital versions accessible via QR Code. Save on printing, facilitate menu and price updates, and offer a modern experience to customers. Use our free generator to create QR Codes with links to your online menu.',
    'seo.useCases.events.title': 'Events and Check-in',
    'seo.useCases.events.desc': 'Facilitate participant check-in at events, conferences and parties. Use QR Codes on electronic tickets, badges and invitations. Share schedules, event maps and important information instantly.',
    'seo.useCases.education.title': 'Education and Training',
    'seo.useCases.education.desc': 'Teachers and instructors can use QR Codes to share study materials, links to educational videos, online quizzes and additional resources. Make learning more interactive and accessible.',
    'seo.useCases.retail.title': 'Retail and E-commerce',
    'seo.useCases.retail.desc': 'Add QR Codes to products for additional information, instruction manuals, demo videos or customer reviews. Use in storefronts for direct smartphone purchases, facilitating omnichannel sales.',
    'seo.useCases.realestate.title': 'Real Estate',
    'seo.useCases.realestate.desc': 'Place QR Codes on "For Sale" or "For Rent" signs so interested parties can instantly access photos, virtual tours, complete property information and contact forms, even outside business hours.',
    
    'seo.howTo.title': 'How to Create a QR Code?',
    'seo.howTo.step1.title': 'Choose the content type',
    'seo.howTo.step1.desc': 'Select from URL, WhatsApp, PIX, vCard, Wi-Fi, Email, Bitcoin, or any other supported type. Our tool offers more than 15 different types of QR Codes.',
    'seo.howTo.step2.title': 'Fill in the information',
    'seo.howTo.step2.desc': 'Enter the necessary data in the corresponding fields. For URLs, type the complete address. For PIX, inform your key, name and city. The form automatically adapts to the chosen type.',
    'seo.howTo.step3.title': 'Customize the design',
    'seo.howTo.step3.desc': 'Adjust the QR Code and background colors, choose the module format (squares, dots or rounded), set the size and error correction level according to your needs.',
    'seo.howTo.step4.title': 'Download and use',
    'seo.howTo.step4.desc': 'Choose the export format (PNG, JPG, SVG or PDF) and download. Your QR Code is ready to be used in printed materials, digital or shared on social networks.',
    
    'seo.faq.title': 'Frequently Asked Questions (FAQ)',
    'seo.faq.q1.question': 'Is the QR Code generator really free?',
    'seo.faq.q1.answer': 'Yes! Our QR Code generator is 100% free, with no usage limits, no registration required and no watermarks. You can create as many QR Codes as you want for personal or commercial use.',
    'seo.faq.q2.question': 'Do the generated QR Codes expire?',
    'seo.faq.q2.answer': 'No! The generated QR Codes are static and permanent. Once created, they will work forever, as long as the linked content (such as a URL) remains accessible. There is no expiration date.',
    'seo.faq.q3.question': 'Is my information stored on the server?',
    'seo.faq.q3.answer': 'No. All QR Codes are generated locally in your browser using JavaScript. No information is sent to our servers, ensuring complete privacy and security of your data. Visit qrcode.gabireze.cloud and create your codes securely.',
    'seo.faq.q4.question': 'Which format should I choose for printing?',
    'seo.faq.q4.answer': 'For high-quality printing, we recommend SVG (vector) or PNG with a minimum size of 512px. The PDF format is also excellent for printed documents. For large prints (banners, posters), use 1024px or SVG.',
    'seo.faq.q5.question': 'What is error correction (ECC)?',
    'seo.faq.q5.answer': 'Error correction allows the QR Code to be read even if partially damaged or dirty. Levels: L (7%), M (15%), Q (25%), H (30%). The higher the level, the more resistant, but the code becomes denser.',
    'seo.faq.q6.question': 'Can I use custom colors on the QR Code?',
    'seo.faq.q6.answer': 'Yes! You can customize both the QR Code color and the background color. However, make sure to use colors with good contrast (dark on light or vice versa) to ensure correct reading by scanners.',
    'seo.faq.q7.question': 'What is the recommended minimum size?',
    'seo.faq.q7.answer': 'For business cards, use a minimum of 2x2 cm (256px). For posters and banners, 10x10 cm or more (512-1024px). The ideal reading distance is approximately 10 times the size of the QR Code.',
    'seo.faq.q8.question': 'Can I track how many times my QR Code was scanned?',
    'seo.faq.q8.answer': 'Static QR Codes (generated by this tool) do not have tracking. To track scans, you can use a URL shortener with analytics (like Bitly) and create a QR Code with that shortened URL.',
    
    'seo.tips.title': 'Tips for Creating Efficient QR Codes',
    'seo.tips.shortUrls.title': 'Use Short URLs',
    'seo.tips.shortUrls.desc': 'Shorter URLs generate less dense QR Codes that are easier to scan. Use URL shorteners when necessary to improve readability.',
    'seo.tips.test.title': 'Test Before Printing',
    'seo.tips.test.desc': 'Always test your QR Code with different reading apps and smartphones before printing in large quantities. Check if all information is correct.',
    'seo.tips.contrast.title': 'Contrast is Important',
    'seo.tips.contrast.desc': 'Maintain good contrast between the QR Code and the background. Ideally use dark colors on light backgrounds. Avoid very similar colors that can make reading difficult.',
    'seo.tips.size.title': 'Appropriate Size',
    'seo.tips.size.desc': 'Consider the reading distance. For close viewing (cards), 2-3 cm is sufficient. For greater distances (billboards), increase the size proportionally.',
    
    'seo.footer.about.title': 'About the QR Code Generator',
    'seo.footer.about.desc': 'Free and complete tool to create custom QR Codes online. Support for various formats including URLs, WhatsApp, PIX, vCard, Wi-Fi, cryptocurrencies and much more. Export in PNG, JPG, SVG or PDF.',
    'seo.footer.formats.title': 'Supported Formats',
    'seo.footer.formats.item1': '• URLs and Links',
    'seo.footer.formats.item2': '• WhatsApp and SMS',
    'seo.footer.formats.item3': '• PIX and Payments',
    'seo.footer.formats.item4': '• vCard and MeCard',
    'seo.footer.formats.item5': '• Wi-Fi and Networks',
    'seo.footer.formats.item6': '• Bitcoin, Ethereum, Litecoin',
    'seo.footer.formats.item7': '• Email and Phone',
    'seo.footer.formats.item8': '• Events and Location',
    'seo.footer.resources.title': 'Features',
    'seo.footer.resources.item1': '✓ 100% Free',
    'seo.footer.resources.item2': '✓ No usage limits',
    'seo.footer.resources.item3': '✓ Complete customization',
    'seo.footer.resources.item4': '✓ Multiple export formats',
    'seo.footer.resources.item5': '✓ High quality (up to 1024px)',
    'seo.footer.resources.item6': '✓ No watermark',
    'seo.footer.resources.item7': '✓ Privacy guaranteed',
    'seo.footer.copyright': '© 2025 QR Code Generator - Developed by',
    'seo.footer.tagline': 'QR Code Generator | Free Online QR Code Maker | Create QR Code'
  }
};

// i18n Class
class I18n {
  constructor() {
    this.currentLanguage = this.detectLanguage();
    this.translations = translations;
  }
  
  // Detect browser language
  detectLanguage() {
    const browserLang = navigator.language || navigator.userLanguage;
    
    // Check if it's Portuguese (Brazil)
    if (browserLang.toLowerCase().startsWith('pt')) {
      return 'pt-BR';
    }
    
    // Default to English for all other languages
    return 'en';
  }
  
  // Get translation
  t(key) {
    const lang = this.currentLanguage;
    return this.translations[lang]?.[key] || this.translations['en']?.[key] || key;
  }
  
  // Set language
  setLanguage(lang) {
    if (this.translations[lang]) {
      this.currentLanguage = lang;
      this.updatePage();
      this.saveLanguagePreference(lang);
    }
  }
  
  // Get current language
  getLanguage() {
    return this.currentLanguage;
  }
  
  // Save language preference
  saveLanguagePreference(lang) {
    try {
      localStorage.setItem('qr-generator-lang', lang);
    } catch (e) {
      console.warn('Could not save language preference:', e);
    }
  }
  
  // Load language preference
  loadLanguagePreference() {
    try {
      const savedLang = localStorage.getItem('qr-generator-lang');
      if (savedLang && this.translations[savedLang]) {
        this.currentLanguage = savedLang;
        return savedLang;
      }
    } catch (e) {
      console.warn('Could not load language preference:', e);
    }
    return null;
  }
  
  // Update page content
  updatePage() {
    // Update HTML lang attribute
    document.documentElement.lang = this.currentLanguage;
    
    // Update title
    document.title = this.t('meta.title');
    
    // Update meta tags
    this.updateMetaTag('name', 'description', this.t('meta.description'));
    this.updateMetaTag('name', 'keywords', this.t('meta.keywords'));
    this.updateMetaTag('property', 'og:title', this.t('meta.title'));
    this.updateMetaTag('property', 'og:description', this.t('meta.description'));
    this.updateMetaTag('name', 'twitter:title', this.t('meta.title'));
    this.updateMetaTag('name', 'twitter:description', this.t('meta.description'));
    this.updateMetaTag('property', 'og:locale', this.currentLanguage === 'pt-BR' ? 'pt_BR' : 'en_US');
    
    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
      const key = element.getAttribute('data-i18n');
      const translation = this.t(key);
      
      if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
        if (element.hasAttribute('placeholder')) {
          element.placeholder = translation;
        }
      } else {
        element.textContent = translation;
      }
    });
    
    // Update all elements with data-i18n-placeholder attribute
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
      const key = element.getAttribute('data-i18n-placeholder');
      element.placeholder = this.t(key);
    });
    
    // Update all elements with data-i18n-title attribute (tooltips)
    document.querySelectorAll('[data-i18n-title]').forEach(element => {
      const key = element.getAttribute('data-i18n-title');
      element.title = this.t(key);
    });
    
    // Dispatch event for custom updates
    window.dispatchEvent(new CustomEvent('languageChanged', {
      detail: { language: this.currentLanguage }
    }));
  }
  
  // Update meta tag
  updateMetaTag(attribute, name, content) {
    let meta = document.querySelector(`meta[${attribute}="${name}"]`);
    if (meta) {
      meta.setAttribute('content', content);
    }
  }
  
  // Initialize i18n
  init() {
    // Load saved language preference
    const savedLang = this.loadLanguagePreference();
    if (savedLang) {
      this.currentLanguage = savedLang;
    }
    
    // Update page
    this.updatePage();
    
    // Create language selector
    this.createLanguageSelector();
  }
  
  // Create language selector in header
  createLanguageSelector() {
    const header = document.querySelector('header .flex.items-center.gap-2');
    if (!header) return;
    
    const langSelector = document.createElement('div');
    langSelector.className = 'flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-800 border border-slate-700 cursor-pointer hover:border-slate-600 transition-colors';
    langSelector.setAttribute('role', 'button');
    langSelector.setAttribute('aria-label', 'Language selector');
    
    const icon = document.createElement('i');
    icon.className = 'fa-solid fa-language text-purple-400';
    
    const langText = document.createElement('span');
    langText.className = 'text-slate-300 text-xs sm:text-sm';
    langText.textContent = this.currentLanguage === 'pt-BR' ? 'PT' : 'EN';
    
    langSelector.appendChild(icon);
    langSelector.appendChild(langText);
    
    // Toggle language on click
    langSelector.addEventListener('click', () => {
      const newLang = this.currentLanguage === 'pt-BR' ? 'en' : 'pt-BR';
      this.setLanguage(newLang);
      langText.textContent = newLang === 'pt-BR' ? 'PT' : 'EN';
    });
    
    header.appendChild(langSelector);
  }
}

// Export i18n instance
const i18n = new I18n();

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => i18n.init());
} else {
  i18n.init();
}

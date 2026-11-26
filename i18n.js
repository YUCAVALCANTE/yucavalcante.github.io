// Troca de idioma da página inicial (português ⇄ inglês).
//
// O português fica no próprio index.html. Aqui está a tradução de cada texto, com o texto em
// português como chave. Ao mudar um texto no index.html, mude a chave aqui também; um texto sem
// tradução continua aparecendo em português no modo inglês, sem quebrar nada.
// Títulos dos artigos do Medium não são traduzidos (cada um já está no idioma em que foi escrito).
(function () {
  const EN = {
    // Navegação e abertura
    'Sobre': 'About',
    'Habilidades': 'Skills',
    'Projetos': 'Projects',
    'Textos': 'Writing',
    'Contato': 'Contact',
    'Seções': 'Sections',
    'Idioma': 'Language',
    'Ir para Sobre': 'Go to About',
    'Olá, eu sou Yury Cavalcante': "Hi, I'm Yury Cavalcante",
    'Business Intelligence · Data Analytics · Data Science · Inteligência Artificial': 'Business Intelligence · Data Analytics · Data Science · Artificial Intelligence',
    'Minha trajetória profissional combina negócios, dados e tecnologia. Trabalho com inteligência comercial, análise de desempenho e desenvolvimento de soluções analíticas.':
      'My career brings together business, data and technology. I work in sales intelligence, performance analysis and building analytical solutions.',
    'Neste espaço, compartilho projetos, estudos e experimentos que refletem minha curiosidade por dados, programação e inteligência artificial.':
      'Here I share projects, studies and experiments that reflect my curiosity about data, programming and artificial intelligence.',
    'Ver projetos': 'View projects',
    'Ler os textos': 'Read my writing',

    // Sobre
    'Sobre mim': 'About me',
    'Mestre em Gestão de Projetos, com formação em Administração e especializações em Business Intelligence, Big Data e Business Analytics.':
      "Master's in Project Management, with a degree in Business Administration and specializations in Business Intelligence, Big Data and Business Analytics.",
    'Entre negócios, dados e tecnologia': 'Between business, data and technology',
    'Sou um profissional de dados com experiência em inteligência de negócios, planejamento e analytics, tendo atuado em diferentes setores, como aviação, bens de consumo e bebidas.':
      "I'm a data professional with experience in business intelligence, planning and analytics, having worked across industries such as aviation, consumer goods and beverages.",
    'Atualmente, trabalho como Sales Intelligence Specialist na Red Bull Brasil, com foco em inteligência comercial, análise de performance e desenvolvimento de soluções de dados para o negócio.':
      'I currently work as a Sales Intelligence Specialist at Red Bull Brasil, focused on sales intelligence, performance analysis and building data solutions for the business.',
    'Minha formação em gestão influencia diretamente a maneira como trabalho com tecnologia. Tenho interesse não apenas na construção de soluções técnicas, mas também em compreender o contexto, os desafios e as decisões que existem por trás dos dados.':
      'My management background directly shapes how I work with technology. I care not only about building technical solutions, but also about understanding the context, the challenges and the decisions behind the data.',
    'Fora do ambiente corporativo, desenvolvo projetos independentes, estudo novas tecnologias e escrevo no Medium. Meus interesses também passam por fotografia, arquitetura, cinema e literatura.':
      "Outside work, I build independent projects, study new technologies and write on Medium. I'm also into photography, architecture, film and literature.",
    'Inteligência comercial, análise de performance, indicadores de negócio, planejamento e desenvolvimento de soluções analíticas.':
      'Sales intelligence, performance analysis, business KPIs, planning and building analytical solutions.',
    'Integração, transformação e governança de dados, construção de pipelines e automação de processos analíticos.':
      'Data integration, transformation and governance, building pipelines and automating analytical processes.',
    'Modelagem estatística, machine learning, séries temporais, visão computacional e experimentação com novas tecnologias.':
      'Statistical modeling, machine learning, time series, computer vision and experimenting with new technologies.',

    // Habilidades
    'Habilidades técnicas': 'Technical skills',
    'As ferramentas e onde cada uma foi usada nos projetos abaixo.': 'The tools, and where each one was used in the projects below.',
    'Linguagens': 'Languages',
    'todos os projetos': 'every project',
    'comércio exterior': 'foreign trade',
    'painéis, agente, algoritmos genéticos': 'dashboards, game agent, genetic algorithms',
    'Machine learning e IA': 'Machine learning and AI',
    'LightGBM e SHAP': 'LightGBM and SHAP',
    'atrasos de voos': 'flight delays',
    'YOLOv8 e ONNX': 'YOLOv8 and ONNX',
    'agente que joga': 'game-playing agent',
    'PyTorch e Transformers.js': 'PyTorch and Transformers.js',
    'LLMs por dentro': 'LLMs from the inside',
    'Algoritmos genéticos': 'Genetic algorithms',
    'carros que evoluem': 'evolving cars',
    'Dados e engenharia': 'Data and engineering',
    'DuckDB e dbt': 'DuckDB and dbt',
    'Pandas e Polars': 'Pandas and Polars',
    'estudos e artigos': 'studies and articles',
    'Comex Stat e ANAC': 'Comex Stat and ANAC',
    'bases públicas usadas': 'public datasets used',
    'Entrega': 'Delivery',
    'FastAPI e Docker': 'FastAPI and Docker',
    'Web Worker e Playwright': 'Web Worker and Playwright',
    'este site e os painéis': 'this site and the dashboards',

    // Projetos
    'Cada projeto tem um painel interativo para explorar os dados e o código aberto no GitHub.': 'Each project has an interactive dashboard to explore the data, and open-source code on GitHub.',
    'Abrir painel →': 'Open dashboard →',
    'Código': 'Code',
    'Artigo': 'Article',

    'Voos do período de teste em 10 faixas de risco previsto: quantos de fato atrasaram': 'Test-period flights in 10 bands of predicted risk: how many were actually late',
    'Taxa real de atraso por faixa de risco, de 5% a 42%': 'Actual delay rate by risk band, from 5% to 42%',
    'Atrasos de voos no Brasil': 'Flight delays in Brazil',
    'Qual a chance de um voo chegar com mais de 15 minutos de atraso? Modelo treinado com os microdados da ANAC e testado em meses que nunca viu.':
      "What are the odds a flight arrives more than 15 minutes late? A model trained on ANAC's microdata and tested on months it never saw.",
    '2,5 mi': '2.5 M',
    'voos analisados': 'flights analyzed',
    '0,73': '0.73',
    'ROC-AUC prevendo 2h antes': 'ROC-AUC predicting 2h ahead',
    'mais atraso no maior risco': 'more delays in the highest-risk band',

    'Exportações brasileiras de bens por ano, em US$ bilhões FOB: histórico e projeção até 2030': 'Brazilian goods exports per year, in US$ billions FOB: history and forecast to 2030',
    'Exportações anuais de 1997 a 2025 e projeção até 2030': 'Annual exports from 1997 to 2025 and forecast to 2030',
    'séries temporais · TCC': 'time series · thesis',
    'Comércio exterior brasileiro até 2030': 'Brazilian foreign trade to 2030',
    'Qual modelo projeta melhor exportações e importações? Três métodos comparados em validação temporal desde 1997, com faixas de erro empíricas.':
      'Which model best forecasts exports and imports? Three methods compared with time-based validation since 1997, with empirical error bands.',
    '30 anos': '30 years',
    'de série mensal oficial': 'of official monthly data',
    '381 bi': '381 B',
    'US$ em exportações projetadas em 2030': 'US$ in projected exports in 2030',
    'erro no teste de 4 anos à frente': 'error on the 4-years-ahead test',

    'Aeroportos que mais exportam, em US$ bilhões FOB (jan/2023 a out/2026)': 'Top exporting airports, in US$ billions FOB (Jan 2023 to Oct 2026)',
    'Cinco aeroportos com maior valor exportado': 'Five airports with the highest export value',
    'análise de dados': 'data analysis',
    'Exportações aéreas por aeroporto': 'Air exports by airport',
    'O que o Brasil exporta de avião, por onde sai e para onde vai. Busque um produto, escolha o aeroporto e veja a curva mensal e a projeção.':
      'What Brazil exports by air, where it leaves from and where it goes. Search a product, pick an airport and see the monthly curve and the forecast.',
    '7.533': '7,533',
    'produtos (códigos NCM)': 'products (NCM codes)',
    'meses de dados': 'months of data',
    'unidades de embarque': 'shipping points',

    'Que nome um detector pronto (COCO) dá às aves de papel do jogo, em 2.462 aves de teste': "What an off-the-shelf detector (COCO) calls the game's paper birds, across 2,462 test birds",
    '59% não detectadas, 40% chamadas de kite e só 1 chamada de bird': '59% not detected, 40% called kite and only 1 called bird',
    'visão computacional': 'computer vision',
    'Como uma IA enxerga um jogo e decide onde clicar': 'How an AI sees a game and decides where to click',
    'Um agente que só vê os pixels de um jogo original, detecta os alvos com YOLOv8 no seu navegador e decide onde atirar. Detector pronto contra detector treinado no jogo, e quanto a latência custa.':
      'An agent that only sees the pixels of an original game, detects targets with YOLOv8 in your browser and decides where to shoot. Off-the-shelf detector versus one trained on the game, and what latency costs.',
    '5 mil': '5 K',
    'quadros rotulados pelo próprio jogo': 'frames labeled by the game itself',
    'de 2.462 aves o COCO chamou de "bird"': 'of 2,462 birds COCO called "bird"',
    '0,27': '0.27',
    'AP@0,5 do COCO tratando bird/kite como alvo': 'COCO AP@0.5 counting bird/kite as target',
    'Jogar com o agente →': 'Play with the agent →',

    'Melhor carro encontrado com as mesmas 1.200 avaliações, em metros sem capotar (média de 5 sementes)': 'Best car found with the same 1,200 evaluations, in meters without flipping (mean of 5 seeds)',
    'Algoritmo genético 235 m, busca aleatória 213 m, hill climbing 187 m': 'Genetic algorithm 235 m, random search 213 m, hill climbing 187 m',
    'algoritmos genéticos': 'genetic algorithms',
    'Carros que ninguém projetou': 'Cars nobody designed',
    'Uma população de carros 2D evolui numa pista, ao vivo no seu navegador. Ninguém programou como um bom carro deve ser, só o que conta como bom. Com experimentos sobre aptidão mal formulada, diversidade, generalização e linhas de base.':
      'A population of 2D cars evolves on a track, live in your browser. Nobody programmed what a good car looks like, only what counts as good. With experiments on badly specified fitness, diversity, generalization and baselines.',
    'Algoritmo genético': 'Genetic algorithm',
    'Simulação determinística': 'Deterministic simulation',
    'genes descrevem cada carro': 'genes describe each car',
    '3 de 5': '3 of 5',
    'campeões da aptidão errada andam de cabeça para baixo': 'winners under the wrong fitness drive upside down',
    'de distância em pistas nunca vistas': 'distance on unseen tracks',
    'Ver a evolução →': 'Watch it evolve →',

    'Quantos tokens o português gasta para cada token do inglês, mesmo texto (960 trechos do WMT24++)': 'How many Portuguese tokens per English token, same text (960 WMT24++ passages)',
    'GPT-2 inglês 1,74 vezes, Qwen2.5 1,35, GPT-4o 1,15 e GPT-2 português 0,72': 'English GPT-2 1.74×, Qwen2.5 1.35, GPT-4o 1.15 and Portuguese GPT-2 0.72',
    'modelos de linguagem': 'language models',
    'LLMs não pensam em palavras': "LLMs don't think in words",
    'Um GPT-2 em português rodando inteiro no seu navegador: veja os tokens, os vetores, a atenção de cada camada e as probabilidades do próximo token, com temperatura, top-k e top-p. Os números do artigo, agora medidos num modelo de verdade.':
      "A Portuguese GPT-2 running entirely in your browser: see the tokens, the vectors, each layer's attention and the next-token probabilities, with temperature, top-k and top-p. The article's numbers, now measured on a real model.",
    '124 mi': '124 M',
    'parâmetros rodando no navegador': 'parameters running in the browser',
    '1 camada': '1 layer',
    'basta para separar 83% dos sentidos de "banco"': 'is enough to separate 83% of the senses of "banco" (bank/bench)',
    'da atenção vai para o 1º token, que pesa 5%': 'of attention goes to the 1st token, which carries 5%',
    'Ver por dentro →': 'Look inside →',

    // Mais no GitHub
    'Mais no GitHub': 'More on GitHub',
    'Projetos a caminho e estudos com código': 'Projects on the way and studies with code',
    'Em construção': 'In progress',
    'em construção': 'in progress',
    'RAG com avaliação quantitativa': 'RAG with quantitative evaluation',
    'Perguntas e respostas sobre documentos públicos com busca híbrida, reranker e citação da fonte, medindo recuperação e fidelidade das respostas.':
      'Question answering over public documents with hybrid search, a reranker and source citations, measuring retrieval and answer faithfulness.',
    'Previsão com deep learning': 'Forecasting with deep learning',
    'Séries temporais em PyTorch, comparando LSTM e Transformer com modelos clássicos, com dados externos e intervalos de incerteza.':
      'Time series in PyTorch, comparing LSTM and Transformer with classical models, using external data and uncertainty intervals.',
    'Estudos com código': 'Studies with code',
    'Tutoriais do LinkedIn': 'LinkedIn tutorials',
    'Código dos artigos, como "Previsão Não É Magia" e árvores de decisão do zero com Polars.': 'Code for the articles, such as "Previsão Não É Magia" (Forecasting Isn\'t Magic) and decision trees from scratch with Polars.',
    'Gráficos do artigo sobre visualização de dados com Python.': 'Charts from the article on data visualization with Python.',
    'Receita de bagagem extra com Pandas e ML; comparação entre SHAP e LIME.': 'Extra-baggage revenue with Pandas and ML; SHAP vs. LIME comparison.',
    'Fundamentos de machine learning: árvores, SVM, KNN, PCA, clusterização e viés-variância.': 'Machine learning fundamentals: trees, SVM, KNN, PCA, clustering and bias-variance.',

    // Textos (a seção é gerada por scripts/atualizar_artigos.py)
    'Ver tudo no Medium': 'See everything on Medium',
    'Categorias de textos': 'Writing categories',
    'Deep learning, IA e RAG': 'Deep learning, AI and RAG',
    'IA e escrita': 'AI and writing',
    'Data science e dados': 'Data science and data',
    'Python e programação': 'Python and programming',
    'Gestão e negócios': 'Management and business',
    'Crônicas pessoais': 'Personal essays',
    'Contos': 'Fiction',
    'Algoritmos explicados pela intuição e pela geometria: regressão, árvores, SVM, KNN, clusterização, anomalias e explicabilidade.': 'Algorithms explained through intuition and geometry: regression, trees, SVM, KNN, clustering, anomalies and explainability.',
    'Redes neurais, sistemas de recomendação, RAG e previsão com deep learning, sem mágica.': 'Neural networks, recommender systems, RAG and deep learning forecasting, no magic.',
    'Detectores de IA, autoria, marcas d’água e como usar IA para editar sem perder a própria voz.': 'AI detectors, authorship, watermarks, and how to edit with AI without losing your own voice.',
    'Carreira, arquitetura de dados, governança, bancos NoSQL e por que projetos de dados falham.': 'Career, data architecture, governance, NoSQL databases, and why data projects fail.',
    'Tutoriais de Python para dados (Pandas, NumPy, Polars, Matplotlib, Seaborn, séries temporais) e a passagem de Python para JavaScript.': 'Python tutorials for data (Pandas, NumPy, Polars, Matplotlib, Seaborn, time series) and the move from Python to JavaScript.',
    'Estudos de caso de estratégia e marketing.': 'Strategy and marketing case studies.',
    'Textos em primeira pessoa sobre saúde, rotina e recomeços.': 'First-person pieces about health, routine and starting over.',
    'Uma mensagem de áudio de uma amiga morta há treze anos': 'A voice message from a friend who died thirteen years ago',
    'Ficção em séries curtas, publicadas parte por parte. O link abre a primeira parte.': 'Short fiction serials, published part by part. The link opens part one.',
    'Uma história do universo de The People Who Look Away': 'A story set in the world of The People Who Look Away',
    'Inspirada em “Ugly” e “Lonely”, do 2NE1': 'Inspired by “Ugly” and “Lonely” by 2NE1',
    'As horas depois de uma má notícia e a decisão de transformar a solidão em culpa': 'The hours after bad news, and the choice to turn loneliness into guilt',
    'Inspirada em “Would’ve, Could’ve, Should’ve”': 'Inspired by “Would’ve, Could’ve, Should’ve”',
    'As versões de nós que deixamos para trás e as pessoas que se lembram delas': 'The versions of ourselves we leave behind, and the people who remember them',
    'Perda, um amor inacabado e o preço de voltar': 'Loss, an unfinished love, and the price of coming back',
    'Inspirada em “Delilah”, de Florence + the Machine': 'Inspired by “Delilah” by Florence + the Machine',

    // Certificações
    'Certificações': 'Certifications',
    '14 badges verificados no Credly. Clique em um para ver a verificação.': '14 verified badges on Credly. Click one to see its verification.',
    'Ver perfil no Credly': 'See Credly profile',
    'certificado profissional · avançado': 'professional certificate · advanced',
    'Programa de 10 cursos: ferramentas e metodologia, Python, SQL, análise e visualização de dados, machine learning e um projeto final aplicado.':
      'A 10-course program: tools and methodology, Python, SQL, data analysis and visualization, machine learning, and an applied capstone project.',

    // Trabalhos acadêmicos
    'Acadêmico': 'Academic',
    'Trabalhos acadêmicos': 'Academic work',
    'A pesquisa da pós em andamento e o projeto final da formação em ciência de dados da IBM.': "My ongoing graduate research and the final project of IBM's data science program.",
    'concluído': 'completed',
    'Pouso do Falcon 9: o capstone da IBM, revisitado': 'Falcon 9 landing: the IBM capstone, revisited',
    'Projeto final do IBM Data Science Professional Certificate': 'Final project of the IBM Data Science Professional Certificate',
    'Prever se o primeiro estágio do Falcon 9 volta inteiro, com dados da API da SpaceX, SQL, mapas, dashboard e quatro modelos. Revi o projeto com o que eu faria hoje: entender o rótulo, medir a incerteza e validar na ordem do tempo.':
      'Predicting whether the Falcon 9 first stage comes back in one piece, with SpaceX API data, SQL, maps, a dashboard and four models. I revisited it with what I would do today: understand the label, measure uncertainty and validate in time order.',
    'Ver o projeto revisitado →': 'See the revisited project →',
    'em desenvolvimento': 'in progress',
    'Unicamp · Faculdade de Tecnologia · 2026': 'Unicamp · School of Technology · 2026',
    'A Geometria dos Dados': 'The Geometry of Data',
    'Pós-graduação em Engenharia e Administração de Banco de Dados': 'Graduate program in Database Engineering and Administration',
    'Como a geometria dos dados (dimensionalidade intrínseca e espaços métricos) pode reduzir o custo das consultas em bancos de dados vetoriais sem perder qualidade na recuperação. A avaliação experimental usa 2,68 milhões de textos da Wikipédia (Natural Questions / BEIR) representados em vetores de 384 dimensões.':
      'How the geometry of data (intrinsic dimensionality and metric spaces) can lower query cost in vector databases without losing retrieval quality. The experiments use 2.68 million Wikipedia passages (Natural Questions / BEIR) represented as 384-dimensional vectors.',
    'Bancos de dados vetoriais': 'Vector databases',
    'Espaços métricos': 'Metric spaces',
    'Redução de dimensionalidade': 'Dimensionality reduction',

    // Experiência e formação
    'em andamento': 'in progress',
    'Experiência': 'Experience',
    'Desde 2007 trabalhando com dados em telecomunicações, aviação, bens de consumo, bebidas e educação.': 'Working with data since 2007 in telecom, aviation, consumer goods, beverages and education.',
    'Inteligência comercial, análise de performance e desenvolvimento de soluções de dados para o negócio.': 'Sales intelligence, performance analysis and building data solutions for the business.',
    'mar/2026 – atual': 'Mar 2026 – present',
    'jan/2025 – mar/2026': 'Jan 2025 – Mar 2026',
    'Indicadores de receita não aeronáutica e comerciais do Aeroporto de Salvador, como gasto e receita por passageiro, yield e taxa de ocupação, e acompanhamento do plano de negócios de longo prazo.': 'Non-aeronautical revenue and commercial KPIs for Salvador Airport, such as spend and revenue per passenger, yield and occupancy rate, and tracking of the long-term business plan.',
    'mai/2021 – dez/2024': 'May 2021 – Dec 2024',
    'KPIs do canal de recarga na Bahia, painel diário de resultados dos distribuidores e definição de metas de vendas a partir do histórico e das comissões.': 'Recharge channel KPIs in Bahia, a daily distributor results dashboard, and sales targets set from historical data and commissions.',
    'fev/2017 – mai/2021': 'Feb 2017 – May 2021',
    'Painéis de indicadores acadêmicos, de RH e financeiros, e acompanhamento de rankings e avaliações como QS Stars, ENADE e IGC.': 'Dashboards of academic, HR and financial indicators, and tracking of rankings and assessments such as QS Stars, ENADE and IGC.',
    'Analista de dados · indicadores internacionais de educação': 'Data Analyst · international education KPIs',
    'jul/2016 – jan/2017': 'Jul 2016 – Jan 2017',
    'Início de carreira (2007 a 2016)': 'Early career (2007 to 2016)',
    'Auditorias SOX e ISO 9001 e acompanhamento do plano de negócios nas regionais Bahia/Sergipe, Nordeste e São Paulo.': 'SOX and ISO 9001 audits and business plan monitoring across the Bahia/Sergipe, Northeast and São Paulo regions.',
    'Auditor interno · dados e KPIs': 'Internal Auditor · data and KPIs',
    'mar/2015 – mar/2016': 'Mar 2015 – Mar 2016',
    'Indicadores de vendas, churn e portabilidade, metas e abastecimento dos centros de distribuição do Pará, Amazonas e Maranhão, e controle do orçamento regional.': 'Sales, churn and portability KPIs, targets and supply for distribution centers in Pará, Amazonas and Maranhão, and regional budget control.',
    'Analista de dados · BI e inteligência comercial': 'Data Analyst · BI and commercial intelligence',
    'dez/2012 – fev/2015': 'Dec 2012 – Feb 2015',
    'Análise por ponto de venda, participação de mercado e preços com dados Nielsen, e apoio ao orçamento e ao P&L da área comercial.': 'Point-of-sale analysis, market share and pricing with Nielsen data, and support for the commercial budget and P&L.',
    'Analista de dados · performance comercial': 'Data Analyst · commercial performance',
    'abr/2011 – nov/2012': 'Apr 2011 – Nov 2012',
    'Auditorias de sistemas de qualidade em montadoras e inspeções para os bancos das montadoras.': 'Quality system audits at automakers and inspections for automaker banks.',
    'Auditor de certificação · indústria automotiva': 'Certification Auditor · automotive industry',
    'set/2010 – abr/2011': 'Sep 2010 – Apr 2011',
    'Painéis de controle gerencial e indicadores de qualidade (Seis Sigma e metas da Anatel).': 'Management dashboards and quality indicators (Six Sigma and Anatel targets).',
    'Estagiário de análise de dados · Qualidade': 'Data Analysis Intern · Quality',
    'nov/2008 – out/2010': 'Nov 2008 – Oct 2010',
    'Indicadores de qualidade e implantação da ISO 9001 na área de licitações.': 'Quality indicators and ISO 9001 implementation in the bidding department.',
    'Estagiário de análise de dados · Licitações': 'Data Analysis Intern · Bidding',
    'mai/2007 – out/2008': 'May 2007 – Oct 2008',
    'Formação e estudos': 'Education and studies',
    'O que estou estudando agora e as especializações que já concluí.': 'What I am studying now and the specializations I have completed.',
    'Estudando agora': 'Studying now',
    'Especialização em Engenharia e Administração de Banco de Dados': 'Specialization in Database Engineering and Administration',
    'abr/2025 – mai/2027': 'Apr 2025 – May 2027',
    'Especialização em Engenharia de Software com IA Aplicada': 'Specialization in Software Engineering with Applied AI',
    'set/2026 – out/2027': 'Sep 2026 – Oct 2027',
    'Pós-graduação em Market Intelligence & Decision-Making': 'Graduate program in Market Intelligence & Decision-Making',
    'Especializações concluídas': 'Completed specializations',
    '4 cursos': '4 courses',
    'jan/2024 – ago/2024': 'Jan 2024 – Aug 2024',
    '5 cursos': '5 courses',
    'jul/2023 – jan/2024': 'Jul 2023 – Jan 2024',
    'Ver o projeto final revisitado →': 'See the revisited final project →',
    'Outras certificações': 'Other certifications',
    'Idiomas': 'Languages',
    'Português (nativo)': 'Portuguese (native)',
    'Inglês (profissional)': 'English (full professional)',
    'Espanhol (básico)': 'Spanish (elementary)',
    'Formação': 'Education',

    // Contato e rodapé
    'Vamos conversar': "Let's talk",
    'Para conversar sobre dados, vagas ou projetos, me chame no LinkedIn. Todo o código está no GitHub.': 'To talk about data, roles or projects, reach me on LinkedIn. All the code is on GitHub.',
    'Ciência de dados e machine learning com dados públicos brasileiros, avaliação honesta e código aberto.': 'Data science and machine learning with Brazilian public data, honest evaluation and open-source code.',
    'Painéis': 'Dashboards',
    'Atrasos de voos': 'Flight delays',
    'Comércio exterior': 'Foreign trade',
    'Agente que joga': 'Game-playing agent',
    'Dados públicos da ANAC e do Comex Stat (MDIC); o agente de visão computacional usa dados gerados pelo próprio jogo. Página feita à mão, sem rastreadores.':
      'Public data from ANAC and Comex Stat (MDIC); the computer vision agent uses data generated by the game itself. Handmade page, no trackers.',

    // Rótulos dos mini gráficos (desenhados por JavaScript)
    'menor risco': 'lowest risk',
    'maior risco': 'highest risk',
    'não detectada': 'not detected',
    'ave': 'bird',
    'aves': 'birds',
    'Busca aleatória': 'Random search',
    'GPT-2 (inglês)': 'GPT-2 (English)',
    'GPT-2 português': 'GPT-2 Portuguese',
  };

  // Páginas internas podem trazer os próprios textos (window.I18N_EXTRA) antes de carregar este arquivo
  Object.assign(EN, window.I18N_EXTRA || {});

  const MESES = { jan: 'Jan', fev: 'Feb', mar: 'Mar', abr: 'Apr', mai: 'May', jun: 'Jun', jul: 'Jul', ago: 'Aug', set: 'Sep', out: 'Oct', nov: 'Nov', dez: 'Dec' };
  const mes = (m, a) => `${MESES[m] || m} ${a}`;
  // Textos com números que mudam sempre que os artigos são atualizados
  const REGRAS = [
    [/^(\w{3})\/(\d{4})$/, (_, m, a) => mes(m, a)],
    [/^Coursera · IBM · (\w{3})\/(\d{4})$/, (_, m, a) => `Coursera · IBM · ${mes(m, a)}`],
    [/^(\w{3})\/(\d{4}) · (português|inglês)(?: · (\d+) partes)?$/, (_, m, a, l, p) =>
      `${mes(m, a)} · ${l === 'inglês' ? 'English' : 'Portuguese'}${p ? ` · ${p} parts` : ''}`],
    [/^(\d+) textos publicados no Medium, de (\w{3})\/(\d{4}) a (\w{3})\/(\d{4}): artigos técnicos, tutoriais, crônicas e contos\.$/, (_, n, m1, a1, m2, a2) =>
      `${n} pieces published on Medium, from ${mes(m1, a1)} to ${mes(m2, a2)}: technical articles, tutorials, essays and fiction.`],
  ];

  const traduz = (pt) => {
    if (Object.prototype.hasOwnProperty.call(EN, pt)) return EN[pt];
    for (const [re, fn] of REGRAS) if (re.test(pt)) return pt.replace(re, fn);
    return null;
  };

  const raiz = document.documentElement;
  const META = {
    pt: { title: document.title, desc: document.querySelector('meta[name="description"]').content },
    en: window.I18N_META_EN || { title: 'Yury Cavalcante · Data Science', desc: 'Portfolio of Yury Cavalcante: end-to-end projects in machine learning, computer vision, genetic algorithms, time series and data analysis, with honest evaluation and open-source code.' },
  };
  const originais = new Map();   // nó de texto → texto em português
  let idioma = 'pt';

  // Função usada pelos mini gráficos: traduz um rótulo e diz o idioma atual
  window.t = (s) => (idioma === 'en' ? traduz(s) ?? s : s);
  window.idioma = () => idioma;

  function aplicar(novo) {
    idioma = novo;
    raiz.lang = novo === 'en' ? 'en' : 'pt-BR';
    document.title = META[novo].title;
    document.querySelector('meta[name="description"]').content = META[novo].desc;

    const w = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode: (n) => (n.parentElement.closest('script, style, svg[data-viz], .txt-t') || !n.nodeValue.trim() ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT),
    });
    for (let n; (n = w.nextNode());) {
      if (!originais.has(n)) originais.set(n, n.nodeValue);
      const pt = originais.get(n);
      const chave = pt.replace(/\s+/g, ' ').trim();
      const en = novo === 'en' ? traduz(chave) : null;
      n.nodeValue = en == null ? pt : pt.replace(pt.trim(), () => en);   // mantém os espaços das pontas
    }
    for (const nome of ['aria-label', 'alt']) {
      for (const el of document.querySelectorAll(`[${nome}]`)) {
        const chave = el.getAttribute(`data-pt-${nome}`) ?? el.getAttribute(nome);
        if (!el.hasAttribute(`data-pt-${nome}`)) el.setAttribute(`data-pt-${nome}`, chave);
        el.setAttribute(nome, novo === 'en' ? traduz(chave) ?? chave : chave);
      }
    }
    for (const b of document.querySelectorAll('.lang button')) b.setAttribute('aria-pressed', String(b.dataset.lang === novo));
    document.dispatchEvent(new CustomEvent('idioma', { detail: novo }));
  }

  // Idioma inicial: ?lang= na URL, depois a escolha salva, depois o idioma do navegador
  const daUrl = new URLSearchParams(location.search).get('lang');
  let salvo = null;
  try { salvo = localStorage.getItem('idioma'); } catch (e) { /* armazenamento bloqueado */ }
  const inicial = ['pt', 'en'].includes(daUrl) ? daUrl
    : ['pt', 'en'].includes(salvo) ? salvo
    : (navigator.language || 'pt').toLowerCase().startsWith('pt') ? 'pt' : 'en';

  for (const b of document.querySelectorAll('.lang button')) {
    b.addEventListener('click', () => {
      aplicar(b.dataset.lang);
      try { localStorage.setItem('idioma', b.dataset.lang); } catch (e) { /* ignora */ }
      const u = new URL(location.href);
      if (u.searchParams.has('lang')) { u.searchParams.set('lang', b.dataset.lang); history.replaceState(null, '', u); }
    });
  }
  if (inicial !== 'pt') aplicar(inicial);
})();

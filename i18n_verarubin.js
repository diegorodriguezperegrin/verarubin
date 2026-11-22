/* =========================================================================
   COSMOS MATARÓ - DICCIONARIO i18n (ES / CA / EN)
   Para la aplicación de Alertas Vera C. Rubin / ZTF (index.html)
   ========================================================================= */
(function () {
  'use strict';

  const INFO_MODAL_CA = `
    <p><strong>Origen de les dades i filtratge del sistema
        <a href="https://alerce.science/" target="_blank">ALeRCE Broker</a> dels telescopis Vera Rubin/LSST i Zwicky Transient Facility (ZTF):</strong>
    </p>
    <p>Aquest giny avalua fins a 500 descobriments a ZTF i 100 a LSST per categoria. Per garantir el rendiment i evitar col·lapsar els servidors, <strong>el filtratge estricte s'aplica de forma local al navegador</strong>, seleccionant els 15 descobriments més probables per a cadascuna de les 6 categories a ambdós telescopis (màxim de 180 alertes simultànies). Els filtres dinàmics (límit de magnitud o classe) actuen a l'instant sobre aquesta mostra en memòria. Tota referenciació astromètrica posicional és <strong>ICRS (J2000)</strong>.</p>
    <p><strong>Estat operatiu de LSST:</strong> El telescopi Vera Rubin es troba en fase de proves i comissionament previ a l'inici del sondeig rutinari. Entre campanyes d'observació pública, el giny mostra les deteccions més recents registrades pel broker per permetre la seva exploració astromètrica.</p>
    <p><strong>Sobre els cometes:</strong> El classificador visual (<em>Stamp Classifier</em>) agrupa per defecte qualsevol roca interplanetària mòbil sota la classe <code>asteroid</code> fins a la seva confirmació o encreuament amb el catàleg del MPC (Minor Planet Center).</p>
    <p><strong>Glossari de classificació:</strong></p>
    <ul style="margin: 0 0 10px 20px; padding: 0;">
      <li><code>SN</code>: Supernova (explosió estel·lar).</li>
      <li><code>AGN</code>: Nucli Galàctic Actiu (forat negre supermassiu devorant matèria).</li>
      <li><code>VS</code>: Estel Variable (canvi intrínsec de brillantor).</li>
      <li><code>asteroid</code>: Asteroide / Cos menor del Sistema Solar.</li>
      <li><code>satellite</code>: Traça de satèl·lit artificial.</li>
      <li><code>bogus</code>: Falsa alarma o artefacte instrumental.</li>
    </ul>
  `;

  const INFO_MODAL_EN = `
    <p><strong>Data source and filtering from the
        <a href="https://alerce.science/" target="_blank">ALeRCE Broker</a> system for Vera Rubin/LSST and Zwicky Transient Facility (ZTF) telescopes:</strong>
    </p>
    <p>This widget evaluates up to 500 discoveries in ZTF and 100 in LSST per category. To ensure optimal performance and avoid overloading servers, <strong>strict filtering is applied locally in the browser</strong>, selecting the top 15 most probable discoveries for each of the 6 categories across both telescopes (maximum 180 simultaneous alerts). Dynamic filters (magnitude limit or class) act instantaneously on this in-memory sample. All positional astrometric referencing is <strong>ICRS (J2000)</strong>.</p>
    <p><strong>LSST Operational Status:</strong> The Vera Rubin telescope is currently in testing and commissioning prior to full routine survey operations. Between public observing campaigns, the widget displays the most recent detections logged by the broker to allow astrometric exploration.</p>
    <p><strong>Regarding Comets:</strong> The visual stamp classifier (<em>Stamp Classifier</em>) automatically groups moving interplanetary bodies under the <code>asteroid</code> class by default until confirmed or cross-matched against the MPC (Minor Planet Center) catalog.</p>
    <p><strong>Classification Glossary:</strong></p>
    <ul style="margin: 0 0 10px 20px; padding: 0;">
      <li><code>SN</code>: Supernova (stellar explosion).</li>
      <li><code>AGN</code>: Active Galactic Nucleus (supermassive black hole accreting matter).</li>
      <li><code>VS</code>: Variable Star (intrinsic brightness variations).</li>
      <li><code>asteroid</code>: Asteroid / Minor Solar System body.</li>
      <li><code>satellite</code>: Artificial satellite trail.</li>
      <li><code>bogus</code>: False alarm or instrumental artifact.</li>
    </ul>
  `;

  const EXACT_CA = {
    // Header
    'Descubrimientos': 'Descobriments',
    'recientes': 'recents',
    'Cargando datos iniciales...': 'Carregant dades inicials...',
    'Descubriendo alertas recientes...': 'Descobrint alertes recents...',
    'Actualizado hace un momento': 'Actualitzat fa un moment',
    'Sin alertas recientes': 'Sense alertes recents',
    'Error de conexión': 'Error de connexió',
    'Error al conectar con ALeRCE': 'Error en connectar amb ALeRCE',
    'Alertas actualizadas': 'Alertes actualitzades',

    // Botones de cabecera
    'Oscuro': 'Fosc',
    'Claro': 'Clar',
    'Info': 'Info',
    'Exportar CSV': 'Exportar CSV',
    'Alternar color de fondo (#EFEDE4 / Negro)': 'Alternar color de fons (#EFEDE4 / Negre)',
    'Cambiar a fondo negro': 'Canviar a fons negre',
    'Cambiar a fondo claro (#EFEDE4)': 'Canviar a fons clar (#EFEDE4)',
    'Información y guía de uso': 'Informació i guia d\'ús',
    'Exportar vista actual a CSV': 'Exportar vista actual a CSV',
    'Idioma': 'Idioma',
    'Español': 'Espanyol',
    'Castellano': 'Castellà',
    'Català': 'Català',
    'English': 'English',

    // Barra de herramientas / Chips
    'Clase:': 'Classe:',
    'Supernovas': 'Supernoves',
    'Asteroide': 'Asteroide',
    'Asteroides / Cuerpos menores': 'Asteroides / Cossos menors',
    'Núcleos Galácticos Activos': 'Nuclis Galàctics Actius',
    'Estrellas Variables': 'Estels Variables',
    'Falsa alarma o artefacto': 'Falsa alarma o artefacte',
    'Satélite': 'Satèl·lit',
    'Satélites artificiales': 'Satèl·lits artificials',
    'Coord:': 'Coord:',
    'Decimal (º)': 'Decimal (º)',
    'Sexagesimal': 'Sexagesimal',
    'Alternar formato de coordenadas (Decimal º / Sexagesimal)': 'Alternar format de coordenades (Decimal º / Sexagesimal)',
    'Alternar formato de coordenadas ecuatoriales': 'Alternar format de coordenades equatorials',
    '≤ Mag:': '≤ Mag:',
    '≤ Límite de magnitud': '≤ Límit de magnitud',

    // Columnas de la tabla
    'Telescopio': 'Telescopi',
    'ID Objeto': 'ID Objecte',
    'Clasificación': 'Classificació',
    'Magnitud': 'Magnitud',
    'Filtro': 'Filtre',
    'AR': 'AR',
    'Dec': 'Dec',
    'Fecha UTC': 'Data UTC',

    // Estados y tooltips de tabla
    'Cargando alertas desde ALeRCE...': 'Carregant alertes des d\'ALeRCE...',
    'No se encontraron alertas recientes en ALeRCE.': 'No s\'han trobat alertes recents a ALeRCE.',
    'Error al cargar datos remotos. Reintentando en el próximo ciclo...': 'Error en carregar dades remotes. Reintentant en el proper cicle...',
    'Obteniendo magnitud...': 'Obtenint magnitud...',
    'Obteniendo filtro...': 'Obtenint filtre...',
    'El explorador visual de ALeRCE aún no está disponible públicamente para objetos LSST': 'L\'explorador visual d\'ALeRCE encara no està disponible públicament per a objectes LSST',
    'Abrir simulador del cielo (Aladin)': 'Obrir simulador del cel (Aladin)',
    'Copiar coordenadas juntas para pegar en buscador de Stellarium': 'Copiar coordenades juntes per enganxar al cercador de Stellarium',
    'Desconocida': 'Desconeguda',
    'Supernova': 'Supernova',
    'Nucli Galàctic Actiu': 'Nucli Galàctic Actiu',
    'Estel Variable': 'Estel Variable',
    'Falsa Alarma (Bogus)': 'Falsa Alarma (Bogus)',
    'Satèl·lit Artificial': 'Satèl·lit Artificial',

    // Modal
    'Guía técnica y alertas astronómicas ALeRCE': 'Guia tècnica i alertes astronòmiques ALeRCE',
    '📋 Copiar texto': '📋 Copiar text',
    '✓ ¡Copiado!': '✓ Copiat!',
    'Copiar todo el texto de la guía al portapapeles': 'Copiar tot el text de la guia al porta-retalls',
    'Cerrar ventana (Esc)': 'Tancar finestra (Esc)',

    // Alertas y CSV
    'No hay datos cargados para exportar.': 'No hi ha dades carregades per exportar.'
  };

  const EXACT_EN = {
    // Header
    'Descubrimientos': 'Discoveries',
    'recientes': 'recent',
    'Cargando datos iniciales...': 'Loading initial data...',
    'Descubriendo alertas recientes...': 'Discovering recent alerts...',
    'Actualizado hace un momento': 'Updated just now',
    'Sin alertas recientes': 'No recent alerts',
    'Error de conexión': 'Connection error',
    'Error al conectar con ALeRCE': 'Error connecting to ALeRCE',
    'Alertas actualizadas': 'Alerts updated',

    // Botones de cabecera
    'Oscuro': 'Dark',
    'Claro': 'Light',
    'Info': 'Info',
    'Exportar CSV': 'Export CSV',
    'Alternar color de fondo (#EFEDE4 / Negro)': 'Toggle background color (#EFEDE4 / Black)',
    'Cambiar a fondo negro': 'Switch to black background',
    'Cambiar a fondo claro (#EFEDE4)': 'Switch to light background (#EFEDE4)',
    'Información y guía de uso': 'Information and user guide',
    'Exportar vista actual a CSV': 'Export current view to CSV',
    'Idioma': 'Language',
    'Español': 'Spanish',
    'Castellano': 'Spanish',
    'Català': 'Catalan',
    'English': 'English',

    // Barra de herramientas / Chips
    'Clase:': 'Class:',
    'Supernovas': 'Supernovae',
    'Asteroide': 'Asteroid',
    'Asteroides / Cuerpos menores': 'Asteroids / Minor bodies',
    'Núcleos Galácticos Activos': 'Active Galactic Nuclei',
    'Estrellas Variables': 'Variable Stars',
    'Falsa alarma o artefacto': 'False alarm or artifact',
    'Satélite': 'Satellite',
    'Satélites artificiales': 'Artificial satellites',
    'Coord:': 'Coord:',
    'Decimal (º)': 'Decimal (°)',
    'Sexagesimal': 'Sexagesimal',
    'Alternar formato de coordenadas (Decimal º / Sexagesimal)': 'Toggle coordinate format (Decimal ° / Sexagesimal)',
    'Alternar formato de coordenadas ecuatoriales': 'Toggle equatorial coordinate format',
    '≤ Mag:': '≤ Mag:',
    '≤ Límite de magnitud': '≤ Magnitude limit',

    // Columnas de la tabla
    'Telescopio': 'Telescope',
    'ID Objeto': 'Object ID',
    'Clasificación': 'Classification',
    'Magnitud': 'Magnitude',
    'Filtro': 'Filter',
    'AR': 'RA',
    'Dec': 'Dec',
    'Fecha UTC': 'UTC Date',

    // Estados y tooltips de tabla
    'Cargando alertas desde ALeRCE...': 'Loading alerts from ALeRCE...',
    'No se encontraron alertas recientes en ALeRCE.': 'No recent alerts found in ALeRCE.',
    'Error al cargar datos remotos. Reintentando en el próximo ciclo...': 'Error loading remote data. Retrying in next cycle...',
    'Obteniendo magnitud...': 'Fetching magnitude...',
    'Obteniendo filtro...': 'Fetching filter...',
    'El explorador visual de ALeRCE aún no está disponible públicamente para objetos LSST': 'ALeRCE visual explorer is not yet publicly available for LSST objects',
    'Abrir simulador del cielo (Aladin)': 'Open sky explorer (Aladin)',
    'Copiar coordenadas juntas para pegar en buscador de Stellarium': 'Copy paired coordinates to paste into Stellarium search',
    'Desconocida': 'Unknown',
    'Supernova': 'Supernova',
    'Nucli Galàctic Actiu': 'Active Galactic Nucleus',
    'Estel Variable': 'Variable Star',
    'Falsa Alarma (Bogus)': 'False Alarm (Bogus)',
    'Satèl·lit Artificial': 'Artificial Satellite',

    // Modal
    'Guía técnica y alertas astronómicas ALeRCE': 'Technical Guide & ALeRCE Astronomical Alerts',
    '📋 Copiar texto': '📋 Copy text',
    '✓ ¡Copiado!': '✓ Copied!',
    'Copiar todo el texto de la guía al portapapeles': 'Copy guide text to clipboard',
    'Cerrar ventana (Esc)': 'Close window (Esc)',

    // Alertas y CSV
    'No hay datos cargados para exportar.': 'No data loaded to export.'
  };

  const PATTERNS_CA = [
    [/^desde el (\d{2}\/\d{2}\/\d{4})$/, 'des del $1'],
    [/^Consultando ([A-Za-z]+) \(ZTF y LSST\)\.\.\.$/, 'Consultant $1 (ZTF i LSST)...'],
    [/^Registros descargados: <strong>(\d+)<\/strong> ZTF \| <strong>(\d+)<\/strong> LSST$/, 'Registres descarregats: <strong>$1</strong> ZTF | <strong>$2</strong> LSST'],
    [/^Descargando magnitudes \((\d+)\/(\d+)\)\.\.\.$/, 'Descarregant magnituds ($1/$2)...'],
    [/^Actualizado a las ([0-9:]+) \((v[0-9.]+)\)$/, 'Actualitzat a les $1 ($2)'],
    [/^No hay alertas visibles con los filtros actuales \(Mag ≤ ([0-9.]+)\)\.$/, 'No hi ha alertes visibles amb els filtres actuals (Mag ≤ $1).']
  ];

  const PATTERNS_EN = [
    [/^desde el (\d{2}\/\d{2}\/\d{4})$/, 'since $1'],
    [/^Consultando ([A-Za-z]+) \(ZTF y LSST\)\.\.\.$/, 'Querying $1 (ZTF & LSST)...'],
    [/^Registros descargados: <strong>(\d+)<\/strong> ZTF \| <strong>(\d+)<\/strong> LSST$/, 'Downloaded records: <strong>$1</strong> ZTF | <strong>$2</strong> LSST'],
    [/^Descargando magnitudes \((\d+)\/(\d+)\)\.\.\.$/, 'Downloading magnitudes ($1/$2)...'],
    [/^Actualizado a las ([0-9:]+) \((v[0-9.]+)\)$/, 'Updated at $1 ($2)'],
    [/^No hay alertas visibles con los filtros actuales \(Mag ≤ ([0-9.]+)\)\.$/, 'No visible alerts with current filters (Mag ≤ $1).']
  ];

  if (window.CosmosI18n) {
    window.CosmosI18n.init({
      pageTitle: {
        es: 'Cosmos Mataró • Descubrimientos Vera C. Rubin / ZTF',
        ca: 'Cosmos Mataró • Descobriments Vera C. Rubin / ZTF',
        en: 'Cosmos Mataró • Vera C. Rubin / ZTF Discoveries'
      },
      exact: { ca: EXACT_CA, en: EXACT_EN },
      patterns: { ca: PATTERNS_CA, en: PATTERNS_EN },
      htmlBlocks: {
        'info-content': {
          ca: INFO_MODAL_CA,
          en: INFO_MODAL_EN
        }
      },
      onApply: function (lang) {
        // Actualizar etiqueta del conmutador de tema respetando el idioma
        const isDark = document.body && document.body.classList ? document.body.classList.contains('theme-dark') : false;
        const themeLabel = document.getElementById('themeLabel');
        const btnThemeToggle = document.getElementById('btnThemeToggle');
        if (themeLabel) {
          if (isDark) {
            themeLabel.textContent = lang === 'ca' ? 'Fosc' : (lang === 'en' ? 'Dark' : 'Oscuro');
            if (btnThemeToggle) {
              btnThemeToggle.title = lang === 'ca' ? 'Canviar a fons clar (#EFEDE4)' : (lang === 'en' ? 'Switch to light background (#EFEDE4)' : 'Cambiar a fondo claro (#EFEDE4)');
            }
          } else {
            themeLabel.textContent = lang === 'ca' ? 'Clar' : (lang === 'en' ? 'Light' : 'Claro');
            if (btnThemeToggle) {
              btnThemeToggle.title = lang === 'ca' ? 'Canviar a fons negre' : (lang === 'en' ? 'Switch to black background' : 'Cambiar a fondo negro');
            }
          }
        }

        // Si la tabla ya tiene datos cargados, refrescar el formateo de fechas relativas/locales
        if (typeof window.renderTable === 'function' && Array.isArray(window.rawAlertsData) && window.rawAlertsData.length > 0) {
          window.renderTable();
        }
      }
    });
  }
})();

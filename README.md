# Cosmos Mataró - Alertas Astronómicas ALeRCE (Vera Rubin & ZTF)

Widget web interactivo para la visualización en tiempo real de alertas y descubrimientos astronómicos recientes procesados por el broker astronómico **ALeRCE** para los telescopios **Vera C. Rubin Observatory (LSST)** y **Zwicky Transient Facility (ZTF)**.

## Características

- 🌌 **Doble Observatorio**: Cobertura combinada de alertas ZTF y Rubin/LSST.
- 🎯 **Clasificaciones de IA**: Supernovas (`SN`), Asteroides / Cuerpos Menores (`asteroid`), Núcleos Galácticos Activos (`AGN`), Estrellas Variables (`VS`), Satélites y Bogus.
- 🔭 **Integración Astrométrica**:
  - Enlaces directos a **Aladin Lite** (simulador interactivo del cielo).
  - Botón de copiado de script / coordenadas para búsqueda inmediata en **Stellarium**.
  - Formato de coordenadas configurable (Decimal / Sexagesimal ICRS J2000).
- 📊 **Filtrado y Exportación**:
  - Filtro interactivo por clases y magnitud límite.
  - Exportación de la vista actual a formato **CSV**.
  - Sin dependencias complejas (HTML5/CSS3/JavaScript puro).

## Origen de los datos

- API REST de [ALeRCE Broker](https://alerce.science/)
- [ZTF](https://www.ztf.caltech.edu/) & [Vera C. Rubin Observatory](https://www.lsst.org/)

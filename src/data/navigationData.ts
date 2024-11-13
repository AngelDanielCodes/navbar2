import { NavItem } from '../types/navigation';

export const navItems: NavItem[] = [
  {
    title: 'Tarot',
    path: '/tarot',
    children: [
      {
        title: 'Consultas Tarot',
        path: '/tarot/consultas-tarot',
        children: [
          { title: 'Consulta 1 Carta', path: '/tarot/consultas-tarot/consulta-1-carta' },
          { title: 'Tirada Sí o No', path: '/tarot/consultas-tarot/tirada-si-o-no' },
          { title: 'Tirada Celta', path: '/tarot/consultas-tarot/tirada-celta' },
          { title: 'Tirada Estrella', path: '/tarot/consultas-tarot/tirada-estrella' },
          { title: 'Tirada Lunar', path: '/tarot/consultas-tarot/tirada-lunar' },
          { title: 'Tirada Solar', path: '/tarot/consultas-tarot/tirada-solar' },
          { title: 'Tirada Amor', path: '/tarot/consultas-tarot/tirada-amor' },
          { title: 'Tirada Tiempo', path: '/tarot/consultas-tarot/tirada-tiempo' },
          { title: 'Tirada Dinero', path: '/tarot/consultas-tarot/tirada-dinero' }
        ]
      },
      {
        title: 'Información Tarot',
        path: '/tarot/informacion-tarot',
        children: [
          { title: 'Historia y Origen', path: '/tarot/informacion-tarot/historia-origen-tarot' },
          { title: 'Tarot Actualidad', path: '/tarot/informacion-tarot/tarot-actualidad' },
          {
            title: 'Baraja Tarot',
            path: '/tarot/informacion-tarot/baraja-tarot',
            children: [
              { title: 'Arcanos Mayores', path: '/tarot/informacion-tarot/baraja-tarot/arcanos-mayores' },
              { title: 'Arcanos Menores', path: '/tarot/informacion-tarot/baraja-tarot/arcanos-menores' }
            ]
          },
          {
            title: 'Tipos de Barajas',
            path: '/tarot/informacion-tarot/tipos-barajas-tarot',
            children: [
              { title: 'Tarot Rider Waite', path: '/tarot/informacion-tarot/tipos-barajas-tarot/tarot-rider-waite' },
              { title: 'Tarot Marsella', path: '/tarot/informacion-tarot/tipos-barajas-tarot/tarot-marsella' },
              { title: 'Tarot Egipcio', path: '/tarot/informacion-tarot/tipos-barajas-tarot/tarot-egipcio' },
              { title: 'Tarot Ángeles', path: '/tarot/informacion-tarot/tipos-barajas-tarot/tarot-angeles' },
              { title: 'Tarot Gitano', path: '/tarot/informacion-tarot/tipos-barajas-tarot/tarot-gitano' },
              { title: 'Tarot Zen', path: '/tarot/informacion-tarot/tipos-barajas-tarot/tarot-zen' },
              { title: 'Tarot Celta', path: '/tarot/informacion-tarot/tipos-barajas-tarot/tarot-celta' },
              { title: 'Tarot Esotérico', path: '/tarot/informacion-tarot/tipos-barajas-tarot/tarot-esoterico' }
            ]
          }
        ]
      }
    ]
  },
  {
    title: 'Astrología',
    path: '/astrologia',
    children: [
      {
        title: 'Consultas Astrológicas',
        path: '/astrologia/consultas-astrologicas',
        children: [
          { title: 'Carta Astral', path: '/astrologia/consultas-astrologicas/calcular-carta-astral' },
          { title: 'Calcular Ascendente', path: '/astrologia/consultas-astrologicas/calcular-ascendente' },
          { title: 'Signo Lunar', path: '/astrologia/consultas-astrologicas/calcular-signo-lunar' },
          { title: 'Calcular Lilith', path: '/astrologia/consultas-astrologicas/calcular-lilith' },
          { title: 'Nodos Norte/Sur', path: '/astrologia/consultas-astrologicas/calcular-nodo-norte-sur' },
          { title: 'Aspectos Planetarios', path: '/astrologia/consultas-astrologicas/aspectos-planetarios' },
          { title: 'Interpretación Casas', path: '/astrologia/consultas-astrologicas/interpretacion-casas' },
          { title: 'Análisis Retrógrados', path: '/astrologia/consultas-astrologicas/analisis-retrogrados' },
          { title: 'Fases Luna', path: '/astrologia/consultas-astrologicas/fases-luna-influencia' },
          { title: 'Sinastría Parejas', path: '/astrologia/consultas-astrologicas/sinastria-parejas' }
        ]
      },
      {
        title: 'Información Astrología',
        path: '/astrologia/informacion-astrologia',
        children: [
          { title: 'Historia Astrología', path: '/astrologia/informacion-astrologia/historia-astrologia' },
          { title: 'Signos del Zodiaco', path: '/astrologia/informacion-astrologia/doce-signos-zodiaco' },
          { title: 'Planetas y Simbolismo', path: '/astrologia/informacion-astrologia/planetas-simbolismo' },
          { title: 'Elementos Astrología', path: '/astrologia/informacion-astrologia/cuatro-elementos-astrologia' },
          { title: 'Ciclos Astrológicos', path: '/astrologia/informacion-astrologia/ciclos-astrologicos' },
          { title: 'Casas y Significados', path: '/astrologia/informacion-astrologia/casas-significados' },
          { title: 'Sol, Luna y Ascendente', path: '/astrologia/informacion-astrologia/sol-luna-ascendente' },
          { title: 'Nodos y Karma', path: '/astrologia/informacion-astrologia/nodos-karma' },
          { title: 'Energía Eclipses', path: '/astrologia/informacion-astrologia/energia-eclipses' },
          { title: 'Personalidad Astrológica', path: '/astrologia/informacion-astrologia/astrologia-personalidad' },
          { title: 'Tránsitos', path: '/astrologia/informacion-astrologia/interpretacion-transitos' },
          { title: 'Desarrollo Personal', path: '/astrologia/informacion-astrologia/desarrollo-personal' }
        ]
      }
    ]
  },
  {
    title: 'Horóscopo',
    path: '/horoscopo',
    children: [
      {
        title: 'Calcular Horóscopo',
        path: '/horoscopo/calcular-horoscopo'
      },
      {
        title: 'Horóscopo Diario',
        path: '/horoscopo/horoscopo-diario',
        children: [
          { title: 'Predicción Diaria', path: '/horoscopo/horoscopo-diario/prediccion-diaria' },
          { title: 'Predicción Semanal', path: '/horoscopo/horoscopo-diario/prediccion-semanal' },
          { title: 'Predicción Mensual', path: '/horoscopo/horoscopo-diario/prediccion-mensual' },
          { title: 'Predicción Anual', path: '/horoscopo/horoscopo-diario/prediccion-anual' }
        ]
      },
      {
        title: 'Horóscopo por Signo',
        path: '/horoscopo/horoscopo-signos',
        children: [
          { title: 'Aries', path: '/horoscopo/horoscopo-signos/horoscopo-aries' },
          { title: 'Tauro', path: '/horoscopo/horoscopo-signos/horoscopo-tauro' },
          { title: 'Géminis', path: '/horoscopo/horoscopo-signos/horoscopo-geminis' },
          { title: 'Cáncer', path: '/horoscopo/horoscopo-signos/horoscopo-cancer' },
          { title: 'Leo', path: '/horoscopo/horoscopo-signos/horoscopo-leo' },
          { title: 'Virgo', path: '/horoscopo/horoscopo-signos/horoscopo-virgo' },
          { title: 'Libra', path: '/horoscopo/horoscopo-signos/horoscopo-libra' },
          { title: 'Escorpio', path: '/horoscopo/horoscopo-signos/horoscopo-escorpio' },
          { title: 'Sagitario', path: '/horoscopo/horoscopo-signos/horoscopo-sagitario' },
          { title: 'Capricornio', path: '/horoscopo/horoscopo-signos/horoscopo-capricornio' },
          { title: 'Acuario', path: '/horoscopo/horoscopo-signos/horoscopo-acuario' },
          { title: 'Piscis', path: '/horoscopo/horoscopo-signos/horoscopo-piscis' }
        ]
      },
      {
        title: 'Información Horóscopo',
        path: '/horoscopo/informacion-horoscopo',
        children: [
          {
            title: 'Historia del Horóscopo',
            path: '/horoscopo/informacion-horoscopo/historia-horoscopo',
            children: [
              { title: 'Origen', path: '/horoscopo/informacion-horoscopo/historia-horoscopo/origen-horoscopo' },
              { title: 'Evolución', path: '/horoscopo/informacion-horoscopo/historia-horoscopo/evolucion-siglos' },
              { title: 'Cultura', path: '/horoscopo/informacion-horoscopo/historia-horoscopo/horoscopo-cultura' },
              { title: 'Raíces', path: '/horoscopo/informacion-horoscopo/historia-horoscopo/zodiaco-raices' },
              { title: 'Adaptación Moderna', path: '/horoscopo/informacion-horoscopo/historia-horoscopo/adaptacion-horoscopo-moderno' }
            ]
          },
          { title: 'Compatibilidad Signos', path: '/horoscopo/informacion-horoscopo/compatibilidad-signos' },
          {
            title: 'Horóscopos Especiales',
            path: '/horoscopo/informacion-horoscopo/horoscopos-especiales',
            children: [
              { title: 'Horóscopo Celta', path: '/horoscopo/informacion-horoscopo/horoscopos-especiales/horoscopo-celta' },
              { title: 'Horóscopo Egipcio', path: '/horoscopo/informacion-horoscopo/horoscopos-especiales/horoscopo-egipcio' },
              { title: 'Horóscopo Chino', path: '/horoscopo/informacion-horoscopo/horoscopos-especiales/horoscopo-chino' },
              { title: 'Horóscopo Maya', path: '/horoscopo/informacion-horoscopo/horoscopos-especiales/horoscopo-maya' },
              { title: 'Horóscopo Azteca', path: '/horoscopo/informacion-horoscopo/horoscopos-especiales/horoscopo-azteca' },
              { title: 'Horóscopo Gitano', path: '/horoscopo/informacion-horoscopo/horoscopos-especiales/horoscopo-gitano' }
            ]
          },
          { title: '¿Qué es Ofiuco?', path: '/horoscopo/informacion-horoscopo/que-es-ofiuco' }
        ]
      }
    ]
  },
  {
    title: 'Amor y Magia',
    path: '/amor',
    children: [
      {
        title: 'Consultas Amor',
        path: '/amor/consultas-amor',
        children: [
          { title: 'Compatibilidad Pareja', path: '/amor/consultas-amor/compatibilidad-pareja' },
          { title: 'Compatibilidad Numérica', path: '/amor/consultas-amor/compatibilidad-numerica' },
          { title: 'Alma Gemela', path: '/amor/consultas-amor/alma-gemela-destino' },
          { title: 'Relaciones Kármicas', path: '/amor/consultas-amor/relaciones-karmicas' },
          { title: 'Consejos Amor', path: '/amor/consultas-amor/consejos-amor' },
          { title: 'Predicciones Romance', path: '/amor/consultas-amor/predicciones-romance' },
          { title: 'Rituales Relaciones', path: '/amor/consultas-amor/rituales-fortalecer-relaciones' },
          { title: 'Hechizos Amor', path: '/amor/consultas-amor/hechizos-amor' },
          { title: 'Rituales Reconciliación', path: '/amor/consultas-amor/rituales-reconciliacion' },
          { title: 'Magia Luna Romance', path: '/amor/consultas-amor/magia-luna-romance' },
          { title: 'Compatibilidad Elementos', path: '/amor/consultas-amor/compatibilidad-elementos' },
          { title: 'Fases Luna Relaciones', path: '/amor/consultas-amor/fases-luna-relaciones' }
        ]
      },
      {
        title: 'Información Amor',
        path: '/amor/informacion-amor',
        children: [
          { title: 'Alma Gemela', path: '/amor/informacion-amor/alma-gemela-conexion' },
          { title: 'Relaciones y Karma', path: '/amor/informacion-amor/relaciones-karma' },
          { title: 'Astrología y Amor', path: '/amor/informacion-amor/astrologia-amor' },
          { title: 'Fases Relación', path: '/amor/informacion-amor/fases-relacion-zodiaco' },
          { title: 'Energías del Amor', path: '/amor/informacion-amor/energias-amor' },
          { title: 'Relaciones Duraderas', path: '/amor/informacion-amor/guia-relaciones-duraderas' },
          { title: 'Amor y Espiritualidad', path: '/amor/informacion-amor/amor-espiritualidad' },
          { title: 'Compatibilidad Áreas', path: '/amor/informacion-amor/compatibilidad-areas' }
        ]
      }
    ]
  },
  {
    title: 'Numerología',
    path: '/numerologia',
    children: [
      {
        title: 'Cálculos Numerológicos',
        path: '/numerologia/calculos-numerologicos',
        children: [
          { title: 'Número de Vida', path: '/numerologia/calculos-numerologicos/calcular-numero-vida' },
          { title: 'Número de Expresión', path: '/numerologia/calculos-numerologicos/calcular-numero-expresion' },
          { title: 'Número del Alma', path: '/numerologia/calculos-numerologicos/calcular-numero-alma' },
          { title: 'Número Personalidad', path: '/numerologia/calculos-numerologicos/calcular-numero-personalidad' },
          { title: 'Número Destino', path: '/numerologia/calculos-numerologicos/calcular-numero-destino' },
          { title: 'Número Matrimonio', path: '/numerologia/calculos-numerologicos/calcular-numero-matrimonio' },
          { title: 'Número Año Personal', path: '/numerologia/calculos-numerologicos/calcular-numero-ano-personal' },
          { title: 'Número Misión', path: '/numerologia/calculos-numerologicos/calcular-numero-mision' }
        ]
      },
      {
        title: 'Información Numerología',
        path: '/numerologia/informacion-numerologia',
        children: [
          { title: 'Introducción', path: '/numerologia/informacion-numerologia/introduccion-numerologia' },
          { title: 'Números Básicos', path: '/numerologia/informacion-numerologia/significado-numeros-basicos' },
          { title: 'Números Maestros', path: '/numerologia/informacion-numerologia/numeros-maestros-karmicos' },
          { title: 'Ciclo de Vida', path: '/numerologia/informacion-numerologia/ciclo-vida-numerologia' },
          { title: 'Compatibilidad', path: '/numerologia/informacion-numerologia/compatibilidad-numerica' },
          { title: 'Influencia en la Vida', path: '/numerologia/informacion-numerologia/numeros-influencia-vida' },
          { title: 'Caminos de Vida', path: '/numerologia/informacion-numerologia/numeros-caminos-vida' },
          { title: 'Energía Números', path: '/numerologia/informacion-numerologia/energia-numeros-maestros' }
        ]
      }
    ]
  },
  {
    title: 'Esoterismo',
    path: '/esoterismo',
    children: [
      {
        title: 'Interpretación y Adivinación',
        path: '/esoterismo/interpretacion-adivinacion',
        children: [
          { title: 'Interpretación Sueños', path: '/esoterismo/interpretacion-adivinacion/interpretacion-suenos' },
          { title: 'Significado Nombres', path: '/esoterismo/interpretacion-adivinacion/significado-nombres' },
          { title: 'Lectura de Manos', path: '/esoterismo/interpretacion-adivinacion/lectura-manos' },
          { title: 'Interpretación Auras', path: '/esoterismo/interpretacion-adivinacion/interpretacion-auras' },
          { title: 'Numerología Fechas', path: '/esoterismo/interpretacion-adivinacion/numerologia-fechas' },
          { title: 'Significado Runas', path: '/esoterismo/interpretacion-adivinacion/runas-significado' },
          { title: 'Bola de Cristal', path: '/esoterismo/interpretacion-adivinacion/bola-cristal' },
          { title: 'Conexión Ángeles', path: '/esoterismo/interpretacion-adivinacion/conexion-angeles' }
        ]
      },
      {
        title: 'Hechizos y Rituales',
        path: '/esoterismo/hechizos-rituales',
        children: [
          { title: 'Rituales de Amor', path: '/esoterismo/hechizos-rituales/rituales-amor' },
          { title: 'Hechizos Dinero', path: '/esoterismo/hechizos-rituales/hechizos-dinero' },
          { title: 'Rituales Atracción', path: '/esoterismo/hechizos-rituales/rituales-atraccion' },
          { title: 'Magia Lunar', path: '/esoterismo/hechizos-rituales/magia-lunar' }
        ]
      },
      {
        title: 'Diccionario Esotérico',
        path: '/esoterismo/diccionario-esoterico',
        children: [
          { title: 'Símbolos Místicos', path: '/esoterismo/diccionario-esoterico/simbolos-misticos' },
          { title: 'Animales Espirituales', path: '/esoterismo/diccionario-esoterico/animales-espirituales' },
          { title: 'Amuletos Protección', path: '/esoterismo/diccionario-esoterico/amuletos-proteccion' },
          { title: 'Plantas Mágicas', path: '/esoterismo/diccionario-esoterico/plantas-magicas' }
        ]
      }
    ]
  }
];
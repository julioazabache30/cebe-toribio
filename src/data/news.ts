import type { NewsItem } from '../types'

const UCT_IMAGE =
  'https://scontent.ftru4-1.fna.fbcdn.net/v/t39.99422-6/825279995_1645657003821904_303751704477653785_n.png?stp=dst-jpg_tt6&cstp=mx2048x1458&ctp=s2048x1458&_nc_cat=108&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=127cfc&_nc_ohc=0NPR1BAvh2UQ7kNvwHZypAz&_nc_oc=AdqDG1I3aWd760aiL218MZ37f1lcw7KQ_gjPwOf_CBM24tOi3zi9QsvrAU89H-Be3rA&_nc_zt=14&_nc_ht=scontent.ftru4-1.fna&_nc_gid=N1t8DBd8swvlITWc-Hl1Pg&_nc_ss=7a2a8&oh=00_AQNlz736J_RSBVMtmx2UmpTYBnGZw37QVVqgQkf3PvcsVA&oe=6AD2B6C3'

export const NEWS_ITEMS: NewsItem[] = [
  {
    id: 'uct-agreement',
    badge: 'Union entre Instituciones',
    badgeClassName: 'bg-brand-slateDeep',
    date: '29 de Setiembre, 2026',
    title:
      'Universidad Catolica de Trujillo firma Convenio Institucional con Promotora Virgen de la Puerta',
    summary:
      'La UCT firmó un nuevo convenio interinstitucional con la Promotora Educativa Virgen de la Puerta, que permitirá a nuestros estudiantes de Educación desarrollar sus prácticas en los colegios que agrupa esta institución.',
    image: UCT_IMAGE,
    imageLarge: UCT_IMAGE,
    paragraphs: [
      'La UCT firmó un nuevo convenio interinstitucional con la Promotora Educativa Virgen de la Puerta, que permitirá a nuestros estudiantes de Educación desarrollar sus prácticas en los colegios que agrupa esta institución. 👩🏻‍🏫',
      'Además, la plana docente y administrativa de los 4 colegios que impulsa la promotora podrán acceder a beneficios corporativos en los programas de maestrías y segundas especialidades que ofrece la Universidad Católica de Trujillo. 🙌🏻',
    ],
  },
  {
    id: 'admission-2027',
    badge: 'Asesoría Académica',
    badgeClassName: 'bg-brand-crimson',
    date: '28 de Septiembre, 2026',
    title: 'Apertura de Admisión 2027 y Evaluación Diagnóstica para el PEP',
    summary:
      'Iniciamos el proceso de registro para vacantes en Inicial, Primaria y Tránsito a la Vida Adulta, con entrevistas psicopedagógicas individualizadas.',
    image:
      'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=700&q=80',
    imageLarge:
      'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1000&q=80',
    paragraphs: [
      'Comunicamos a la comunidad trujillana el inicio formal del proceso de admisión para el año lectivo 2027 en los niveles de Inicial, Primaria y el programa de Tránsito a la Vida Adulta.',
      'Cada proceso de admisión cuenta con una entrevista integral y una valoración diagnóstica que sienta las bases para el Plan Educativo Personalizado (PEP), garantizando las adaptaciones metodológicas DUA 3.0 pertinentes a cada perfil madurativo.',
      'Solicite su cita diagnóstica a través de nuestro formulario o visitando nuestras oficinas de secretaría.',
    ],
  },
  {
    id: 'pilgrims-faith-day',
    badge: 'Comisión Pastoral',
    badgeClassName: 'bg-brand-slateDeep',
    date: '10 de Septiembre, 2026',
    title: 'Jornada de Convivencia y Fe: "Peregrinos de Santo Toribio"',
    summary:
      'Toda la comunidad educativa celebró un encuentro fraternal bajo el manto protector de la Virgen María, consolidando lazos de interdependencia positiva.',
    image:
      'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=700&q=80',
    imageLarge:
      'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=1000&q=80',
    paragraphs: [
      'Bajo el manto protector de la Virgen María, Madre nuestra, celebramos con alegría nuestra jornada espiritual comunitaria "Peregrinos de Santo Toribio".',
      'Estudiantes, docentes y familias compartieron dinámicas de empatía, oración y celebración que fortalecieron los lazos de pertenencia e interdependencia positiva que definen nuestro carisma institucional.',
      'Agradecemos a todos los miembros de la Comisión Pastoral y a las familias que hacen de nuestra escuela un verdadero faro de esperanza y amor fraterno.',
    ],
  },
]

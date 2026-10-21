// i18n.js — alternar inglés / español
// El inglés se toma del propio HTML (lo que ya escribiste).
// Aquí solo va el español, indexado por la clave de data-i18n="..."

const ES = {
  // ---------- Saltar y navegación ----------
  'skip': 'Saltar al contenido',
  'nav.about': 'Sobre mí',
  'nav.projects': 'Proyectos',
  'nav.skills': 'Habilidades',
  'nav.teaching': 'Docencia',
  'nav.contact': 'Contacto <span aria-hidden="true">↗</span>',

  // ---------- Hero ----------
  'hero.eyebrow': 'DESARROLLADOR DE VIDEOJUEGOS · UNITY / C# / C++ / OpenGL',
  'hero.title': 'Me encanta crear <span class="accent">videojuegos</span> e <span class="accent">historias interactivas</span>',
  'hero.lede': '¡Hola, viajero! Me llamo Diego y creo firmemente que lo más bonito de hacer videojuegos es conocer gente talentosa de mundos distintos y reunirla en una historia en la que todos ponemos el corazón.',
  'hero.cta1': 'Explora mi trabajo <span aria-hidden="true">↓</span>',
  'hero.cta2': 'Contáctame <span aria-hidden="true">↗</span>',
  'meta.1a': '4 años',
  'meta.1b': 'de experiencia en Unity',
  'meta.2b': 'Ciencias de la Computación',
  'meta.3a': 'Gráficos y Videojuegos',
  'meta.3b': 'Ayudante de profesor',
  'meta.4a': 'Diseño de juegos',
  'meta.4b': 'Aprendiendo',

  // ---------- Sobre mí ----------
  'about.eyebrow': 'SOBRE MÍ',
  'about.title': 'Vivir, jugar y contar historias.',
  'about.p1': 'Soy Licenciado en Ciencias de la Computación por la Universidad Nacional Autónoma de México (UNAM) y tengo experiencia profesional desarrollando proyectos de realidad virtual, web y PC con Unity. Además, soy ayudante de profesor en la Facultad de Ciencias en materias como Computación Gráfica y Realidad Virtual. Hago mi mejor esfuerzo por compartir lo que sé y aprender de mis estudiantes.',
  'about.p2': 'Disfruto construir sistemas desacoplados y mantenibles usando patrones de diseño, así como el proceso de diseño y pruebas de juegos. Me interesan especialmente los puestos y posgrados que combinen la programación de videojuegos con el diseño.',

  // ---------- Proyectos ----------
  'projects.eyebrow': 'TRABAJO SELECCIONADO',
  'projects.title': 'Proyectos y colaboraciones',
  'projects.intro': 'Una selección de proyectos interactivos, trabajo técnico y experimentos.',
  'feature.caption': 'PROYECTO DESTACADO · EN DESARROLLO',
  'feature.tag': 'Primera persona',
  'feature.summary': 'Un juego de exploración en primera persona ambientado en una tienda de antigüedades, con inspección de objetos, varios tipos de interacciones y un oscuro secreto esperando a ser descubierto.',
  'feature.contrib': 'Mi contribución',
  'feature.li1': 'Implementé las mecánicas de interacción e inspección del juego.',
  'feature.li2': 'Construí sistemas para interactuar con máquinas y procesar objetos.',
  'feature.li3': 'Iteré sobre la arquitectura del sistema y el pulido, incluyendo corrección de errores.',
  'feature.li4': 'Trabajé en iluminación y optimización de rendimiento.',
  'feature.role': '<strong>Rol:</strong> Programador único. Un artista 3D crea los modelos del juego.',
  'link.itch': 'Jugar en itch.io <span aria-hidden="true">↗</span>',
  'link.trailer': 'Ver tráiler <span aria-hidden="true">↗</span>',
  'link.repo': 'Ver repositorio <span aria-hidden="true">↗</span>',
  'card.cosmic': 'Eres un explorador alienígena en una carrera contra el cosmos. Muévete entre meteoritos, recoge gemas preciosas y sobrevive a la inminente muerte de la estrella.',
  'card.mask': 'Un valiente aventurero entra a una antigua pirámide para recoger tesoros ocultos: tres máscaras místicas que le permiten ver cosas que antes no estaban. Con ellas debe encontrar las tres y escapar de la pirámide. Es un juego estilo dungeon crawler con acertijos basados en máscaras.',
  'card.bubble': 'En una ciudad cibernética, un robot se salió de control y ahora debe limpiar cada rincón de la ciudad.',

  // ---------- Habilidades ----------
  'skills.eyebrow': '03 / HERRAMIENTAS',
  'skills.title': 'Habilidades e intereses',
  'skills.1t': 'Desarrollo de videojuegos',
  'skills.1p': 'Unity · C# · Sistemas de juego · Interacción con objetos · Prototipado',
  'skills.2t': 'Diseño de software',
  'skills.2p': 'Arquitectura desacoplada · Patrones de diseño · Mantenibilidad · Depuración iterativa',
  'skills.3t': 'Producción',
  'skills.3p': 'Optimización de rendimiento · Iluminación · Control de versiones · Trabajo en equipo',
  'skills.4t': 'Áreas de interés',
  'skills.4p': 'Programación de gameplay · Diseño de juegos · Sistemas interactivos · Diseño técnico',

  // ---------- Docencia ----------
  'teaching.eyebrow': 'DOCENCIA',
  'teaching.title': 'Proyectos de estudiantes por materia',
  'teaching.intro': 'Proyectos destacados de estudiantes y equipos a los que he guiado como ayudante de profesor en distintos cursos de la UNAM.',
  'teaching.course': 'CURSO',
  'teaching.authors': '<strong>Autores:</strong>',
  'teaching.vrdesc': 'En esta materia, los estudiantes aprendieron a usar Vuforia y el XR Interaction Toolkit en Unity.',
  'teaching.pingbonk': 'PingBonk es un videojuego de realidad virtual desarrollado en Unity para dispositivos Meta Quest, en el que el jugador asume el papel de un guardián que debe proteger un área objetivo, llamada la red, de una invasión alienígena.',

  // ---------- Contacto ----------
  'contact.eyebrow': '04 / CONTACTO',
  'contact.title': 'Hagamos algo<br><span class="accent">que valga la pena jugar.</span>',
  'contact.p': 'Me interesan oportunidades y posgrados en la intersección entre la programación de videojuegos y el diseño.',
  'contact.email': 'Escríbeme <span aria-hidden="true">↗</span>',

  // ---------- Footer ----------
  'footer.tagline': 'Diseñado con claridad, construido para la web.',
  'footer.top': 'Volver arriba ↑',
};

const LANG_KEY = 'portfolio-lang';

function applyLanguage(lang) {
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    // La primera vez, guardamos el texto original (inglés)
    if (el.dataset.en === undefined) el.dataset.en = el.innerHTML;
    const key = el.dataset.i18n;
    el.innerHTML = lang === 'es' && ES[key] ? ES[key] : el.dataset.en;
  });

  document.documentElement.lang = lang;

  const btn = document.getElementById('lang-toggle');
  if (btn) {
    btn.textContent = lang === 'es' ? 'EN' : 'ES';
    btn.setAttribute('aria-label', lang === 'es' ? 'Switch to English' : 'Cambiar a español');
  }

  try { localStorage.setItem(LANG_KEY, lang); } catch (e) { /* modo privado */ }
}

function getInitialLanguage() {
  try {
    const saved = localStorage.getItem(LANG_KEY);
    if (saved === 'en' || saved === 'es') return saved;
  } catch (e) { /* ignorar */ }
  return navigator.language && navigator.language.toLowerCase().startsWith('es') ? 'es' : 'en';
}

document.addEventListener('DOMContentLoaded', () => {
  let current = getInitialLanguage();
  applyLanguage(current);

  const btn = document.getElementById('lang-toggle');
  if (btn) {
    btn.addEventListener('click', () => {
      current = current === 'es' ? 'en' : 'es';
      applyLanguage(current);
    });
  }
});
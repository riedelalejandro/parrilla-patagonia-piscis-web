export const siteConfig = {
  business: {
    name: 'Parrilla Patagonia Piscis',
    tagline: 'La mejor parrilla patagónica en el corazón de San Martín',
    shortDescription:
      'Parrilla patagónica con cordero al asador como estrella, cocina regional sofisticada y más de 51 platos para todos los gustos.',
    phone: '02972 42-3247',
    whatsapp: 'https://wa.me/5492972423247',
    address: 'Gral. Villegas 598, San Martín de los Andes, Neuquén, Argentina',
    email: null, // TODO: agregar email de contacto
    facebook: 'https://www.facebook.com/piscisparrillayrestaurante/',
    instagram: null, // TODO: buscar cuenta oficial de Instagram
  },

  hero: {
    badge: '#18 de 221 restaurantes en San Martín',
    headline: 'La mejor parrilla patagónica en el corazón de San Martín',
    accentWord: 'patagónica',
    subheadline:
      'Cordero al asador, ciervo, trucha y los mejores cortes argentinos preparados a fuego lento, con más de 6.000 comensales que nos recomiendan en Google.',
    ctaPrimary: { text: 'Reservar mesa', href: '#contacto' },
    ctaSecondary: { text: 'Ver el menú ↓', href: '#menu' },
    socialProof: 'Más de 6.000 reseñas en Google · #18 de 221 restaurantes en la ciudad',
  },

  problems: [
    {
      icon: 'MapPin',
      title: '¿Dónde comer algo auténtico?',
      description:
        'Tantos restaurantes genéricos y ninguno que cuente una historia real alrededor del fuego patagónico.',
    },
    {
      icon: 'Clock',
      title: 'Sin reserva, sin mesa',
      description:
        'En temporada alta, llegar sin reserva significa quedarse afuera. Nadie quiere irse con hambre.',
    },
    {
      icon: 'HelpCircle',
      title: '¿Será de verdad?',
      description:
        'Mucho lugar dice "patagónico" y sirve carne de supermercado. Vos querés el cordero real, el de asador de campo.',
    },
    {
      icon: 'FileText',
      title: 'No sé qué hay ni cuánto sale',
      description:
        'Decidir sin ver el menú es un salto de fe. Querés saber qué vas a comer antes de caminar hasta allá.',
    },
    {
      icon: 'Users',
      title: '¿Y los que no comen carne?',
      description:
        'En el grupo siempre hay uno. Necesitás un lugar con opciones para todos, no solo para los carnívoros.',
    },
  ],

  solution: {
    title: 'La experiencia Piscis',
    subtitle: 'Todo lo que una parrilla patagónica tiene que ser.',
    features: [
      {
        icon: 'Flame',
        name: 'Cordero al asador patagónico',
        benefit:
          'La especialidad de la casa — cocido a fuego lento hasta el punto exacto, jugoso y con sabor a leña. Lo más pedido por turistas y locales.',
      },
      {
        icon: 'ChefHat',
        name: 'Cocina regional sofisticada',
        benefit:
          'Goulash de ciervo con spätzle y hongos de pino, trucha a la manteca negra, bondiola con salsa de frutos rojos — platos únicos de la Patagonia.',
      },
      {
        icon: 'Wine',
        name: 'Vinos patagónicos',
        benefit:
          'Carta de Bodega del Fin del Mundo, El Añelo, Infinitus y bodegas nacionales. El maridaje perfecto para cada plato.',
      },
      {
        icon: 'Utensils',
        name: 'Menú para toda la familia',
        benefit:
          '51 platos entre carnes, pescados, pastas, picadas, pizzas y postres. Algo para cada integrante del grupo.',
      },
      {
        icon: 'Package',
        name: 'Porciones generosas',
        benefit:
          'Porciones abundantes — los clientes destacan que suelen llevarse las sobras. Excelente relación cantidad/precio.',
      },
      {
        icon: 'CalendarCheck',
        name: 'Reservas online',
        benefit:
          'Garantizá tu mesa sin llamar — especialmente útil en temporada alta cuando el restaurante se llena rápido.',
      },
    ],
  },

  socialProof: {
    metrics: [
      { value: 6000, suffix: '+', label: 'Reseñas en Google' },
      { value: 4.1, suffix: '★', label: 'Calificación promedio', decimal: true },
      { value: 18, prefix: '#', label: 'De 221 restaurantes en la ciudad' },
      { value: 51, suffix: '+', label: 'Platos en el menú' },
    ],
    testimonials: [
      {
        // TODO: reemplazar con nombre real de reseñas de Google o TripAdvisor
        name: 'Turista desde Buenos Aires',
        role: 'Visitante',
        city: 'Buenos Aires',
        quote:
          'El cordero al asador es una delicia, el punto de cocción perfecto y jugoso. Las porciones son enormes, volvería sin dudarlo.',
      },
      {
        // TODO: reemplazar con nombre real de reseñas
        name: 'Viajero cordobés',
        role: 'Visitante',
        city: 'Córdoba',
        quote:
          'Excelente parrilla con mucha variedad de platos. Una parada obligatoria si visitás San Martín de los Andes.',
      },
      {
        // TODO: reemplazar con nombre real de reseñas
        name: 'Familia de Rosario',
        role: 'Turista',
        city: 'Rosario',
        quote:
          'Fui con toda la familia y quedamos encantados. El ciervo patagónico y la trucha estaban increíbles. Ya reservamos para la próxima visita.',
      },
    ],
  },

  menu: {
    sectionTitle: 'Nuestros platos',
    sectionSubtitle: 'Lo mejor de la Patagonia en tu mesa.',
    priceRange: '$$–$$$',
    pricePerPerson: 'ARS 12.000 – 18.000 por persona',
    note: 'Precios sujetos a actualización. Consultá el menú del día al momento de la reserva.',
    paymentMethods: 'Efectivo', // TODO: verificar si aceptan tarjeta
    highlights: [
      {
        name: 'Cordero al asador',
        description: 'La estrella de la casa. Cocido a fuego lento con sal patagónica y el sabor único de la leña.',
        price: 'Consultá el precio',
        featured: true,
      },
      {
        name: 'Goulash de ciervo patagónico',
        description: 'Con spätzle artesanal y hongos de pino del bosque andino.',
        price: 'Consultá el precio',
        featured: false,
      },
      {
        name: 'Trucha a la manteca negra',
        description: 'Trucha fresca de los lagos patagónicos con alcaparras y limón.',
        price: 'Consultá el precio',
        featured: false,
      },
      {
        name: 'Bondiola de cerdo',
        description: 'Con salsa de frutos rojos del bosque y puré rústico de papas.',
        price: 'Consultá el precio',
        featured: false,
      },
    ],
    cta: { text: 'Reservar mesa', href: '#contacto' },
  },

  faq: [
    {
      question: '¿Necesito reservar mesa con anticipación?',
      answer:
        'Sí, especialmente en temporada alta (diciembre–marzo) el restaurante se llena rápido. Recomendamos reservar con 24–48hs de anticipación.',
    },
    {
      question: '¿Qué plato es el más pedido?',
      answer:
        'El cordero al asador es la estrella de la casa. También son muy pedidos el goulash de ciervo patagónico y la trucha a la manteca negra.',
    },
    {
      question: '¿Hay opciones para quienes no comen carne roja?',
      answer:
        'Sí. Ofrecemos truchas, salmón, bondiola de cerdo, pastas, pizzas y picadas. Hay algo para todos en el grupo.',
    },
    {
      question: '¿Dónde están ubicados?',
      answer:
        'Estamos en Gral. Villegas 598, en el centro de San Martín de los Andes, a pocas cuadras del lago Lácar.',
    },
    {
      question: '¿Cuáles son los horarios?',
      answer:
        'Consultanos por WhatsApp o llamanos para confirmar horarios de almuerzo y cena del día.', // TODO: verificar y completar horarios reales
    },
    {
      question: '¿Aceptan tarjetas de crédito/débito?',
      answer:
        'Confirmamos efectivo. Para verificar medios de pago disponibles al momento de tu visita, consultanos directamente.', // TODO: verificar si aceptan tarjeta
    },
    {
      question: '¿Cuántos platos tiene el menú?',
      answer:
        'Contamos con más de 51 platos: carnes al asador, caza mayor (ciervo, jabalí), pescados, pastas artesanales, pizzas, picadas y postres de autor.',
    },
  ],

  gallery: {
    sectionTitle: 'Así es Piscis',
    sectionSubtitle: 'El fuego, los platos y el ambiente que te esperan.',
    images: [
      {
        src: '/images/gallery/cordero-asador.jpg',
        alt: 'Cordero al asador sobre las brasas',
        caption: 'Cordero al asador',
        featured: true, // ocupa 2 columnas en desktop
      },
      {
        src: '/images/gallery/salon-interior.jpg',
        alt: 'Interior del salón de Parrilla Piscis',
        caption: 'Nuestro salón',
        featured: false,
      },
      {
        src: '/images/gallery/goulash-ciervo.jpg',
        alt: 'Goulash de ciervo patagónico con spätzle',
        caption: 'Goulash de ciervo',
        featured: false,
      },
      {
        src: '/images/gallery/trucha.jpg',
        alt: 'Trucha a la manteca negra',
        caption: 'Trucha a la manteca negra',
        featured: false,
      },
      {
        src: '/images/gallery/parrilla-fuego.jpg',
        alt: 'Parrilla con brasas encendidas',
        caption: 'A fuego lento',
        featured: false,
      },
      {
        src: '/images/gallery/vinos.jpg',
        alt: 'Selección de vinos patagónicos',
        caption: 'Vinos patagónicos',
        featured: false,
      },
    ],
  },

  location: {
    address: 'Gral. Villegas 598, San Martín de los Andes, Neuquén, Argentina',
    mapsEmbedUrl:
      'https://maps.google.com/maps?q=Gral.+Villegas+598,+San+Martín+de+los+Andes,+Neuquén,+Argentina&output=embed',
    mapsLink:
      'https://maps.google.com/?q=Gral.+Villegas+598,+San+Martín+de+los+Andes,+Neuquén,+Argentina',
    hours: null, // TODO: verificar horarios reales de almuerzo y cena
    reference: 'A pocas cuadras del lago Lácar, en el centro de San Martín de los Andes.',
  },

  footer: {
    tagline: 'Auténtica parrilla patagónica desde San Martín de los Andes.',
    links: [
      { label: 'Menú', href: '#menu' },
      { label: 'Reservas', href: '#contacto' },
      { label: 'Cómo llegar', href: '#ubicacion' },
      { label: 'Nosotros', href: '#nosotros' },
    ],
    social: {
      facebook: 'https://www.facebook.com/piscisparrillayrestaurante/',
      instagram: null, // TODO: encontrar cuenta oficial
    },
    copyright: '© 2026 Parrilla Patagonia Piscis. Todos los derechos reservados.',
  },
}

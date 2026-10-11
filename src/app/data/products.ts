export interface Product {
  id: string;
  name: string;
  category: 'artesanias' | 'antiguedades' | 'maquinas';
  description: string;
  image: string;
  badge?: string;
  isUnique: boolean;
}

export const products: Product[] = [
  // ─── ARTESANÍAS ───────────────────────────────
  {
    id: 'art-001',
    name: 'Aros Calipso en Alpaca Hechos a Mano',
    category: 'artesanias',
    description: 'Piedra calipso natural engarzada a mano con alambre de alpaca moldeado con pinzas y fuego. Símbolo de claridad y mar.',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&auto=format',
    badge: 'Piedra Calipso',
    isUnique: true,
  },
  {
    id: 'art-002',
    name: 'Collar Amuleto con Cuarzo Cristal Rústico',
    category: 'artesanias',
    description: 'Punta de cuarzo cristal en bruto sostenida en tejido de macramé y cordón encerado. Protector de energía y luz.',
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&auto=format',
    badge: 'Cuarzo Natural',
    isUnique: true,
  },
  {
    id: 'art-003',
    name: 'Pulsera Macramé con Piedras de la Tierra',
    category: 'artesanias',
    description: 'Tejido artesanal nudo a nudo con cuarzo rosa, turquesa calipso y cuentas de cobre. Inspirada en los ciclos de la siembra.',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&auto=format',
    badge: 'Hecho a Mano',
    isUnique: false,
  },
  {
    id: 'art-004',
    name: 'Aros Espirales de Cobre & Ojo de Tigre',
    category: 'artesanias',
    description: 'Espirales sagradas inspiradas en el movimiento de las galaxias y la cuenta maya, con esfera de ojo de tigre pulida a mano.',
    image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=600&auto=format',
    badge: 'Cosmos Maya',
    isUnique: true,
  },
  {
    id: 'art-005',
    name: 'Collar Sincronía Lunar con Lapislázuli',
    category: 'artesanias',
    description: 'Lapislázuli chileno de alta cordillera engarzado en marco rústico de alpaca. Conexión con el cielo nocturno y la intuición.',
    image: 'https://images.unsplash.com/photo-1635767798638-3e25273a8236?w=600&auto=format',
    badge: 'Lapislázuli Chileno',
    isUnique: true,
  },

  // ─── ANTIGÜEDADES ─────────────────────────────
  {
    id: 'ant-001',
    name: 'Anillo de Compromiso Art Déco',
    category: 'antiguedades',
    description: 'Oro amarillo de 18k con un diamante central de corte brillante y detalles tallados a mano, circa 1930.',
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&auto=format',
    badge: 'Histórico',
    isUnique: true,
  },
  {
    id: 'ant-002',
    name: 'Reloj de Bolsillo Suizo del Siglo XIX',
    category: 'antiguedades',
    description: 'Reloj de oro de 14k con maquinaria a la vista y grabados florales en la tapa trasera.',
    image: 'https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?w=600&auto=format',
    badge: 'Exclusivo',
    isUnique: true,
  },
  {
    id: 'ant-003',
    name: 'Cofre de Bronce Victoriano',
    category: 'antiguedades',
    description: 'Joyero victoriano de bronce macizo con relieves mitológicos e interior forrado en seda carmesí original, circa 1880.',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&auto=format',
    badge: 'Pieza Única',
    isUnique: true,
  },

  // ─── MÁQUINAS DE ESCRIBIR ─────────────────────
  {
    id: 'maq-001',
    name: 'Olivetti Lettera 32',
    category: 'maquinas',
    description: 'Icónica máquina de escribir portátil italiana, completamente restaurada con cinta nueva y calibración precisa.',
    image: 'https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?w=600&auto=format',
    badge: 'Restaurada',
    isUnique: true,
  },
  {
    id: 'maq-002',
    name: 'Underwood Standard No. 5',
    category: 'maquinas',
    description: 'Clásica máquina de escribir americana de principios del siglo XX, con teclado completo de 84 teclas.',
    image: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=600&auto=format',
    badge: 'Histórico',
    isUnique: true,
  },

  // ═══════════════════════════════════════════════
  //  ↑  Acá arriba agregás más productos
  //  Ejemplo:
  //  {
  //    id: 'art-006',
  //    name: 'Pulsera de Plata con Ónix',
  //    category: 'artesanias',
  //    description: 'Pulsera artesanal con engarce de ónix negro y cierre de seguridad.',
  //    image: 'https://images.unsplash.com/photo-...',
  //    badge: 'Nuevo',
  //    isUnique: false,
  //  },
  // ═══════════════════════════════════════════════
];

export interface Guarantee {
  name: string;
  icon: string;
  highlight: boolean;
  description: string;
}

export const guarantees: Guarantee[] = [
  {
    name: 'Piedras Vivas & Cuarzos',
    icon: 'Gem',
    highlight: true,
    description: 'Cuarzo cristal, piedra calipso, lapislázuli chileno y amatistas engarzadas a mano con respeto por su energía viva.',
  },
  {
    name: 'Cosmos & Calendario Maya',
    icon: 'History',
    highlight: false,
    description: 'Inspiración en la sincronía del tiempo natural, los ciclos lunares y la observación paciente de las estrellas.',
  },
  {
    name: '100% Hecho a Mano en Chile',
    icon: 'Award',
    highlight: false,
    description: 'Aros, collares y pulseras tejidos y moldeados a mano en alpaca, cobre y macramé en nuestro rincón del GAM.',
  },
  {
    name: 'Tierra, Semilla & Cultivo',
    icon: 'Truck',
    highlight: false,
    description: 'Amor y gratitud por la tierra chilena, sus brotes y los ciclos fértiles reflejados en cada detalle artesanal.',
  },
  {
    name: 'Amuletos con Alma Única',
    icon: 'Star',
    highlight: false,
    description: 'Piezas irrepetibles creadas sin moldes ni apuros, hechas para acompañar tu energía y tu caminar cotidiano.',
  },
  {
    name: 'Rescate de Oficios & Máquinas',
    icon: 'ShieldCheck',
    highlight: false,
    description: 'Cuidado y mantención manual de máquinas de escribir históricas, honrando la memoria y la mecánica noble.',
  },
];

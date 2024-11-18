interface Vehiculo {
  id: number;
  modelo: string;
  precio: string;
  color: string;
  imagen: string;
  especificaciones: {
    motor: string;
    cilindros: number;
    potencia: string;
    transmision: string;
    traccion: string;
    peso: string;
    velocidadMaxima: string;
    consumoCombustible: string;
  };
  caracteristicas: {
    ventajas: string[];
    desventajas: string[];
    seguridad: string[];
    tecnologia: string[];
  };
}

export const vehiculos: Vehiculo[] = [
  {
    id: 1,
    modelo: 'Honda Civic 2022',
    precio: 'USD 32,000',
    color: 'Color blanco',
    imagen: 'assets/images/honda-civic.jpg',
    especificaciones: {
      motor: '1.5L Turbo',
      cilindros: 4,
      potencia: '180 HP',
      transmision: 'CVT Automática',
      traccion: 'Delantera',
      peso: '1,300 kg',
      velocidadMaxima: '210 km/h',
      consumoCombustible: '18.5 km/l',
    },
    caracteristicas: {
      ventajas: [
        'Excelente economía de combustible',
        'Interior espacioso',
        'Tecnología avanzada de seguridad',
      ],
      desventajas: [
        'Precio base elevado',
        'Sistema de info-entretenimiento complejo',
        'Ruido de motor notable en aceleración',
      ],
      seguridad: [
        'Honda Sensing Suite',
        'Control de estabilidad',
        'Airbags múltiples',
      ],
      tecnologia: [
        'Apple CarPlay/Android Auto',
        'Pantalla táctil de 9"',
        'Carga inalámbrica',
      ],
    },
  },
  {
    id: 2,
    modelo: 'Toyota Corolla 2023',
    precio: 'USD 35,000',
    color: 'Color negro',
    imagen: 'assets/images/toyota-corolla.jpg',
    especificaciones: {
      motor: '2.0L Dynamic Force',
      cilindros: 4,
      potencia: '169 HP',
      transmision: 'Direct Shift-CVT',
      traccion: 'Delantera',
      peso: '1,375 kg',
      velocidadMaxima: '200 km/h',
      consumoCombustible: '20 km/l',
    },
    caracteristicas: {
      ventajas: [
        'Alta confiabilidad',
        'Bajo costo de mantenimiento',
        'Excelente valor de reventa',
      ],
      desventajas: [
        'Diseño conservador',
        'Rendimiento moderado',
        'Espacio trasero limitado',
      ],
      seguridad: [
        'Toyota Safety Sense 2.0',
        'Sistema pre-colisión',
        'Monitor de punto ciego',
      ],
      tecnologia: [
        'Sistema multimedia de 8"',
        'Conectividad smartphone',
        'Control por voz',
      ],
    },
  },
  {
    id: 3,
    modelo: 'Volkswagen Golf 2022',
    precio: 'USD 38,000',
    color: 'Color rojo',
    imagen: 'assets/images/vw-golf.jpg',
    especificaciones: {
      motor: '2.0L TSI',
      cilindros: 4,
      potencia: '228 HP',
      transmision: 'DSG 7 velocidades',
      traccion: 'Delantera',
      peso: '1,450 kg',
      velocidadMaxima: '250 km/h',
      consumoCombustible: '15 km/l',
    },
    caracteristicas: {
      ventajas: [
        'Excelente dinámica de conducción',
        'Interior premium',
        'Potente motor turbo',
      ],
      desventajas: [
        'Costo de mantenimiento alto',
        'Espacio de carga limitado',
        'Requiere combustible premium',
      ],
      seguridad: [
        'IQ.DRIVE',
        'Asistente de mantenimiento de carril',
        'Frenado automático de emergencia',
      ],
      tecnologia: ['Digital Cockpit Pro', 'Gesture Control', 'Head-up Display'],
    },
  },
  {
    id: 4,
    modelo: 'Mazda 3 2023',
    precio: 'USD 33,500',
    color: 'Color azul',
    imagen: 'assets/images/mazda-3.jpg',
    especificaciones: {
      motor: '2.5L Skyactiv-G',
      cilindros: 4,
      potencia: '186 HP',
      transmision: 'Automática 6 velocidades',
      traccion: 'Delantera',
      peso: '1,400 kg',
      velocidadMaxima: '215 km/h',
      consumoCombustible: '17 km/l',
    },
    caracteristicas: {
      ventajas: [
        'Diseño premium',
        'Calidad de construcción superior',
        'Excelente manejo',
      ],
      desventajas: [
        'Visibilidad trasera limitada',
        'Espacio trasero ajustado',
        'Sistema de info-entretenimiento básico',
      ],
      seguridad: ['i-Activsense', 'Monitor 360°', 'Control G-Vectoring Plus'],
      tecnologia: ['Mazda Connect', 'HUD a color', 'Sistema Bose premium'],
    },
  },
  {
    id: 5,
    modelo: 'Hyundai Elantra 2023',
    precio: 'USD 31,000',
    color: 'Color plata',
    imagen: 'assets/images/hyundai-elantra.jpg',
    especificaciones: {
      motor: '2.0L MPI',
      cilindros: 4,
      potencia: '147 HP',
      transmision: 'IVT Automática',
      traccion: 'Delantera',
      peso: '1,320 kg',
      velocidadMaxima: '195 km/h',
      consumoCombustible: '18.5 km/l',
    },
    caracteristicas: {
      ventajas: [
        'Diseño futurista',
        'Amplio espacio interior',
        'Garantía extendida',
      ],
      desventajas: [
        'Materiales interiores económicos',
        'Manejo poco deportivo',
        'Motor base modesto',
      ],
      seguridad: [
        'SmartSense',
        'Asistente de colisión frontal',
        'Alerta de fatiga del conductor',
      ],
      tecnologia: [
        'Pantalla dual de 10.25"',
        'BlueLink connected car',
        'Llave digital',
      ],
    },
  },
  {
    id: 6,
    modelo: 'Kia Forte 2023',
    precio: 'USD 29,500',
    color: 'Color gris',
    imagen: 'assets/images/kia-forte.jpg',
    especificaciones: {
      motor: '2.0L Nu',
      cilindros: 4,
      potencia: '147 HP',
      transmision: 'IVT Automática',
      traccion: 'Delantera',
      peso: '1,310 kg',
      velocidadMaxima: '190 km/h',
      consumoCombustible: '19 km/l',
    },
    caracteristicas: {
      ventajas: [
        'Buen valor por el dinero',
        'Equipamiento generoso',
        'Garantía líder en el segmento',
      ],
      desventajas: [
        'Conducción poco emocionante',
        'Suspensión firme',
        'Asientos traseros ajustados',
      ],
      seguridad: [
        'Drive Wise',
        'Asistente de mantenimiento de carril',
        'Alerta de colisión frontal',
      ],
      tecnologia: ['UVO link', 'Pantalla táctil de 8"', 'Cargador inalámbrico'],
    },
  },
  {
    id: 7,
    modelo: 'Nissan Sentra 2023',
    precio: 'USD 30,500',
    color: 'Color verde',
    imagen: 'assets/images/nissan-sentra.jpg',
    especificaciones: {
      motor: '2.0L DOHC',
      cilindros: 4,
      potencia: '149 HP',
      transmision: 'CVT Xtronic',
      traccion: 'Delantera',
      peso: '1,380 kg',
      velocidadMaxima: '195 km/h',
      consumoCombustible: '18 km/l',
    },
    caracteristicas: {
      ventajas: [
        'Diseño exterior atractivo',
        'Asientos Zero Gravity confortables',
        'Buen equipamiento de seguridad',
      ],
      desventajas: [
        'Aceleración moderada',
        'Sin opción de tracción total',
        'Espacio de maletero limitado',
      ],
      seguridad: [
        'Safety Shield 360',
        'Alerta de tráfico cruzado',
        'Frenado inteligente de emergencia',
      ],
      tecnologia: [
        'NissanConnect',
        'Android Auto/Apple CarPlay',
        'Sistema de audio Bose Premium',
      ],
    },
  },
  {
    id: 8,
    modelo: 'Chevrolet Cruze 2022',
    precio: 'USD 28,000',
    color: 'Color café',
    imagen: 'assets/images/chevrolet-cruze.jpg',
    especificaciones: {
      motor: '1.4L Turbo',
      cilindros: 4,
      potencia: '153 HP',
      transmision: 'Automática 6 velocidades',
      traccion: 'Delantera',
      peso: '1,360 kg',
      velocidadMaxima: '200 km/h',
      consumoCombustible: '17.5 km/l',
    },
    caracteristicas: {
      ventajas: [
        'Precio competitivo',
        'Buen rendimiento de combustible',
        'Conectividad 4G LTE',
      ],
      desventajas: [
        'Calidad interior mejorable',
        'Espacio trasero limitado',
        'Tecnología algo anticuada',
      ],
      seguridad: ['Chevrolet Safety Assist', 'StabiliTrak', '10 airbags'],
      tecnologia: ['MyLink de 7"', 'OnStar', 'WiFi Hotspot'],
    },
  },
  {
    id: 9,
    modelo: 'Subaru Impreza 2023',
    precio: 'USD 36,500',
    color: 'Color azul marino',
    imagen: 'assets/images/subaru-impreza.jpg',
    especificaciones: {
      motor: '2.0L Boxer',
      cilindros: 4,
      potencia: '152 HP',
      transmision: 'CVT Lineartronic',
      traccion: 'AWD Simétrica',
      peso: '1,425 kg',
      velocidadMaxima: '205 km/h',
      consumoCombustible: '16 km/l',
    },
    caracteristicas: {
      ventajas: [
        'Tracción total estándar',
        'Excelente seguridad',
        'Gran capacidad todo clima',
      ],
      desventajas: [
        'Consumo de combustible mayor',
        'Interior básico',
        'Aceleración modesta',
      ],
      seguridad: [
        'EyeSight',
        'STARLINK Safety Plus',
        'Sistema de frenado pre-colisión',
      ],
      tecnologia: [
        'STARLINK Multimedia',
        'Sistema de audio Harman Kardon',
        'X-MODE con control de descenso',
      ],
    },
  },
  {
    id: 10,
    modelo: 'Audi A3 2023',
    precio: 'USD 45,000',
    color: 'Color blanco perla',
    imagen: 'assets/images/audi-a3.jpg',
    especificaciones: {
      motor: '2.0L TFSI',
      cilindros: 4,
      potencia: '201 HP',
      transmision: 'S tronic 7 velocidades',
      traccion: 'Quattro AWD',
      peso: '1,495 kg',
      velocidadMaxima: '240 km/h',
      consumoCombustible: '15.5 km/l',
    },
    caracteristicas: {
      ventajas: [
        'Interior premium',
        'Tecnología de vanguardia',
        'Excelente dinámica de conducción',
      ],
      desventajas: [
        'Precio elevado',
        'Costo de mantenimiento alto',
        'Espacio trasero ajustado',
      ],
      seguridad: [
        'Audi pre sense',
        'Asistente de carril activo',
        'Control de crucero adaptativo',
      ],
      tecnologia: [
        'Virtual Cockpit',
        'MMI touch',
        'Bang & Olufsen Sound System',
      ],
    },
  },
  {
    id: 11,
    modelo: 'BMW Serie 2 2023',
    precio: 'USD 48,000',
    color: 'Color negro metálico',
    imagen: 'assets/images/bmw-serie2.jpg',
    especificaciones: {
      motor: '2.0L TwinPower Turbo',
      cilindros: 4,
      potencia: '228 HP',
      transmision: 'Automática 8 velocidades',
      traccion: 'Trasera',
      peso: '1,535 kg',
      velocidadMaxima: '250 km/h',
      consumoCombustible: '14.5 km/l',
    },
    caracteristicas: {
      ventajas: [
        'Excelente manejo',
        'Motor potente',
        'Calidad de construcción premium',
      ],
      desventajas: [
        'Precio base alto',
        'Opcionales costosos',
        'Espacio limitado para pasajeros',
      ],
      seguridad: ['Active Guard', 'Driving Assistant', 'Park Distance Control'],
      tecnologia: [
        'BMW Live Cockpit Professional',
        'iDrive 7.0',
        'Head-Up Display',
      ],
    },
  },
  {
    id: 12,
    modelo: 'Mercedes-Benz C. A 2023',
    precio: 'USD 49,500',
    color: 'Color plata metálico',
    imagen: 'assets/images/mercedes-clasea.jpg',
    especificaciones: {
      motor: '2.0L Turbo',
      cilindros: 4,
      potencia: '188 HP',
      transmision: '7G-DCT',
      traccion: '4MATIC AWD',
      peso: '1,565 kg',
      velocidadMaxima: '235 km/h',
      consumoCombustible: '15 km/l',
    },
    caracteristicas: {
      ventajas: [
        'MBUX sistema intuitivo',
        'Diseño interior lujoso',
        'Tecnología de última generación',
      ],
      desventajas: [
        'Precio premium',
        'Espacio de carga reducido',
        'Suspensión firme',
      ],
      seguridad: ['PRE-SAFE', 'Attention Assist', 'Active Brake Assist'],
      tecnologia: [
        'MBUX con pantalla dual',
        'Hey Mercedes voice control',
        'Augmented reality navigation',
      ],
    },
  },
];

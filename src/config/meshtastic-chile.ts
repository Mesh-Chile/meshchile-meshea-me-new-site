export const MESHTASTIC_CHILE = {
  region:          'AU_NZ',
  bandMhz:         '915–928',
  modem:           'LongFast',
  slot:             20,
  freqMhz:          919.875,
  mqtt: {
    host:           'mqtt.meshchile.cl',
    user:           'mshcl2025',
    password:       'meshtastic.cl',
    rootTopic:      'msh/CL',
  },
} as const

export const MESHCORE_CHILE = {
  freqMhz:          927.875,
  bandwidthKhz:     62.5,
  codingRate:       5,
  spreadingFactor:  8,
} as const

export const SOCIAL_LINKS = {
  telegram:   'https://t.me/+5gMDNKN1A1o1MmEx',
  discord:    'https://discord.gg/GGnc5xQujY',
  whatsapp:   'https://chat.whatsapp.com/IlM9TYmARoOI4yfVzMLvQ3',
  instagram:  'https://instagram.com/meshtastic.cl',
  email:      'mailto:contacto@meshea.me',
} as const

export const ECOSYSTEM_LINKS = {
  foro:   'https://foro.meshchile.cl',
  mapa:   'https://mapa.meshea.me',
  malla:  'https://malla.meshea.me',
  vista:  'https://vista.meshea.me',
} as const

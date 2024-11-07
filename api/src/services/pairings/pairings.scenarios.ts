import type { Prisma, Pairing } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.PairingCreateArgs>({
  pairing: {
    one: {
      data: {
        updatedAt: '2024-11-03T21:54:09.907Z',
        event: {
          create: {
            name: 'String',
            date: '2024-11-03T21:54:09.907Z',
            updatedAt: '2024-11-03T21:54:09.907Z',
          },
        },
        santa: {
          create: {
            email: 'String9567735',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2024-11-03T21:54:09.907Z',
          },
        },
        person: {
          create: {
            email: 'String3797556',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2024-11-03T21:54:09.907Z',
          },
        },
      },
    },
    two: {
      data: {
        updatedAt: '2024-11-03T21:54:09.907Z',
        event: {
          create: {
            name: 'String',
            date: '2024-11-03T21:54:09.907Z',
            updatedAt: '2024-11-03T21:54:09.907Z',
          },
        },
        santa: {
          create: {
            email: 'String4943478',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2024-11-03T21:54:09.907Z',
          },
        },
        person: {
          create: {
            email: 'String6442125',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2024-11-03T21:54:09.907Z',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<Pairing, 'pairing'>

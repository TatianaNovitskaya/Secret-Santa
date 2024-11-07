import type { Prisma, ThankYou } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.ThankYouCreateArgs>({
  thankYou: {
    one: {
      data: {
        message: 'String',
        event: {
          create: {
            name: 'String',
            date: '2024-11-03T21:55:40.844Z',
            updatedAt: '2024-11-03T21:55:40.844Z',
          },
        },
        user: {
          create: {
            email: 'String8341209',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2024-11-03T21:55:40.844Z',
          },
        },
        toUser: {
          create: {
            email: 'String8162519',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2024-11-03T21:55:40.844Z',
          },
        },
      },
    },
    two: {
      data: {
        message: 'String',
        event: {
          create: {
            name: 'String',
            date: '2024-11-03T21:55:40.844Z',
            updatedAt: '2024-11-03T21:55:40.844Z',
          },
        },
        user: {
          create: {
            email: 'String1315262',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2024-11-03T21:55:40.844Z',
          },
        },
        toUser: {
          create: {
            email: 'String7139844',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2024-11-03T21:55:40.844Z',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<ThankYou, 'thankYou'>

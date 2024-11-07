import type { Prisma, Invite } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.InviteCreateArgs>({
  invite: {
    one: {
      data: {
        status: 'INVITED',
        email: 'String',
        name: 'String',
        event: {
          create: {
            name: 'String',
            date: '2024-11-04T17:37:42.713Z',
            updatedAt: '2024-11-04T17:37:42.713Z',
          },
        },
      },
    },
    two: {
      data: {
        status: 'INVITED',
        email: 'String',
        name: 'String',
        event: {
          create: {
            name: 'String',
            date: '2024-11-04T17:37:42.714Z',
            updatedAt: '2024-11-04T17:37:42.714Z',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<Invite, 'invite'>

import type { Prisma, Event } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.EventCreateArgs>({
  event: {
    one: {
      data: {
        name: 'String',
        date: '2024-11-03T21:53:51.517Z',
        updatedAt: '2024-11-03T21:53:51.517Z',
      },
    },
    two: {
      data: {
        name: 'String',
        date: '2024-11-03T21:53:51.517Z',
        updatedAt: '2024-11-03T21:53:51.517Z',
      },
    },
  },
})

export type StandardScenario = ScenarioData<Event, 'event'>

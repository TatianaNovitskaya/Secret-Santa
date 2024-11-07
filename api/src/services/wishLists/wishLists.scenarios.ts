import type { Prisma, WishList } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.WishListCreateArgs>({
  wishList: {
    one: {
      data: {
        name: 'String',
        url: 'String',
        updatedAt: '2024-11-03T21:54:34.767Z',
        user: {
          create: {
            email: 'String1319435',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2024-11-03T21:54:34.767Z',
          },
        },
        event: {
          create: {
            name: 'String',
            date: '2024-11-03T21:54:34.767Z',
            updatedAt: '2024-11-03T21:54:34.767Z',
          },
        },
      },
    },
    two: {
      data: {
        name: 'String',
        url: 'String',
        updatedAt: '2024-11-03T21:54:34.767Z',
        user: {
          create: {
            email: 'String5263265',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2024-11-03T21:54:34.768Z',
          },
        },
        event: {
          create: {
            name: 'String',
            date: '2024-11-03T21:54:34.768Z',
            updatedAt: '2024-11-03T21:54:34.768Z',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<WishList, 'wishList'>

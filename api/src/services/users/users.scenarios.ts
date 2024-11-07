import type { Prisma, User } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.UserCreateArgs>({
  user: {
    one: {
      data: {
        email: 'String7255865',
        hashedPassword: 'String',
        salt: 'String',
        updatedAt: '2024-11-03T21:52:50.369Z',
      },
    },
    two: {
      data: {
        email: 'String7888164',
        hashedPassword: 'String',
        salt: 'String',
        updatedAt: '2024-11-03T21:52:50.369Z',
      },
    },
  },
})

export type StandardScenario = ScenarioData<User, 'user'>

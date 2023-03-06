import type { Prisma, UserBalance } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.UserBalanceCreateArgs>({
  userBalance: {
    one: { data: { id: 'String', amount: 5335721.010676968 } },
    two: { data: { id: 'String', amount: 543325.8670523511 } },
  },
})

export type StandardScenario = ScenarioData<UserBalance, 'userBalance'>

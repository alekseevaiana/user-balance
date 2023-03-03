import type { Prisma, UserBalance } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.UserBalanceCreateArgs>({
  userBalance: {
    one: { data: { id: 'String', amount: 9022108.326544391 } },
    two: { data: { id: 'String', amount: 3792473.447553182 } },
  },
})

export type StandardScenario = ScenarioData<UserBalance, 'userBalance'>

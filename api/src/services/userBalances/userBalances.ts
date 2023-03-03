import { ethers } from 'ethers'
import type { QueryResolvers, MutationResolvers } from 'types/graphql'

import { db } from 'src/lib/db'

const { Contract, getDefaultProvider, providers, utils } = ethers

// const provider = new providers.JsonRpcProvider(
//   'https://www.ethercluster.com/etc',
//   'classic'
// )
const provider = getDefaultProvider()

export const userBalances: QueryResolvers['userBalances'] = () => {
  return db.userBalance.findMany()
}

export const userBalance: QueryResolvers['userBalance'] = async ({ id }) => {
  const balance = await provider.getBalance(id)
  return { id, amount: balance.toString() }
}

export const createUserBalance: MutationResolvers['createUserBalance'] = ({
  input,
}) => {
  return db.userBalance.create({
    data: input,
  })
}

export const updateUserBalance: MutationResolvers['updateUserBalance'] = ({
  id,
  input,
}) => {
  return db.userBalance.update({
    data: input,
    where: { id },
  })
}

export const deleteUserBalance: MutationResolvers['deleteUserBalance'] = ({
  id,
}) => {
  return db.userBalance.delete({
    where: { id },
  })
}

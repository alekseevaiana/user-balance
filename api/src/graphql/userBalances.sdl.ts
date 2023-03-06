export const schema = gql`
  type UserBalance {
    id: String!
    amount: Float!
  }

  type Query {
    userBalances: [UserBalance!]! @requireAuth
    userBalance(id: String!): UserBalance @requireAuth
  }

  input CreateUserBalanceInput {
    amount: Float!
  }

  input UpdateUserBalanceInput {
    amount: Float
  }

  type Mutation {
    createUserBalance(input: CreateUserBalanceInput!): UserBalance! @requireAuth
    updateUserBalance(
      id: String!
      input: UpdateUserBalanceInput!
    ): UserBalance! @requireAuth
    deleteUserBalance(id: String!): UserBalance! @requireAuth
  }
`

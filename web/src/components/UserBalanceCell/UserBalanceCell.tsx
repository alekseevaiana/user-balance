import type {
  FindUserBalanceQuery,
  FindUserBalanceQueryVariables,
} from 'types/graphql'
import Box from '@mui/material/Box'
import Alert from '@mui/material/Alert'
import Card from '@mui/material/Card'
import CircularProgress from '@mui/material/CircularProgress'

import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

export const QUERY = gql`
  query FindUserBalanceQuery($id: Int!) {
    userBalance: userBalance(id: $id) {
      id
      amount
    }
  }
`

export const Loading = () => (
  <Wrapper>
    <CircularProgress />
  </Wrapper>
)

export const Empty = () => (
  <Wrapper>
    <Alert severity="warning">No data found</Alert>
  </Wrapper>
)

export const Failure = ({
  error,
}: CellFailureProps<FindUserBalanceQueryVariables>) => (
  <Wrapper>
    <Alert severity="error">Error getting balance: {error?.message}</Alert>
  </Wrapper>
)

export const Success = ({
  userBalance,
}: CellSuccessProps<FindUserBalanceQuery, FindUserBalanceQueryVariables>) => {
  return (
    <Wrapper>
      <Typography sx={{ fontSize: 50 }} color="orange">
        {userBalance.amount}
      </Typography>
    </Wrapper>
  )
}

const Wrapper = ({ children }) => {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Your balance
        </Typography>
        {children}
      </CardContent>
    </Card>
  )
}

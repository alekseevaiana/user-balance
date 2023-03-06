import { useState } from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

import UserBalanceCell from 'src/components/UserBalanceCell'

export default function UserBalancePage() {
  const [id, setId] = useState('')
  const [value, setValue] = useState('ethers.eth')
  // additional case 0xF02c1c8e6114b1Dbe8937a39260b5b0a374432bB

  const checkBalance = () => {
    setId(value)
  }

  return (
    <div>
      <TextField
        value={value}
        onChange={(e) => setValue(e.target.value)}
        size="small"
      />
      <Button variant="contained" onClick={checkBalance}>
        Check balance
      </Button>

      {id ? <UserBalanceCell id={id} /> : ''}
    </div>
  )
}

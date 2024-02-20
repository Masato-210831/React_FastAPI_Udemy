import React from 'react'
import { useLocation, Link } from "react-router-dom"
import { Container, Box, Typography} from '@mui/material';



const RegisterSucceed = () => {
  const { state } = useLocation()

  return (
    <div>
      <Container maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography variant="h5">登録完了しました。</Typography>
          <br/>
          <Typography variant="h5">名前:{state.username}</Typography>
          <Typography variant="h5">パスワード:{state.password}</Typography>
          <br/>
          <Link to="/login">ログイン画面へ</Link>
        </Box>
      </Container>
    </div>
  )
}

export default RegisterSucceed
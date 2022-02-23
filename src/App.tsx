import React from 'react'
import liff from '@line/liff'
import { AppBar, Typography, Toolbar } from '@mui/material'
import { createTheme, ThemeProvider, styled } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import Main from './pages/main'

const Container = styled('div')({
  margin: 0,
  padding: '1em',
})

function App() {
  const theme = createTheme()
  let isLoggedIn = false
  try {
    isLoggedIn = liff.isLoggedIn()
  } catch (e) {
    console.log(e)
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar
        position="absolute"
        sx={{
          position: 'relative',
          borderBottom: (t) => `1px solid ${t.palette.divider}`,
        }}>
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            React LIFF Sample
          </Typography>
        </Toolbar>
      </AppBar>
      <Container>{isLoggedIn ? <Main /> : <p>please login</p>}</Container>
    </ThemeProvider>
  )
}

export default App

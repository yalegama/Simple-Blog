import React from 'react'
import Test1 from './components/Test1'
import { createTheme,ThemeProvider } from '@material-ui/core'


const theme=createTheme({
  palette:{
    primary:{
      main:'#fefefe'
    }
  }
})


function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
      <Test1/>
    </div>
    </ThemeProvider>
  )
}

export default App

import { useState } from 'react'
import Container from './Components/Container'
import AppName from './Components/AppName'
import ButtonContainer from './Components/ButtonContainer/ButtonContainer'
import AddTaskBar from './Components/AddTask/AddTaskBar'


function App() {
  const [count, setCount] = useState(0)

  return (
    <Container>
      <AppName></AppName>
      <ButtonContainer></ButtonContainer>
      <AddTaskBar></AddTaskBar>
    </Container>
  )
}

export default App

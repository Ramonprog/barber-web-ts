import { Box, Button, Container, Input, Link } from "@chakra-ui/react"

import Logo from './assets/logo.png'
import { Image, InputArea } from "./styles"

function App() {

  return (
    <Box sx={{ height: '100vh' }} background='barber.900' color='white'>
      <Container maxW='1200px'>
        <Box sx={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
          <Image src={Logo} alt='Logo' />
          <InputArea>
            <Input placeholder='Digite seu email...' />
            <Input type="password" placeholder="********" />
            <Button width='100%' colorScheme='orange' size='lg'>Acessar</Button>
          </InputArea>
          <Link mt='10px'>Quero cadastrar minha barbearia Clique aqui.</Link>
        </Box>
      </Container>
    </Box>
  )
}

export default App

import { Center, Flex } from "@chakra-ui/react"
import { useEffect } from "react"
import Logo from '../../assets/logo.png'
import { CustomInput } from "../../components/Input"

export function Login() {

  useEffect(() => {
    document.title = 'BarberPro - Faça seu login'
  }, [])

  return (
    <Flex background='barber.900' height="100vh" alignItems='center' justifyContent='center'>
      <Flex width={640} direction='column' p={14} rounded={8}>
        <Center p={4}>
          <img src={Logo} alt='BarberPro logo' loading="lazy" />
        </Center>
        <CustomInput placeholder='Digite seu e-mail...' color='#fff' background='barber.400' variant='filled' size={"lg"} type="email" mb={3} />
        <CustomInput placeholder='Digite sua senha...' color='#fff' background='barber.400' variant='filled' size={"lg"} type="password" mb={6} />
      </Flex>
    </Flex>
  )
}
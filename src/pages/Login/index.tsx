import { Flex } from "@chakra-ui/react"
import { useEffect } from "react"

export function Login() {

  useEffect(() => {
    document.title = 'BarberPro - Faça seu login'
  }, [])

  return (
    <Flex>
      login
    </Flex>
  )
}
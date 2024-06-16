import { Input, InputProps, forwardRef } from '@chakra-ui/react'


export const CustomInput = forwardRef<InputProps, 'input'>((Props, ref) => {
  return (
    <Input ref={ref} {...Props} />
  )
})
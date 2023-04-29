import Layout from '@/components/Layout'
import { ChakraProvider } from '@chakra-ui/react'


export default function Home() {
  return (
    <ChakraProvider>
      <Layout/>
    </ChakraProvider>
  )
}

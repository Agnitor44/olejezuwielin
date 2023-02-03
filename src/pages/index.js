import Layout from '@/components/Layout'
import { ChakraProvider } from '@chakra-ui/react'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <ChakraProvider>
      <Layout/>
    </ChakraProvider>
  )
}

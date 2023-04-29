import React, {useState} from 'react'
import Nav from './Nav'
import dynamic from 'next/dynamic'
import { useDisclosure, VStack } from '@chakra-ui/react'
import Header from './Header'
import About from './About'
import Products from './Products'
import ProductModal from './ProductModal'
import Contact from './Contact'
import Footer from './Footer'

export default function Layout() {

  const {isOpen, onOpen, onClose} = useDisclosure();
  const [product, setProduct] = useState(null);

  const openModal = async(value) => {
    await setProduct(value)
    onOpen()
  }

  const Map = dynamic(
    () => import('./Map'), // replace '@components/map' with your component's location
    { ssr: false } // This line is important. It's what prevents server-side render
  )

  return (
   <VStack spacing={0} bg='gray.50'>
        <Nav/>
        <Header/>
        <About/>

        <Products openModal={openModal}/>

        <Contact/>
        <Map/>
        
        <Footer/>
        <ProductModal isOpen={isOpen} onClose={onClose} product={product}/>
    </VStack>
  )
}

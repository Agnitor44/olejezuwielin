import React from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    HStack,
  } from '@chakra-ui/react';
  import {
    Box,
    chakra,
    Container,
    Stack,
    Text,
    Image,
    Flex,
    VStack,
    Button,
    Heading,
    SimpleGrid,
    StackDivider,
    useColorModeValue,
    VisuallyHidden,
    List,
    ListItem,
    Divider,
  } from '@chakra-ui/react';
  import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { MdLocalShipping } from 'react-icons/md';

export default function ProductModal(
    {onClose, isOpen, product}
) {

    const {name, about, how, sub, contain, image, price, notLiquid} = product ?? {};

  const renderConsume = () => {
    if(how) {
        return (
            <Box w='100%'>
               <Text
                 fontSize={{ base: '16px', lg: '18px' }}
                 color={useColorModeValue('yellow.500', 'yellow.300')}
                 fontWeight={'500'}
                 textTransform={'uppercase'}
                 mb={'2'}>
                 Spożycie
               </Text>
 
               <List mb={4} w='100%' spacing={2}>
                   {how?.map(item => (
                         <ListItem>
                        {`${item}`}
                       </ListItem>
                   ))}
               </List> 
               <Divider/>
             </Box>
   )
    }
return null
  }   

 const renderPrice = () => {
  return (
    <Box w='100%'>
    <Text
      fontSize={{ base: '16px', lg: '18px' }}
      color={useColorModeValue('yellow.500', 'yellow.300')}
      fontWeight={'500'}
      textTransform={'uppercase'}
      mb={'2'}>
      Cena
    </Text>

   <VStack align='start' w={['100%', null, null, '20%']} border='solid 1px black' borderColor='gray.300' p={4}>
   {price?.map(item => (
            
                <HStack w='100%' justifyContent={'space-between'} >
                <Text fontWeight={700}>{`${item.size} ${notLiquid ? 'g' : 'ml'}`}</Text>
              <Text>{`${item.value} zł`}</Text> 
                </HStack>

         
        ))}
   </VStack>


    <Divider/>
  </Box>
  )
 } 
 
  const renderContent = () => {
    return (
        <Container maxW={'7xl'}>
        <VStack>
          <Flex>
            <Image
              rounded={'md'}
              alt={'product image'}
              src={
                image
              }
              fit={'cover'}
              align={'center'}
              w={'100%'}
              h={{ base: '100%', sm: '400px', lg: '500px' }}
            />
          </Flex>
          <Stack spacing={{ base: 6, md: 10 }}>
            <Box as={'header'}>
              <Heading
                lineHeight={1.1}
                fontWeight={600}
                fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
                {name}
              </Heading>
            </Box>
  
            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={'column'}
              divider={
                <StackDivider
                  borderColor={useColorModeValue('gray.200', 'gray.600')}
                />
              }>
              <VStack spacing={{ base: 4, sm: 6 }}>
                <Text fontSize={'lg'}>
                {about}
                </Text>
              </VStack>
        
       
            </Stack>

            <Divider/>

          </Stack>
    </VStack>
        <VStack w='100%' spacing={4} mt={4}>
            {sub && (
        <Box w='100%'>
            <Text
            fontSize={{ base: '16px', lg: '18px' }}
            color={useColorModeValue('yellow.500', 'yellow.300')}
            fontWeight={'500'}
            textTransform={'uppercase'}
            mb={'2'}>
            Dodatkowe informacje
          </Text>

          <Flex mb={4}>
              {sub}
          </Flex>
          <Divider/>

        </Box>
            )}
    
  {renderConsume()}

  {contain && (
        <Box w='100%'>
            <Text
            fontSize={{ base: '16px', lg: '18px' }}
            color={useColorModeValue('yellow.500', 'yellow.300')}
            fontWeight={'500'}
            textTransform={'uppercase'}
            mb={'2'}>
            Przechowywanie
          </Text>

          <Flex mb={4}>
              {contain}
          </Flex>
          <Divider/>
          
        </Box>
            )}

            {renderPrice()}
        </VStack>
  
      </Container>
    )
  }  

  return (
       <Modal size='6xl' isOpen={isOpen && product} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            {renderContent()}
          </ModalBody>
        </ModalContent>
      </Modal>
  )
}

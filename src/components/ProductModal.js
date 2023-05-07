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
                fontSize={{ base: 'sm', sm: 'md', lg: 'lg' }}
                 color={useColorModeValue('yellow.500', 'yellow.300')}
                 fontWeight={'500'}
                 textTransform={'uppercase'}
                 mb={'2'}>
                 Spożycie
               </Text>
 
               <List mb={4} w='100%' spacing={2}>
                   {how?.map(item => (
                         <ListItem fontSize={{ base: 'sm', sm: 'md', lg: 'lg' }}>
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


   
  </Box>
  )
 } 
 
  const renderContent = () => {
    return (
        <Container maxW={'7xl'} pb={'20px'}>
        <VStack >
          <Flex w='100%' mt={'4vh'}>
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
          <Stack pt={'10px'} w='100%'>
                
            <Box w='100%' as={'header'} mb={'5px'}>
              <Heading
                lineHeight={1.1}
                fontWeight={600}
                textAlign={'left'}
                w='100%'
                p={0}
                m={0}
                fontSize={{ base: 'xl', sm: '2xl', lg: '3xl' }}>
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
                <Text fontSize={{ base: 'sm', sm: 'md', lg: 'lg' }}>
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
            fontSize={{ base: 'sm', sm: 'md', lg: 'lg' }}
            color={useColorModeValue('yellow.500', 'yellow.300')}
            fontWeight={'500'}
            textTransform={'uppercase'}
            mb={'2'}>
            Dodatkowe informacje
          </Text>

          <Flex mb={4}>
            <Text  fontSize={{ base: 'sm', sm: 'md', lg: 'lg' }}>
            {sub}

            </Text>
          </Flex>
          <Divider/>

        </Box>
            )}
    
  {renderConsume()}

  {contain && (
        <Box w='100%'>
            <Text
            fontSize={{ base: 'sm', sm: 'md', lg: 'lg' }}
            color={useColorModeValue('yellow.500', 'yellow.300')}
            fontWeight={'500'}
            textTransform={'uppercase'}
            mb={'2'}>
            Przechowywanie
          </Text>

          <Flex mb={4}>
            <Text fontSize={{ base: 'sm', sm: 'md', lg: 'lg' }}>
            {contain}

            </Text>
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
       <Modal zIndex={4} size='6xl' isOpen={isOpen && product} onClose={onClose}>
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

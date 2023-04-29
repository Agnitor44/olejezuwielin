import { Flex, Heading, HStack, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import {
    MdPhone,
    MdEmail,
    MdLocationOn,
    MdFacebook,
    MdOutlineEmail,
  } from 'react-icons/md';
import Form from './Form';


export default function Contact() {

  const renderCard = (icon, text) => {
    return (
      <VStack id='contact' borderRadius='md' w={['100%', null, null, '25%' ]}  p={10}  bg='gray.100' color='black'
      boxShadow={'2xl'}
      >
      {icon}
  <Text textAlign={'center'} fontSize='md' fontWeight={700}>{text}</Text>
  </VStack>
    )
  }

  return (
   <Flex  flexDir='column' alignItems='center' p={5}  w='100%' bg='gray.700' color='white' backgroundImage={'/images/contact/wood.jpg'} >
  
  {/* <Heading textAlign={'center'} py={10}>
    Skontaktuj się!
  </Heading>

<Stack pb={10} spacing={[5, null, null, 0]} flexDir={['column', null, null, 'row']} maxW='1024px' w='100%' justifyContent='space-between' m='0 auto'>
{renderCard(<MdEmail size={'3rem'}/>, 'asdasd@dqasd.com' )}
{renderCard(<MdPhone size={'3rem'} />, '+48 123 312 423' )}
  {renderCard(<MdLocationOn size={'3rem'} />, 'Ustanów Graniczna 41A' )}
</Stack> */}

<Form/>
   </Flex>
  )
}

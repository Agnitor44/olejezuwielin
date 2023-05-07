import { Flex, Text } from '@chakra-ui/react'
import React from 'react'

export default function Footer() {
  return (
   <Flex w='100%' bg='gray.800' h={10} justify={'center'} align={'center'}>
<Text as='h4' color='gray.200'>© 2023 Oleje z Uwielin</Text>
    </Flex>
  )
}

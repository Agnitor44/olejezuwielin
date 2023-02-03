import { oilProducts, otherProducts } from '@/constants/products'
import { Button, Divider, SimpleGrid, VStack } from '@chakra-ui/react'
import {
    Box,
    Center,
    useColorModeValue,
    Heading,
    Text,
    Stack,
    Image,
  } from '@chakra-ui/react';
import React from 'react'

export default function Products({openModal}) {

  const renderCard = (item) => {


    return (
        <Center py={12}>
        <Box
          role={'group'}
          p={6}
          maxW={'330px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.800')}
          boxShadow={'2xl'}
          rounded={'lg'}
          pos={'relative'}
          zIndex={1}>
          <Box
            rounded={'lg'}
            mt={-12}
            pos={'relative'}
            height={'230px'}
            _after={{
              transition: 'all .3s ease',
              content: '""',
              w: 'full',
              h: 'full',
              pos: 'absolute',
              top: 5,
              left: 0,
              backgroundImage: `url(${item?.image})`,
              filter: 'blur(15px)',
              zIndex: -1,
            }}
            _groupHover={{
              _after: {
                filter: 'blur(20px)',
              },
            }}>
            <Image
              rounded={'lg'}
              height={230}
              width={282}
              objectFit={'cover'}
              src={item?.image}
            />
          </Box>
          <Stack pt={10} align={'start'}>
            <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
            {item.name}
            </Heading>
            <Stack pt={2} w={'100%'} direction={'row'} align={'start'} justifyContent='space-between'>
              <Text fontWeight={800} fontSize={'xl'}>
                {
                `od ${item?.price[0].value} zł`
                }
              </Text>
              <Button onClick={() => openModal(item)} size='sm'>
                Szczegóły
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Center>
    )
  }  

  return (
    <VStack id='products'  w='100%' pt={10} >
    <VStack align='start' pt={2}>
        <Heading >Oleje</Heading>
    <SimpleGrid columns={[1, 2, 3, 4]} spacing={10}>
        {oilProducts.map(item => renderCard(item) )}
    </SimpleGrid>

    </VStack>
    <Divider/>
    <VStack align='start'>
    <Heading >Inne</Heading>
    <SimpleGrid columns={[1, 2, 3, 4]} spacing={10}>
        {otherProducts.map(item => renderCard(item) )}
    </SimpleGrid>


    </VStack>

    </VStack>


  )
}


// import { oilProducts, otherProducts } from '@/constants/products'
// import { Button, Divider, SimpleGrid, VStack } from '@chakra-ui/react'
// import {
//     Box,
//     Center,
//     useColorModeValue,
//     Heading,
//     Text,
//     Stack,
//     Image,
//   } from '@chakra-ui/react';
// import React from 'react'

// export default function Products({openModal}) {

//   const renderCard = (item) => {


//     return (
//         <Center py={12}>
//         <Box
//           role={'group'}
//           p={6}
//           maxW={'330px'}
//           w={'full'}
//           bg={useColorModeValue('white', 'gray.800')}
//           boxShadow={'2xl'}
//           rounded={'lg'}
//           pos={'relative'}
//           zIndex={1}>
//           <Box
//             rounded={'lg'}
//             mt={-12}
//             pos={'relative'}
//             height={'230px'}
//             _after={{
//               transition: 'all .3s ease',
//               content: '""',
//               w: 'full',
//               h: 'full',
//               pos: 'absolute',
//               top: 5,
//               left: 0,
//               backgroundImage: `url(${item?.image})`,
//               filter: 'blur(15px)',
//               zIndex: -1,
//             }}
//             _groupHover={{
//               _after: {
//                 filter: 'blur(20px)',
//               },
//             }}>
//             <Image
//               rounded={'lg'}
//               height={230}
//               width={282}
//               objectFit={'cover'}
//               src={item?.image}
//             />
//           </Box>
//           <Stack pt={10} align={'start'}>
//             <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
//             {item.name}
//             </Heading>
//             <Stack pt={2} w={'100%'} direction={'row'} align={'start'} justifyContent='space-between'>
//               <Text fontWeight={800} fontSize={'xl'}>
//                 {
//                 `od ${item?.price[0].value} zł`
//                 }
//               </Text>
//               <Button onClick={() => openModal(item)} size='sm'>
//                 Szczegóły
//               </Button>
//             </Stack>
//           </Stack>
//         </Box>
//       </Center>
//     )
//   }  

//   return (
//     <VStack backgroundImage={'/images/contact/wood.jpg'}  w='100%' pt={10} >
//     <VStack align='start' pt={2}>
//         <Heading color='white'>Oleje</Heading>
//     <SimpleGrid columns={[1, 2, 3, 4]} spacing={10}>
//         {oilProducts.map(item => renderCard(item) )}
//     </SimpleGrid>

//     </VStack>

//     <VStack align='start'>
//     <Heading color='white'>Inne</Heading>
//     <SimpleGrid columns={[1, 2, 3, 4]} spacing={10}>
//         {otherProducts.map(item => renderCard(item) )}
//     </SimpleGrid>


//     </VStack>

//     </VStack>


//   )
// }


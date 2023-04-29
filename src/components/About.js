import {
    Container,
    SimpleGrid,
    Image,
    Flex,
    Heading,
    Text,
    Stack,
    StackDivider,
    Icon,
    useColorModeValue,
  } from '@chakra-ui/react';
  import {
    IoAnalyticsSharp,
    IoLogoBitcoin,
    IoSearchSharp,
  } from 'react-icons/io5';
  import { ReactElement } from 'react';
  

  
  const Feature = ({ text, icon, iconBg }) => {
    return (
      <Stack direction={'row'} align={'center'}>
        <Flex
          w={8}
          h={8}
          align={'center'}
          justify={'center'}
          rounded={'full'}
          bg={iconBg}>
          {icon}
        </Flex>
        <Text fontWeight={600}>{text}</Text>
      </Stack>
    );
  };
  
  export default function About() {
    return (
        
      
      <Flex id='about' py={10}  w='100%'>
        <Container  boxShadow={'-3px 9px 24px 0px rgba(66, 68, 90, 1)'} backgroundImage={'/images/contact/wood.jpg'}  w='100%'   mt={10} maxW={'7xl'} py={12} px={10} color='white' borderRadius={'md'}>
          <SimpleGrid  bg='blackAlpha.600' columns={{ base: 1, md: 2 }} spacing={10}>
            <Stack p={4}  spacing={4}>
              <Heading>
              O nas
          </Heading>
          <Text fontSize={{ base: 'sm', sm: 'md', lg: 'lg' }}>

          Witaj na naszej stronie internetowej! Jesteśmy dumni z tego, że reprezentujemy lokalny biznes, który specjalizuje się w tworzeniu i sprzedaży olejów najwyższej jakości w Uwielinach. Nasza pasja i zaangażowanie w to, co robimy, pozwala nam zaoferować naszym klientom produkty, które są zarówno pyszne, jak i zdrowe. Wytwarzamy nasze oleje wyłącznie z najlepszych, lokalnie pozyskiwanych składników i z użyciem tradycyjnych metod produkcji. Dzięki temu nasze produkty są niepowtarzalne i wypełnione naturalnym smakiem.
          </Text>
            </Stack>
            <Flex>
              <Image
                rounded={'md'}
                alt={'feature image'}
                src={
                 '/images/about/about.jpg'
                }
                objectFit={'cover'}
              />
            </Flex>
          </SimpleGrid>
        </Container>
        </Flex>

    );
  }



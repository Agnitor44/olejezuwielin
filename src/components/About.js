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
        <Container backgroundImage={'/images/contact/wood.jpg'}  w='100%'   mt={10} maxW={'7xl'} py={12} px={10} color='white' borderRadius={'md'}>
          <SimpleGrid  bg='blackAlpha.600' columns={{ base: 1, md: 2 }} spacing={10}>
            <Stack p={4}  spacing={4}>
              <Heading>
              O nas
          </Heading>
          <Text>
          Witaj na naszej stronie internetowej! Jesteśmy dumni, że możemy reprezentować lokalny biznes specjalizujący się w tworzeniu i sprzedaży wysokiej jakości olejów w Uwielinach. Nasza pasja i zaangażowanie w to, co robimy, pozwala nam oferować naszym klientom produkty, które są zarówno smaczne, jak i zdrowe.
      
          Nasze oleje powstają przy użyciu jedynie najlepszych, lokalnie pozyskiwanych składników i tradycyjnych metod produkcji. Dzięki temu, nasze produkty są wyjątkowe i pełne naturalnego smaku.
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



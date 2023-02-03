import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Heading,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { Link as ScrollLink } from 'react-scroll';

const Links = [
  {label: 'O nas', id: 'about'}, 
  {label: 'Produkty', id: 'products'}, 
  {label: 'Kontakt', id: 'contact'}];



export default function Nav() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const renderLink = (id, label) => {
return (
  <ScrollLink
  _hover={{
    textDecoration: "none",
    bg: "gray.200",
  }}
  activeClass="active"
  to={id}
  spy
  smooth
  offset={-70}
  duration={500}
  style={{color:'black', cursor:'pointer'}}
>
  {label}
</ScrollLink>
)
  }
  return (
    <>
      <Box  w='100%' bg={'gray.50'} px={4}>
        <Flex maxW='1024px' m='0 auto' h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />

            <Box>
              <Heading sx={{fontFamily: 'Dancing Script'}}>
              Oleje
              z Uwielin

              </Heading>
              </Box>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              {Links.map((item) => (
               renderLink(item.id, item.label)
              ))}
            </HStack>

       
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((item) => (
                 renderLink(item.id, item.label)
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
import React from 'react'
import {Box, Button, Flex, IconButton, Stack, Text, useBreakpointValue, useColorModeValue, useDisclosure} from '@chakra-ui/react'

import {
    HamburgerIcon,
    CloseIcon,
  } from '@chakra-ui/icons';
  
const Navbar = () => {
    const { isOpen, onToggle } = useDisclosure();
   
    return (
        <Box>
          <Flex
            bg={useColorModeValue('white', 'gray.800')}
            color={useColorModeValue('gray.600', 'white')}
            minH={'60px'}
            py={{ base: 2 }}
            px={{ base: 4 }}
            borderBottom={1}
            borderStyle={'solid'}
            borderColor={useColorModeValue('gray.200', 'gray.900')}
            align={'center'}>
            <Flex
              flex={{ base: 1, md: 'auto' }}
              ml={{ base: -2 }}
              display={{ base: 'flex', md: 'none' }}>
              <IconButton
                onClick={onToggle}
                icon={
                  isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
                }
                variant={'ghost'}
                aria-label={'Toggle Navigation'}
              />
            </Flex>
            <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
              <Text
                textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
                fontFamily={'heading'}
                fontSize={'md'}
                fontWeight={'bold'}
                color={useColorModeValue('gray.800', 'white')}>
                Logo
              </Text>
              <Text
                textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
                fontFamily={'heading'}
                marginLeft={"80px"}
                cursor={"pointer"}
                color={useColorModeValue('gray.800', 'white')}>
                Inspiration
              </Text>
              <Text
                textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
                fontFamily={'heading'}
                marginLeft={"40px"}
                cursor={"pointer"}
                color={useColorModeValue('gray.800', 'white')}>
                 Find Work
              </Text>
              <Text
                textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
                fontFamily={'heading'}
                cursor={"pointer"}
                marginLeft={"40px"}
                color={useColorModeValue('gray.800', 'white')}>
                 Learn Design
              </Text>
              <Text
                textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
                fontFamily={'heading'}
                marginLeft={"40px"}
                cursor={"pointer"}
                color={useColorModeValue('gray.800', 'white')}>
                 Hire Desginers
              </Text>
             </Flex>
            <Stack
              flex={{ base: 1, md: 0 }}
              justify={'flex-end'}
              direction={'row'}
              spacing={6}>
              <Button
                as={'a'}
                fontSize={'sm'}
                fontWeight={400}
                variant={'link'}
                href={'#'}>
                Sign In
              </Button>
              <Button
                display={{ base: 'none', md: 'inline-flex' }}
                fontSize={'sm'}
                fontWeight={600}
                color={'white'}
                bg={'pink.400'}
                href={'#'}
                _hover={{
                  bg: 'pink.300',
                }}>
                Sign Up
              </Button>
            </Stack>
          </Flex>
        
        </Box>
      );
}

export default Navbar
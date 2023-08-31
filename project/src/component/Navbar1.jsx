import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Flex,
  Link,
  HStack,
  
} from '@chakra-ui/react';
// import SearchBar from './Searchbar';


const NavBar1 = () => {
  return (
    <Box bg="white" borderBottom="1px solid #ddd" boxShadow="sm">
      <Flex
        alignItems="center"
        justifyContent="space-between"
        py={2}
        px={4}
        maxW="1200px"
        mx="auto"
      >
          <Flex alignItems="center">
          <Link as={RouterLink} to="/admin" mr={1}>
           <button><img src='admin.png'
           alt="Admin"
           height={5}
           width={"17%"}/>
           </button>
          </Link>
        </Flex>
        <Link as={RouterLink} to="/">
          <img
            src="logo-png.png"
            alt="UNI_CLO"
            height={50}
            width={300}
          />
        </Link>
        <HStack/>
        {' '}
        <Box >
        <Flex alignItems="center">
          <Link as={RouterLink} to="/cart" mr={1}>
           <button><img src='cart.png'
           alt="cart"
           height={5}
           width={"35%"}/>
           </button>
          </Link>
        </Flex>
        </Box>
      </Flex>
      
    </Box>
  );
};

export default NavBar1;

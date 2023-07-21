import { HStack, Image } from '@chakra-ui/react';
import logo from '../assets/../assets/logo-removebg-preview.png';
import ColorModeSwitch from './ColorModeSwitch';

const NavBar = () => {
  return (
    <HStack justifyContent='space-between' padding='10px'>
      <Image src={logo} boxSize='60px' />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;

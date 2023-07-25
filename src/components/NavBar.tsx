import { HStack, Image } from '@chakra-ui/react';
import logo from '../assets/../assets/logo-removebg-preview.png';
import ColorModeSwitch from './ColorModeSwitch';
import SearchInput from './SearchInput';

const NavBar = () => {
  return (
    <HStack padding='10px'>
      <Image src={logo} boxSize='80px' />
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;

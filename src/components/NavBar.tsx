import { HStack, Image } from '@chakra-ui/react';
import logo from '../assets/../assets/logo-removebg-preview.png';
import ColorModeSwitch from './ColorModeSwitch';
import SearchInput from './SearchInput';

interface Props {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack padding='10px'>
      <Image src={logo} boxSize='80px' />
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;

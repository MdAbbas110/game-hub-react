import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
} from '@chakra-ui/react';
import useGenres, { Genre } from '../Hooks/useGenres';
import getCroppedImageUrl from '../services/image-url';

interface Props {
  onSelectedGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ selectedGenre, onSelectedGenre }: Props) => {
  const { data, isLoading, error } = useGenres();
  if (error) return null;
  if (isLoading) return <Spinner />;

  return (
    <List>
      {data.map((data) => (
        <ListItem key={data.id} paddingY='5px'>
          <HStack>
            <Image
              boxSize='32px'
              borderRadius={8}
              src={getCroppedImageUrl(data.image_background)}
            />
            <Button
              fontWeight={data.id === selectedGenre?.id ? 'bold' : 'normal'}
              onClick={() => onSelectedGenre(data)}
              variant='link'
              fontSize='lg'
            >
              {data.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;

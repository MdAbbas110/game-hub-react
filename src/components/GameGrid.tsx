import UseGames from '../Hooks/UseGames';
import { SimpleGrid, Text } from '@chakra-ui/react';
import GameCard from './GameCard';

const GameGrid = () => {
  const { games, error } = UseGames();
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding='10px'
        spacing={10}
      >
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;

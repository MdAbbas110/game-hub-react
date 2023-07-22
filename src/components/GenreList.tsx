import useGenres from '../Hooks/useGenres';

const GenreList = () => {
  const { data } = useGenres();

  return (
    <ul>
      {data.map((data) => (
        <li key={data.id}>{data.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;

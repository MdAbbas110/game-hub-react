import { useState , useEffect } from "react";
import apiClient from "../services/api-client";

 interface Game {
  id: number;
  name: string;
}

interface FetchGamesResponse {
  count: number;
  results: Game[];
}

const UseGames = () => {

  const [games, setGame] = useState<Game[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const controller = new AbortController()

    apiClient
      .get<FetchGamesResponse>('/games', {signal: controller.signal})
      .then((res) => setGame(res.data.results))
      .catch((err) => {
        if (err instanceof CanceledError) return 
        setError(err.message)
    });

      return () => controller.abort()
  }, []);

    return { games,error }

}

export default UseGames
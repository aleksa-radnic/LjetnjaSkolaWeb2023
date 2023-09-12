// export const HomePage = () => {
//     return <h1>Home page</h1>
// }

import { useState, useEffect } from 'react';
import { rickAndMortyService } from '../../service/rick-and-morty';

const { getAllCharacters } = rickAndMortyService;

export const HomePage = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
        try {
            const result = await getAllCharacters()
console.log(result);
            setData(result.data);
        } catch (err) {
            setError(err);
        }
    };

    fetchData();

    }, []);

    if (error)
        return <div>Error: {error.message}</div>;


    if (!data)
        return <div>Loading...</div>;

    return (
        <div>
            <h1>Rick and Morty</h1>
            {data.results.map((character) => (
                <div key={character.id}>
                    <img src={character.image} alt={character.name} />
                    <h2>{character.name}</h2>
                    <p><strong>Species:</strong>&nbsp;&nbsp;<span style={{color:'blue'}}>{character?.species}&nbsp;</span></p>
                </div>
            ))}
        </div>
    );
}
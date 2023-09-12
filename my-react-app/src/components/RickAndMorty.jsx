import { useEffect, useState } from "react";
import { MemoDemo } from "./MemoDemo"
export const RickAndMorty = () => {
    const [characters, setCharacters] = useState([]);
    const [page, setPage] = useState(1)
    const [disabled, setDisabled] = useState(false)
    const handlerFetchCharacters = async () => {
        try {
            const response = await fetch(`https://rickandmortyapi.com/api/character?page= ${page}`);
            const data = await response.json();
            setCharacters(data.results);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        handlerFetchCharacters();
    }, [page]);
    useEffect(()=>{
        console.log(page)
    }, [page]);
    const handlePageChange = (currPage) => {
        if(currPage > 0) setPage(currPage)
        setDisabled(currPage==1)
    }
    return (
        <>
        <button disabled= {disabled} onClick={()=> {handlePageChange(page-1)}}> Prev</button>
        {/* <button disabled={page === 1} onClick={ () => (handlePageChange(page-1))}>Prev</button> /}
         {/ <button onClick={ () => (handlePageChange(page-1))}>Prev</button> */}
            <button onClick={ () => (handlePageChange(page+1))}>Next</button>
            <MemoDemo list={characters} page={page}/>
            {characters.map((character) => (
                <div key={character.id}>
                    <img src={character.image} alt={character.name} />
                    <h2>{character.name}</h2>
                    <p>{character.gender}</p>
                </div>
            ))}
            {/* {characters.length ?  <p>s</p> : <p>Loading data</p>} */}
        </>
    );
};








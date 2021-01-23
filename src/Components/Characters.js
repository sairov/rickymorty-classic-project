import React, { useState, useEffect } from 'react'

const Characters = () => {

    //Estados

    const [character, setCharacter] = useState([])

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character')
            .then(response => response.json())
            .then(data => setCharacter(data.results))
    }, [])
    

    return ( 
        <div className="container">
            <div className="characters">
                {
                    character.map(char => (
                        <div className="box"
                             key={char.id}>
                            <img src={char.image} alt="Character Avatar"/>
                            <div className="character">
                                <h3 className="name">{char.name}</h3>
                                <p className="specie">{char.species}</p>
                                <p className="status">{char.status}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
     );
}
 
export default Characters;
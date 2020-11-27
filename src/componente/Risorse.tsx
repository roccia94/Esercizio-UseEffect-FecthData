import React from "react";
import {useState, useEffect} from "react";

// Query a json placeholder api perm ricevere dati attraverso un json. https://jsonplaceholder.typicode.com/
// In essa ci sono differenti campi, qua ne prendiamo 3 in esempio.

const Risorse = () => {
    const[tipoRisorsa, setTipoRisorsa] = useState('posts');

    console.log('rendering effettuato') //Messaggio che compare sempre prima del console.log sotto in quanto avviene con il rendering.

    useEffect(() => {  // Tutto quello che c'è dentro a useEffect viene eseguito ogni volta che c'è un renderer
        fetch(`https://jsonplaceholder.typicode.com/${tipoRisorsa}`)
            .then(response => response.json())
            .then(json => console.log(json))
    }, [tipoRisorsa])

    /* Tuttavia se vogliamo effettuare questi changes soltanto in determinati momenti (cambio dati, component mounts...)
       c'è un secondo parametro come array da passare ad useEffetcs.
       Passare [tipoRisorsa].
       In questo caso se tipoRisorsa cambia, allora si esegue useEffects. * */

    return (
        <div>
            <button onClick={() => setTipoRisorsa('posts')}>Posts</button>
            <button onClick={() => setTipoRisorsa('users')}>Utenti</button>
            <button onClick={() => setTipoRisorsa('comments')}>Commenti</button>
            <h1>{tipoRisorsa}</h1>
        </div>
    )
}

export default Risorse;
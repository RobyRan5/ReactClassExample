import React, { useState, useEffect} from 'react';
import Axios from 'axios';

export default function RandomDogs(){
    const [data, setData] = useState(null);

    useEffect(()=>{
    Axios
    .get("https://dog.ceo/api/breeds/image/random")
    .then(res=>setData(res.data))
    }, [])

    return <div>
    {data && <img src={data.message}/>}
    </div>
}


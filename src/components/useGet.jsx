import { useEffect, useState } from "react";

function useGet(url){
    const [ datos, setDatos ] = useState();
    const [ load, setLoad ] = useState(true);
    useEffect(()=>{
        setLoad(true)
        fetch(url)
        .then(resp=>resp.json())
        .then(data=>setDatos(data))
        .finally(()=>setLoad(false))
        .catch(err=>console.log(err))
    }, [url])
    return {datos, load}
}
export default useGet;
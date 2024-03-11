import { useEffect, useState } from "react"

const useOnlineStatus = () =>{
    const [onelineStatus, setOnelineStatus]=useState(true);

    useEffect(()=>{
        window.addEventListener("online", ()=>{
            setOnelineStatus(true);
        });
        window.addEventListener("offline", ()=>{
            setOnelineStatus(false);
        });
    },[]);
    return onelineStatus;
}
export default useOnlineStatus;
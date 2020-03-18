import {useLocalStorage} from "./useLocalStorage";
import { useEffect } from "react";

export function useDarkMode(key, initialValues) {
    const [someValue, setSomeValue] = useLocalStorage("darkMode");
    
    useEffect (()=>{
        
    if(localStorage.getItem("darkMode")) {
        document.body.classList.add("darkMode");
    }   
    else {
        document.body.classList.remove("darkMode");
        } 
    }, [someValue]);  
    return [someValue, setSomeValue];
     
}


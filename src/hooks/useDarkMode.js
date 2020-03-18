import {useLocalStorage} from "./useLocalStorage";

export function useDarkMode(key, initialValues) {
    const [someValue, setSomeValue] = useLocalStorage("darkMode");
    
}


import {createContext, useState} from "react";

const URL = 'http://localhost:3000/api';

export const UrlContext = () => createContext({
    url: URL,
    setUrl:() => {}
});

export const UrlProvider = ({ children }) => {
    const [url, setUrl] = useState(URL);

    return (
      <UrlContext.Provider value={{ url, setUrl }}>
        {children}
      </UrlContext.Provider>
    );
}

export const URL_API = 'http://localhost:3000/api'
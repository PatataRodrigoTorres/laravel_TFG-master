import React, {useState,useEffect} from 'react';


export const SearchBar = () => {
    const [search, setSearch] = useState("");
    const [searchValue, setSearchValue] = useState("");
    useEffect(() => {
        
    }, [searchValue]);
    var typingTimer;

    function doneTyping() {
        setSearchValue(search);
    } 
    return( 
        <input
        onKeyUp={() => {
            clearTimeout(typingTimer);
            typingTimer = setTimeout(doneTyping, 1000);
        }}
        onKeyDown={() => {
            clearTimeout(typingTimer);
        }}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        type="text"
    />
    )
}

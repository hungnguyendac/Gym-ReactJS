import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const useSearch = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const navigate = useNavigate();

    const handleSearch = () => {
        if (searchQuery.trim() !== "") {
            navigate(`/search?q=${searchQuery}`);
        }
    };

    return { searchQuery, setSearchQuery, handleSearch };
};

export default useSearch;

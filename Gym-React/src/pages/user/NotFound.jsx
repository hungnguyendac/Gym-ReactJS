import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <>
            <h1>Not Found</h1>
            <h3>
                Quay lại :
                <button>
                    <Link to="/" style={{ textDecoration: "none" , color: "#000"}}>
                        Home Page
                    </Link>
                </button>
            </h3>
        </>
    );
};

export default NotFound;

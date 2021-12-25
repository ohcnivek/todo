import React from "react";

const headerStyle = {
    padding: "20px 0",
    lineHeight: "1.5em",
  }
  

const Header = () =>  { // this is a functional component so it needs to have the same name as the file/ comp name, also the same thing as function Header()
    return (
        <header style={headerStyle}>
            <h1 style={{
            fontSize: "6rem",
            fontWeight: "600",
            marginBottom: "2rem",
            lineHeight: "1em",
            color: "#ececec",
            textTransform: "lowercase",
            textAlign: "center",
          }}> 
                todo
            </h1>
        </header>
        
    )
}

export default Header
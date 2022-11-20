import React from "react";
 
const image = (name: string, width: number, height: number) => {
    console.log('Image Loaded 2!');
    return (
        <div>
            <img src="https://i.stack.imgur.com/B8UxU.png" alt="test" />
        </div>
    );
};
  
export default image;
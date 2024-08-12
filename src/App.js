import { useState } from "react";


function App() {
  const[likes, setLikes] = useState(0)
    function increaselikes(){
      setLikes(likes + 1);
    }
    
    
  return (
    <div>
      <Navbar>Satvik</Navbar>
      <button
        onClick={increaselikes}
        className="px-4 py-2 my-2 mx-2 border bg-yellow-500"
      >
        Like {likes}
      </button>

    
    </div>
      
 );
}

export default App;

// UseState is a type of hook
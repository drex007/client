import { useState } from 'react'
import Card from './components/card/Card';
import Navbar from './components/navbar/Navbar';
import {posts} from './data'

function App() {
  const [username, setUsername] = useState('')
  const [user, setUser] = useState('')
  // console.log(user)
  return (
    <div className="App">
      <div className="flex flex-col justify center items-center mt-60 w-[500px] mx-auto">
        {user ? (<>
          <Navbar />
          {posts?.map((post)=>(
            <Card key={post.id} post={post} />
          ))}
          <Card />
          <span className="absolute top-10 right-10 text-green-600 font-semibold">{user}</span>

        </>) :

          (
            <>
              <div className="flex flex-col justify center items-center">
                <input type="text" placeholder='username' className="border rounded-sm mt-2 px-2"
                  onChange={(e) => setUsername(e.target.value)}
                />
                <button className="w-[100px] border bg-blue-400 text-white rounded-lg h-[50px] mt-2"
                  onClick={() => setUser(username)}
                >Login</button>
              </div>
            </>
          )}
      </div>



    </div>
  );
}

export default App;

import { useEffect, useState } from "react";

function App() {
  const [getData, setGetData] = useState([]);

  useEffect(() => {
    const fetchData = async function () {
      const response = await fetch(
        `https://api.freeapi.app/api/v1/public/randomusers`,
        { method: "GET", headers: { accept: "application/json" } },
      );
      const data = await response.json();
      setGetData(data.data.data);
    };
    fetchData();
  }, []);


  return (
    <>
      <div className="bg-gray-900 text-white min-h-screen">

      {/* Navbar */}
      <nav className="bg-gray-800 shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          
          {/* Left */}
          <h1 className="text-xl font-semibold">User Data</h1>

          {/* Right */}
          <div className="flex items-center gap-4">
            <input
              type="text"
              placeholder="Search..."
              className="px-3 py-1 rounded-md bg-gray-700 text-sm outline-none"
            />
            <button className="bg-blue-600 px-4 py-1 rounded-md text-sm hover:bg-blue-500">
              Add User
            </button>
          </div>
        </div>
      </nav>

      <div className="justify-self-center py-6 px-4 mt-6">
        <h2 className="text-2xl font-semibold p-12 mb-4">User Information</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {getData.map((user) => {
            return (
              <div key={user.id} className="bg-gray-800 rounded-2xl shadow-lg p-6 hover:scale-105 transition">
            
            <div className="flex justify-center">
              <img
                src={user.picture.medium}
                alt="user"
                className="w-24 h-24 rounded-full border-4 border-gray-700"
              />
            </div>

            {/* Name */}
            <h3 className="text-center text-lg font-semibold mt-4">
              {`${user.name.title} ${user.name.first} ${user.name.last}`}
            </h3>

            <p className="text-center text-gray-400">{user.login.username}</p>

            {/* Details */}
            <div className="mt-4 space-y-1 text-sm">
              <p><span className="text-gray-400">Email: </span>{user.email}</p>
              <p><span className="text-gray-400">Phone: </span> {user.phone}</p>
              <p><span className="text-gray-400">Gender: </span> {user.gender}</p>
              <p><span className="text-gray-400">Age: </span> {user.dob.age}</p>

              <hr className="border-gray-700 my-2" />

              <p className="text-gray-400">Address: </p>
              <p>{`${user.location.street.name}, ${user.location.city}`}</p>
              <p>{`${user.location.state}, ${user.location.country}`}</p>

              <hr className="border-gray-700 my-2" />

              <p><span className="text-gray-400">ID:</span> {`${user.id}`}</p>
            </div>

          </div>
            )
          })}

        </div>
      </div>

    </div>
    </>
  );
}

export default App;

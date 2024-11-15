import { useEffect, useState } from "react";

function Sum(){
  return (
    <p>1+2 equals {1+2}</p>
  );
}

//Excersize 1
function Greet({user}){
  
  if(!user){
    return(<h1>No user</h1>);
  }else if(user === "Bob"){
    return(<h1>Acces Denied</h1>);
  }else{
  return(
    <h1>Hello {user}</h1>
  );
  }
}

//Ex 2
function Greeter({children , message}){
  return (
    <div>
      <h1>{message}</h1>
      {children}
    </div>
  );
}

function User({name, age}){
  return <p>{name}({age} years old)</p>
}


function App(){
  let users = [
    <User name="Bob"/>,
    <User name = "Mary"/>
  ];

  let userobjects = [
    { name:"Bob", age:23},
    { name:"Helen", age:44},
  ]

  const [counter, setCounter] = useState(1);
  const [counter2, setCounter2] = useState(1);

  // Ask for Data with function
  const [usersF, setUsers] = useState([]);
  useEffect(()=>{
    fetch("https://randomuser.me/api/?results=5")
    .then(res => res.json())
    .then(data => setUsers(data.results));
  },[]);
  return (
    <div>
      <h1>Hello World</h1>
      <p>Made with React.</p>
      <Sum/>
      <Greeter message={"Is the user Logged In"}>
        <Greet user="Bob"/>
        <Greet user="Davor"/>
        <Greet />
      </Greeter>

      <h2>Users are:</h2>
      {users.map((u,i) => <div>{i}: <User name={u}/> </div>)}

      <h2>Users with age:</h2>
      {userobjects.map((u)=> <><User name={u.name}
                                      age={u.age}/></>)}

      {/* Ex_4 */}
      <p><i>Counter: {counter} ::: CounterSquared:{counter2}</i></p>
      <button onClick={e=>{
        
        setCounter(counter+1)
        setCounter2(counter2 * counter2)}}>
        Click Me
      </button>
      <button onClick={e=>{setCounter(0)
        setCounter2(0)}}>
        Reset Counter
      </button>


      {/* ex_5 Fetching data from a server*/}
      <p>We got {usersF.length}</p>
      <div>
        <h3>Users are:</h3>
        {usersF.map(u => <p>{u.name.first} :
                         <li>{u.gender}</li>
                         <li>{u.location.country}</li></p>)}
      </div>
    </div>
  );
}

export default App;
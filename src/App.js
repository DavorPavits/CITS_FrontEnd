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
      {users.map((u,i) => <>{i}: <User name={u}/> </>)}

      <h2>Users with age:</h2>
      {userobjects.map((u)=> <><User name={u.name}
                                      age={u.age}/></>)}
    </div>
  );
}

export default App;
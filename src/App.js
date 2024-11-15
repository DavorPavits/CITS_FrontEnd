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

function App(){
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
    </div>
  );
}

export default App;
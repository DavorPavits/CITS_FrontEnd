function Sum(){
  return (
    <p>1+2 equals {1+2}</p>
  );
}

//Excersize 1
function Greet({user}){
  
  if(!user){
    return(<p>No user</p>);
  }else if(user === "Bob"){
    return(<p>Acces Denied</p>);
  }else{
  return(
    <h1>Hello {user}</h1>
  );
  }
}

function App(){
  return (
    <div>
      <h1>Hello World</h1>
      <p>Made with React.</p>
      <Sum/>
      {/* <Greet user={"Bob"}/> */}
      <Greet user="Davor"/>
    </div>
  );
}

export default App;
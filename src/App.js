import './App.css';

function App({fname,lname,format}) {
  function welcomeGuest(){
    console.log('Welcome guest')
  }
  return (
    <div className="App">
      {
        format === 'fl'? <div data-testid='fl'>{`${fname} ${lname}`}</div>:
        format === 'lf'? <div data-testid='lf'>{`${lname} ${fname}`}</div>:
        <div data-testid='default'>{`${fname} ${lname}`}</div>
      }
      
      <button onClick={()=>welcomeGuest()}>Welcome guest</button>
    </div>
  );
}

export default App;

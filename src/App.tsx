import './App.css';
import { UserCard } from './components/UserCard';
import { UseAllUsers } from './hooks/UseAllUsers';

function App() {

  const { getUsers , userPlofiles , loading , error } = UseAllUsers();

  const onClickFetchData = () => {
    getUsers();
  }
  return (
    <div className="App">
      <button onClick={onClickFetchData}>データを取得</button>
      <br />
      {error ? (
        <p style ={{color: "red"}}>データの取得に失敗しました。</p>
      ) : loading ? (
        <p>Loading...</p>
      ) : <>
            {userPlofiles.map((user)=> (
              <UserCard key={user.id} user={user}  />
            ))}
          </> }
    </div>
  );
}

export default App;


import './App.css';
import UserList from './components/UserList';

function App() {
  return (
   <>
  <div className='container'>
	<header class="bg-white mt-4 p-4"><h5><strong><span className="fa"><i className="fa-solid fa-clipboard text-warning"></i> &nbsp;</span>Mozrest User List</strong></h5></header>
  
   <UserList />
   </div>
   </>
  );
}

export default App;

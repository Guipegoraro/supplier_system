import '../styles/App.css';
import RoutesHandler from '../components/RoutesHandler';
import RoutesLinks from '../components/RoutesLinks';
import UserAccount from '../components/user_management/UserAccount';
import { useAuth } from '../contexts/AuthAndDatabase';
import { useEffect } from 'react';
function App() {

  const { currentUser, handleSignOut } = useAuth();
  
  useEffect(() => {
    handleSignOut();
  }, []);


  return (
    <>
    {currentUser && currentUser.role === 'admin' ? <p>admin</p> : <p>manager account</p>}
    <UserAccount/>
    <RoutesLinks/>
    <RoutesHandler/>
    </>
  )
}

export default App

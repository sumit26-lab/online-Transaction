import {BrowserRouter,Switch,Route,Link,Redirect} from 'react-router-dom'
import Navbar from './Componed/Navbar';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import useAuthanticatContxt from './Hooks/useAuthanticatContxt';
import Footer from './pages/Footer';
function App() {
  const {authISReady,user}=useAuthanticatContxt()
  return (
    <div className="App">
      {authISReady && ( 
      <BrowserRouter>
      <Navbar/>
      <Switch>
        <Route exact path="/">
          {!user && <Redirect to="/login"/>}
          {user &&    <Home/>}
          
        

        </Route>

        <Route path="/login">
          {user && <Redirect to="/" />}
          {!user &&

          <Login/>
          }

        </Route>
        
        <Route path="/Signup">
          {user &&  <Redirect to="/"/>}
          {!user &&  <Signup/>
}
         
        </Route>
      </Switch>
      
        <Footer/>
      </BrowserRouter>
      ) }

    </div>
  );
}

export default App

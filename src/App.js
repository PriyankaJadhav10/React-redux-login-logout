import React from 'react'
import {connect} from 'react-redux'
import 'react-toastify/dist/ReactToastify.css'
import {ToastContainer,Slide} from 'react-toastify'
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom'
import AuthPage from './pages/auth.component'
import NotesPage from './pages/notes.component';
import EditNotePage from './pages/editnote.component'
import Header from './components/header.component'
import Spinner from './components/spinner/spinner.components';
import {logoutUser} from './redux/actions/authActionCreators'

function App({user,dispatchLogoutAction}) {
  return (
    <React.Fragment>
      <ToastContainer position='top-right'
       autoClose={2000} //2 seconds to close toast msg
      />
      <Spinner/>
      <Header
       isLoggedIn={user.isLoggedIn} 
       userName={user.fullName}
       onLogout={dispatchLogoutAction}
      />
      <div className="container my-5">
        {
          !user.isLoggedIn ?
          (
            <Switch>
          <Route exact path='/auth' component={AuthPage} />
          <Redirect to='auth' />    
            </Switch>
          ):(
            <Switch>
              <Route exact path='/notes' component={NotesPage} />
          <Route exact path='/edit-note' component={EditNotePage} />
          <Route exact path='/edit-note/:noteId' component={EditNotePage} />
          <Redirect to='/notes'/>
            </Switch>
          )
        }
        <Switch>
          <Route exact path='/auth' component={AuthPage} />
          <Route exact path='/notes' component={NotesPage} />
          <Route exact path='/edit-note' component={EditNotePage} />
          <Route exact path='/edit-note/:noteId' component={EditNotePage} />
          <Redirect to='auth' />
        </Switch>
      </div>
    </React.Fragment>
  );
}

const mapStateToProps=(state)=>({user:state.user})
const mapDispatchToProps = (dispatch)  => ({
  dispatchLogoutAction: ()=> dispatchEvent(logoutUser())
})
export default connect(mapStateToProps,mapDispatchToProps)(App)
// export default App;

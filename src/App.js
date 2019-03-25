import React, {useState} from 'react';

import Todo from './components/Todo'
import Header from './components/Header'
import Auth from './components/Auth'
import AuthContext from './auth.context'

const app = props => {

const [page, setPage] = useState('auth')
const [authStates,setAuthStates] = useState(false)

const switchPage = (pageName) => {
  setPage(pageName)
}

const login = () => {
  setAuthStates(true)
}

  return(
      <div className="App">
      <AuthContext.Provider value={{status: authStates, login: login}}>
        <Header 
        onLoadTodos={switchPage.bind(this,'todos')} 
        onLoadAuth={switchPage.bind(this,'auth')}
        />
        {page==='auth'? <Auth/> : <Todo/>}
      </AuthContext.Provider>
      </div>
  )
};


export default app;

import './App.css';
import React, { useEffect, useState } from 'react';
import List from './components/List';
import List_Loading from './components/ListLoading';

function App() {
  const ListLoading = List_Loading(List);
  const [appState, setAppState] = useState({
    loading: false,
    repos: null,
  });

  useEffect(() => {
    setAppState({ loading: true });
    const apiUrl = `https://api.github.com/users/BillECU/repos`;
    fetch(apiUrl)
      .then((res) => res.json())
      .then((repos) => {
        setAppState({ loading: false, repos: repos });
      });
  }, [setAppState]);
  return (
    <div className='App'>
      <div className='container'>
        <h1>My Repositories</h1>
      </div>
      <div className='repo-container'>
        <ListLoading isLoading={appState.loading} repos={appState.repos} />
      </div>
      <footer>
        <div className='footer'>
          Built by <a href="https://github.com/BillECU">Bill Huang</a>
        </div>
      </footer>
    </div>
  );
}
export default App;
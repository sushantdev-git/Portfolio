import Layout from './HOC/Layout/Layout';
import {Route,Routes, BrowserRouter as Router,Navigate} from 'react-router-dom';

import Home from './containers/Home/Home';
import Work from './containers/Work/Work';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route exact path="/work" element={ <Work />}/>
          <Route exact path="/about" element={ <Home />}/>
          <Route path="*" element={<Navigate to="/about" />}/>
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;

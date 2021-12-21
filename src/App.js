import Layout from './HOC/Layout/Layout';
import {Route,Switch,Redirect, useLocation} from 'react-router-dom';
import {AnimatePresence} from 'framer-motion';

import Home from './containers/Home/Home';
import Work from './containers/Work/Work';
import Contact from './containers/Contact/Contact';


function App() {

  let location = useLocation();
  return (
    <Layout>
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route exact path="/work"><Work /></Route>
          <Route exact path="/about" ><Home /></Route>
          <Route exact path="/contact" ><Contact /></Route>
          <Route path="*" >
            <Redirect to="/about" />
          </Route>
        </Switch>
      </AnimatePresence>
    </Layout>
  );
}

export default App;

import Layout from './HOC/Layout/Layout';
import {Route,Routes, useLocation, Navigate} from 'react-router-dom';
import {AnimatePresence} from 'framer-motion';

import Home from './containers/Home/Home';
import Work from './containers/Projects/Projects';
import Contact from './containers/Contact/Contact';
import Experience from './containers/Experience/Experience';


function App() {

  let location = useLocation();
  return (
    <Layout>
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route exact path="/projects" element={<Work />}></Route>
          <Route exact path="/about" element={<Home />}></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
          <Route exact path="/experience" element={<Experience />}></Route>
          <Route path="*" element={<Navigate to="/about" />}></Route>
        </Routes>
      </AnimatePresence>
    </Layout>
  );
}

export default App;

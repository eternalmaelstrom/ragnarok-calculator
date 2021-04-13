import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';

const Routes: React.FC<{}> = () => {
   return (
      <Switch>
         <Route path="/" exact component={() => <Home />} />
         <Route path="/" component={() => <div>Not found</div>} />
      </Switch>
   );
};

export default Routes;

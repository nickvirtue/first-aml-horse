import React from "react";
import {useObserver} from "mobx-react-lite";
import {navigation} from "@any-ui/core";
import {Redirect, Route, Router, Switch} from "react-router";
import {HorsesListPage} from "../horse/HorsesListPage";
import {HorsesViewPage} from "../horse/HorsesViewPage";


const App = () => {
  return useObserver(() => {
    return (
      <>
        <h1>First AML Horse</h1>
        <Router history={navigation.browserHistory}>
          <Switch>
            <Route exact path="/" component={HorsesListPage}/>
            <Route path="/horse/:horseId" component={HorsesViewPage}/>
            <Redirect to="/"/>
          </Switch>
        </Router>
      </>

  );
  });
};

export default App;

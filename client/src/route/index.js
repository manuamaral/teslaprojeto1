import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Adm from './pages/adm';
import Inicial from './pages/inicial';
import Critica from './pages/critica';

ReactDOM.render(
    (
        <Router>
            <App>
                <Switch>
                    <Route exact path="/" component={Adm}/>
                    <Route path="/sobre" component={Inicial}/>
                    <Route path="/contato" component={Critica}/>
                </Switch>
            </App>
        </Router>
    ),
    document.getElementById('root');
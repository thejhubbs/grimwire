import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reducer from './redux/reducer'

import {BrowserRouter} from 'react-router-dom';
import {createStore} from 'redux';
import { Provider } from 'react-redux';

import ScrollToTop from './pageComponents/scrollToTop'

import symbols from './db/symbolsDb';
import kinds from './db/kindsDb';
import connections from './db/connectionsDb';
import pantheons from './db/pantheonsDb';
import {users} from './db/miscDb'
import categories from './db/categoriesDb';



const store = createStore(reducer);

var merge = (a, b, p) => a.filter( aa => ! b.find ( bb => aa[p] === bb[p]) ).concat(b);

[['symbols', symbols], ['kinds', kinds], ['connections', connections], ['pantheons', pantheons], ['users', users], ['categories', categories]].forEach(str => {
  var localBrowserStorage = JSON.parse(localStorage.getItem(str[0]));
  var localDbFile = str[1]
  const merged = merge(localDbFile, localBrowserStorage, 'id')
  console.log("Whole", str[0], "database", merged)
  localStorage.setItem(str[0], JSON.stringify( merged ))
})


ReactDOM.render(

<Provider store={store}>
    <BrowserRouter>
      <ScrollToTop>
        {/* react-bootstrap does not include css for the components; css imported here: */}
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossOrigin="anonymous" />
          <style>
@import url('https://fonts.googleapis.com/css?family=Alegreya+Sans+SC|Metal+Mania|Spectral&display=swap');
</style>

        <App />
        </ScrollToTop>
    </BrowserRouter>
</Provider>,

document.getElementById('root'));

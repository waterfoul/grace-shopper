'use strict';
import React from 'react';
import {Router, Route, IndexRedirect, browserHistory} from 'react-router';
import {render} from 'react-dom';
import {connect, Provider} from 'react-redux';

import store from './store';
import Home from './components/Home';
import Services from './components/Services';
import Records from './components/Records';
import Record from './components/Record';
import Equipment from './components/Equipment';
import Admin from './components/Admin';
import {Vynl} from './components/Vynl';
import {fetch} from './reducers/products';
import {getRecords} from './reducers/records';
import {getRecord} from './reducers/record';

const onRecordsEnter = function () {
	store.dispatch(getRecords());
};

const onRecordEnter = function (nextRouterState) {
  const recordId = nextRouterState.params.recordId;
  store.dispatch(getRecord(recordId));
};

render(
	<Provider store={store}>
		<Router history={browserHistory}>
			<Route path="/" component={Vynl}>
				<IndexRedirect to="/home" />
				<Route path="/home" component={Home} />
				<Route path="/services" component={Services} />
				<Route path="/records" component={Records} onEnter={onRecordsEnter} />
				<Route path="/records/:recordId" component={Record} onEnter={onRecordEnter}/>
				<Route path="/equipment" component={Equipment} />
				<Route path="/admin(/:id)" component={Admin} onEnter={() => store.dispatch(fetch())} />
			</Route>
		</Router>
	</Provider>,
	document.getElementById('main')
);

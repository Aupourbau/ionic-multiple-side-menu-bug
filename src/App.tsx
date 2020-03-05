// react components
import React from 'react';
import { IonReactRouter } from '@ionic/react-router';
import { Route } from 'react-router-dom';
import {
	IonApp,
	IonRouterOutlet,
} from '@ionic/react';

// pages
import {
	Page1,
	Page2,
} from './pages';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

// main
const App: React.FC = () => (
	<IonApp>
		<IonReactRouter>
			<IonRouterOutlet>
				<Route exact path='/' component={Page1} />
				<Route exact path='/page2/' component={Page2} />
			</IonRouterOutlet>
		</IonReactRouter>
	</IonApp>
);

export default App;
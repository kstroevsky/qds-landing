import { StrictMode, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Loader from './components/Loader/Loader';

import './shared/i18n';

export var root = document.getElementById('root') as HTMLElement;

ReactDOM.createRoot(root).render(
	<StrictMode>
		<Suspense
			fallback={
				<div>
					<Loader />
				</div>
			}
		>
			<App />
		</Suspense>
	</StrictMode>
);
reportWebVitals();

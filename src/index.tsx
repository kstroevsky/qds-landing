import { StrictMode, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import './i18n';

export var root = document.getElementById('root') as HTMLElement;

ReactDOM.createRoot(root).render(
	<StrictMode>
		<Suspense fallback={<div>loading...</div>}>
			<App />
		</Suspense>
	</StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

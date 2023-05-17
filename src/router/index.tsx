import { createBrowserRouter } from 'react-router-dom'
import routes from './routes.tsx'
import App from '../App.tsx'
const router = createBrowserRouter([
	{
		path: "/",
		element: <App />
	},
	...routes,

])

export default router;
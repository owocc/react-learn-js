import {RouteObject } from 'react-router-dom'
import DataTypeView from '../views/dataType'
import Interaction from '../views/Interaction'
import TypeConversion from '../views/TypeConversion'
import Computed from '../views/computed'
export default [
	{
		path: '/data-type',
		element:<DataTypeView/>,
	},
	{
		path:'/interaction',
		element:<Interaction/>
	},
	{
		path:'/type-conversion',
		element:<TypeConversion/>
	},
	{
		path:'/computed',
		element:<Computed/>
	}
] as RouteObject[]
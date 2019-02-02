import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Index from './Index'



const Main = () => (
	<MainContent>
		<Switch>
			<Route exact path='/' component={Index}/>
		</Switch>
	</MainContent>
)
 export default Main
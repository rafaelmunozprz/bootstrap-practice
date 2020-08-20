import React, { Fragment } from 'react'
import Containers from './components/Containers'
import ContainersFluid from './components/Containers-fluid'
import ContainersFluidBreakpoints from './components/Containers-fluid-breakpoints'
import AutoLayoutColumns from './components/Auto-layout-columns'


function App() {
    return (
		<Fragment>
			{/* Containers 1080 */}
			<Containers/>

			{/* Containers fluid */}
			<ContainersFluid/>

			{/* Containers fluid with breakpoints  */}
			<ContainersFluidBreakpoints/>

			{/* Auto layout columns */}
			<AutoLayoutColumns/>
		</Fragment>
    )
}

export default App

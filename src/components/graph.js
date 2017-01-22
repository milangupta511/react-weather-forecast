import React from 'react';
import {Sparklines, SparklinesLine,SparklinesReferenceLine} from 'react-sparklines';

export default ({data,color}) => {
	return(
		<Sparklines data={data}  width={300} height={200} margin={5}>
			<SparklinesLine color={color} />
			<SparklinesReferenceLine type="mean"/>
		</Sparklines>
		)
}
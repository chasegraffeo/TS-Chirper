import * as React from 'react';
import { useParams} from 'react-router-dom'


const Details: React.FC<DetailsProps> = () => {
	
	const {id} = useParams();
	
	return (
		<div>
            <h1 className="text-center">Details View {id}</h1>
        </div>
	)
} 

interface DetailsProps {}

export default Details;
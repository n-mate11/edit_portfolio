import { WorkItem } from '../../components/WorkItem/WorkItem';
import './styles.scss'

export const Work = () => {
    const dummyImg = require('../../resources/images/dummy_image.jpeg');
    
    return(
        <div className="workContainer">
            <WorkItem image={dummyImg} />
            <WorkItem image={dummyImg} />
            <WorkItem image={dummyImg} />
            <WorkItem image={dummyImg} />
            <WorkItem image={dummyImg} />
            <WorkItem image={dummyImg} />
            <WorkItem image={dummyImg} />
            <WorkItem image={dummyImg} />
            <WorkItem image={dummyImg} />
        </div>
    );
}
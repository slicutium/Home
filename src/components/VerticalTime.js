import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import data from '../data';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';



        
const VerticalTime = ()=> {
    return (
        <div className="timeline-section" id="portfolio">
            <VerticalTimeline>
            {/* <VerticalTimeline lineColor={'black'}> */}
                {
                    data.map((experience)=>{
                        const {id, addClass, company, position, date, location, desc, icon} = experience
                        return(
                                <VerticalTimelineElement key={id}
                                    className={addClass}
                                    contentStyle={{ borderRadius: '0.25em', boxShadow: '0 1px 3px 0 rgb(0 0 0 / 20%), 0 1px 1px 0 rgb(0 0 0 / 14%), 0 2px 1px -1px rgb(0 0 0 / 12%)'}}
                                    contentArrowStyle={{border:'0px'}}
                                    date={date}
                                    dateClassName="date-text"
                                    // iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                                    iconStyle={{ background: 'black', color: '#fff' }}
                                    icon={<FontAwesomeIcon icon={icon} />}
                                >
                                    <h3 className="vertical-timeline-element-title">{position}</h3>
                                    <h4 className="vertical-timeline-element-subtitle">{company}</h4>
                                    <h4 className="vertical-timeline-element-subtitle">{location}</h4>
                                    <p>{desc}</p>
                                </VerticalTimelineElement>
                        )
                    })
                }
            </VerticalTimeline>
        </div>
    );
};

export default VerticalTime;
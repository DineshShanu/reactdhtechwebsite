import React from 'react'
import PersonPinIcon from '@material-ui/icons/PersonPin';
import ComputerIcon from '@material-ui/icons/Computer';
import DateRangeIcon from '@material-ui/icons/DateRange';

const Accordian = (props) => {
    return (
        <>
            <div className="accordion-container">
                <details className="accordion-item">
                    <summary className="accordion-trigger">
                        <span className="accordion-title brand-name font-weight-bold" style={{ fontSize: "18px" }}>
                            {props.company}
                        </span>
                    </summary>
                    <div className="accordion-content">
                        <p>
                            <ComputerIcon /> {props.role} &ensp;&ensp;&ensp;
                            <code><DateRangeIcon /> {props.date}</code><br />
                            <PersonPinIcon /> {props.place}
                        </p>
                    </div>
                </details>
            </div>
        </>
    )
}

export default Accordian

import React from 'react';
import PropTypes from 'prop-types';
import { useLiveChartContext } from '../utils/hooks/useLiveChartContext';

const LiveTable = ({ cellIndex }) => {
    const { data } = useLiveChartContext();
    const nbTotalEvents = data?.events?.length
    const eventsFiltered = data.events.slice(nbTotalEvents - 20, nbTotalEvents);

    const submitNewValue = (event) => {
        // eslint-disable-next-line eqeqeq
        const eventToUpdate = eventsFiltered.find(element => element.index == event.target.id)
        // eslint-disable-next-line eqeqeq
        event.target.defaultValue == eventToUpdate.value1 ? eventToUpdate.value1 = event.target.value : eventToUpdate.value2 = event.target.value
    }

    const cellClassName = "py-2 border-t border-gray-300 text-center w-14"
    const focusedCellClassName = "py-2 border-t border-gray-300 text-center w-14 bg-[#D4D3F1]"
    
    return (
        <div className="flex border border-gray-300 rounded">
            <div className="text-center">
                <div className="p-2">Index</div>
                <div className="p-2 border-t border-gray-300">Value 1</div>
                <div className="p-2 border-t border-gray-300">Value 2</div>
            </div>
            {eventsFiltered.map((event) => (
                <div key={event.index} className="border-l border-gray-300 flex-1">
                    <div className="py-2 text-center w-14">{event.index}</div>
                    <input
                        className={
                            cellIndex ?
                            // eslint-disable-next-line eqeqeq
                            eventsFiltered[cellIndex].index == event.index ?
                                focusedCellClassName :
                                cellClassName :
                            cellClassName
                        }
                        id={event.index}
                        type='number'
                        onChange={submitNewValue}
                        defaultValue={event.value1}
                    />
                    <input
                        className={cellClassName}
                        id={event.index}
                        type='number'
                        onChange={submitNewValue}
                        defaultValue={event.value2}
                    />
                </div>
            ))}
        </div>
    );
};

LiveTable.propTypes = {
    cellIndex: PropTypes.number.isRequired
};

export default LiveTable;
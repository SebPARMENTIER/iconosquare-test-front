import React, { useContext, useReducer, createContext } from 'react';
import { createRandomEvent } from '../utils';

const LiveChartContext = createContext();

const initialEvents = Array.from(Array(50)).map((_, ix) => createRandomEvent(ix));

const initialData = {
    events: initialEvents,
    paused: false
}

const liveChartReducer = (state, action) => {
    switch (action.type) {
        case 'new_event':
			return {
				events: state.paused ? state.events : [...state.events, action.payload],
                paused: false
			}
        case 'paused_event':
            return {
                events: state.events,
                paused: !state.paused
            }
        default: {
            throw new Error(`Unhandled action type: ${action.type}`);
        }
    }
};

const LiveChartProvider = ({ children }) => {
    const [data, dispatch] = useReducer(liveChartReducer, initialData);
    return (
        <LiveChartContext.Provider
            value={{
                data,
                dispatch
            }}>
            {children}
        </LiveChartContext.Provider>
    );
};

const useLiveChartContext = () => {
    const context = useContext(LiveChartContext);
    if (!context) {
        throw new Error('useLiveChartContext should be used within an LiveChartProvider');
    }

    return context;
};

export { LiveChartProvider, useLiveChartContext };

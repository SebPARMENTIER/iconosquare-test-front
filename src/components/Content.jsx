import React from 'react';
import LiveTable from './LiveTable';
import LiveChart from './LiveChart';
import PlayPauseLive from './PlayPauseLive';

const Content = () => {
    return (
        <div className="mx-auto my-8 max-w-7xl px-8">
            <PlayPauseLive />
            <LiveChart />
            <LiveTable />
        </div>
    )
}

export default Content;
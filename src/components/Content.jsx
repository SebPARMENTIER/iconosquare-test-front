import React, { useState } from 'react';
import LiveTable from './LiveTable';
import LiveChart from './LiveChart';
import PlayPauseLive from './PlayPauseLive';

const Content = () => {
    const [cellIndex, setCellIndex] = useState(0);

    const sendChartCellDataToTable = (chartCellData) => {
        setCellIndex(chartCellData)
    }
    
    return (
        <div className="mx-auto my-8 max-w-7xl px-8">
            <PlayPauseLive />
            <LiveChart sendChartCellDataToTable={sendChartCellDataToTable}/>
            <LiveTable cellIndex={cellIndex}/>
        </div>
    )
}

export default Content;
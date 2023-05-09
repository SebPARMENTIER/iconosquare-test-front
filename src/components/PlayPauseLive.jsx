import React, { useState } from 'react';
import { useLiveChartContext } from '../utils/hooks/useLiveChartContext';

const PlayPauseLive = () => {
    const { dispatch } = useLiveChartContext()
    const [isPausable, setIsPausable] = useState(true)

    const pauseEvent = () => {
        setIsPausable(!isPausable)
        const intervalId = setInterval(() => {
            dispatch({ type: 'paused_event' })
        }, 2000)
        return () => clearInterval(intervalId)
    }
    return (
        <div className="flex flex-col justify-center items-center mb-6">
            <button
                onClick={pauseEvent}
                className="
                    px-4 py-1 mb-2 text-sm text-purple-600 font-semibold
                    rounded-full border border-purple-200
                    hover:text-white hover:bg-purple-600 hover:border-transparent
                    focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2
                "
                type="button"
                title="Pause/Play event"
            >
                {isPausable ? 'PAUSE' : 'PLAY'}
            </button>
            <p className="italic">
                It's easier to edit a value in the table by clicking on pause button.
            </p>
        </div>
    )
}

export default PlayPauseLive;
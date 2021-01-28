import React, { useState, useEffect } from 'react'

const Chrono = () => {
    const [clock, setClock] = useState({
        uniSeg: 0,
        decSeg: 0,
        uniMin: 0,
        decMinu: 0,
        uniHour: 0,
        decHour: 0,
    })

    const setSecond = () => {
        setTimeout(() => {
            if (clock.uniSeg < 9) {
                setClock({ ...clock, uniSeg: clock.uniSeg + 1 })
            } else {
                if (clock.decSeg < 5) {
                    setClock({ ...clock, uniSeg: 0, decSeg: clock.decSeg + 1 })
                } else {
                    if (clock.uniMin < 9) {
                        setClock({ ...clock, uniSeg: 0, decSeg: 0, uniMin: clock.uniMin + 1 })
                    } else {
                        if (clock.decMinu < 5) {
                            setClock({ ...clock, uniSeg: 0, decSeg: 0, uniMin: 0, decMinu: 0, uniHour: clock.uniHour + 1 })
                        } else {
                            if (clock.uniHour < 2) {
                                setClock({
                                    ...clock, uniSeg: 0, decSeg: 0, uniMin: 0, decMinu: 0, uniHour: 0, decHour: clock.decHour + 1
                                })
                            }
                        }
                    }

                }

            }
        }, 1000)
    }

    useEffect(() => {
        setSecond()
    }, [clock.uniSeg, clock.decSeg, clock.uniMin, clock.decMinu, clock.uniHour, clock.decHour])

    return (
        <>
            <div>
                <div className="card text-white bg-dark mb-3 container" style={{ width: '18rem' }}>
                    <div className="card-header reloj">

                        <span>{clock.decHour}{clock.uniHour}</span>
                        <span>:</span>
                        <span>{clock.decMinu}{clock.uniMin}</span>
                        <span>:</span>
                        <span className='f-size-15'>{clock.decSeg}{clock.uniSeg}</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Chrono
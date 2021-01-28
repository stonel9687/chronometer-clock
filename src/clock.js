import React, { useState, useEffect } from 'react'

const Clock = () => {
    const [reloj, setReloj] = useState({
        hora: 0,
        minutos: 0,
        segundos: 0
    })

    const getClock = (time) => {
        setTimeout(() => {
            const date = new Date()
            const hora = date.getHours()
            let minutos = date.getMinutes()
            if(minutos <10){
                minutos = `0${minutos}`
            }
            let segundos = date.getSeconds()
            if(segundos<10){
                segundos = `0${segundos}`
            }
            setReloj({ ...reloj, hora: hora, minutos: minutos, segundos: segundos })
        }, time);

    }
    useEffect(() => {
        getClock(0)
    }, [reloj])

    useEffect(() => {
        getClock(1000)
    }, [reloj])
    return (
        <>
            <div>
                <div className="card text-white bg-dark mb-3 container" style={{ width: '18rem' }}>
                    <div className="card-header reloj">
                        <span>{reloj.hora}</span>
                        <span>:</span>
                        <span>{reloj.minutos}</span>
                        <span>:</span>
                        <span className='f-size-15'>{reloj.segundos}</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Clock
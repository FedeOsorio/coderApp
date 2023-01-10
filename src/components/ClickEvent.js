import React from 'react'

const ClickEvent = () => {

    const handler = (e) => {
        console.log('click --->');
        console.log(e.nativeEvent);
    }
    return (
        <>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <div className='m-10'>
            <button onClick={handler} className='btn'>Clic Aqui</button>
            <h1>Input sin vocales</h1>
            <input type='text' />
            </div>
        </>
    )
}

export default ClickEvent
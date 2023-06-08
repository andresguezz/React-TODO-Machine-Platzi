import React from 'react';
import '../CSS/TodoEmpty.css';


function TodoEmpty(){


    return (
        <p className='todoempty'>Sin TODOS para mostrar, <span className='first'>crea uno?</span></p>
    ) ;
}

export {TodoEmpty};
import React from 'react';
import '../CSS/TodoLoading.css';


function TodoLoading(){


    return (
        <div className="LoadingContainer">
        <div className="LoadingWheel" />
        <span className="LoadingText">Cargando</span></div>
     );
}

export {TodoLoading}
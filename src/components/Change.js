/*----------------------------------------------------------------------------
|
| Module Details: Change
|
| Name: Change
|
| Purpose: 
|
| Date      	Name Ver. Comments
| --------- ------- ----- ----- -----------------------------------------
| 22-August-22 	Daher $$1 Created  
----------------------------------------------------------------------------*/


import React from 'react';
import { useState } from "react"
import { Sale } from './Sale';
import { Buy } from './Buy';

export function Change(){
    const [modallsOpen,SetModallsOpen]=useState(false);

    function ChangeSale(){
        SetModallsOpen(true);
    } 
    function ChangeBuy(){
        SetModallsOpen(false);
    }

    return (
        <div>
            <button className='button'  onClick={ChangeSale}>Sale</button>
            <button className='button' onClick={ChangeBuy}>buy</button>
            {modallsOpen? <Sale/>:<Buy/>}
        </div>
    );
}
import {ClearCartIcon, RemoveFromCartIcon,CartIcon} from './Icons';
import { useId } from 'react';

export function Cart(){
    const cartCheckBoxId = useId()
    return (
        <>
            <label className='cart-button' html='cart'><CartIcon/></label>
            <input id={cartCheckBoxId}></input>
        </>
    )
}
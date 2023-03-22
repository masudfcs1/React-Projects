import {useContext,useState,useEffect} from 'react'
import CartContext from '../../Store/Cart-contex'
import CartIcon from '../Cart/CartIcon'
import classes from './HeaderCartButton.module.css'

export default function HeaderCartButton(props) {
  const[btnIsHighLighted,setBtnIsHighLighted]=useState(false)
  const cartctx=useContext(CartContext)

  const {items}=cartctx

  const numberOfCartItems =items.reduce((curNumber,item)=>{
    return curNumber + item.amount;
  },0)
 
  
  const btnClasses=`${classes.button} ${btnIsHighLighted ? classes.bump : ''} `
  
  useEffect(()=>{
    if(items.length === 0){
      return
    }
  setBtnIsHighLighted(true)
    
  const timer = setTimeout(() => {
      setBtnIsHighLighted(false)
    }, 300);
    
    return()=>{
      clearTimeout(timer)
    }

  },[items])

  return (
    <button className={btnClasses} onClick={props.onClickkk} >
        <span className={classes.icon}>
            <CartIcon/>
        </span>
        <span className={classes.bump}>Your Cart</span>
        <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  )
}

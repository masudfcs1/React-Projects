import CartButton from '../Cart/CartButton';
import classes from './MainHeader.module.css';
import CartItem from '../Cart/CartItem';
import Cart from '../Cart/Cart';

const MainHeader = (props) => {
  return (
    <header className={classes.header}>
      <h1>ReduxCart</h1>
      <nav>
        <ul>
          <li>
            <CartButton />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;

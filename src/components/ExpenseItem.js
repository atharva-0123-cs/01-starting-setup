import './ExpenseItem.css';
import Cart from './Cart';
import ExpenseDate from './ExpenseDate';

function ExpenseItem(props){
    return (
        <Cart className='expense-item '>
           <ExpenseDate date = {props.date} />
            <div className='expense-item__description'> 
                 <h2>{props.title}</h2> 
                 <div className='expense-item__price'>${props.amount}</div>
            </div>
          
        </Cart>
    );
}
export default ExpenseItem;
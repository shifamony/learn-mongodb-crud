import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import OrderRow from './OrderRow';

const Orders = () => {
    const {user} = useContext(AuthContext);
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/orders?email=${user?.email}`)
        .then(res => res.json())
        .then(data => setOrders(data))
    }, [user?.email]);

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure you want to delete');
        if(proceed){
          fetch(`http://localhost:5000/orders/${id}`,{
            method:'DELETE'
          })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            if(data.deletedCoutn > 0){
              toast.success('Deleted success');
              const remaining = orders.filter(odr => orders._id !== id);
              setOrders(remaining);
            }
        })
      }
    
    }

    return (
        <div>
            <h1 className='text-5xl '>You have orders:{orders.length}</h1>
            <div className="overflow-x-auto w-full">
           <table className="table w-full">
        
            <thead>
            <tr>
                <th>
                <label>
                    <input type="checkbox" className="checkbox" />
                </label>
               </th>
                <th>Name</th>
                <th>Price</th>
                <th>Favorite Color</th>
                <th>Message</th>
            </tr>
            </thead>
            <tbody>
            {
            orders.map(order => <OrderRow
                key={order._id}
                order={order}
                handleDelete={handleDelete}
            ></OrderRow>)
            }
            </tbody>
            {/* <!-- foot --> */}
            
         </table>
        </div>
   </div>
    );
};

export default Orders;
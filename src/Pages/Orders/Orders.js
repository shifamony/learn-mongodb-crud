import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import OrderRow from './OrderRow';

const Orders = () => {
    const {user,logOut} = useContext(AuthContext);
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch(`https://genius-car-server-chi.vercel.app/orders?email=${user?.email}`,{
          headers: {
            authorization: `Bearer ${localStorage.getItem('geniusItem')}`
          }
        })
       
        .then(res => {
          if(res.status === 401 || res.status === 403){
             logOut();
          }
         return res.json();
        })
        .then(data => setOrders(data))
    }, [user?.email]);

//DELETE FUNCTION
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure you want to delete');
        if(proceed){
          fetch(`https://genius-car-server-chi.vercel.app/orders/${id}`,{
            method:'DELETE'
          })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            if(data.deletedCount > 0){
              toast.success('Deleted success');
              const remaining = orders.filter(odr => odr._id !== id);
              setOrders(remaining);
            }
        })
      }
    
    }

    //UPDATE FUNCTION
    const handleStatusUpdate = id => {
      fetch(`https://genius-car-server-chi.vercel.app/orders/${id}`,{
        method:'PATCH',
        headers: {
          "content-type" : "application/json"
        },
        body: JSON.stringify({status: 'Approved'})
      })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if(data.modifiedCount > 0){
          const remaining = orders.filter(odr => odr._id !== id);
          const approving = orders.find(odr => odr._id === id);
          approving.status = 'Approved';
          const newOrders = [approving, ...remaining];
          setOrders(newOrders);
        }
      })
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
                handleStatusUpdate={ handleStatusUpdate}
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
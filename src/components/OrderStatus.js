"use client"

export default function OrderStatus({ orderId, status }) {

const updateStatus = async (newStatus) => {

await fetch("/api/orders/update",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
orderId,
status:newStatus
})
})

}

return (

<select
defaultValue={status || "Pending"}
className="border p-2 rounded"
onChange={(e)=>updateStatus(e.target.value)}
>

<option value="Pending">Pending</option>
<option value="Processing">Processing</option>
<option value="Shipped">Shipped</option>
<option value="Delivered">Delivered</option>
<option value="Cancelled">Cancelled</option>

</select>

)

}
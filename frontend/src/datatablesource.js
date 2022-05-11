export const userColumns = [
  { field: "_id", headerName: "ID", width: 70 ,
  renderCell: (params) => {
    return (
      <div className="cellWithImg">
       
        {params.row._id}
      </div>
    );
  },
  },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.image} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "fullname",
    headerName: "Full Name",
    width: 200,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
         
          {params.row.fullname}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 200,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
         
          {params.row.email}
        </div>
      );
    },
  },

  {
    field: "phone",
    headerName: "Phone",
    width: 140,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
         
          {params.row.phone}
        </div>
      );
    },
  },
  {
    field: "role",
    headerName: "Role",
    width: 100,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.role}`}>
          {a(params.row.role)}
        </div>
      );
    },
  },
];
const a = (role)=>{
  if(role ==='3')
  return 'Customer'
  else if(role==='2')
  return 'Seller'
  else 
    return 'Admin'
}

export const productColumns = [
  { field: "_id", headerName: "ID", width: 50 ,
  renderCell: (params) => {
    return (
      <div className="cellWithImg">
       
        {params.row._id}
      </div>
    );
  },
  },
  {
    field: "product",
    headerName: "Product",
    width: 215  ,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg2" src={params.row.image} alt="avatar" />
          {params.row.name}
        </div>
      );
    },
  },
  {
    field: "price",
    headerName: "Price",
    width: 100,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
         
          {params.row.price}
        </div>
      );
    },
  },


  {
    field: "category",
    headerName: "Category",
    width: 140,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
         
          {params.row.category_id}
        </div>
      );
    },
  },
  {
    field: "brand",
    headerName: "Brand",
    width: 100,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.role}`}>
          {params.row.brand_id}
        </div>
      );
    },
  },
  {
    field: "amount",
    headerName: "Amount",
    width: 100,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus `}>
          {params.row.amount}
        </div>
      );
    },
  },
  {
    field: "seller",
    headerName: "Seller",
    width: 100,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
         
          {params.row.seller_id}
        </div>
      );
    },
  },

  {
    field: "status",
    headerName: "Status",
    width: 100,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus `}>
          {params.row.status}
        </div>
      );
    },
  },

  
];

export const OderColumns = [
  { field: "_id", headerName: "ID", width: 50 ,
  renderCell: (params) => {
    return (
      <div className="cellWithImg">
       
        {params.row._id}
      </div>
    );
  },
  },
  {
    field: "time",
    headerName: "Order day",
    width: 215  ,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          {params.row.buy_date}
        </div>
      );
    },
  },
 

  {
    field: "customer",
    headerName: "Customer",
    width: 140,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
         
          {params.row.customer_id}
        </div>
      );
    },
  },
  {
    field: "phone",
    headerName: "phone",
    width: 100,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus `}>
          {params.row.phone}
        </div>
      );
    },
  },
  {
    field: "address",
    headerName: "Address",
    width: 100,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus `}>
          {params.row.address}
        </div>
      );
    },
  },

  {
    field: "receiver",
    headerName: "Receiver",
    width: 100,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus `}>
          {params.row.receiver}
        </div>
      );
    },
  },

  

  {
    field: "payment",
    headerName: "Payment",
    width: 100,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus `}>
          {params.row.pay_id}
        </div>
      );
    },
  },
  {
    field: "status",
    headerName: "Status",
    width: 100,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus `}>
          {params.row.status}
        </div>
      );
    },
  },
];
//temporary data
export const userRows = [
  {
    id: 1,
    username: "Snow",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    status: "active",
    email: "1snow@gmail.com",
    age: 35,
  },
  {
    id: 2,
    username: "Jamie Lannister",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "2snow@gmail.com",
    status: "passive",
    age: 42,
  },
  {
    id: 3,
    username: "Lannister",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "3snow@gmail.com",
    status: "pending",
    age: 45,
  },
  {
    id: 4,
    username: "Stark",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "4snow@gmail.com",
    status: "active",
    age: 16,
  },
  {
    id: 5,
    username: "Targaryen",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "5snow@gmail.com",
    status: "passive",
    age: 22,
  },
  {
    id: 6,
    username: "Melisandre",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "6snow@gmail.com",
    status: "active",
    age: 15,
  },
  {
    id: 7,
    username: "Clifford",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "7snow@gmail.com",
    status: "passive",
    age: 44,
  },
  {
    id: 8,
    username: "Frances",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "8snow@gmail.com",
    status: "active",
    age: 36,
  },
  {
    id: 9,
    username: "Roxie",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "snow@gmail.com",
    status: "pending",
    age: 65,
  },
  {
    id: 10,
    username: "Roxie",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "snow@gmail.com",
    status: "active",
    age: 65,
  },
];

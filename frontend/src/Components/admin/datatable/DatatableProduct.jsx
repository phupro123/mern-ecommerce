import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns,productColumns } from "../../../datatablesource";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { deleteUser, getAllUsers } from "../../../redux/apiRequest";
const Datatable = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const user = useSelector((state) => state.auth.login?.currentUser)
 
  const userList = useSelector((state)=> state.user.users?.allUsers)
  const [data, setData] = useState(userList);
  useEffect(()=>{
    if(user.role !=='1'){
      navigate('/')
    }
    if(user?.accessToken){
      getAllUsers(user?.accessToken,dispatch)
    }
   

  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]) 

 

  
  const handleDelete = (id) => {
    setData(data.filter((item) => item._id !== id));
    deleteUser(user?.accessToken, dispatch, id)
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row._id)}
            >
              Delete
            </div>
            <Link to={`/admin/users/edit/${params.row._id}`}style={{ textDecoration: "none" }}>
            <div
              className="updateButton" >Edit</div>
            </Link>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="datatableTitle">
        Add New User
        <Link to="/admin/products/new" className="link">
          Add New
        </Link>
      </div>   
        <DataGrid getRowId={(row) => row._id}
        className="datagrid"
        rows=''
        columns={productColumns.concat(actionColumn)}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
          />
    </div>
  );
};

export default Datatable;

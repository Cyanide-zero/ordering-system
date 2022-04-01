import React from 'react';
import Sidebar from '../components/Sidebar';
import '../css/AdminIndent.css';
import { Link } from "react-router-dom";
// import ProductTable from '../components/product-table';
import axios from 'axios';
import Modal from 'react-modal'

function ProductManagement(){
    const [arr,setArr] = React.useState([]);
    const [openModal, setOpenModal] = React.useState(false);
    const [id, setID] = React.useState(0);
    const [folder, setFolder] = React.useState("");
    const [newName, setNewName] = React.useState("");
    const [newPrice, setNewPrice] = React.useState(0);

  React.useEffect(() => {
    getDrinks();
    setNewPrice(localStorage.getItem("price"));
    setNewName(localStorage.getItem("product"));
    setFolder(localStorage.getItem("folder"));
    setID(localStorage.getItem('id'));
    console.log(`api/admin/update${folder}`)
  }, [openModal]);

  const getDrinks = () =>{
      axios.get("https://ordering-system-database.herokuapp.com/api/admin/getproduct")
          .then((response) => {
                setArr(response.data);
      });
  }

  const updateProduct = () => {
      console.log(newName, newPrice, folder);
      axios.put(`https://ordering-system-database.herokuapp.com/api/admin/update${folder}`,{
          id : id,
          price: newPrice,
          name: newName
      }).then((response)=>{
        console.log(response)
    })
  }

    return(
        <div className="productmanagement">
            <Sidebar></Sidebar>
            
            <div className="pagecontent">
                <div className="flex-container-header">
                    <h1>PRODUCTS MANAGEMENT</h1>
                    <Link to="/admin/addproduct"><button className="add-btn">ADD PRODUCT</button></Link>
                </div>
                <hr style={{height: 1, color:'black', backgroundColor:'black'}}></hr>
            
            <div className="product-table">
                {/* <ProductTable></ProductTable> */}
                <table className='admintables'>
                    <thead>
                        <tr>
                            <th className='adminth'>ID</th>
                            <th className='adminth'>Product Name</th>
                            <th className='adminth'>Product Price</th>
                            <th className='adminth'>Date Created</th>
                            <th className='adminth'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            arr.map((item,index) =>{
                                return(
                                    <tr>
                                        <Modal style={{
                                            overlay:{
                                                backgroundColor:'rgba(0, 0, 0, 0.02)'
                                            },
                                            content:{
                                                height:'50vh',
                                                width:'50vw',
                                                position:'absolute',
                                                top:'20vh',
                                                left:'25vw',
                                            }
                                        }} isOpen={openModal} onRequestClose={()=>setOpenModal(false)}>
                                            <h1 className='modalTitle'>Edit Product</h1>
                                            <p>New Product Name</p>
                                            <input
                                                type="text"
                                                name="newname"
                                                onChange={(e)=>setNewName(e.target.value)}
                                            /><br></br>
                                            <p>New Price</p>
                                            <input
                                                type="number"
                                                name="newname"
                                                onChange={(e)=>setNewPrice(e.target.value)}
                                            /><br></br>
                                            <button onClick={updateProduct}>Submit</button>
                                        </Modal>
                                        <td className='admintd'>{index+1}</td>
                                        <td className='admintd'>{item.menuName}</td>
                                        <td className='admintd'>{item.price}</td>
                                        <td className='admintd'></td>
                                        <td className='admintd'><button onClick={()=>{
                                            setOpenModal(true);
                                            localStorage.setItem("product", item.menuName);
                                            localStorage.setItem('price', item.price);
                                            localStorage.setItem('folder', item.folder);
                                            localStorage.setItem('id', item.id);
                                        }}> Edit </button>  &nbsp;|&nbsp;   <button> Delete </button></td>
                                    </tr>
                                )
                               })
                        }
                    </tbody>
                </table>
            </div>
            </div>
        </div>
    );
}

export default ProductManagement;
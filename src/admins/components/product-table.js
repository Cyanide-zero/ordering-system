import { useTable } from 'react-table';
import React from 'react';
import axios from 'axios';



function ProductTable() {
  const [arr,setArr] = React.useState([]);
  const [id, setId] = React.useState("");
  const [name, setName] = React.useState("");
  const [price, setPrice] = React.useState("");

  const getDrinks = () =>{
      axios.get("localhost:5000/api/admin/getproduct")
          .then((response) => {
             setArr(response.data);
      });
  }

  React.useEffect(() => {
      getDrinks();
  }, []);

   const data = React.useMemo(
     () => arr.map(item =>{
      setId(item.id);
      setName(item.menuName);
      setPrice(item.price);
     })[
      {
        qty:id,
        product_name:name,
        product_price:price,
        date_created:'',
        action:''
      }
    ],
     []
   )
 
   const columns = React.useMemo(
     () => [
       {
        Header: 'Qty',
        accessor: 'qty', // accessor is the "key" in the data
       },
       {
        Header: 'Product Name',
        accessor: 'product_name',
       },
       {
        Header: 'Product Price',
        accessor: 'product_price',
        
       },
       {
        Header: 'Date Created',
        accessor: 'date_created',
       },
       {
        Header: 'Action',
        accessor: 'action',
       }
     ],
     []
   )
 
   const {
     getTableProps,
     getTableBodyProps,
     headerGroups,
     rows,
     prepareRow,
   } = useTable({ columns, data })
 
   return (
     <table {...getTableProps()} style={{ borderCollapse: 'collapse', width: '70vw', marginTop: '25px' }}>
       <thead>
         {headerGroups.map(headerGroup => (
           <tr {...headerGroup.getHeaderGroupProps()}>
             {headerGroup.headers.map(column => (
               <th
                 {...column.getHeaderProps()}
                 style={{
                   border: 'solid 1px black',
                   color: 'black',
                   fontWeight: 'bold',
                   padding: '10px 15px',
                 }}
               >
                 {column.render('Header')}
               </th>
             ))}
           </tr>
         ))}
       </thead>
       <tbody {...getTableBodyProps()}>
         {rows.map(row => {
           prepareRow(row)
           return (
             <tr {...row.getRowProps()}>
               {row.cells.map(cell => {
                 return (
                   <td
                     {...cell.getCellProps()}
                     style={{
                       padding: '8px 25px',
                       border: 'solid 1px gray',
                       textAlign: 'center',
                     }}
                   >
                     {cell.render('Cell')}
                   </td>
                 )
               })}
             </tr>
           )
         })}
       </tbody>
     </table>
   )
 }

 export default ProductTable;
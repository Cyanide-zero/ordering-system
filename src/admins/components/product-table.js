import { useTable } from 'react-table';
import React from 'react';
 
 function ProductTable() {
   const data = React.useMemo(
     () => [
       {
        qty: '1',
        product_name: 'kurt cristobal',
        product_price: 'Php 1000',
        date_created: '00/00/0000',
        actions: '',
       },
       {
        qty: '1',
        product_name: 'kurt cristobal',
        product_price: 'Php 1000',
        date_created: '00/00/0000',
        actions: '',
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
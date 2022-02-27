import { useTable } from 'react-table';
import React from 'react';
 
 function SalesTable() {
   const data = React.useMemo(
     () => [
       {
        id: '1',
        sales_date: '00/00/0000',
        sales: '0000.00',
       },
       {
        id: '1',
        sales_date: '00/00/0000',
        sales: '0000.00',
       }
     ],
     []
   )
 
   const columns = React.useMemo(
     () => [
       {
        Header: '#',
        accessor: 'id', // accessor is the "key" in the data
       },
       {
        Header: 'Sales Date',
        accessor: 'sales_date',
       },
       {
        Header: 'Sales',
        accessor: 'sales',
        
       },
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
     <table {...getTableProps()} style={{ borderCollapse: 'collapse', width: '70vw', marginTop: '15px' }}>
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

 export default SalesTable;
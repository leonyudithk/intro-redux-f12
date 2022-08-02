import React from 'react';
import Table from 'react-bootstrap/Table';
import {useSelector} from 'react-redux'

const ListProducto = () => {

   const {producto}=  useSelector(store => store.productoStore)
   
   console.log(producto)
    return (
        <div>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Email</th>
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th>Descripción</th>
                    </tr>
                </thead>
                <tbody>
                   {
                    producto.map((p, index)=>(
                    <tr key={index}>
                        <td>{p.email}</td>
                        <td>{p.nombre}</td>
                        <td>{p.precio}</td>
                        <td>{p.descrip}</td>
                      
                    </tr>
                    ))
                   }
                    
                </tbody>
            </Table>
        </div>
    );
};

export default ListProducto;
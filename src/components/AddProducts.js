import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import { useForm } from '../Hooks/useForm';
import { useDispatch } from 'react-redux';
import { actionAddproducts } from '../redux/actions/actionsProducto';
import ListProducto from './ListProducto';

const AddProducts = () => {

    const dispacth = useDispatch()
    const [formValue, handleChange, reset] = useForm({
        email: '',
        nombre: '',
        descrip: '',
        precio: '',
       

    })

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formValue)
        dispacth(actionAddproducts(formValue))
        reset()


    }
    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name="email" onChange={handleChange} value={formValue.email}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" placeholder="Enter Nombre" name="nombre" onChange={handleChange} value={formValue.nombre}/>
                
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Descripción</Form.Label>
                    <Form.Control type="text" placeholder="Enter Descripción" name="descrip" onChange={handleChange} value={formValue.descrip} />
                  
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Precio</Form.Label>
                    <Form.Control type="text" placeholder="Enter Precio" name="precio" onChange={handleChange} value={formValue.precio}/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Enviar
                </Button>
            </Form>
            <ListProducto/>
        </div>
    );
};

export default AddProducts;
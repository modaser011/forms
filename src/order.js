import React,{Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import './Order.css';
import './App.css';
import { Container,Form,Button,Col,Row} from "react-bootstrap";

export function Order()
{
    return (
        <>
        <Container>

<Table bordered variant="light" className="table">
  <thead>
    <tr>
      <th >#</th>
      <th >userEmail</th>
      <th>orderPrice</th>
      <th>phone</th>
      <th >address</th>
      <th>itemName</th>
      <th>itemPrice</th>
      <th>itemQuantity</th>
    </tr>
  </thead>
  <tbody>
    <tr>
    <td rowSpan={3}>1</td>
      <td rowSpan={3}>Moda</td>
      <td rowSpan={3}>250$</td>
      <td rowSpan={3}>01117386101</td>
      <td rowSpan={3}>Qnater</td>
      <td>burger</td>
      <td>50$</td>
      <td>5</td> 
    </tr>
    <tr>
      <td>pitza</td>
      <td>60$</td>
      <td>1</td> 
    </tr>
    <tr>
      <td>chicken</td>
      <td>50$</td>
      <td>2</td> 
    </tr>
  </tbody>
</Table>
</Container>
</>
    );
}
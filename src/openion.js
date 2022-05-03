import React,{Component} from "react";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,Form,Button,Col,Row} from "react-bootstrap";
import './App.css';
import './openion.css';
import Table from 'react-bootstrap/Table';

export function Openion()
{
    return (
        <>
        <Container>


        <Table variant="light" bordered className="table1">
  <thead>
    <tr>
      <th>#</th>
      <th>Email</th>
      <th>Rate</th>
      <th>Openion</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      
      <td>1</td>
     <td>modasergomis@gmail.com</td>
      <td>4</td>
      <td>ay 7aga</td>
    </tr>
  </tbody>
</Table>
</Container>
</>
    );
}
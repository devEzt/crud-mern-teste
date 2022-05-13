import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Table } from 'react-bootstrap'
import FuncionarioListRow from './FuncionarioListRow'

const FuncionarioList = () => {
  const [funcionarios, setFuncionarios] = useState([])

  useEffect(() => {
    axios
      .get('http://localhost:3000/funcionarios/')
      .then(({ data }) => {
        setFuncionarios(data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  const Data = () => {
    return funcionarios.map((res, i) => {
      return <FuncionarioListRow obj={res} key={i} />
    })
  }

  return (
    <div className="table-wrapper">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Sobrenome</th>
            <th>Email</th>
            <th>NIS</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{Data()}</tbody>
      </Table>
    </div>
  )
}

export default FuncionarioList

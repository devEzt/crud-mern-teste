import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import axios from 'axios'

const FuncionarioListRow = (props) => {
  const { _id, name, surname, email, nis } = props.obj

  const deleteFuncionario = () => {
    axios
      .delete('http://localhost:3000/funcionarios/delete-funcionario/' + _id)
      .then((res) => {
        if (res.status === 200) {
          alert('Funcionário deletado com sucesso')
          window.location.reload()
        } else Promise.reject()
      })
      .catch((err) => alert('Algo deu errado. =( '))
  }

  return (
    <tr>
      <td>{name}</td>
      <td>{surname}</td>
      <td>{email}</td>
      <td>{nis}</td>
      <td>
        <Link className="edit-link" to={'/edit-funcionario/' + _id}>
          Editar
        </Link>
        <Button onClick={deleteFuncionario} size="sm" variant="danger">
          Deletar
        </Button>
      </td>
    </tr>
  )
}

export default FuncionarioListRow

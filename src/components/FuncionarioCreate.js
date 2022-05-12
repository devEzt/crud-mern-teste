// FuncionarioCreate Component para add novo funcionário.

// Import Modules
import React, { useState } from 'react'
import axios from 'axios'
import FuncionarioForm from './FuncionarioForm'

// FuncionarioCreate Component
const FuncionarioCreate = () => {
  const [formValues] = useState({ name: '', surname: '', email: '', nis: '' })
  // handler do onSubmit
  const onSubmit = (funcionarioObject) => {
    axios
      .post('http://localhost:3000/funcionarios/create-funcionario', funcionarioObject)
      .then((res) => {
        if (res.status === 200) alert('Funcionário foi criado com Sucesso!!')
        else Promise.reject()
      })
      .catch((err) => alert('Algo deu errado...'))
  }

  // Retorna o form do funcionário
  return (
    <FuncionarioForm initialValues={formValues} onSubmit={onSubmit} enableReinitialize>
      Create Funcionário
    </FuncionarioForm>
  )
}

// Export do FuncionarioCreate Component
export default FuncionarioCreate

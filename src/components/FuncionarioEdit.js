// FuncionarioEdit Component para atualizar o funcionario

// Import modulos para execucao
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import FuncionarioForm from './FuncionarioForm'

// FuncionarioEdit Component
const FuncionarioEdit = (props) => {
  const [formValues, setFormValues] = useState({
    name: '',
    surname: '',
    email: '',
    nis: '',
  })

  // handler do onSubmit
  const onSubmit = (funcionarioObject) => {
    axios
      .put('http://localhost:3000/funcionarios/update-funcionario/' + props.match.params.id, funcionarioObject)
      .then((res) => {
        if (res.status === 200) {
          alert('Funcionário foi Editado com Sucesso!!')
          props.history.push('/funcionario-list')
        } else Promise.reject()
      })
      .catch((err) => alert('Algo deu errado...'))
  }

  //Carrega as informaçoes do servidor e reinicializa o FuncionarioForm
  useEffect(() => {
    axios
      .get('http://localhost:3000/funcionarios/update-funcionario/' + props.match.params.id)
      .then((res) => {
        const { name, surname, email, nis } = res.data
        setFormValues({ name, surname, email, nis })
      })
      .catch((err) => console.log(err))
  }, [props.match.params.id])

  // Retorna o form do funcionário
  return (
    <FuncionarioForm initialValues={formValues} onSubmit={onSubmit} enableReinitialize>
      Atualiza Funcionário
    </FuncionarioForm>
  )
}

// Export por padrao do FuncionarioEdit Component
export default FuncionarioEdit

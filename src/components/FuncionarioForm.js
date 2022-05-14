import React from 'react'

import * as Yup from 'yup'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { FormGroup, Button } from 'react-bootstrap'

const FuncionarioForm = (props) => {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Campo Obrigatório'),
    surname: Yup.string().required('Campo Obrigatório'),
    email: Yup.string().email('Você inseriu um E-mail Inválido!').required('Campo Obrigatório'),
    nis: Yup.number().positive('Número NIS é inválido').integer('Número NIS é inválido').required('Campo Obrigatório'),
  })

  console.log(props)
  return (
    <div className="form-wrapper">
      <Formik {...props} validationSchema={validationSchema}>
        <Form>
          <h3>Nome</h3>
          <FormGroup>
            <Field name="name" label={'nome'} type="text" className="form-control" placeholder="lastName" />
            <ErrorMessage name="name" className="d-block invalid-feedback" component="span" />
          </FormGroup>

          <FormGroup>
            <h3>Sobrenome</h3>
            <Field name="surname" type="text" maxlength="30" minlength="2" className="form-control" />
            <ErrorMessage name="surname" className="d-block invalid-feedback" component="span" />
          </FormGroup>

          <FormGroup>
            <h3>Email</h3>

            <Field name="email" type="text" className="form-control" />
            <ErrorMessage name="email" className="d-block invalid-feedback" component="span" />
          </FormGroup>

          <FormGroup>
            <h3>NIS</h3>
            <Field name="nis" min={1} max={31} type="number" className="form-control" />
            <ErrorMessage name="nis" className="d-block invalid-feedback" component="span" />
          </FormGroup>

          <Button variant="danger" size="lg" block="block" type="submit">
            {props.children}
          </Button>
        </Form>
      </Formik>
    </div>
  )
}

export default FuncionarioForm

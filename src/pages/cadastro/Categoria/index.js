import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import PageDefault from '../../../components/PageDefault'
import FormField from '../../../components/FormField'
import Button from '../../../components/Button'

function CadastroCategoria() {
  
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: ''
  }

  const [categorias, setCategorias] = useState([])
  const [values, setValues] = useState(valoresIniciais)

  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor,
    })
  }

  function handleChange(infosDoEvento) {
    setValue(
      infosDoEvento.target.getAttribute('name'),
      infosDoEvento.target.value
    )
  }

  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {values.nome}</h1>

      <form onSubmit={function handleSubmit(eventsInfo) {
        eventsInfo.preventDefault()
        setCategorias([
          ...categorias,
          values
        ])

        setValues(valoresIniciais)
      }}>

        <FormField
          label="Nome da Categoria"
          type="textarea"
          name="nome"
          value={values.nome}
          onChange={handleChange}
        />

        <FormField
          label="Descrição"
          type="text"
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
        />

          {/*<div>
            <label>
              Descrição:
              <textarea
                type="text"
                name="descricao"
                value={values.descricao}
                onChange={handleChange}
              />
            </label>
          </div>*/}

        <FormField
          label="Cor"
          type="color"
          name="cor"
          value={values.cor}
          onChange={handleChange}
        />

          {/*<div>
            <label>
              Cor:
              <input
                type="color"
                name="cor"
                value={values.cor}
                onChange={handleChange}
              />
            </label>
          </div>*/}

        <Button>
          Cadastrar
        </Button>
      </form>

            <ul>
              {categorias.map((categoria, index) => {
                return (
                  <li key={`${categoria}${index}`}>
                    {categoria.nome}
                  </li>
                )
              })}
            </ul>

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  )
}

export default CadastroCategoria
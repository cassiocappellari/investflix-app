import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const FormFieldWrapper = styled.div`
    position: relative;
    textarea {
        min-height: 150px;
    }
    input[type="color"] {
        padding-left: 56px;
    }
`

const Label = styled.label``
Label.text = styled.span``

const Input = styled.input`
  background: #53585D;
  color: #F5F5F5;
  display: block;
  width: 100%;
  height: 57px;
  font-size: 18px;
  
  outline: 0;
  border: 0;
  border-top: 4px solid transparent;
  border-bottom: 4px solid #53585D;
  
  padding: 16px 16px;
  margin-bottom: 45px;
  
  resize: none;
  border-radius: 4px;
  transition: border-color .3s;
  
  &:focus {
    border-bottom-color: var(--primary);
  }
`

function FormField({
  label, type, name, value, onChange,
}) {
  const fieldId = `id_${name}`
  const isTypeTextarea = type === 'textarea'
  const tag = isTypeTextarea ? 'textarea' : 'input'

  return (
    <FormFieldWrapper>
      <Label
        htmlFor={fieldId}
      >
        <Label.Text>
            {label}
            :
        </Label.Text>
        <Input
            as={tag}
            id={fieldId}
            type={type}
            name={name}
            value={value}
            onChange={onChange}
        />
      </Label>
    </FormFieldWrapper>
  );
}

FormField.defaultProps = {
    type: 'text',
    value: '',
    onChange: () => {}
}

FormField.propTypes = {
    label: PropTypes.string.isRequired,
    type: PropTypes.string,
    name: PropTypes.string.isRequired,
    value: PropTypes.string,
    onChange: PropTypes.func,
}

export default FormField
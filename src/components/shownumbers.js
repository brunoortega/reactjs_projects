import React, { useEffect, useState } from 'react'
import styles from '../styles/shownumbers.module.css'

export default function ShowNumbers() {
  const [valor, setValor] = useState(0)
  const [valor2, setValor2] = useState(0)
  const [resultado, setResultado] = useState(0)
  const [operation, setOperation] = useState('')
  const [resultadoAnterior, setResultadoAnterior] = useState(resultado)
  const [valorAnterior, setValorAnterior] = useState(resultado)
  const [operationAnterior, setOperationAnterior] = useState(operation)

  useEffect(() => {
    setValor(resultado)
  }, [resultado])

  document.addEventListener('keydown', (e) => {
    const keyName = e.key
    console.log(keyName)
  })

  function concatenar(e) {
    if (operation !== '') {
      valor2 === 0
        ? e.target.value !== '0' && setValor2(e.target.value)
        : setValor2(valor2 + e.target.value)
    } else {
      valor === 0
        ? e.target.value !== '0' && setValor(e.target.value)
        : setValor(valor + e.target.value)
    }
  }

  function clear() {
    setValor(0)
    setValor2(0)
    setResultado(0)
    setResultadoAnterior(0)
    setOperation('')
  }

  function calcular(operator) {
    setOperation(operator)
  }

  function igual() {
    if (operation !== '') {
      switch (operation) {
        case '+':
          setResultado(Number(valor) + Number(valor2))
          break
        case '-':
          setResultado(Number(valor) - Number(valor2))
          break
        case '*':
          setResultado(Number(valor) * Number(valor2))
          break
        case '/':
          setResultado(Number(valor) / Number(valor2))
          break
      }
      setOperationAnterior(operation)
      setResultadoAnterior(valor)
      setValorAnterior(valor2)
      setOperation('')
      setValor2(0)
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.display}>
        <p>
          {resultadoAnterior > 0
            ? resultadoAnterior + operationAnterior + valorAnterior + '='
            : (valor !== 0 && operation !== '' ? valor : '') + operation}
        </p>
        <p>
          {(resultado && operation !== ''
            ? resultado + operation + (valor2 ? +valor2 : '')
            : resultado) || (operation === '' ? valor : valor2)}
        </p>
      </div>
      <div className={styles.botoes}>
        <button onClick={concatenar} value={7}>
          7
        </button>
        <button onClick={concatenar} value={8}>
          8
        </button>
        <button onClick={concatenar} value={9}>
          9
        </button>
        <button
          className={styles.operator}
          onClick={() => {
            calcular('+')
          }}
        >
          +
        </button>
        <button onClick={concatenar} value={4}>
          4
        </button>
        <button onClick={concatenar} value={5}>
          5
        </button>
        <button onClick={concatenar} value={6}>
          6
        </button>
        <button
          className={styles.operator}
          onClick={() => {
            calcular('-')
          }}
        >
          -
        </button>
        <button onClick={concatenar} value={1}>
          1
        </button>
        <button onClick={concatenar} value={2}>
          2
        </button>
        <button onClick={concatenar} value={3}>
          3
        </button>
        <button
          className={styles.operator}
          onClick={() => {
            calcular('/')
          }}
        >
          /
        </button>
        <button onClick={concatenar} value={0}>
          0
        </button>
        <button id={styles.equalstobtn} onClick={igual}>
          =
        </button>
        <button id={styles.clearbtn} onClick={clear}>
          C
        </button>
        <button
          className={styles.operator}
          onClick={() => {
            calcular('*')
          }}
        >
          *
        </button>
      </div>
    </div>
  )
}

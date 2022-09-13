import * as React from 'react'

function formatNumber(decimals, exponent, exponent_base, separator, base) {
  const normalized = Number.parseFloat((base / (exponent_base ** exponent)).toFixed(decimals))
  if (separator) {
    return normalized.toLocaleString()
  }
  return normalized
}

const FormatNumber = ({decimals = 2, exponent = 0, exponent_base = 10, separator = true, children}) => {
  return (
    <span>{formatNumber(decimals, exponent, exponent_base, separator, Number(children))}</span>
  )
}

export default FormatNumber
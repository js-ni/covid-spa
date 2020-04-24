import React from 'react'
import {css, Global} from '@emotion/core'

export default function GlobalCSS() {
  return (
    <Global
      styles={css`
        html {
          background-color: #17132d;
        }
      `}
    />
  )
}

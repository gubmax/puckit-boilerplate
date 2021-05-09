import { css } from '@emotion/react'

import { rippleStyles } from 'src/styles'

const styles = {
  btn: css`
    ${rippleStyles};
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    border-width: 0;
    cursor: pointer;
    font-family: inherit;
    font-weight: 500;
    height: 3rem;
    min-width: 10rem;
    outline: none;
    padding: 0 var(--space-primary);
  `,
  default: css`
    background: transparent;
    border: 1px solid var(--rgb-accent);
    color: var(--rgb-accent);

    &:focus {
      color: var(--rgb-accent);
    }
  `,
  primary: css`
    background: var(--rgb-accent);
    color: white;

    &:after {
      background: rgba(255, 255, 255, .12);
    }
  `,
}

export default styles

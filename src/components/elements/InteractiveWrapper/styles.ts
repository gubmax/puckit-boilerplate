import { css } from '@emotion/react'

const styles = {
  wrapper: css`
    cursor: pointer;
    transition: background .2s;
    &:active {
      background: var(--color-accent-light);
    }
  `,
  active: css`
    color: var(--color-accent);
    font-weight: bold;
  `
}

export default styles

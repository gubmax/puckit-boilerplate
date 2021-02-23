import { css } from '@emotion/react'

const styles = {
  wrapper: css`
    cursor: pointer;
    transition: background .2s;
    &:active {
      background: var(--rgb-accent-light);
    }
  `,
  active: css`
    color: var(--rgb-accent);
    font-weight: bold;
  `
}

export default styles

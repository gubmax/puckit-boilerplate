import { css } from '@emotion/react'

const styles = {
  wrapper: css`
    cursor: pointer;
    transition: background .1s;
    &:active {
      background: var(--rgb-accent-light);
    }
  `,
  active: css`
    color: var(--rgb-accent);
  `
}

export default styles

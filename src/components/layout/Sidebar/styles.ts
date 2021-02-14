import { css } from '@emotion/react'

const styles = {
  wrapper: css`
    grid-area: aside;
    padding: 20px 0 20px 20px;
  `,
  title: css`
    font-size: 24px;
    font-weight: bold;
  `,
  highlight: css`
    display: inline-block;
    width: 1.15em;
    border-style: solid;
    border-color: var(--color-accent);
    border-width: 3px;
    color: var(--color-accent);
    text-align: center;
    border-radius: 8px;
    transform: rotate(6deg);
  `,
}

export default styles

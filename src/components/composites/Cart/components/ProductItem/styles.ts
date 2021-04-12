import { css } from '@emotion/react'

const styles = {
  wrapper: css`
    display: flex;
  `,
  body: css`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  `,
  imageBox: css`
    flex-shrink: 0;
    width: 8rem;
    height: 8rem;
    border-radius: 12px;
    margin-right: var(--space-primary);
    background-color: var(--rgb-bg0);
  `,
  price: css`
    min-width: 3.5rem;
    font-size: var(--fs-h3);
    font-weight: 500;
    text-align: end;
  `,
  counter: css`
    width: 2.5rem;
    text-align: center;
    align-self: center;
    font-size: var(--fs-h3);
  `,
  marginRight: css`
    margin-right: auto;
    padding-right: var(--space-primary)
  `,
}

export default styles

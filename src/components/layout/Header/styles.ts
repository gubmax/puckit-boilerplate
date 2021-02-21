import { css } from '@emotion/react'

const styles = {
  wrapper: css`
    grid-area: header;
    display: flex;
    align-items: center;
    padding: 20px;
  `,
  logoWrapper: css`
    font-size: 24px;
  `,
  link: css`
    margin-left: auto;
    border-bottom: 1px dashed var(--color-primary);
  `,
}

export default styles

import { css } from '@emotion/react'

const styles = {
  wrapper: css`
    grid-area: header;
    display: flex;
    align-items: center;
    padding: var(--space-primary);
  `,
  logoWrapper: css`
    font-size: var(--fs-h2);
  `,
  link: css`
    margin-left: auto;
    border-bottom: 1px dashed var(--rgb-primary);
  `,
}

export default styles

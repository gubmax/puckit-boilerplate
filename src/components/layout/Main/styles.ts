import { css } from '@emotion/react'

const styles = {
  page: css`
    display: grid;
    grid-template-columns: 280px 1fr;
    grid-template-rows: 0fr 1fr;
    grid-template-areas:
      "aside header"
      "aside main";
    min-height: 100vh;
  `,
  wrapper: css`
    grid-area: main;
  `,
  main: css`
    padding: 0 20px 20px 20px;
  `,
  title: css`
    font-size: 16px;
  `,
}

export default styles

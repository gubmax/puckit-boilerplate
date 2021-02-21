import { css } from '@emotion/react'

const styles = {
  page: css`
    display: grid;
    grid-template-columns: 280px 1fr;
    grid-template-rows: 0fr 1fr;
    grid-template-areas:
      "header header"
      "aside main";
    min-height: 100vh;
  `,
  main: css`
    grid-area: main;
    padding: 0 20px 20px;
  `,
  title: css`
    margin-bottom: 12px;
    font-size: 40px;
    font-weight: bold;
  `,
}

export default styles

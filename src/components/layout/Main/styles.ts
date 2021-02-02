import { css } from '@emotion/react'

const styles = {
  wrapper: css`
    display: grid;
    grid-template-columns: 280px 1fr;
    grid-template-areas: "aside main";
    min-height: 100vh;
  `,
  main: css`
    grid-area: main;
    padding: 20px;
  `,
  title: css`
    font-size: 16px;
  `,
}

export default styles

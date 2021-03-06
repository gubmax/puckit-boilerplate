import { css } from '@emotion/react'

const styles = {
  page: css`
    display: grid;
    grid-template-columns: 20rem 1fr;
    grid-template-rows: 0fr 1fr;
    grid-template-areas:
      "header header"
      "aside main";
    min-height: 100vh;
  `,
  main: css`
    grid-area: main;
    padding: 0 var(--space-primary) var(--space-secondary);
  `,
}

export default styles

import { css } from '@emotion/react'

const text = css`
  line-height: 1;
  color: var(--rgb-border);
  text-transform: uppercase;
  user-select: none;
`

const styles = {  
  title: css`
    ${text}
    font-size: 6.5rem;
  `,
  
  text: css`
    ${text}
    font-size: 3rem;
  `,
}

export default styles

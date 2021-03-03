import { css, keyframes } from '@emotion/react'

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`

const borderRadius = css`
  border-radius: 50%;
`

const styles = {
  spinner: css`
    ${borderRadius}
    box-sizing: border-box;
    width: 44px;
    height: 44px;
    margin: auto;
    border-width: 3px;
    border-style: solid;
    border-color: transparent var(--rgb-accent);
    animation: ${spin} 0.65s infinite linear;
  `,
  loader: css`
    ${borderRadius}
    display: flex;
    transform: translateZ(0);
  `,
  spinnerSmall: css`
    width: 20px;
    height: 20px;
    border-width: 2px;
  `,
  spinnerSecondary: css`
    border-right-color: var(--rgb-bg1);
    border-left-color: var(--rgb-bg1);
  `,
}

export default styles

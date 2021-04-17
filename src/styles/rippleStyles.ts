import { css } from '@emotion/react'

export const rippleStyles = css`
  position: relative;
  overflow: hidden;
  z-index: 0;

  &:after {
    background: var(--rgb-accent-light);
    border-radius: 50%;
    content: "";
    display: block;
    left: 50%;
    opacity: 0;
    opacity: 0;
    padding-top: 0;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 0;
    z-index: -1;
  }

  &:focus:after {
    opacity: 1;
    padding-top: 120%;
    transition:
      opacity .15s ease-out,
      width .15s ease-out;
    width: 120%;
  }
`

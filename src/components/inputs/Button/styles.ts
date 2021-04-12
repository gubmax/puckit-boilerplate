import { css } from '@emotion/react'

const styles = {
  btn: css`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    border-width: 0;
    cursor: pointer;
    font-family: inherit;
    font-size: var(--fs-accent);
    font-weight: 500;
    height: 3rem;
    letter-spacing: 1px;
    line-height: 1rem;
    min-width: 10rem;
    outline: none;
    overflow: hidden;
    padding: 0 var(--space-primary);
    position: relative;
    z-index: 0;

    &:after {
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
        opacity .2s ease-out,
        width .2s ease-out;
      width: 120%;
    }
  `,
  default: css`
    background: transparent;
    border: 1px solid var(--rgb-accent);
    color: var(--rgb-accent);
    transition: color .3s;

    &:focus {
      color: var(--rgb-accent);
    }

    &:after {
      background: var(--rgb-accent-light);
    }
  `,
  primary: css`
    background: var(--rgb-accent);
    color: white;
    transition: background .2s, box-shadow .2s;

    &:after {
      background: rgba(255, 255, 255, .12);
    }
  `,
  large: css`
    width: 100%;
  `,
  rounded: css`
    width: 3rem;
    min-width: 3rem;
    border-radius: 50%;
  `,
}

export default styles

import { css } from '@emotion/react'

import { rippleStyles } from 'src/styles'

const styles = {
  wrapper: css`
    ${rippleStyles};
    cursor: pointer;
  `,
  active: css`
    color: var(--rgb-accent);
  `
}

export default styles

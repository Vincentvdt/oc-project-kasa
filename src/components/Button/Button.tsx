import styles from './Button.module.css'
import React from 'react'

const Button = ({
  children,
  variant = '',
  ...props
}: React.ComponentProps<'button'> & { variant?: string }) => (
  <button className={`${styles.btn} ${styles[variant]}`} {...props}>
    {children}
  </button>
)

export default Button

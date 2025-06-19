import styles from './Button.module.css'
import { memo, type ComponentPropsWithoutRef } from 'react'

const Button = ({
  children,
  variant = '',
  ...props
}: ComponentPropsWithoutRef<'button'> & { variant?: string }) => (
  <button className={`${styles.btn} ${styles[variant]}`} {...props}>
    {children}
  </button>
)
export default memo(Button)

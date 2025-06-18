import React from 'react'
import clsx from 'clsx'
import styles from './Container.module.css'

type AllowedTags = 'div' | 'header' | 'footer' | 'main' | 'section'

type ContainerProps = {
  tag?: AllowedTags
  fullWidth?: boolean
  className?: string
  innerClassName?: string
  children: React.ReactNode
} & React.HTMLAttributes<HTMLElement>

const Container = ({
  tag: Tag = 'div',
  fullWidth = false,
  className,
  innerClassName,
  children,
  ...props
}: ContainerProps) => {
  const containerClass = clsx(fullWidth ? styles.fullWrapper : styles.container, className)

  return fullWidth ? (
    <Tag className={containerClass} {...props}>
      <div className={clsx(styles.inner, innerClassName)}>{children}</div>
    </Tag>
  ) : (
    <Tag className={containerClass} {...props}>
      {children}
    </Tag>
  )
}

export default Container

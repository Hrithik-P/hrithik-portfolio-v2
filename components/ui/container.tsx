import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react"
import { cn } from "@/lib/utils"

type ContainerProps<T extends ElementType> = {
  children: ReactNode
  className?: string
  as?: T
} & Omit<ComponentPropsWithoutRef<T>, "children" | "className" | "as">

/** Single source of truth for the page gutter and max width. */
export function Container<T extends ElementType = "div">({
  children,
  className,
  as,
  ...rest
}: ContainerProps<T>) {
  const Tag = (as ?? "div") as ElementType

  return (
    <Tag className={cn("mx-auto w-full max-w-[1140px] px-4 sm:px-6 lg:px-8", className)} {...rest}>
      {children}
    </Tag>
  )
}

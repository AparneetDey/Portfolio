/**
 * Utility to conditionally join classNames together.
 * Lightweight alternative to clsx/classnames without external dependencies.
 */
export function cn(...classes) {
  return classes
    .flat()
    .filter(Boolean)
    .join(" ");
}

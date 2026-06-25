import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "outline" | "ghost";

const variantClass: Record<Variant, string> = {
  primary: "btn btn-primary",
  outline: "btn btn-outline",
  ghost: "btn btn-ghost",
};

interface BaseProps {
  variant?: Variant;
  className?: string;
}

interface LinkButtonProps extends BaseProps {
  href: string;
  external?: boolean;
  children: ReactNode;
}

export function ButtonLink({
  href,
  external,
  variant = "primary",
  className = "",
  children,
}: LinkButtonProps) {
  const cls = `${variantClass[variant]} ${className}`;
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}

type NativeButtonProps = BaseProps & ComponentProps<"button">;

export function Button({
  variant = "primary",
  className = "",
  children,
  ...rest
}: NativeButtonProps) {
  return (
    <button className={`${variantClass[variant]} ${className}`} {...rest}>
      {children}
    </button>
  );
}

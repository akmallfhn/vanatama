"use client";
import React, { ButtonHTMLAttributes, ForwardedRef, forwardRef } from "react";

type VariantType =
  | "primary"
  | "secondary"
  | "outline"
  | "ghost"
  | "whatsapp"
  | "hollowWhatsapp"
  | "link"
  | "dark"
  | "surfaceDark"
  | "destructive"
  | "semiDestructive";

type SizeType =
  | "default"
  | "medium"
  | "large"
  | "small"
  | "icon"
  | "largeRounded"
  | "defaultRounded"
  | "mediumRounded"
  | "smallRounded"
  | "iconRounded";

interface AppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: VariantType;
  size?: SizeType;
}

// --- Use forwardRef for pass ref component. forwardRef cant directly use with 'export default function'
const AppButton = forwardRef<HTMLButtonElement, AppButtonProps>(
  (
    {
      onClick,
      children,
      variant = "primary",
      size = "default",
      disabled = false,
      className,

      ...rest // -- ... rest for calls the remaining props that haven't been explicitly fetched from props.
    },
    ref: ForwardedRef<HTMLButtonElement>
  ) => {
    const baseClasses =
      "app-button relative inline-flex gap-2 font-semibold font-ui items-center justify-center truncate transition transform hover:cursor-pointer active:scale-95 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50";

    const variantClasses: Record<VariantType, string> = {
      primary: "bg-primary text-white hover:bg-[#0759D3] active:bg-[#0759D3]",
      secondary:
        "bg-secondary text-white hover:bg-[#CC446A] active:bg-[#CC446A]",
      outline:
        "bg-transparent text-white border border-[#E3E3E3] hover:bg-secondary hover:border-secondary active:bg-secondary",
      ghost:
        "hover:bg-white/10 active:bg-white/10 dark:hover:bg-black/5 dark:active:bg-black/5",
      whatsapp: "text-white bg-green-500",
      hollowWhatsapp:
        "bg-transparent border border-white text-white overflow-hidden transition-all duration-300 before:absolute before:inset-0 before:bg-green-500 before:-translate-x-full before:transition-transform before:duration-300 hover:before:translate-x-0 hover:border-transparent before:-z-10",
      link: "text-primary hover:underline active:underline underline-offset-4",
      dark: "bg-[#202020] text-white hover:bg-black active:bg-black",
      destructive:
        "text-white bg-destructive hover:bg-[#D62012] active:bg-[#D62012]",
      surfaceDark:
        "bg-[#27292E] text-[#9498A1] hover:bg-[#242529] active:bg-[#242529]",
      semiDestructive:
        "bg-semi-destructive text-destructive dark:text-red-700 dark:bg-[#29110C]",
    };

    const sizeClasses: Record<SizeType, string> = {
      large: "py-3 px-7 h-[52px] text-lg rounded-xl",
      default: "py-2 px-4 h-10 text-sm rounded-lg",
      medium: "py-1.5 px-3 h-9 text-sm rounded-md",
      small: "py-1 px-2 h-8 text-xs rounded-md",
      icon: "size-9 rounded-md",
      largeRounded: "py-3 px-7 h-[52px] text-lg rounded-full",
      defaultRounded: "py-2 px-4 h-10 text-sm rounded-full",
      mediumRounded: "py-1.5 px-3 h-9 text-sm rounded-full",
      smallRounded: "py-1 px-2 h-8 text-xs rounded-full",
      iconRounded: "size-8 rounded-full",
    };

    const finalClasses = [
      baseClasses,
      variantClasses[variant],
      sizeClasses[size],
      className,
    ].join(" ");

    return (
      <button
        ref={ref}
        disabled={disabled}
        onClick={onClick}
        className={finalClasses}
        {...rest}
      >
        {children}
      </button>
    );
  }
);
AppButton.displayName = "AppButton";
export default AppButton;

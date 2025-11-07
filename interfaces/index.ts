/**
 * Typescript interface for reusable components and project-wide types.
 */

export interface CardProps {
  image?: string; // URL to property image
  title: string; // Property title
  description: string; // short desctiption of property
  price?: number; // price per night or stay
}

export interface ButtonProps {
  label: string; // text displayed on the button
  onClick?: () => void; // click event handler
  type?: "button" | "submit" | "reset"; //button type
  variant?: "primary" | "secondary" | "outline"; // visual style variant
  disabled?: boolean; // disabled state
}

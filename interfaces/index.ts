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

export interface PropertyBadgeProps {
  // status: string; // this prop would be open for any word outside of the
  // list below
  status: "New" | "Featured" | "Available" | "Sold!"; // These are the only
  // strings allowed for the status of the property listing
  color: "badge-blue" | "badge-green" | "badge-red" | "badge-gray"; // colour
  // coded statuses
}

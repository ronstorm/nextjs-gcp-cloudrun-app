// Directive to ensure this component runs only on the client side
"use client";

// Importing necessary modules and hooks
import Link from "next/link"; // For client-side navigation
import { usePathname } from "next/navigation"; // Hook to get the current path
import "./styles.css"; // Importing CSS for styling
import { useState } from "react"; // React hook for state management

// Navigation links data
const navLinks = [
  { name: "Register", href: "/register" },
  { name: "Login", href: "/login" },
  { name: "Forgot password", href: "/forgot-password" },
];

/**
 * A layout component for authentication-related pages.
 * It includes an input field and navigation links.
 *
 * @param {Object} props - Props for the component.
 * @param {React.ReactNode} props.children - Child components to be rendered within the layout.
 */
export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathName = usePathname(); // Getting the current path
  const [input, setInput] = useState(""); // State for the input field

  // Rendering the component
  return (
    <div>
      {/* Input field for user interaction */}
      <div>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)} // Update state on input change
        />
      </div>
      {/* Mapping over navLinks to render navigation links */}
      {navLinks.map((link) => {
        // Checking if the current path matches the link for styling
        const isActive = pathName.startsWith(link.href);

        // Rendering Link component for navigation
        return (
          <Link
            href={link.href} // Navigation URL
            key={link.name} // Unique key for each link
            className={isActive ? "font-bold mr-4" : "text-blue-500 mr-4"} // Styling based on active status
          >
            {link.name} {/* Displaying the link name */}
          </Link>
        );
      })}
      {children} {/* Rendering child components */}
    </div>
  );
}

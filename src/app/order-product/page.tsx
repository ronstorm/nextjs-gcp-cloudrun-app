// Directive to ensure this component runs only on the client side
"use client";

// Importing the useRouter hook from Next.js for navigation purposes
import { useRouter } from "next/navigation";

/**
 * Component for placing an order.
 * It renders a button that, when clicked, navigates the user to the home page.
 */
export default function OrderProduct() {
  // Initializing the router instance for navigation
  const router = useRouter();

  /**
   * Event handler for click event on the order button.
   * It logs a message to the console and then navigates the user to the home page.
   */
  const handleClick = () => {
    console.log("Placing your order"); // Log message indicating order placement
    router.push("/"); // Navigate to the home page
  };

  // Render the order product interface
  return (
    <>
      <h1>Order product</h1> {/* Heading for the component */}
      <button onClick={handleClick}>Place order</button>{" "}
      {/* Button to place an order */}
    </>
  );
}

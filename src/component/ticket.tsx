import { useState } from "react";

// Define the properties that the TicketBooking component will accept
interface TicketBookingProps {
  adultPrice: number; // Price for adult tickets
  childrenPrice: number; // Price for children tickets
}

const TicketBooking = ({ adultPrice, childrenPrice }: TicketBookingProps) => {
  // State to manage the quantity of adult tickets
  const [adultQuantity, setAdultQuantity] = useState<number>(0);
  // State to manage the quantity of children tickets
  const [childrenQuantity, setChildrenQuantity] = useState<number>(0);
  // State to manage error messages
  const [error, setError] = useState<string | null>(null);

  // Function to handle changes in adult ticket quantity
  const handleAdultQuantityChange = (change: number) => {
    setError(null); // Clear any existing errors
    // Update adult quantity, ensuring it does not go below zero
    setAdultQuantity((prev) => Math.max(prev + change, 0));
  };

  // Function to handle changes in children ticket quantity
  const handleChildrenQuantityChange = (change: number) => {
    setError(null); // Clear any existing errors
    // Update children quantity, ensuring it does not go below zero
    setChildrenQuantity((prev) => Math.max(prev + change, 0));
  };

  // Calculate the total cost based on quantities and prices
  const totalCost =
    adultQuantity * adultPrice + childrenQuantity * childrenPrice;

  // Function to handle clearing all ticket quantities
  const handleClear = () => {
    setAdultQuantity(0); // Reset adult quantity
    setChildrenQuantity(0); // Reset children quantity
    setError(null); // Clear any existing errors
  };

  // Function to handle the checkout process
  const handleCheckout = () => {
    // Check if total cost is zero and show an error if so
    if (totalCost === 0) {
      setError("Please select at least one ticket to proceed.");
    } else {
      // Proceed to checkout with a success message
      alert(`Proceeding to checkout. Total cost: $${totalCost.toFixed(2)}`);
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Ticket Booking</h2>

      {/* Display error message if there is any */}
      {error && <p className="text-red-500 mb-4">{error}</p>}

      {/* Adult Tickets Section */}
      <div className="mb-4 flex flex-col sm:flex-row items-center justify-between">
        <div>
          <h3 className="text-xl font-semibold">Adult Ticket</h3>
          <p className="text-gray-600">12 years and Above</p>
        </div>
        <div className="flex items-center">
          <button
            className="bg-red-500 text-white px-4 py-2 rounded-l transition-transform transform hover:scale-105"
            onClick={() => handleAdultQuantityChange(-1)}
          >
            -
          </button>
          <span className="px-4 py-2">{adultQuantity}</span>
          <button
            className="bg-green-500 text-white px-4 py-2 rounded-r transition-transform transform hover:scale-105"
            onClick={() => handleAdultQuantityChange(1)}
          >
            +
          </button>
        </div>
        <p className="text-gray-600 ml-4">Price: ${adultPrice.toFixed(2)}</p>
      </div>

      {/* Children Tickets Section */}
      <div className="mb-4 flex flex-col sm:flex-row items-center justify-between">
        <div>
          <h3 className="text-xl font-semibold">Children Ticket</h3>
          <p className="text-gray-600">Below 12 years</p>
        </div>
        <div className="flex items-center">
          <button
            className="bg-red-500 text-white px-4 py-2 rounded-l transition-transform transform hover:scale-105"
            onClick={() => handleChildrenQuantityChange(-1)}
          >
            -
          </button>
          <span className="px-4 py-2">{childrenQuantity}</span>
          <button
            className="bg-green-500 text-white px-4 py-2 rounded-r transition-transform transform hover:scale-105"
            onClick={() => handleChildrenQuantityChange(1)}
          >
            +
          </button>
        </div>
        <p className="text-gray-600 ml-4">Price: ${childrenPrice.toFixed(2)}</p>
      </div>

      {/* Total Cost Section */}
      <div className="mt-6 flex flex-col items-end">
        <h3 className="text-xl font-semibold">Total Cost</h3>
        <p className="text-gray-800 text-2xl">${totalCost.toFixed(2)}</p>
      </div>

      {/* Control Buttons */}
      <div className="mt-4 flex justify-between">
        <button
          className="bg-gray-400 text-white px-4 py-2 rounded transition-transform transform hover:scale-105"
          onClick={handleClear}
        >
          Clear
        </button>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded transition-transform transform hover:scale-105"
          onClick={handleCheckout}
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default TicketBooking;

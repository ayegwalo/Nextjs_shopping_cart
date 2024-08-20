import { useState } from "react";

interface TicketBookingProps {
  adultPrice: number;
  childrenPrice: number;
}

const TicketBooking = ({ adultPrice, childrenPrice }: TicketBookingProps) => {
  const [adultQuantity, setAdultQuantity] = useState<number>(0);
  const [childrenQuantity, setChildrenQuantity] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);

  const handleAdultQuantityChange = (change: number) => {
    setError(null);
    setAdultQuantity((prev) => Math.max(prev + change, 0));
  };

  const handleChildrenQuantityChange = (change: number) => {
    setError(null);
    setChildrenQuantity((prev) => Math.max(prev + change, 0));
  };

  const totalCost =
    adultQuantity * adultPrice + childrenQuantity * childrenPrice;

  const handleClear = () => {
    setAdultQuantity(0);
    setChildrenQuantity(0);
    setError(null);
  };

  const handleCheckout = () => {
    if (totalCost === 0) {
      setError("Please select at least one ticket to proceed.");
    } else {
      alert(`Proceeding to checkout. Total cost: $${totalCost.toFixed(2)}`);
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Ticket Booking</h2>

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

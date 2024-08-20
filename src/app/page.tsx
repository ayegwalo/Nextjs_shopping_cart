"use client";

import LikeButton from "../component/like-button";
import TicketBooking from "../component/ticket";

// Defining the interface for Header component's props
interface HeaderProps {
  title?: string; // The title prop is optional and of type string
  className?: string; // className props
}

// Header component that takes a title prop
function Header({ title, className }: HeaderProps) {
  // Renders an h1 element with the provided title or a default title if none is provided
  return <h1 className={className}>{title ? title : "Default title"}</h1>;
}

// HomePage component
export default function HomePage() {
  // An array of names to be displayed as a list
  const names: string[] = [
    "Adama Loveline",
    "Chris Ayegwalo",
    "Maggie Henderson",
    "Wesley Snider",
  ];

  const adultPrice: number = 25.0;
  const childrenPrice: number = 10.0;

  // Returning the JSX to render the HomePage component
  return (
    <div>
      {/* Rendering the Header component with a custom title */}
      <Header title="Develope. Preview. Ship." className="text-3xl my-5" />

      {/* Rendering a list of names */}
      <ul>
        {names.map((name) => (
          <li key={name}>{name}</li> // Each name is rendered as a list item
        ))}
      </ul>
      <LikeButton />
      <div>
        <h1 className="text-4xl font-bold text-center my-6">
          Welcome to Our Event
        </h1>
        <TicketBooking adultPrice={adultPrice} childrenPrice={childrenPrice} />
      </div>
    </div>
  );
}

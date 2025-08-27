import { useState } from "react";

export function useAuth() {
  // Mock authentication state for now
  const [isAuthenticated] = useState(true); // change to false to test redirect

  return { isAuthenticated };
}

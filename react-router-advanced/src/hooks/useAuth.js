import { useState } from "react";

export function useAuth() {
  // Replace with real authentication logic if needed
  const [isAuthenticated] = useState(true);

  return { isAuthenticated };
}

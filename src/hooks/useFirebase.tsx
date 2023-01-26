import { useState, useEffect } from "react";

export const useFirebase = async () => {
  const [user, setUser] = useState<null | string>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    return () => console.log("User is set");
  }, []);

  return { user, loading };
};

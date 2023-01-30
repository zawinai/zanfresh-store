import { useState, useEffect } from "react";
// import { onAuthStateChanged } from "firebase/auth";
// import { auth } from "firebase.config";

// export async function useFirebase() {
//   const [user, setUser] = useState<any>(null);
//   const [loading, setLoading] = useState<boolean>(true);

//   useEffect(() => {
//     const unsub = onAuthStateChanged(auth, (data) => {
//       console.log("Here important", data);
//       if (!auth) {
//         setLoading(false);
//         setUser(null);
//       } else {
//         setUser(data);
//       }

//       setLoading(false);
//     });

//     return () => unsub();
//   }, []);

//   return { user, loading };
// }

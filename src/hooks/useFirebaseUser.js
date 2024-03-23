import { useEffect, useState } from 'react';
import { onAuthStateChanged, getAuth } from 'firebase/auth';

function useFirebaseUser() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return unsubscribe; // Clean up listener on component unmount
  }, []);

  return user;
}

export default useFirebaseUser;
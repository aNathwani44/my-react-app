// Import React hooks
import { useEffect, useState } from "react";

// Import Firebase config
import { db, auth, provider } from "./firebase";

// Import Firebase Authentication methods
import {
  signInWithRedirect,
  getRedirectResult,
  signOut,
  onAuthStateChanged
} from "firebase/auth";

// Import Firestore methods
import { collection, getDocs, addDoc } from "firebase/firestore";

function Google() {

  // Logged-in user state
  const [user, setUser] = useState(null);

  // Firestore messages
  const [messages, setMessages] = useState([]);

  // Message input
  const [input, setInput] = useState("");

  // Watch authentication state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  // Handle redirect result after returning from Google login
  useEffect(() => {
    getRedirectResult(auth)
      .then((result) => {
        if (result && result.user) {
          setUser(result.user);
        }
      })
      .catch((error) => {
        console.error("Redirect login error:", error);
      });
  }, []);

  // Login with Google (redirect)
  const handleLogin = async () => {
    try {
      await signInWithRedirect(auth, provider);
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  // Logout user
  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  // Fetch messages from Firestore
  const fetchMessages = async () => {
    const snapshot = await getDocs(collection(db, "messages"));
    const list = snapshot.docs.map((doc) => doc.data());
    setMessages(list);
  };

  // Send message to Firestore
  const sendMessage = async () => {
    if (!input.trim()) return;

    try {
      await addDoc(collection(db, "messages"), {
        text: input,
        name: user.displayName,
        timestamp: Date.now()
      });

      setInput("");
      fetchMessages();
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  // Load messages when user logs in
  useEffect(() => {
    if (user) {
      fetchMessages();
    }
  }, [user]);

  return (
    <div>
      <h1>Firebase + React Google Login</h1>

      {user ? (
        <div>
          <h2>Hello, {user.displayName}</h2>
          <button onClick={handleLogout}>Log Out</button>

          <div style={{ marginTop: "20px" }}>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
            />
            <button onClick={sendMessage}>Send</button>
          </div>

          <ul>
            {messages.map((msg, i) => (
              <li key={i}>
                <strong>{msg.name || "Anon"}:</strong> {msg.text}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div>
          <p>Please log in with Google to continue.</p>
          <button onClick={handleLogin}>Login with Google</button>
        </div>
      )}
    </div>
  );
}

export default Google;
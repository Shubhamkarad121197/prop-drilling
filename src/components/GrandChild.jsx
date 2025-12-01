import { useState, useEffect } from "react";
import { getState, subscribe } from "../globalStore";

export default function GrandChild() {
  const [user, setUserLocal] = useState(getState().user);

  useEffect(() => {
    // 🔥 Subscribe to store updates
    subscribe(() => {
      setUserLocal(getState().user);
    });
  }, []);

  return (
    <div style={{border:"1px solid blue", padding:"10px"}}>
      <h5>GrandChild Component</h5>
      <p>Hey, {user} 👋</p>
    </div>
  );
}

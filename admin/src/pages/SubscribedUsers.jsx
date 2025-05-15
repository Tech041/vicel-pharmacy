import { useState } from "react";
import axios from "axios";
import { backendUrl } from "../App";
import { useEffect } from "react";
// eslint-disable-next-line react/prop-types, no-unused-vars
const SubscribedUsers = ({ token }) => {
  const [subscribed, setSubscribed] = useState([]);

  const fetchAllSubscribedUser = async () => {
    const res = await axios.get(
      backendUrl + "/api/news-letter/subscribed-user"
    );

    console.log("Subscribed are ", res.data.user);
    if (res.data.success) {
      setSubscribed(res.data.user);
    }
    //   setSubscribed(res.data);
  };
  useEffect(() => {
    fetchAllSubscribedUser();
  }, []);
  return (
    <div>
      <h1>Subscribers:</h1>
      {subscribed?.map((user, index) => (
        <div key={user._id} className="py-2">
          <span className="px-3 text-blue-700">{index + 1}</span> {user.email}
        </div>
      ))}
    </div>
  );
};

export default SubscribedUsers;

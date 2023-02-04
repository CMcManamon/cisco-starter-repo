import { useEffect, useState } from "react";

// API URLs, response in json format
const URL_IPv4 = "https://api.ipify.org?format=json";
const URL_IPv6 = "https://api64.ipify.org?format=json";

const Address = (props) => {
  const { method } = props;
  let [address, setAddress] = useState("Unknown");

  useEffect(() => {
    let API_URL;
    if (method === "IPv4") {
      API_URL = URL_IPv4;
    } else if (method === "IPv6") {
      API_URL = URL_IPv6;
    } else {
      setAddress("Invalid method");
      return;
    }

    // Get the address from ipify
    setAddress("Checking...");
    fetch(API_URL)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((data) => setAddress(data.ip))
      .catch((error) => {
        setAddress("Error fetching IP");
        throw error;
      })
      .finally(() => {});
  }, [method]);
  return <div className="IPAddress">{address}</div>;
};
export default Address;

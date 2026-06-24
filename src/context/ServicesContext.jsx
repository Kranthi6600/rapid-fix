"use client";
import { createContext, useContext, useEffect, useState } from "react";

const ServicesContext = createContext({ services: [], loading: true });

export const ServicesProvider = ({ children }) => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await fetch("/api/services");
        console.log("ServicesContext fetch status:", res.status);
        const result = await res.json();
        console.log("ServicesContext result:", result);
        if (result.success && Array.isArray(result.data)) {
          setServices(result.data);
        } else {
          console.warn("ServicesContext unexpected result:", result);
        }
      } catch (err) {
        console.error("Failed to load services", err);
      } finally {
        setLoading(false);
      }
    };
    fetchServices();
  }, []);

  return (
    <ServicesContext.Provider value={{ services, loading }}>
      {children}
    </ServicesContext.Provider>
  );
};

export const useServices = () => useContext(ServicesContext);

"use client";
import { useToast } from "@/app/context/ToastContext";
import { ConnectionListType } from "@/types/connectionList";
import React, { useEffect, useState } from "react";

const useConnectionsList = () => {
  const { showToast } = useToast();
  const [connectionsList, setConnectionsList] = useState<ConnectionListType[]>(
    []
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchConnectionsList = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          "https://68d9e8ac90a75154f0db6251.mockapi.io/connectionusers/users",
          { cache: "no-cache" }
        );
        const data = await response.json();
        setConnectionsList(data);
      } catch {
        setError(true);
        showToast(
          "Check your internet connection. Please try again later...",
          "error"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchConnectionsList();
  }, []);

  return { connectionsList, loading, error };
};

export default useConnectionsList;

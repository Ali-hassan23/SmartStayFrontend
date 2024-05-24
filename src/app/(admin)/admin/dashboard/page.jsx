'use client'
import React, { useEffect, useState } from "react";
import axios from "axios"; // Import axios for making HTTP requests
import {
  Bed,
  BedDouble,
  BookOpen,
  CircleCheck,
  MessageCircle,
  User2,
  UserCheck,
} from "lucide-react";
import DashboardCard from "@/components/DashboardComponents/DashboardCard";
import NotLoggedIn from "@/components/AdminComponents/NotLoggedIn";
import { summaryCount } from "@/lib/getSummary";

const Page = () => {
  const [token, setToken] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);
  const [summary, setSummary] = useState({
    totalongoingreservations: "0",
    totalpaidreservations: "0",
    totalunpaidreservations: "0",
    totalstaff: "0",
    totalrooms: "0",
    totalavailablerooms: "0",
    totalcustomers: "0",
    totalunreadqueries: "0", // Add totalunreadqueries to initial summary state
  });

  useEffect(() => {
    fetchSummary(); // Fetch summary whenever isAdmin or token changes
  }, [isAdmin, token]);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    console.log('Retrieved token from storage:', storedToken);
    if (storedToken) {
      setToken(storedToken);
      verifyAdmin(storedToken);
    } else {
      setIsAdmin(false);
      setLoading(false);
    }
  }, []); // Only run this effect once when the component mounts

  const fetchSummary = async () => {
    try {
      const response = await summaryCount();
      console.log(response);
      setSummary(response);
    } catch (error) {
      console.log(error);
    }
  };

  const verifyAdmin = async (storedToken) => {
    try {
      const response = await axios.get("http://localhost:5000/admin/verify-admin", {
        headers: {
          Authorization: `Bearer ${storedToken}`,
        },
      });
      console.log('Response from verify-admin:', response.data);
      setIsAdmin(response.data.message === 'Admin verified');
    } catch (error) {
      console.error('Error verifying admin:', error);
      setIsAdmin(false);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div>Loading...</div>; // Add a loading state to handle initial load
  }

  return (
    <div className="flex items-center justify-center h-screen">
      {isAdmin ? (
        <div className="flex gap-10 flex-wrap sm:ml-56">
          <DashboardCard
            icon={<Bed size={54} />}
            title="Total Rooms"
            count={summary.totalrooms}
          />
          <DashboardCard
            icon={<BedDouble size={54} />}
            title="Available Rooms"
            count={summary.totalavailablerooms}
          />
          <DashboardCard
            icon={<BookOpen size={54} />}
            title="Ongoing Reservations"
            count={summary.totalongoingreservations}
          />
          <DashboardCard
            icon={<UserCheck size={54} />}
            title="Satisfied Customers"
            count={summary.totalcustomers}
          />
          <DashboardCard
            icon={<User2 size={54} />}
            title="Active Staff"
            count={summary.totalstaff}
          />
          <DashboardCard
            icon={<CircleCheck size={54} />}
            title="Payments"
            count={summary.totalpaidreservations}
          />
          <DashboardCard
            icon={<MessageCircle size={54} />}
            title="Unanswered Queries"
            count={summary.totalunreadqueries}
          />
        </div>
      ) : (
        <NotLoggedIn />
      )}
    </div>
  );
};

export default Page;

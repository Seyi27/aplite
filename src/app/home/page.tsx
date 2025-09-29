import ConnectionListTable from "@/components/connection-list-table/ConnectionListTable";
import UserCard from "@/components/user-card/UserCard";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <UserCard />

      <ConnectionListTable />
    </div>
  );
};

export default HomePage;

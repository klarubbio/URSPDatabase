import React from "react";
import FilterTable from "../components/FilterTable";

const Database = () => {
    const columns = React.useMemo(
        () => [
          {
            Header: "Name",
            accessor: "name" // accessor is the "key" in the data
          },
          {
            Header: "Phone",
            accessor: "phone"
          },
          {
            Header: "Email",
            accessor: "email"
          },
          {
            Header: "Major",
            accessor: "major"
          },
          {
            Header: "Year",
            accessor: "year"
          },
          {
            Header: "Student Organizations",
            accessor: "student_organizations"
          },
          {
            Header: "Research Experience",
            accessor: "research"
          },
          {
            Header: "Industry Experience",
            accessor: "industry"
          }
        ],
        []
      );
      const data = React.useMemo(
        () => [
          {
            name: "Albert Gator",
            phone: "3528393893",
            student_organizations: "Dream Team Engineering, URSP"
          },
          {
            name: "Alberta Gator",
            phone: "3526352738",
            student_organizations: "Dream Team Engineering, URSP"
          },
          {
            name: "Kent Fuchs",
            phone: "3528394586",
            country: "Austria"
          }
        ],
        []
      );
      return(
        <FilterTable columns={columns} data={data}/>
      )
};

export default Database;
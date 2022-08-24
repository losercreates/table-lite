import React from "react";
import { storiesOf } from "@storybook/react";
import { Table } from "../components/Table";

const stories = storiesOf("App Test", module);

stories.add("App", () => {
  const data = [
    { name: "Ram", email: "ram@gmail.com", age: 23 },
    { name: "Shyam", email: "shyam23@gmail.com", age: 28 },
    { name: "John", email: "john@gmail.com", age: 33 },
    { name: "Bob", email: "bob32@gmail.com", age: 41 },
  ];
  return (
    <div className="form">
      <Table data={data} color="#000000" textcolor="#ffffff" />
    </div>
  );
});

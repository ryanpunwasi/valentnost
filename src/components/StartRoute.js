import React from "react";
import "./StartRoute.css";
import Form from "./Form";
import SelectBar from "./SelectBar";
import Table from "./Table";
import ButtonBar from "./ButtonBar";
import Alert from "./Alert";
import ToggleSwitch from "./ToggleSwitch";

const StartRoute = () => {
  return (
    <>
      <Form>
        <SelectBar />
        <Alert message="Please select a group block." />
        <ButtonBar />
        <Table />
      </Form>
    </>
  );
};

export default StartRoute;

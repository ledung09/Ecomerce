// Your component file (e.g., Search.jsx)

import React, { useState } from "react";
import Layout from "../../layouts/layout";
import Hero from "../../components/homeHero/hero";
import Navbar from "../../components/navbar/navbar";
import ProgressBar from "../../bar/bar";
import Select from "../../components/select/select";
import Input from "../../components/input/inputText/input";
import "react-datetime-picker/dist/DateTimePicker.css";
import "react-calendar/dist/Calendar.css";
import "react-clock/dist/Clock.css";
import DateTimePicker from "react-datetime-picker";
import "./Search.css";

const Search = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");

  const options = [
    { value: "option1", label: "Option 1", daily: 80, weekly: 90, monthly: 85 },
    { value: "option2", label: "Option 2", daily: 90, weekly: 70, monthly: 85 },
    { value: "option3", label: "Option 3", daily: 90, weekly: 90, monthly: 95 },
  ];

  const [value, setValue] = useState(new Date());
  const [value1, setValue1] = useState(new Date());
  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
    setInputValue(selectedValue);
    setError("");
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    setSelectedOption("");
    setError("");
  };

  return (
    <>
      <Layout>
        <Navbar></Navbar>
      </Layout>
      <Layout>
        <Hero></Hero>
        <div className="container">
          <form className="form-wrapper" style={{ width: "50%" }}>
            <label className="label" htmlFor="searchId">
              Chọn một camera đã được kết nối
            </label>
            <div className="input-wrapper" style={{ outlineColor: "red" }}>
              <Input
                type="text"
                placeholder="Camera"
                value={inputValue}
                onChange={handleInputChange}
              />
              <Select
                name="year"
                id="year"
                options={options}
                value={selectedOption}
                onChange={handleSelectChange}
              />
            </div>
          </form>
          <label
            className="label"
            style={{ marginTop: "50px", marginBottom: "30px" }}
            htmlFor="searchId"
          >
            Chọn một camera đã được kết nối
          </label>
          <div className="datetime-picker-container">
            <DateTimePicker
              className="datetime-picker"
              onChange={setValue}
              value={value}
            />
            <DateTimePicker
              className="datetime-picker"
              onChange={setValue1}
              value={value1}
            />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Search;

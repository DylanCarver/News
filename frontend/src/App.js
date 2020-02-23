import axios from "axios";
import styled from "styled-components";
import NavBar from "components/navBar";
import Footer from "components/footer";
import React, { useState } from "react";
import NewsItems from "components/newsItems";

axios.defaults.headers.common = {
  "Content-Type": "application/json"
};

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 1000px;
`;

function App() {
  const [country, setCountry] = useState("us");
  const [category, setCategory] = useState("");

  const categoryChangeHandler = e => {
    const newCategory = e.target.dataset.name;
    setCategory(newCategory);
  };

  const countryChangeHandler = e => {
    const country = e.value;
    setCountry(country);
  };

  return (
    <>
      {console.log("test")}
      <NavBar
        category={category}
        categoryChangeHandler={categoryChangeHandler}
        countryChangeHandler={countryChangeHandler}
      />
      <Wrapper>
        <NewsItems category={category} country={country} />
      </Wrapper>
      <Footer />
    </>
  );
}

export default App;

import React from "react";
import HelloWorld from "../HelloWorld";

export default () => (
  <main>
    <HelloWorld />
    <HelloWorld multiverse />
    <HelloWorld multiverse='Упс' />
  </main>
);

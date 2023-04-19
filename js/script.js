// Copyright (c) 2023 Noah Smith All rights reserved
//
// Created by: Noah Smith
// Created on: Apr 2023
// This file contains the JS functions for index.html


"use strict";

/**
 * This function determines whether or not the temperature is cold or hot
 */
function hotcold() {
  let result = "";
  let temperature = parseFloat(document.getElementById("hot-cold").value);
  
  //calculates if the temperature is hot or cold
  if (temperature >= 5) {
    result = "It is hot!";
  }
  else {
    result = "It is cold!";
  }
  // Displays if the temperature is hot or cold back to user
  document.getElementById("result").innerHTML = result;
}

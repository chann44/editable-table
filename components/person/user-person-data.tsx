"use client";

import React from "react";
import { makeData } from "../makeData";

export function usePersonData() {
  const [data, setData] = React.useState(() => makeData(2));
  return { data, setData };
}

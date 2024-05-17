"use client";

import React, { useEffect } from "react";

const TrialForm = ({ items }: { items: any }) => {
  useEffect(() => {
    console.log("TrialForm", items);
  }, []);
  return <div>TrialForm</div>;
};

export default TrialForm;

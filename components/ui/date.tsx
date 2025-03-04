"use client";

import { dateFormatter } from "@/utils/intl";
import { useState, useLayoutEffect } from "react";

export function ClientDate(timeStamp: string) {
  const [dateTime, setDateTime] = useState<string>();

  useLayoutEffect(() => {
    setDateTime(dateFormatter.format(new Date(timeStamp)));
  }, [timeStamp]);

  return dateTime;
}

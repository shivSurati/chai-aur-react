import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  useEffect(() => {
    fetch(
      `https://latest.currency-api.pages.dev/v1/currencies/${currency}.json`
    ).then((res) => res.json());
  }, []);
}

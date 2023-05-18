import { useEffect, useState } from "react";
import { GlobalContext } from "./contexts/GlobalContext";
import Router from "./routes/Router";
import axios from "axios";
import { BASE_URL } from "./constants/url";
import GlobalState from "./contexts/GlobalState";

export default function App() {


  return (
      <GlobalState>
        <Router />
      </GlobalState>
  );
}

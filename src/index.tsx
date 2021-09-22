import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { createServer, Model } from "miragejs";

createServer({
  models: {
    transactions: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: "Freela de Site",
          type: "deposit",
          category: "Dev",
          amount: 9000,
          createdAt: new Date("2021-02-14 12:30:00"),
        },
        {
          id: 2,
          title: "Luz",
          type: "withdraw",
          category: "Casa",
          amount: 200,
          createdAt: new Date("2021-08-19 14:30:00"),
        },
      ],
    });
  },

  routes() {
    this.namespace = "api";

    this.get("/transactions", () => {
      return this.schema.all("transactions");
    });

    this.post("transactions", (schema, request) => {
      const data = JSON.parse(request.requestBody);
      return schema.create("transactions", data);
    });
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

import mongoose from "mongoose";
import { loadType } from "mongoose-currency";

const Schema = mongoose.Schema;

loadType(mongoose);
const currency = mongoose.Types.Currency;

const monthSchena = new Schema(
  {
    month: String,
    revenue: {
      type: currency,
      currency: "USD",
      get: (v) => v / 100,
    },
    expenses: {
      type: currency,
      currency: "USD",
      get: (v) => v / 100,
    },
    operationalExpenses: {
      type: currency,
      currency: "USD",
      get: (v) => v / 100,
    },
    nonOperationalExpenses: {
      type: currency,
      currency: "USD",
      get: (v) => v / 100,
    },
  },
  { toJSON: { getters: true } }
);

const daySchema = new Schema(
  {
    month: String,
    revenue: {
      type: currency,
      currency: "USD",
      get: (v) => v / 100,
    },
    expenses: {
      type: currency,
      currency: "USD",
      get: (v) => v / 100,
    },
    operationalExpenses: {
      type: currency,
      currency: "USD",
      get: (v) => v / 100,
    },
    nonOperationalExpenses: {
      type: currency,
      currency: "USD",
      get: (v) => v / 100,
    },
  },
  { toJSON: { getters: true } }
);

const KpISchema = new Schema(
  {
    totalProfit: {
      type: currency,
      currency: "USD",
      get: (v) => v / 100,
    },
    totalRevenue: {
      type: currency,
      currency: "USD",
      get: (v) => v / 100,
    },
    totalExpenses: {
      type: currency,
      currency: "USD",
      get: (v) => v / 100,
    },
    expensesByCategory: {
      type: Map,
      of: {
        type: currency,
        currency: "USD",
        get: (v) => v / 100,
      },
    },
    monthlyData: [monthSchena],
    dailyData: [daySchema],
  },
  { Timestamp: true, toJSON: { getters: true } }
);

const KPI = mongoose.model("kpi", KpISchema);

export default KPI;

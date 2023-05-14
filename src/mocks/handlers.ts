import { rest } from "msw";
import robotMock from "./robotMock";

const apiUrl = import.meta.env.VITE_API_URL;

export const handlers = [
  rest.get(`${apiUrl}robots`, (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json(robotMock));
  }),
];

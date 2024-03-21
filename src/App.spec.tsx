import { describe, test, expect, vi } from "vitest";
import renderer from "react-test-renderer";
import App from "./App";

describe("App component", () => {
    test("renders successfully", async () => {
        const component = renderer.create(<App />);
        expect(component).toBeTruthy();
    });
});
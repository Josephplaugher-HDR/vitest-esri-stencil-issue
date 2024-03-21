import { vi } from "vitest";

const View = vi.fn();
View.prototype.goTo = vi.fn();
View.prototype.center = { latitude: 10, longitude: 10 }

export default View;
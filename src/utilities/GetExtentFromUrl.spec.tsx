import { describe, test, expectTypeOf } from "vitest";
import GetExtentFromUrl from './GetExtentFromUrl';
import { IGoTo } from "../maps/interfaces/IGoTo.interface";


describe('GetExtentFromUrl', () => {
    test('should return an IGoto object ', () => {
        const url = "http://localhost:3001/infrastructure/?center=[31.453739168381087,-100.4263599963437]&zoom=13";
        const extent: IGoTo | undefined = GetExtentFromUrl(url);
        if (extent) {
            expectTypeOf(extent).toMatchTypeOf<IGoTo>();
        }
    });
});
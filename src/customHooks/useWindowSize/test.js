import { renderHook } from "@testing-library/react-hooks";
import useWindowSize from ".";

describe("useWindowSize", () => {
    test("it returns window size & height of desktop", () => {
        global.window.innerWidth = 1024
        global.window.innerHeight = 768
        const { result } = renderHook(() => useWindowSize());

        expect(result.current).toStrictEqual({ width: 1024, height: 768, mobile: false });
    });

    test("it returns window size & height of mobile", () => {
        global.window.innerWidth = 768
        global.window.innerHeight = 1024
        const { result } = renderHook(() => useWindowSize());

        expect(result.current).toStrictEqual({ width: 768, height: 1024, mobile: true });
    });

})
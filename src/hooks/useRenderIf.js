import { Fragment } from 'react';

function useRenderIf(condition, component1, component2 = <Fragment />) {
    return condition ? component1 : component2;
}

export default useRenderIf;

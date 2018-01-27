import enzyme, { shallow, mount, render } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

enzyme.configure({ adapter: new Adapter() });

export function eachEnzymeMethod(methodNames, fn) {
  const methods = {
    shallow: shallow,
    mount: mount,
    render: render
  };

  methodNames.forEach((methodName, i) => {
    fn(methods[methodName], methodName);
  });
}

import { useState } from "react";

export const useDismissable = function (initial) {
  const [active, setActive] = useState(initial);

  const hide = () => {
    setActive(false);
  };

  const show = () => {
    setActive(true);
  };

  return [active, hide, show];
};

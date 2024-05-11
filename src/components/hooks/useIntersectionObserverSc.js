import { useMemo, useEffect, useState } from "react";

const useIntersectionObserverSc = (options, targetRef) => {
  const [isVisble, setIsVisible] = useState(false);
  const observerClallback = (entries) => {
    const [entry] = entries;
    setIsVisible(entry.isIntersecting);
  };
  const optionsMemo = useMemo(() => {
    return options;
  }, [options]);
  useEffect(() => {
    const observer = new IntersectionObserver(observerClallback, optionsMemo);
    const currentref = targetRef.current;
    if (currentref) {
      observer.observe(currentref);
    }
    return () => {
      if (currentref) {
        observer.unobserve(currentref);
      }
    };
  }, [targetRef, optionsMemo]);
  // console.log("state= ", isVisble);
  return isVisble;
};

export default useIntersectionObserverSc;
/*In the Navbar component, we are using a custom hook called useIntersectionObserverSc. This hook uses the useEffect hook, which is triggered whenever targetRef or optionsMemo changes.

Now, the targetRef is set to the nav element, which is returned by the Navbar component. The useIntersectionObserverSc hook is using this targetRef to create an intersection observer, which is used to detect when the nav element is in the viewport. When the nav element is in the viewport, the isVisible state is updated to true, which in turn triggers a re-render of the Navbar component.

But here's the problem: since the useIntersectionObserverSc hook is being called inside the Navbar component, and the isVisible state is being used to conditionally apply a class to the nav element, this causes an infinite loop of re-renders.

Here's how the infinite loop occurs:

The Navbar component is mounted, and the useIntersectionObserverSc hook is called. The isVisible state is initially set to false.
The useIntersectionObserverSc hook creates an intersection observer and starts observing the nav element.
When the nav element enters the viewport, the intersection observer callback is triggered, and the isVisible state is updated to true.
The state update triggers a re-render of the Navbar component.
Since the Navbar component has re-rendered, the useIntersectionObserverSc hook is called again.
The useIntersectionObserverSc hook creates a new intersection observer and starts observing the nav element.
Since the nav element is still in the viewport, the intersection observer callback is triggered again, and the isVisible state is updated to true again.
The state update triggers another re-render of the Navbar component, and the loop repeats from step 5.
To fix this issue, you can move the useIntersectionObserverSc hook outside of the Navbar component, and pass the isVisible state as a prop to the Navbar component instead. This way, the useIntersectionObserverSc hook will only be called once, and the isVisible state will be updated independently of the Navbar component's re-renders.



 */ 
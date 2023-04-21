import { MouseEvent, RefObject, WheelEvent } from "react";

/**
 * Hook contain logic handling drag and scroll behavior
 * @param sliderRef RefObject
 * @returns an event object that controls scroll and drag behavior of the list wrapper
 */
const useDraggableScroll = <T extends HTMLDivElement>(
  sliderRef: RefObject<T>
) => {
  let isMouseDown = false;
  const pos = { left: 0, x: 0, top: 0, y: 0 };
  const _onMouseDown = (e: MouseEvent<HTMLDivElement>) => {
    const sliderDOM = sliderRef.current;
    if (sliderDOM) {
      // set data where we start
      isMouseDown = true;
      pos.left = sliderDOM.scrollLeft;
      pos.x = e.clientX;
      pos.top = sliderDOM.scrollTop;
      pos.y = e.clientY;
      sliderDOM.style.cursor = "grabbing";
      sliderDOM.style.userSelect = "none";
    }
  };

  const _onMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const sliderDOM = sliderRef.current;
    if (sliderDOM && isMouseDown) {
      const dx = e.clientX - pos.x;
      const dy = e.clientY - pos.y;
      // set data where we end
      sliderDOM.scrollLeft = pos.left - dx;
      sliderDOM.scrollTop = pos.top - dy;
    }
  };

  const _onMouseUpAndLeave = () => {
    isMouseDown = false;
    const sliderDOM = sliderRef.current;
    if (sliderDOM) {
      sliderDOM.style.cursor = "grab";
      sliderDOM.style.removeProperty("user-select");
    }
  };

  const _onWheelEvent = (e: WheelEvent) => {
    const delta = e.deltaX || e.deltaY;
    const sliderDOM = sliderRef.current;
    if (sliderDOM) {
      sliderDOM.scrollLeft += delta;
    }
  };

  return {
    onMouseDown: _onMouseDown,
    onMouseMove: _onMouseMove,
    onMouseUp: _onMouseUpAndLeave,
    onMouseLeave: _onMouseUpAndLeave,
    onWheel: _onWheelEvent,
  };
};

export default useDraggableScroll;

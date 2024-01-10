import { RefObject, useCallback } from "react"

export type ResizeItemInfo = { elementRef: RefObject<HTMLDivElement> }

export type RegisterDndItemFn = (dndItemInfo: ResizeItemInfo) => {
  onResizeStart: OnResizeStartFn
}

type OnResizeStartFn = (args: {
  onDrag: (event: MouseEvent) => void
  onDrop: (event: MouseEvent) => void
}) => void

const useResizeObject = () => {
  const registerResizeItem = useCallback((dndItemInfo: ResizeItemInfo) => {
    const item = {
      ...dndItemInfo,
      startY: 0,
      startX: 0,
    }

    const onResizeStart: OnResizeStartFn = ({ onDrag, onDrop }) => {
      item.startY = item.elementRef.current!.getBoundingClientRect().top
      item.startX = item.elementRef.current!.getBoundingClientRect().left

      const onMouseUp = (event: MouseEvent) => {
        onDrop(event)
        window.removeEventListener("mousemove", onDrag)
        window.removeEventListener("mouseup", onMouseUp)
      }
      window.addEventListener("mousemove", onDrag)
      window.addEventListener("mouseup", onMouseUp)
    }

    return {
      onResizeStart,
    }
  }, [])

  return {
    registerResizeItem,
  }
}

export { useResizeObject }

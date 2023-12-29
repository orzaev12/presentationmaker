import { RefObject, useCallback, useRef } from "react";

type DndItemInfo = { elementRef: RefObject<HTMLDivElement>}

type InternalDndItemInfo = DndItemInfo & {
    startY: number,
}

type OnDragStartFn = (args: {
	onDrag: (event: MouseEvent) => void
	onDrop: (event: MouseEvent) => void
}) => void

type RegisterDndItemFn = (index: number, dndItemInfo: DndItemInfo) => {
	onDragStart: OnDragStartFn,
}

type UseDraggableSlidesParams = {
	onOrderChange: (fromIndex: number, toIndex: number) => void
}

const useDragAndDropSlide = ({onOrderChange}: UseDraggableSlidesParams) => {
    const slidesRef = useRef<Array<InternalDndItemInfo>>([])
	console.log(slidesRef)
    const registerDndItem = useCallback((index: number, dndItemInfo: DndItemInfo) => {
        const slide = {
            ...dndItemInfo,
            startY: 0,
        }
        slidesRef.current[index] = slide

        const onDragStart: OnDragStartFn = ({ onDrag, onDrop }) => {
            slide.startY = slide.elementRef.current!.getBoundingClientRect().top

            const onMouseUp = (event: MouseEvent) => {
                let newIndex = 0
				const draggableItemTop = slide.elementRef.current!.getBoundingClientRect().top
				for (let i = 0; i < slidesRef.current.length; ++i) {
					if (i === index) {
						continue
					}
					const currItem = slidesRef.current[i].elementRef.current!
					if (currItem.getBoundingClientRect().top > draggableItemTop) {
						newIndex = draggableItemTop > slide.startY
							? i - 1
							: i
						break
					}
					newIndex = i
				}
				onOrderChange(index, newIndex)
				onDrop(event)

				window.removeEventListener('mousemove', onDrag)
				window.removeEventListener('mouseup', onMouseUp)
            }
            window.addEventListener('mousemove', onDrag)
            window.addEventListener('mouseup', onMouseUp)
        }

        return { onDragStart }

    }, [onOrderChange])

    return { registerDndItem }
}

export { useDragAndDropSlide }

export type {
	DndItemInfo,
	RegisterDndItemFn,
}
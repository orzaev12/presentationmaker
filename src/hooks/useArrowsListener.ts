import {useContext, useEffect} from 'react'
import { PresentationContext } from '../context/presentation'

function useArrowsListeners() {
    const { presentation, setPresentation } = useContext(PresentationContext)
    const newPresentation = { ...presentation }

	useEffect(() => {
		const handleKeydownEvent = (event: KeyboardEvent) => {
			if (event.key)
            {
                if (newPresentation.indexOfCurrentSlide !== newPresentation.slides.length - 1 && (event.key === 'ArrowDown' || event.key === 'ArrowRight'))
                {
                    newPresentation.indexOfCurrentSlide++
                    setPresentation(newPresentation)
                }
                if (newPresentation.indexOfCurrentSlide > 0 && (event.key === 'ArrowLeft' || event.key === 'ArrowUp'))
                {
                    newPresentation.indexOfCurrentSlide--
                    setPresentation(newPresentation)
                }
            }
		}

		window.addEventListener('keydown', handleKeydownEvent)

		return () => window.removeEventListener('keydown', handleKeydownEvent)
	})
}

export {
	useArrowsListeners,
}
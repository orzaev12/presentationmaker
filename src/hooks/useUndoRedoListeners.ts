import {useEffect} from 'react'
import { useAppActions } from '../store/types'

function useUndoRedoListeners() {
	const {createUndoAction, createRedoAction} = useAppActions()

	useEffect(() => {
		const handleKeydownEvent = (event: KeyboardEvent) => {
			if (event.ctrlKey) {
				if (event.code === 'KeyZ') {
					createUndoAction()
				}
				if (event.code === 'KeyY') {
					createRedoAction()
				}
			}
		}

		window.addEventListener('keydown', handleKeydownEvent)

		return () => window.removeEventListener('keydown', handleKeydownEvent)
	})
}

export {
	useUndoRedoListeners,
}
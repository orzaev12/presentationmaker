type HistoryOperations<T> = {
    addHistoryItem: (item: T) => void,
    undo: () => T | null,
    redo: () => T | null,
    clear: () => void,
}

export function createHistory<T>(initHistoryAction: T): HistoryOperations<T> {
    // Указатель на текущий индекс состояния в истории команд
    let nextItemIndex = 0
    // Массив, хранящий состояния в истории
    let historyItems: T[] = [initHistoryAction]

    return {
        addHistoryItem: (item: T) => {
            // Обрезаем все элементы, после указателя
            // Это нужно для кейса, когда мы сделали несколько раз undo
            // и делаем какое-то действие
            // Все действия, которые мы откатили должны пропасть
            historyItems.length = nextItemIndex + 1
            // Добавляем элемент в историю команд
            historyItems.push(item)
            // Передвигаем указатель на один вперед
            ++nextItemIndex
        },
        undo: () => {
            // Проверяем, если уже нельзя сделать undo -> возвращаем null
            if (nextItemIndex <= 0) {
                return null
            }
            // Смещаем указатель на один назад
            --nextItemIndex
            // Возвращаем элемент из истории
            return historyItems[nextItemIndex]
        },
        redo: () => {
            // Проверяем, если уже нельзя сделать redo -> возвращаем null
            if (nextItemIndex >= historyItems.length - 1) {
                return null
            }
            // Смещаем указатель на один вперед
            ++nextItemIndex
            // Получаем элемент из истории
            return historyItems[nextItemIndex]
        },
        clear: () => {
            nextItemIndex = 0
            historyItems = []
        },
    }
}
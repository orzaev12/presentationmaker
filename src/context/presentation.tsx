import { createContext, PropsWithChildren, useState } from "react";
import { Presentation } from "../types/types";
import { present } from "../types/min.ts";

type PresentationContextType = {
    presentation: Presentation;
    setPresentation: (value: Presentation) => void;
    selectedBlockId: string;
    setSelectedBlockId: (value: string) => void;
};

export const PresentationContext = createContext<PresentationContextType>({
    presentation: present,
    setPresentation: () => {},
    selectedBlockId: '',
    setSelectedBlockId: () => {},
});

function PresentationProvider({ children }: PropsWithChildren) {
    const [presentation, setPresentation] = useState<Presentation>(present)
    const [selectedBlockId, setSelectedBlockId] = useState<string>('')

    const handleSetPresentation = (newPresentation: Presentation) => {
      setPresentation({ ...newPresentation });
    }

    const handleSetSelectedBlockId = (newSelectedBlockId: string ) => {
      setSelectedBlockId(newSelectedBlockId)
    }

    return (
        <PresentationContext.Provider
          value={{
            presentation,
            setPresentation: handleSetPresentation,
            selectedBlockId,
            setSelectedBlockId: handleSetSelectedBlockId,
          }}
          children={children}
        />
      )
}

export default PresentationProvider;

import { createContext, PropsWithChildren, useState } from "react";
import { Presentation } from "../types/types";
import { present } from "../types/min.ts";

type PresentationContextType = {
    presentation: Presentation;
    setPresentation: (value: Presentation) => void;
};

export const PresentationContext = createContext<PresentationContextType>({
    presentation: present,
    setPresentation: () => {},
});

function PresentationProvider({ children }: PropsWithChildren) {
    const [presentation, setPresentation] = useState<Presentation>(present)

    const handleSetPresentation = (newPresentation: Presentation) => {
      setPresentation({ ...newPresentation });
    }

    return (
        <PresentationContext.Provider
          value={{
            presentation,
            setPresentation: handleSetPresentation,
          }}
          children={children}
        />
      )
}

export default PresentationProvider;

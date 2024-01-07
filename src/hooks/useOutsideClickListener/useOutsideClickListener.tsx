import { useEffect } from 'react'

interface useOutsideClickListenerProps {
  callBack: () => void
  isOpen: boolean
  containerRef: React.RefObject<HTMLDivElement>
}

export const useOutsideClickListener = ({
  callBack,
  isOpen,
  containerRef,
}: useOutsideClickListenerProps) => {
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current?.contains(event.target as Node)
      ) {
        callBack()
      }
    }
    if (isOpen) {
      document.addEventListener('click', handleOutsideClick)
    }

    // Remove event listener when the component unmounts or the dropdown is closed
    return () => {
      document.removeEventListener('click', handleOutsideClick)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen])
}

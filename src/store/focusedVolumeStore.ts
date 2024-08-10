import { create } from 'zustand'

interface FocusedVolumeState {
  focusedVolumeResult: {
    no: number
    Points: number[][]
    netVolume: string
    area: string
  } | null
  setFocusedVolumeResult: (result: any) => void
  clearFocusedVolumeResult: () => void
}

export const useFocusedVolumeStore = create<FocusedVolumeState>((set) => ({
  focusedVolumeResult: null,
  setFocusedVolumeResult: (result) => set({ focusedVolumeResult: result }),
  clearFocusedVolumeResult: () => set({ focusedVolumeResult: null })
}))

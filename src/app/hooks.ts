// This file serves as a central hub for re-exporting pre-typed Redux hooks.
import { useDispatch as useUntypedDispatch, useSelector as useUntypedSelector } from 'react-redux'
import type { AppDispatch, RootState } from './store'

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useDispatch = useUntypedDispatch.withTypes<AppDispatch>()
export const useSelector = useUntypedSelector.withTypes<RootState>()
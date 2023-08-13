
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-Merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
export const priceFormatter = new Intl.NumberFormat("es-CL", {
  style: 'currency',
  currency: 'CLP'
})
export interface RGBColor {
  r: number
  g: number
  b: number
}

export const EMERALD: RGBColor = { r: 20, g: 241, b: 149 }
export const AMBER: RGBColor = { r: 246, g: 195, b: 67 }
export const CYAN: RGBColor = { r: 94, g: 234, b: 212 }
export const WHITE: RGBColor = { r: 255, g: 255, b: 255 }

export function rgba(c: RGBColor, a: number): string {
  return `rgba(${c.r},${c.g},${c.b},${a})`
}

const CAREER_START_YEAR = 2016
const CAREER_START_MONTH_INDEX = 1

export interface ExperienceDuration {
  years: number
  months: number
  totalMonths: number
}

export function getExperienceDuration(currentDate = new Date()): ExperienceDuration {
  const totalMonths = Math.max(
    0,
    (currentDate.getFullYear() - CAREER_START_YEAR) * 12 + currentDate.getMonth() - CAREER_START_MONTH_INDEX,
  )

  return {
    years: Math.floor(totalMonths / 12),
    months: totalMonths % 12,
    totalMonths,
  }
}

export function getExperienceYears(currentDate = new Date()) {
  return getExperienceDuration(currentDate).years
}

export function formatExperienceYearsPlus(currentDate = new Date()) {
  return `${getExperienceYears(currentDate)}+ years`
}

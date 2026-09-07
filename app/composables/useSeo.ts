export function useSeo(title: string, description: string) {
  const fullTitle = title.includes('Ahmad Daniyal') ? title : `${title} — Ahmad Daniyal`

  useSeoMeta({
    title: fullTitle,
    ogTitle: fullTitle,
    ogType: 'website',
    description,
    ogDescription: description,
  })
}
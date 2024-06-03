export const DateToString = (date: string) => {
    const result = new Date(date)

    return result.toLocaleDateString('id-ID', {
        dateStyle: 'medium'
    })
}
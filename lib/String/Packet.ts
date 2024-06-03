export const Slug = (string: string) => {
    return string.toLowerCase().replaceAll(' ', '-')
}
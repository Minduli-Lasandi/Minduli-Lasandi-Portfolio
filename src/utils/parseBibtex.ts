export interface Publication {
    key: string
    type: string
    title: string
    author: string
    year: string
    booktitle?: string
    journal?: string
    publisher?: string
    url?: string
    doi?: string
    pages?: string
    abstract?: string
    address?: string
    month?: string
}

export function parseBibtex(bibtex: string): Publication[] {
    const entries: Publication[] = []
    const entryRegex = /@(\w+)\{([^,]+),([^@]*)\}/gs

    let match
    while ((match = entryRegex.exec(bibtex)) !== null) {
        const type = match[1].toLowerCase()
        const key = match[2].trim()
        const fields = match[3]

        const pub = { key, type, title: '', author: '', year: '' } as Record<string, string>

        const fieldRegex = /(\w+)\s*=\s*\{([^{}]*(?:\{[^{}]*\}[^{}]*)*)\}/g
        let fieldMatch
        while ((fieldMatch = fieldRegex.exec(fields)) !== null) {
            const fieldName = fieldMatch[1].toLowerCase()
            const fieldValue = fieldMatch[2].trim().replace(/\s+/g, ' ')
            pub[fieldName] = fieldValue
        }

        pub['title'] = pub['title']
            .replace(/\{([^}]+)\}/g, '$1')
            .replace(/\\textit\{([^}]+)\}/g, '$1')
            .replace(/\\textbf\{([^}]+)\}/g, '$1')

        entries.push(pub as unknown as Publication)
    }

    return entries
}
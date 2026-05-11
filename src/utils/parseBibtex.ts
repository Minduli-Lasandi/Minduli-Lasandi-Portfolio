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

function extractFields(fieldStr: string): Record<string, string> {
    const result: Record<string, string> = {}
    let i = 0

    while (i < fieldStr.length) {
        // skip whitespace and commas
        while (i < fieldStr.length && (fieldStr[i] === ',' || fieldStr[i] === ' ' || fieldStr[i] === '\n' || fieldStr[i] === '\r' || fieldStr[i] === '\t')) {
            i++
        }
        if (i >= fieldStr.length) break

        // read field name
        let fieldName = ''
        while (i < fieldStr.length && fieldStr[i] !== '=' && fieldStr[i] !== ',' && fieldStr[i] !== '\n') {
            fieldName += fieldStr[i++]
        }
        fieldName = fieldName.trim().toLowerCase()
        if (!fieldName || fieldStr[i] !== '=') { i++; continue }
        i++ // skip '='

        // skip whitespace
        while (i < fieldStr.length && (fieldStr[i] === ' ' || fieldStr[i] === '\t' || fieldStr[i] === '\n')) i++

        if (i >= fieldStr.length) break

        let value = ''

        if (fieldStr[i] === '{') {
            // read balanced braces
            let depth = 0
            while (i < fieldStr.length) {
                if (fieldStr[i] === '{') depth++
                else if (fieldStr[i] === '}') {
                    depth--
                    if (depth === 0) { i++; break }
                }
                if (depth > 0) value += fieldStr[i]
                i++
            }
        } else if (fieldStr[i] === '"') {
            i++ // skip opening quote
            while (i < fieldStr.length && fieldStr[i] !== '"') {
                value += fieldStr[i++]
            }
            i++ // skip closing quote
        } else {
            // unquoted value (e.g. year = 2024)
            while (i < fieldStr.length && fieldStr[i] !== ',' && fieldStr[i] !== '\n' && fieldStr[i] !== '}') {
                value += fieldStr[i++]
            }
            value = value.trim()
        }

        if (fieldName) {
            result[fieldName] = value.trim().replace(/\s+/g, ' ')
        }
    }

    return result
}

function cleanLatex(str: string): string {
    return str
        .replace(/\{([^{}]+)\}/g, '$1')
        .replace(/\\textit\{([^}]+)\}/g, '$1')
        .replace(/\\textbf\{([^}]+)\}/g, '$1')
        .replace(/\\emph\{([^}]+)\}/g, '$1')
        .trim()
}

export function parseBibtex(bibtex: string): Publication[] {
    const entries: Publication[] = []
    const entryRegex = /@(\w+)\s*\{\s*([^,\s]+)\s*,/g
    let match

    while ((match = entryRegex.exec(bibtex)) !== null) {
        const type = match[1].toLowerCase()
        const key = match[2].trim()
        const startOfFields = match.index + match[0].length

        // find end of entry by tracking brace depth
        let depth = 1
        let i = startOfFields
        while (i < bibtex.length && depth > 0) {
            if (bibtex[i] === '{') depth++
            else if (bibtex[i] === '}') depth--
            i++
        }

        const fieldStr = bibtex.slice(startOfFields, i - 1)
        const fields = extractFields(fieldStr)

        const pub: Publication = {
            key,
            type,
            title: cleanLatex(fields['title'] ?? ''),
            author: fields['author'] ?? '',
            year: fields['year'] ?? '',
            booktitle: fields['booktitle'] ? cleanLatex(fields['booktitle']) : undefined,
            journal: fields['journal'] ? cleanLatex(fields['journal']) : undefined,
            publisher: fields['publisher'],
            url: fields['url'],
            doi: fields['doi'],
            pages: fields['pages'],
            abstract: fields['abstract'],
            address: fields['address'],
            month: fields['month'],
        }

        entries.push(pub)
    }

    return entries
}
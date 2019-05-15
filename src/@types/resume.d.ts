/** Resume Data and Type Defs. */
export interface Resume {
  sections: [Section]
}

export interface Column {
  sections: [Sections]
}

export interface Section {
  title: string
  entries: [Entry]
}

export interface Entry {
  title?: string
  linkify?: string
  company?: string
  duration?: Duration
  description: string | [string]
}

export interface Duration {
  start: string
  end: string
}

/** Resume Data and Type Defs. */
export interface Resume {
  sections: [Section]
}

export interface Section {
  title: string
  entries: [Entry]
}

export interface Entry {
  title?: string
  link?: string
  company?: string
  duration?: Duration
  description: string | [string]
}

export interface Duration {
  start: string
  end: string
}

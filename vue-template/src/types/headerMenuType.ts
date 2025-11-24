export interface LastDepthItem {
  label: string
  isLink: boolean
  href?: string
}

export interface SubMenuItem {
  label: string
  trigger: string
  title: string
  isLink?: boolean
  children: LastDepthItem[]
}

export interface MainMenuItem {
  label: string
  trigger: string
  isLink?: boolean
  children: SubMenuItem[]
}
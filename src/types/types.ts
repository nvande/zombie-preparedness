export type AlertType = "info" | "warning" | "success" | "error" | "emergency";

export interface AlertProps {
  type?: AlertType;
  heading: string;
  content: string | string[];
  linkText?: string;
  linkHref?: string;
  isSlim?: boolean;
  noIcon?: boolean;
}

export type NavItem = {
  label: string;
  link: string;
  children?: NavItem[];
};

export interface AnchorProps {
  id: string;
}

export interface HeaderProps {
  projectTitle: string;
  sections: NavItem[];
  logoImg?: string;
  onMenuClick?: () => void;
  onCloseClick?: () => void;
  onSearchSubmit?: (value: string) => void;
}

export type FooterLink = {
  label: string;
  href: string;
  icon?: string;
};

export interface FooterProps {
  primaryLinks: FooterLink[];
  logoImgSrc: string;
  agencyName: string;
  socialLinks: FooterLink[];
  contactCenter: string;
  contactLinks: FooterLink[];
  attributions?: string[];
  disclaimer?: string;
}

export interface SectionProps {
    heading?: string;
    content?: string | string[];
    actionLabel?: string;
    actionLink?: string;
    children?: React.ReactNode;
  };

export interface HeroSectionProps {
  showcallout?: boolean;
  title?: string;
  subtitle?: string;
  content?: string;
  heading?: string;
  subheading?: string;
  description?: string;
  ctaLabel?: string;
  ctaLink?: string;
  backgroundImage?: string;
}

export type GraphicItem = {
  title: string;
  body: string;
  imageUrl: string;
  imageAlt: string;
};

export interface GraphicItemSectionProps {
  items: GraphicItem[];
}

export interface PageInfoProps {
  title: string;
  content: string;
  heading: string;
  subheading: string;
  author: string;
  attribution: string;
  copyright: string;
}

export interface SummaryBoxProps {
  heading: string;
  items: {
    link: string;
    beforeText: string;
    textLink: string;
    afterText?: string;
  }[];
}

export interface ContentSectionProps {
  heading?: string;
  content: string | string[];
}

export type TableRow = {
  [key: string]: string;
};

export interface ScrollableTableProps extends Partial<AnchorProps> {
  title: string;
  content: TableRow[];
  attribution?: string;
  sourceUrl?: string;
  sourceDate?: string;
}

export interface IconListProps extends Partial<AnchorProps> {
  title: string;
  content: string[] | { Do: string[]; DoNot: string[] };
  type?: string;
  sourceAuthor?: string;
  sourceTitle?: string;
  sourceType?: string;
  sourceDate?: string;
  sourceUrl?: string;
}

export type CollectionItem = {
  title: string;
  description?: string;
  link: string;
  authors?: string[];
  date?: string;
  tags?: string[];
};

export interface CollectionProps extends Partial<AnchorProps> {
  title: string;
  content: CollectionItem[];
}

export interface ProcessListProps extends Partial<AnchorProps> {
  title: string;
  content: string[];
}

export type ButtonInfo = {
  label: string;
  type?:
    | "default"
    | "outline"
    | "accent-cool"
    | "accent-warm"
    | "base"
    | "big"
    | "inverse"
    | "secondary";
  url?: string;
  onClick?: () => void;
};

export interface ButtonGroupProps extends Partial<AnchorProps> {
  buttons: ButtonInfo[];
  isSegmented?: boolean;
  customClass?: string;
}

export type Option = {
  value: string;
  label: string;
  description?: string;
  disabled?: boolean;
};

export type FieldType = {
  id: string;
  label: string;
  type: string;
  placeholder?: string;
  options?: Option[];
};

export type FormConfig = {
  fields: FieldType[];
  buttons: ButtonInfo[];
};

export type SidebarItem = {
  text: string;
  list?: string[];
  title?: string;
};

export type SidebarConfig = {
  title: string;
  content: SidebarItem[];
};

export interface SignupProps extends Partial<AnchorProps> {
  formConfig: FormConfig;
  sidebarConfig: SidebarConfig;
}

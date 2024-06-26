export interface IUserNavItem {
  icon: string;
  text: string;
  path?: string;
  clickHandler?: (data: any) => void;
}

interface SidebarRightProps {
  show?: boolean;
}

const SidebarRight = ({ show = true }: SidebarRightProps) => {
  return <aside className={`aside-right ${show && 'aside-right--show'}`}>sidebar Right</aside>;
};

export default SidebarRight;

interface SidebarLeftProps {
  show?: boolean;
}

const SidebarLeft = ({ show = true }: SidebarLeftProps) => {
  return <aside className={`aside-left ${show && 'aside-left--show'}`}>sidebar Left</aside>;
};

export default SidebarLeft;

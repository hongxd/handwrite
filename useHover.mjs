/**
 * 
 * @param {HTMLElement} target
 */
function useHover(target, options = {
  onEnter,
  onOver,
  onLeave
}) {
  const [isHovering, setIsHovering] = useState(false);
  const { onEnter, onLeave, onOver } = options;
  function enter() {
    setIsHovering(true);
    onEnter?.()
  }
  function over() {
    setIsHovering(true);
    onLeave?.()
  }
  function leave() {
    setIsHovering(true);
    onOver?.()
  }
  useEffect(() => {
    target.addEventListener("mouseenter", enter);
    target.addEventListener("mouseover", over);
    target.addEventListener("mouseleave", leave);
    return () => {
      target.removeEventListener("mouseenter", enter);
      target.removeEventListener("mouseover", over);
      target.removeEventListener("mouseleave", leave);
    }
  }, [])
  return isHovering;
}

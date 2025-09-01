export function scrollToSection(id: string, offset = -60) {
  const section = document.getElementById(id);
  if (section) {
    const y = section.getBoundingClientRect().top + window.pageYOffset + offset;
    window.scrollTo({ top: y, behavior: "smooth" });
  }
}

export function parallaxScroll(ref: React.RefObject<HTMLDivElement>, scrollSpeed: number = 0.3) {
  const scrollY = window.scrollY;
  if (ref.current) {
    ref.current.style.transform = `translateY(${scrollY * scrollSpeed}px)`;
  }
}
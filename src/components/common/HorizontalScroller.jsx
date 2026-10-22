import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function HorizontalScroller({
  children,
  className = "",
  itemClassName = "",
  showControls = true,
  showPagination = true,
  gap = 20,
}) {
  const scrollerRef = useRef(null);
  const trackBarRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0); // 0 to 100%
  const [thumbWidthPercent, setThumbWidthPercent] = useState(25);

  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const startScrollLeftRef = useRef(0);
  const hasMovedRef = useRef(false);

  // Count items from children
  const items = Array.isArray(children) ? children : [children];

  useEffect(() => {
    setTotalItems(items.length);
  }, [items.length]);

  const updateScrollState = () => {
    const el = scrollerRef.current;
    if (!el) return;

    const { scrollLeft, scrollWidth, clientWidth } = el;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);

    const maxScroll = scrollWidth - clientWidth;
    if (maxScroll > 0) {
      const progress = (scrollLeft / maxScroll) * 100;
      setScrollProgress(Math.min(100, Math.max(0, progress)));
      const visibleRatio = clientWidth / scrollWidth;
      setThumbWidthPercent(Math.max(12, Math.min(100, visibleRatio * 100)));
    } else {
      setScrollProgress(0);
      setThumbWidthPercent(100);
    }

    // Calculate current active item index
    if (el.children.length > 0) {
      const child = el.children[0];
      const itemWidth = child.getBoundingClientRect().width + gap;
      if (itemWidth > 0) {
        const index = Math.round(scrollLeft / itemWidth);
        setActiveIndex(Math.min(Math.max(0, index), items.length - 1));
      }
    }
  };

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    updateScrollState();
    el.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);

    return () => {
      el.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, [items.length, gap]);

  const scrollByAmount = (direction) => {
    const el = scrollerRef.current;
    if (!el) return;

    const scrollAmount = Math.max(300, el.clientWidth * 0.75);
    el.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  const scrollToIndex = (index) => {
    const el = scrollerRef.current;
    if (!el || !el.children[index]) return;

    const targetEl = el.children[index];
    targetEl.scrollIntoView({
      behavior: "smooth",
      inline: "start",
      block: "nearest",
    });
  };

  // Click on the custom slim scrollbar track to jump/scroll smoothly
  const handleTrackClick = (e) => {
    const el = scrollerRef.current;
    const track = trackBarRef.current;
    if (!el || !track) return;

    const rect = track.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const ratio = Math.max(0, Math.min(1, clickX / rect.width));
    const maxScroll = el.scrollWidth - el.clientWidth;
    el.scrollTo({
      left: ratio * maxScroll,
      behavior: "smooth",
    });
  };

  // Mouse drag-to-scroll handlers for the main cards container
  const handleMouseDown = (e) => {
    const el = scrollerRef.current;
    if (!el) return;

    isDraggingRef.current = true;
    hasMovedRef.current = false;
    startXRef.current = e.pageX - el.offsetLeft;
    startScrollLeftRef.current = el.scrollLeft;
  };

  const handleMouseMove = (e) => {
    if (!isDraggingRef.current) return;
    const el = scrollerRef.current;
    if (!el) return;

    e.preventDefault();
    const x = e.pageX - el.offsetLeft;
    const walk = (x - startXRef.current) * 1.3;
    if (Math.abs(walk) > 4) {
      hasMovedRef.current = true;
    }
    el.scrollLeft = startScrollLeftRef.current - walk;
  };

  const handleMouseUp = () => {
    isDraggingRef.current = false;
  };

  const handleClickCapture = (e) => {
    if (hasMovedRef.current) {
      e.stopPropagation();
      e.preventDefault();
      hasMovedRef.current = false;
    }
  };

  const thumbLeftPercent = (scrollProgress / 100) * (100 - thumbWidthPercent);

  return (
    <div className={`creative-scroller-wrapper ${className}`}>
      {/* Top Header Controls (if showControls is true and there are multiple items) */}
      {showControls && items.length > 1 && (
        <div className="scroller-controls-header">
          <div className="scroller-page-indicator">
            <span>
              {String(activeIndex + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
            </span>
          </div>

          <div className="scroller-arrow-buttons">
            <button
              type="button"
              className="scroller-arrow-btn"
              onClick={() => scrollByAmount("left")}
              disabled={!canScrollLeft}
              aria-label="Scroll left"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              type="button"
              className="scroller-arrow-btn"
              onClick={() => scrollByAmount("right")}
              disabled={!canScrollRight}
              aria-label="Scroll right"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      )}

      {/* The Scrollable Track with snap (Native OS scrollbars completely hidden) */}
      <div
        ref={scrollerRef}
        className="creative-scroller-track"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onClickCapture={handleClickCapture}
      >
        {items.map((child, index) => (
          <div
            key={index}
            className={`creative-scroller-item ${itemClassName}`}
          >
            {child}
          </div>
        ))}
      </div>

      {/* Custom Ultra-Slim Botanical Scrollbar Track (Zero ugly OS scrollbar!) */}
      {items.length > 1 && (
        <div className="custom-slim-scrollbar-wrap">
          <div
            ref={trackBarRef}
            className="custom-slim-scrollbar-track"
            onClick={handleTrackClick}
            title="Click or drag to navigate"
          >
            <div
              className="custom-slim-scrollbar-thumb"
              style={{
                width: `${thumbWidthPercent}%`,
                left: `${thumbLeftPercent}%`,
              }}
            />
          </div>
        </div>
      )}

      {/* Bottom Creative Pagination Dots & Scroll indicator */}
      {showPagination && items.length > 1 && (
        <div className="scroller-pagination-bar">
          <div className="scroller-dots">
            {items.map((_, i) => (
              <button
                key={i}
                type="button"
                className={`scroller-dot ${activeIndex === i ? "active" : ""}`}
                onClick={() => scrollToIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          <span className="scroller-hint-text">
            Swipe or drag horizontally
          </span>
        </div>
      )}
    </div>
  );
}

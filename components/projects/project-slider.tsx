import { Project } from "@/lib/strapi/types";
import {
  CSSProperties,
  FC,
  useCallback,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { RiArrowLeftSFill, RiArrowRightSFill } from "react-icons/ri";
import ProjectCard from "./project-card";
import useElementSize from "@/hooks/useElementSize";
import { BREAKPOINTS } from "@/utils/styles";
import "./projects.scss";

type direction = "left" | "right";

export default function ProjectsSlider({ items }: { items: Project[] }) {
  const defaultCount = 3;
  const sliderTrack = useRef(null);
  const [ref, size] = useElementSize();
  const [progressBarIndex, setProgressBarIndex] = useState(0);
  const [itemsPerScreen, setItemsPerScreen] = useState(defaultCount);

  useLayoutEffect(() => {
    setItemsPerScreen(defaultCount);
    if (size.width < BREAKPOINTS.md) setItemsPerScreen((prev) => prev - 1);
    if (size.width < BREAKPOINTS.xs) setItemsPerScreen((prev) => prev - 1);
    console.log(size.width, itemsPerScreen);
  }, [size]);

  const ProgressBar: FC<{
    itemsPerScreen: number;
    itemCount: number;
  }> = ({ itemsPerScreen, itemCount }) => {
    const progressBarItemCount = Math.ceil(itemCount / itemsPerScreen);

    const jumpTo = useCallback((idx: number) => {
      const scrollWidth = (sliderTrack.current! as HTMLDivElement).scrollWidth;
      const scrollByAmt = scrollWidth / progressBarItemCount;
      (sliderTrack.current! as HTMLDivElement).scrollTo({
        left: scrollByAmt * idx,
        behavior: "smooth",
      });
      console.log(
        Math.floor(
          (scrollWidth * progressBarItemCount * idx) /
            (scrollWidth * progressBarItemCount)
        )
      ); // TODO: allow {overflow: scroll} on track and update position on scroll
      setProgressBarIndex(idx);
    }, []);

    return (
      <div className="progress-bar">
        <div className="progress-bar-track">
          {Array.from(Array(progressBarItemCount)).map((tp, i) => (
            <span
              key={i}
              onClick={() => jumpTo(i)}
              className={`track-position ${
                i === progressBarIndex ? "active" : ""
              }`}
            ></span>
          ))}
        </div>
      </div>
    );
  };

  const Handles: FC<{
    itemsPerScreen: number;
    itemCount: number;
  }> = ({ itemsPerScreen, itemCount }) => {
    const progressBarItemCount = Math.ceil(itemCount / itemsPerScreen);
    const slide = useCallback((dir: direction) => {
      const scrollWidth = (sliderTrack.current! as HTMLDivElement).scrollWidth;
      const scrollByAmt = scrollWidth / progressBarItemCount;
      switch (dir) {
        case "right":
          (sliderTrack.current! as HTMLDivElement).scrollBy({
            left: scrollByAmt,
            behavior: "smooth",
          });
          setProgressBarIndex((prev) =>
            prev + 1 >= progressBarItemCount ? prev : prev + 1
          );
          break;
        case "left":
          (sliderTrack.current! as HTMLDivElement).scrollBy({
            left: -scrollByAmt,
            behavior: "smooth",
          });
          setProgressBarIndex((prev) => (prev - 1 < 0 ? prev : prev - 1));
          break;
        default:
          break;
      }
    }, []);

    return (
      <>
        <div
          className={"cap-btn slider-btn left"}
          onClick={() => slide("left")}
        >
          <RiArrowLeftSFill />
        </div>
        <div
          className={"cap-btn slider-btn right"}
          onClick={() => slide("right")}
        >
          <RiArrowRightSFill />
        </div>
      </>
    );
  };

  return (
    <div ref={ref} className="project-slider">
      <div ref={sliderTrack} className="project-slider-track">
        {items && items.length > 0
          ? items.map((item, idx) => (
              <div
                className="tile"
                key={idx}
                style={
                  {
                    "--items-per-screen": itemsPerScreen,
                    flex: "0 0 calc(98% / var(--items-per-screen))",
                    maxWidth: "calc(98% / var(--items-per-screen))",
                    margin: "calc(1% / var(--items-per-screen))",
                  } as CSSProperties
                }
              >
                <div className="card-wrapper">
                  <ProjectCard key={item.documentId} project={item} />
                </div>
              </div>
            ))
          : null}
      </div>
      <Handles itemsPerScreen={itemsPerScreen} itemCount={items!.length} />
      <ProgressBar itemsPerScreen={itemsPerScreen} itemCount={items!.length} />
    </div>
  );
}

import { tw } from "twind";
import { asset } from "$fresh/runtime.ts";
import { useSignal } from "@preact/signals";
import { useEffect, useRef } from "preact/hooks";
import IconCircleChevronsRight from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/circle-chevrons-right.tsx";
import IconCircleChevronsLeft from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/circle-chevrons-left.tsx";

const SLIDE_DATA = [
  {
    color: "bg-blue-300",
    text: "Egg Tower",
    href: 'https://tas9n.github.io/EggTower/game',
    url: "/image/works/eggtower.png",
  },
  {
    color: "bg-yellow-300",
    text: "Siv3D x Bullet",
    href: 'https://tas9n.github.io/EggTower/game',
    url: "/image/works/siv3dxbulletphysics.png",
  },
  {
    color: "bg-gray-300",
    text: "slide three",
    href: 'https://tas9n.github.io/EggTower/game',
    url: "/illustration/deno-plush.svg",
  }
];

type SlideProps = {
  class?: string;
  key?: number;
  data: {
    color: string;
    text: string;
    href: string;
    url: string;
  };
};

const Slide = (props: SlideProps) => {
  const { key, data } = props;
  const { href, text, url } = data;
  if (props.class === undefined) props.class = "";
  return (
    <div
      key={key}
      class={`${props.class} h-96 w-full text-center text-black`}
    >
      <img src={url} alt={text} class='absolute z-0 w-full -translate-y-1/3'/>
      <a href={href} target='_blank' class='flex justify-center'>
        <p class='absolute z-10 text-4xl text-gray mt-1 drop-shadow-sm'>{text}</p>
        <img src={url} alt={text} class='absolute z-5 h-full'/>
      </a>
    </div>
  );
};

type CarouselProps = {
  showNavigation?: boolean;
  interval?: number;
  currentSlide?: number;
  automatic?: boolean;
  class?: string;
};

const Carousel = (props: CarouselProps) => {
  const NAVIGATION_COLOR = `hover:text-gray-300 text-white`;
  const CHEVRON_STYLE =
    `absolute z-30 w-10 h-10 ${NAVIGATION_COLOR} cursor-pointer`;
  const SHOW_NAVIGATION = props.showNavigation === false ? false : true;
  const SLIDE_INTERVAL = props.interval ? props.interval : 3500;
  const currentSlide = useSignal(props.currentSlide ? props.currentSlide : 0);
  const automatic = useSignal(props.automatic === false ? false : true);
  const slideshowRef = useRef<HTMLDivElement>(null);

  const slideClasses = (idx = 0) => {
    let outgoingSlide = currentSlide.value - 1;
    let incomingSlide = currentSlide.value + 1;
    if (outgoingSlide === -1) outgoingSlide = SLIDE_DATA.length - 1;
    if (incomingSlide === SLIDE_DATA.length) incomingSlide = 0;
    // console.log(outgoingSlide, currentSlide.value, incomingSlide)
    const TRANSITION_CLASS = () => {
      if (currentSlide.value === idx) return "translate-x-0 z-20";
      if (incomingSlide === idx) return "translate-x-full z-10";
      if (outgoingSlide === idx) return "-translate-x-full z-10";
      return "translate-x-full";
    };
    return tw`slide absolute top-0 left-0 transition-all ease-in-out duration-700 transform ${TRANSITION_CLASS}`;
  };

  const nextSlide = () => {
    if (SLIDE_DATA.length === currentSlide.value + 1) {
      currentSlide.value = 0;
    } else {
      currentSlide.value++;
    }
  };

  const previousSlide = () => {
    if (currentSlide.value === 0) {
      currentSlide.value = SLIDE_DATA.length - 1;
    } else {
      currentSlide.value--;
    }
  };

  const chevronClick = (doCallback = () => {}) => {
    if (automatic.value) automatic.value = false;
    return doCallback();
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (automatic.value) nextSlide();
    }, SLIDE_INTERVAL);
    return () => clearInterval(interval);
  }, []);

  const ArrowKeyNavigation = () => {
    const keydownHandler = (event: KeyboardEvent) => {
      if (automatic.value) automatic.value = false;
      switch (event.code) {
        case "ArrowLeft":
          event.preventDefault();
          previousSlide();
          break;
        case "ArrowRight":
          event.preventDefault();
          nextSlide();
          break;
        default:
          break;
      }
    };
    slideshowRef.current?.addEventListener("keydown", keydownHandler);
    return () =>
      slideshowRef.current?.removeEventListener("keydown", keydownHandler);
  };
  useEffect(ArrowKeyNavigation, []);

  const goToSlide = (slide_index = 0) => {
    if (automatic.value) automatic.value = false;
    currentSlide.value = slide_index;
  };

  const DotsNavigation = () => (
    <div class={"slide_nav z-30 w-full absolute bottom-0 flex justify-center"}>
      {SLIDE_DATA.map((_item, idx) => {
        return (
          <button
            class={`px-1 ${NAVIGATION_COLOR}`}
            onClick={() => {
              goToSlide(idx);
            }}
            key={idx}
          >
            <span class="sr-only">Go to slide {idx}</span>
            {idx === currentSlide.value
              ? <span class="not-sr-only">●</span>
              : <span class="not-sr-only">○</span>}
          </button>
        );
      })}
    </div>
  );

  return (
    <div
      ref={slideshowRef}
      class={`slideshow relative flex-1 flex-end p-0 overflow-hidden ${
        props.class !== undefined ? props.class : ""
      }`}
      tabIndex={0}
    >
      <button
        class={`left-0 ${CHEVRON_STYLE}`}
        style="top: calc(50% - 20px)"
        onClick={() => chevronClick(previousSlide)}
      >
        <IconCircleChevronsLeft class="w-10 h-10" aria-hidden="true" />
        <span class="sr-only">Previous slide</span>
      </button>
      <button
        class={`right-0 ${CHEVRON_STYLE}`}
        style="top: calc(50% - 20px)"
        onClick={() => chevronClick(nextSlide)}
      >
        <IconCircleChevronsRight class="w-10 h-10" aria-hidden="true" />
        <span class="sr-only">Next slide</span>
      </button>
      {SLIDE_DATA.map((item, idx) => (
        <Slide
          data={item}
          key={idx}
          class={slideClasses(idx)}
        />
      ))}
      {SHOW_NAVIGATION &&
        <DotsNavigation />}
      <Slide
        data={SLIDE_DATA[0]}
        class="opacity-0 pointer-events-none"
      />
    </div>
  );
};

export default Carousel;

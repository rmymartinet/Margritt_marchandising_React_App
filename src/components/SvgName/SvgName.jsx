import { useGSAP } from "@gsap/react";
import { useInView } from "framer-motion";
import gsap from "gsap";
import React, { useRef } from "react";

export default function SvgName({ textColor }) {
  const mRef = useRef(null);
  const aRef = useRef(null);
  const rRef = useRef(null);
  const gRef = useRef(null);
  const rRef2 = useRef(null);
  const iRef = useRef(null);
  const tRef = useRef(null);
  const t2Ref = useRef(null);
  const eRef = useRef(null);
  const svgRef = useRef(null);
  const isInView = useInView(svgRef);

  const animateRef = (ref, y, delay) => {
    gsap.to(ref.current, {
      y: y,
      delay: delay,
      duration: 1,
    });
  };

  useGSAP(
    () => {
      animateRef(mRef, 200);
      animateRef(aRef, 200);
      animateRef(rRef, 200);
      animateRef(gRef, 200);
      animateRef(rRef2, 200);
      animateRef(iRef, 200);
      animateRef(tRef, 200);
      animateRef(t2Ref, 200);
      animateRef(eRef, 200);

      if (isInView) {
        animateRef(mRef, 0, 0.98);
        animateRef(aRef, 0, 0.8);
        animateRef(rRef, 0, 0.4);
        animateRef(gRef, 0, 0.2);
        animateRef(rRef2, 0, 0.2);
        animateRef(iRef, 0, 0.4);
        animateRef(tRef, 0, 0.8);
        animateRef(t2Ref, 0, 0.98);
      }
    },
    { dependencies: [isInView] }
  );
  return (
    <svg
      ref={svgRef}
      width="110%"
      height="100%"
      viewBox="0 0 1558.5 217.204"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        id="svgGroup"
        strokeLinecap="round"
        fillRule="evenodd"
        fontSize="9pt"
        stroke={textColor}
        strokeWidth="0.25mm"
        fill={textColor}
      >
        <path
          ref={mRef}
          d="M 27 213.601 L 0 213.601 L 0 3.601 L 39.9 3.601 L 98.1 136.501 L 155.4 3.601 L 196.2 3.601 L 196.2 213.601 L 167.7 213.601 L 167.7 39.901 L 111.6 166.201 L 83.4 166.201 L 27 39.901 L 27 213.601 Z"
          id="0"
          vectorEffect="non-scaling-stroke"
        />
        <path
          ref={aRef}
          d="M 420.6 206.101 L 394.5 216.601 L 371.1 156.601 L 273.9 156.601 L 250.5 216.001 L 226.2 206.101 L 308.4 3.601 L 339.6 3.601 L 420.6 206.101 Z M 322.5 31.801 L 282.9 132.601 L 361.8 132.601 L 322.5 31.801 Z"
          id="1"
          vectorEffect="non-scaling-stroke"
        />
        <path
          ref={rRef}
          d="M 599.7 204.601 L 573 217.201 L 546.9 160.201 Q 537 138.901 522 129.901 A 58.956 58.956 0 0 0 505.498 123.294 Q 495.666 120.901 483.6 120.901 L 479.1 120.901 L 479.1 213.601 L 450.6 213.601 L 450.6 4.201 Q 466.5 2.701 481.05 1.951 A 563.822 563.822 0 0 1 499.999 1.306 A 678.803 678.803 0 0 1 512.1 1.201 Q 536.156 1.201 552.736 7.323 A 60.287 60.287 0 0 1 569.85 16.801 A 52.243 52.243 0 0 1 583.739 33.403 Q 589.179 43.891 589.2 56.899 A 62.575 62.575 0 0 1 589.2 57.001 A 59.64 59.64 0 0 1 587.248 72.66 A 44.017 44.017 0 0 1 576.15 92.251 Q 565.267 103.384 546.35 109.823 A 124.427 124.427 0 0 1 538.5 112.201 A 70.969 70.969 0 0 1 548.787 117.789 A 61.282 61.282 0 0 1 552.9 120.751 Q 558.806 125.391 564.316 132.931 A 87.879 87.879 0 0 1 565.05 133.951 Q 569.472 140.187 573.979 149.25 A 195.549 195.549 0 0 1 576.9 155.401 L 599.7 204.601 Z M 479.1 26.401 L 479.1 96.901 L 512.1 96.901 A 79.468 79.468 0 0 0 526.87 95.606 Q 538.657 93.376 547.2 87.301 A 30.865 30.865 0 0 0 560.418 64.728 A 43.536 43.536 0 0 0 560.7 59.701 A 29.434 29.434 0 0 0 550.88 37.308 A 39.817 39.817 0 0 0 548.1 34.951 Q 538.379 27.429 522.231 25.71 A 95.833 95.833 0 0 0 512.1 25.201 A 597.633 597.633 0 0 0 502.999 25.267 Q 498.103 25.341 493.8 25.501 Q 485.7 25.801 479.1 26.401 Z"
          id="2"
          vectorEffect="non-scaling-stroke"
        />
        <path
          ref={gRef}
          d="M 783.3 17.101 L 772.8 40.801 Q 760.2 33.901 747.15 29.401 A 82.081 82.081 0 0 0 728.853 25.439 A 102.675 102.675 0 0 0 718.2 24.901 A 60.389 60.389 0 0 0 695.74 29.013 A 56.756 56.756 0 0 0 684.6 34.951 Q 669.9 45.001 661.35 64.501 A 94.841 94.841 0 0 0 655.213 84.694 Q 653.403 94.088 652.951 104.864 A 174.932 174.932 0 0 0 652.8 112.201 A 136.535 136.535 0 0 0 654.087 131.463 Q 655.557 141.767 658.705 150.49 A 78.109 78.109 0 0 0 660.6 155.251 A 72.539 72.539 0 0 0 669.397 170.39 A 57.307 57.307 0 0 0 682.2 182.701 A 53.791 53.791 0 0 0 711.628 192.258 A 65.979 65.979 0 0 0 714 192.301 A 68.286 68.286 0 0 0 730.792 190.311 A 56.504 56.504 0 0 0 743.85 185.251 A 121.083 121.083 0 0 0 752.857 179.9 Q 757.142 177.08 760.58 174.192 A 59.814 59.814 0 0 0 764.4 170.701 L 764.4 124.801 L 720.9 124.801 L 720.9 102.301 L 791.4 102.301 L 791.4 213.601 L 766.2 213.601 L 766.2 192.601 A 107.648 107.648 0 0 1 753.065 202.476 A 142.062 142.062 0 0 1 740.7 209.551 A 70.781 70.781 0 0 1 712.482 217.049 A 84.393 84.393 0 0 1 707.4 217.201 A 79.715 79.715 0 0 1 679.462 212.401 A 73.532 73.532 0 0 1 664.2 204.601 A 80.664 80.664 0 0 1 640.406 179.71 A 101.852 101.852 0 0 1 634.5 168.751 A 112.587 112.587 0 0 1 625.776 140.039 A 155.511 155.511 0 0 1 623.7 114.001 A 168.904 168.904 0 0 1 626.205 84.248 A 127.716 127.716 0 0 1 635.1 54.751 A 98.19 98.19 0 0 1 652.452 27.907 A 88.366 88.366 0 0 1 667.95 14.551 Q 689.4 0.001 719.7 0.001 A 135.776 135.776 0 0 1 737.605 1.127 A 100.826 100.826 0 0 1 754.5 4.801 Q 769.8 9.601 783.3 17.101 Z"
          id="3"
          vectorEffect="non-scaling-stroke"
        />
        <path
          ref={rRef2}
          d="M 987 204.601 L 960.3 217.201 L 934.2 160.201 Q 924.3 138.901 909.3 129.901 A 58.956 58.956 0 0 0 892.798 123.294 Q 882.966 120.901 870.9 120.901 L 866.4 120.901 L 866.4 213.601 L 837.9 213.601 L 837.9 4.201 Q 853.8 2.701 868.35 1.951 A 563.822 563.822 0 0 1 887.299 1.306 A 678.803 678.803 0 0 1 899.4 1.201 Q 923.456 1.201 940.036 7.323 A 60.287 60.287 0 0 1 957.15 16.801 A 52.243 52.243 0 0 1 971.039 33.403 Q 976.479 43.891 976.5 56.899 A 62.575 62.575 0 0 1 976.5 57.001 A 59.64 59.64 0 0 1 974.548 72.66 A 44.017 44.017 0 0 1 963.45 92.251 Q 952.567 103.384 933.65 109.823 A 124.427 124.427 0 0 1 925.8 112.201 A 70.969 70.969 0 0 1 936.087 117.789 A 61.282 61.282 0 0 1 940.2 120.751 Q 946.106 125.391 951.616 132.931 A 87.879 87.879 0 0 1 952.35 133.951 Q 956.772 140.187 961.279 149.25 A 195.549 195.549 0 0 1 964.2 155.401 L 987 204.601 Z M 866.4 26.401 L 866.4 96.901 L 899.4 96.901 A 79.468 79.468 0 0 0 914.17 95.606 Q 925.957 93.376 934.5 87.301 A 30.865 30.865 0 0 0 947.718 64.728 A 43.536 43.536 0 0 0 948 59.701 A 29.434 29.434 0 0 0 938.18 37.308 A 39.817 39.817 0 0 0 935.4 34.951 Q 925.679 27.429 909.531 25.71 A 95.833 95.833 0 0 0 899.4 25.201 A 597.633 597.633 0 0 0 890.299 25.267 Q 885.403 25.341 881.1 25.501 Q 873 25.801 866.4 26.401 Z"
          id="4"
          vectorEffect="non-scaling-stroke"
        />
        <path
          ref={iRef}
          d="M 1051.5 213.601 L 1023 213.601 L 1023 3.601 L 1051.5 3.601 L 1051.5 213.601 Z"
          id="5"
          vectorEffect="non-scaling-stroke"
        />
        <path
          ref={tRef}
          d="M 1174.5 213.601 L 1146 213.601 L 1146 28.801 L 1081.5 28.801 L 1081.5 3.601 L 1239 3.601 L 1239 28.801 L 1174.5 28.801 L 1174.5 213.601 Z"
          id="6"
          vectorEffect="non-scaling-stroke"
        />
        <path
          ref={t2Ref}
          d="M 1338 213.601 L 1309.5 213.601 L 1309.5 28.801 L 1245 28.801 L 1245 3.601 L 1402.5 3.601 L 1402.5 28.801 L 1338 28.801 L 1338 213.601 Z"
          id="7"
          vectorEffect="non-scaling-stroke"
        />
      </g>
    </svg>
  );
}

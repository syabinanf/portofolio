// Original, resolution-independent pixel scenery; never carries essential text.
export default function PixelLandscape() {
  return (
    <svg className="pixel-landscape" viewBox="0 0 960 240" preserveAspectRatio="xMidYMax slice" aria-hidden="true" focusable="false" shapeRendering="crispEdges">
      <path fill="#edcf91" d="M0 0h960v240H0z" />
      <path fill="#fff0be" d="M710 24h48v12h12v48h-12v12h-48V84h-12V36h12zM90 40h80v12h32v12H62V52h28zM370 20h64v12h32v12H346V32h24z" />
      <path fill="#a3ad86" d="M0 152h48v-24h48v-24h48V80h48v24h48v24h48v24h48v-24h48v-24h48V80h48v24h48v24h48v24h48v-24h48v-24h48v24h48v24h48v-24h48v-24h48v24h48v24h48v88H0z" />
      <path fill="#64856a" d="M0 184h64v-24h64v-16h80v16h64v24h96v-24h80v-16h80v16h80v24h96v-24h80v-16h64v16h64v24h48v56H0z" />
      <path fill="#c5a471" d="M424 160h48v24h32v24h48v32H352v-24h40v-24h32z" />
      {[24, 96, 200, 610, 734, 856, 914].map((x, i) => (
        <g key={x} transform={`translate(${x} ${i % 2 ? 104 : 124})`}>
          <path fill="#624c38" d="M20 64h12v52H20z" />
          <path fill="#254f43" d="M20 0h12v16h12v16h12v16H44v16h20v16H-12V64H8V48H-4V32H8V16h12z" />
          <path fill="#397059" d="M20 16h12v16h12v16H20zM8 64h36v12H8z" />
        </g>
      ))}
      <path fill="#203846" d="M490 116h12v-12h12v12h12v60h-36zM538 92h12V80h12v12h12v84h-36zM514 140h24v36h-24z" />
      <path fill="#f2cb76" d="M548 112h8v12h-8zM500 136h8v12h-8z" />
      <path fill="#d69557" d="M562 82V62h28v12h-20v8z" />
      <path fill="#244d40" d="M0 224h120v-8h88v16h112v-8h64v16H0zM620 224h80v8h72v-16h96v8h92v16H620z" />
      <path fill="#edc268" d="M54 212h8v8h-8zM182 220h8v8h-8zM690 210h8v8h-8zM822 222h8v8h-8z" />
    </svg>
  );
}
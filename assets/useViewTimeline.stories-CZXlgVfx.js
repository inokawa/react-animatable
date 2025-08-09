import{j as e}from"./jsx-runtime-CuvLoGGf.js";import{r as m}from"./iframe-C-O9Yerx.js";import{u as l,a as c,k as o}from"./useLatestRef-WbW0Y45A.js";import{V as d}from"./internal-C9afPPc5.js";import{u as p}from"./useAnimation-BFYBPabw.js";import"./preload-helper-D9Z9MdNV.js";const t=(i={})=>{const n=l(i);return c(()=>{let s;return o(u=>{s=u},{_type:d,_get:()=>{const{axis:u,inset:r}=n.current;return new ViewTimeline({subject:s||document.documentElement,axis:u,inset:r})}})})},E={component:t},a={render:()=>{const i=p([{opacity:0,transform:"scaleX(0)"},{opacity:1,transform:"scaleX(1)"}],{duration:200,timeline:t()});return m.useEffect(()=>{i.play()},[]),e.jsxs("div",{style:{width:200},children:[e.jsx("h1",{children:"Content"}),e.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus quis varius quam quisque id. Et ligula ullamcorper malesuada proin libero nunc consequat interdum varius. Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at augue."}),e.jsx("p",{children:"Dolor sed viverra ipsum nunc aliquet. Sed sed risus pretium quam vulputate dignissim. Tortor aliquam nulla facilisi cras. A erat nam at lectus urna duis convallis convallis. Nibh ipsum consequat nisl vel pretium lectus. Sagittis aliquam malesuada bibendum arcu vitae elementum. Malesuada bibendum arcu vitae elementum curabitur vitae nunc sed velit."}),e.jsx("div",{ref:i,style:{width:300,height:200,margin:"0 auto",backgroundColor:"deeppink"}}),e.jsx("p",{children:"Adipiscing enim eu turpis egestas pretium aenean pharetra magna ac. Arcu cursus vitae congue mauris rhoncus aenean vel. Sit amet cursus sit amet dictum. Augue neque gravida in fermentum et. Gravida rutrum quisque non tellus orci ac auctor augue mauris. Risus quis varius quam quisque id diam vel quam elementum. Nibh praesent tristique magna sit amet purus gravida quis. Duis ultricies lacus sed turpis tincidunt id aliquet. In egestas erat imperdiet sed euismod nisi. Eget egestas purus viverra accumsan in nisl nisi scelerisque. Netus et malesuada fames ac."})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => {
    const animate = useAnimation([{
      opacity: 0,
      transform: "scaleX(0)"
    }, {
      opacity: 1,
      transform: "scaleX(1)"
    }], {
      duration: 200,
      timeline: useViewTimeline()
    });
    useEffect(() => {
      animate.play();
    }, []);
    return <div style={{
      width: 200
    }}>
        <h1>Content</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus quis
          varius quam quisque id. Et ligula ullamcorper malesuada proin libero
          nunc consequat interdum varius. Elit ullamcorper dignissim cras
          tincidunt lobortis feugiat vivamus at augue.
        </p>
        <p>
          Dolor sed viverra ipsum nunc aliquet. Sed sed risus pretium quam
          vulputate dignissim. Tortor aliquam nulla facilisi cras. A erat nam at
          lectus urna duis convallis convallis. Nibh ipsum consequat nisl vel
          pretium lectus. Sagittis aliquam malesuada bibendum arcu vitae
          elementum. Malesuada bibendum arcu vitae elementum curabitur vitae
          nunc sed velit.
        </p>
        <div ref={animate} style={{
        width: 300,
        height: 200,
        margin: "0 auto",
        backgroundColor: "deeppink"
      }} />
        <p>
          Adipiscing enim eu turpis egestas pretium aenean pharetra magna ac.
          Arcu cursus vitae congue mauris rhoncus aenean vel. Sit amet cursus
          sit amet dictum. Augue neque gravida in fermentum et. Gravida rutrum
          quisque non tellus orci ac auctor augue mauris. Risus quis varius quam
          quisque id diam vel quam elementum. Nibh praesent tristique magna sit
          amet purus gravida quis. Duis ultricies lacus sed turpis tincidunt id
          aliquet. In egestas erat imperdiet sed euismod nisi. Eget egestas
          purus viverra accumsan in nisl nisi scelerisque. Netus et malesuada
          fames ac.
        </p>
      </div>;
  }
}`,...a.parameters?.docs?.source}}};const x=["Document"];export{a as Document,x as __namedExportsOrder,E as default};

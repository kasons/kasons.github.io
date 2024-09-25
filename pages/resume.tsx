import dynamic from 'next/dynamic';

const Resume = dynamic(() => import("./resumerender.js"), {
  ssr: false,
});

const View = () => {
  return <Resume/>;
}

export default View;
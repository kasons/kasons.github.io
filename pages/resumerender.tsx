import { useState } from 'react';
import { pdfjs, Document, Page } from 'react-pdf';
import ResumeSkeleton from '@/Components/ResumeSkeleton';
import { SizeMe } from 'react-sizeme';
import { saveAs } from "file-saver";
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.mjs`;

type PDFFile = string | File | null;

export default function ResumeRender() {
  const [file, setFile] = useState<PDFFile>('./kason_shiroma_resume.pdf');
  const saveFile = () => {
    saveAs(
      "./kason_shiroma_resume.pdf",
      "kason_shiroma_resume.pdf"
    );
  };

  return (
    <div className='bg-[#303136] py-16 md:pt-24 md:pb-36'>
      <div className='max-w-screen-xl mx-auto px-8 lg:px-24'>
        <div className='flex flex-row justify-between'>
          <h1 className='text-4xl font-semibold text-white mt-[2rem]'>
              Resume
          </h1>
          <button onClick={saveFile} className="bg-[linear-gradient(35deg,white_50%,#212226_50%)] bg-animation bg-right-bottom transition-all duration-[0.3s] ease-[ease] hover:bg-left-top hover:text-black text-white py-2 px-6 mt-[2rem] text-xl font-medium">
              Download
          </button>
        </div>
        <hr className='mt-2 mb-8 w-9/12 md:w-4/12 border-sky-500 bg-sky-500 border-2'/>
        <div className="flex flex-col items-center mt-11">
          <div className="w-[80%] mx-auto shadow-sm">
            <SizeMe
              monitorHeight
              refreshMode={"debounce"}
            >{({ size }) => 
                <div>
                  <Document file={file} loading={<ResumeSkeleton/>}>
                      <Page
                          pageNumber={1}
                          // className={`w-[${size.width}]`}
                          width={size.width ? size.width : 1}
                      />
                  </Document>
                </div>
              }
            </SizeMe>
          </div>
        </div>
      </div>
    </div>
  );
}
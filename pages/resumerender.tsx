import ResumeSkeleton from '@/Components/ResumeSkeleton';
import { useCallback, useState } from 'react';
import { pdfjs, Document, Page } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import { SizeMe } from 'react-sizeme';
import { saveAs } from "file-saver";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

type PDFFile = string | File | null;

export default function ResumeRender() {
  const [file, setFile] = useState<PDFFile>('./myresume.pdf');
  const saveFile = () => {
    saveAs(
      "./myresume.pdf",
      "kason_shiroma_resume.pdf"
    );
  };

  return (
    <div className='bg-[#303136] py-16 md:pt-24 md:pb-36'>
      <div className='max-w-screen-xl mx-auto px-8 lg:px-24'>
        <div className='flex flex-row justify-between'>
          <h1 className='text-4xl font-semibold text-white my-[2rem]'>
              Resume
          </h1>
          <button onClick={saveFile} className="bg-[linear-gradient(35deg,white_50%,#212226_50%)] bg-animation bg-right-bottom transition-all duration-[0.3s] ease-[ease] hover:bg-left-top hover:text-black text-white py-2 px-6 my-[2rem] text-xl font-medium rounded">
              Download
          </button>
        </div>
        <div className="flex flex-col items-center mt-4">
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
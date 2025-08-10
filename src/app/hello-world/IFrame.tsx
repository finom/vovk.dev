import Link from "next/link";
import { UrlObject } from "url";

const IFrame = (props: React.IframeHTMLAttributes<HTMLIFrameElement>) => {
  return <div className="border rounded-md border-gray-300 dark:border-neutral-700 mt-2 overflow-hidden">
    <div className="px-4 text-xs text-gray-700 dark:text-gray-200 bg-gray-100 dark:bg-neutral-900 flex items-center h-12 gap-2 rounded-t-md">

        <Link href={props.src as unknown as UrlObject} target="_blank" className="text-white underline">
          {props.src}
        </Link>
    </div>
    <iframe {...props} />
    
    
    </div>;
};

export default IFrame; 
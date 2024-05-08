import Link from 'next/link';
import BonusFeaturesSection from './BonusFeaturesSection';
import DocsLink from '../DocsLink';
import CustomizeCode from './CustomizeCode.mdx';
import ReactNativeCode from './ReactNativeCode.mdx';
import DistributeCode from './DistributeCode.mdx';

const BonusFeatures = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mx-auto max-w-screen-2xl mt-24">
      <BonusFeaturesSection
        title="Highly Customizable"
        description={
          <>
            <p className="text-secondary">
              You can completely redefine the behavior of the generated library by implementing your own fetching
              function. This allows tight integration with your application's state logic or the addition of extra
              options.
            </p>
            <DocsLink href="customization" />
          </>
        }
        icon={
          <svg
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.0503 10.6066L2.97923 17.6777C2.19818 18.4587 2.19818 19.725 2.97923 20.5061V20.5061C3.76027 21.2871 5.0266 21.2871 5.80765 20.5061L12.8787 13.435"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10.0502 10.6066C9.20638 8.45358 9.37134 5.6286 11.1109 3.88909C12.8504 2.14957 16.0606 1.76777 17.8284 2.82843L14.7877 5.8691L14.5051 8.98014L17.6161 8.69753L20.6568 5.65685C21.7175 7.42462 21.3357 10.6349 19.5961 12.3744C17.8566 14.1139 15.0316 14.2789 12.8786 13.435"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        }
      >
        <CustomizeCode />
      </BonusFeaturesSection>
      <BonusFeaturesSection
        title="Back-end for React Native"
        description={
          <>
            <p className="text-secondary">
              Creating a full-stack React-Native application has never been so easy! Set up a project with React Native,
              Next.js, and Vovk.ts, and start making requests.
            </p>
            <DocsLink href="https://github.com/finom/vovk-react-native-example">See example</DocsLink>
          </>
        }
        icon={
          <svg
            width="24px"
            height="24px"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 16.01L12.01 15.9989"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7 19.4V4.6C7 4.26863 7.26863 4 7.6 4H16.4C16.7314 4 17 4.26863 17 4.6V19.4C17 19.7314 16.7314 20 16.4 20H7.6C7.26863 20 7 19.7314 7 19.4Z"
              stroke="currentColor"
              strokeWidth="1.5"
            />
          </svg>
        }
      >
        <ReactNativeCode />
      </BonusFeaturesSection>
      <BonusFeaturesSection
        title="Easy to Distribute"
        description={
          <>
            <p className="text-secondary">
              Bundle and distribute your REST API client library with ease. The examples below utilize the{' '}
              <Link href="https://npmjs.com/package/vovk-examples" className="link" target="_blank">
                vovk-examples
              </Link>{' '}
              package, bundled with Webpack, which accesses REST endpoints from the{' '}
              <Link href="https://vovk-examples.vercel.app/" className="link" target="_blank">
                Examples Website API
              </Link>
              .
            </p>
            <DocsLink href="https://github.com/finom/vovk-examples">See Examples Repository</DocsLink>
          </>
        }
        icon={
          <svg
            width="24px"
            height="24px"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.6954 7.18536L11.6954 11.1854L12.3046 9.81464L3.3046 5.81464L2.6954 7.18536ZM12.75 21.5V10.5H11.25V21.5H12.75ZM12.3046 11.1854L21.3046 7.18536L20.6954 5.81464L11.6954 9.81464L12.3046 11.1854Z"
              fill="currentColor"
            />
            <path
              d="M3 17.1101V6.88992C3 6.65281 3.13964 6.43794 3.35632 6.34164L11.7563 2.6083C11.9115 2.53935 12.0885 2.53935 12.2437 2.6083L20.6437 6.34164C20.8604 6.43794 21 6.65281 21 6.88992V17.1101C21 17.3472 20.8604 17.5621 20.6437 17.6584L12.2437 21.3917C12.0885 21.4606 11.9115 21.4606 11.7563 21.3917L3.35632 17.6584C3.13964 17.5621 3 17.3472 3 17.1101Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7.5 4.5L16.1437 8.34164C16.3604 8.43794 16.5 8.65281 16.5 8.88992V12.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        }
      >
        <DistributeCode />
      </BonusFeaturesSection>
    </div>
  );
};

export default BonusFeatures;
